import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { MessagePackService } from './msgpack.service'
import { HomeData, HomeJoinInfo, MemberData, TransferBody, TransferData } from './interface'

const app = new Hono()

const payment = new MessagePackService()
// app.use('*', cors())
app.use('*', cors({
	origin: '*',
	allowHeaders: ['Content-Type', 'Authorization'],
	allowMethods: ['POST', 'GET', 'OPTIONS'],
	exposeHeaders: ['Content-Length'],
	maxAge: 600,
	credentials: true,
}))
app.options('*', (c) => {
	return c.text('', 204)
})
function id() {
	return Math.random() * 1000000
}
app.put('/transfers', async c => {
	const { memberId, homeNumber, amount, time } = await c.req.json<TransferData>()
	const { success } = await c.env.DB.prepare(`
		insert into transfers (id, memberId, homeNumber, amount, time) values (?, ?, ?, ?, ?)
	  `).bind(id(), memberId, homeNumber, amount || 0, time || new Date().getTime()).run()
	if (success) {
		c.status(201)
		return c.json({ success: true, message: 'Transfer Saved' })
	} else {
		c.status(500)
		return c.json({ success: false, message: 'Something went wrong' })
	}
})
app.post('/transfers', async c => {
	const { barcodeId, memberId, homeId, time } = await c.req.json<TransferBody>()
	if (!barcodeId || !memberId || !homeId) return c.json({ success: false, message: 'Some args required' })
	const { results } = await c.env.DB.prepare(`
	  select * from transfers where id = ?
	`).bind(barcodeId).all()
	if (results.length > 0) return c.json({ success: false, message: 'This slip already used' })
	let data = await payment.getSlipData(barcodeId)
	if (data?.function != 'PULLSLIP') return c.json({ success: false, message: 'Invaild slip' })
	const amount = data.amount
	data = data.pullSlip
	console.log("bill", data)
	if (!(data.receiver.name.includes('KITSADA') ||
		data.receiver.name.includes('KRITSADA') ||
		data.receiver.name.includes('กฤษดา'))) return c.json({ success: false, message: 'Receiver is invalid' })
	const { success } = await c.env.DB.prepare(`
		insert into transfers (id, memberId, homeNumber, amount, time) values (?, ?, ?, ?, ?)
	  `).bind(barcodeId, memberId, homeId, amount || 0, time || new Date().getTime()).run()
	if (success) {
		c.status(201)
		return c.json({ success: true, message: 'Transfer Saved', amount })
	} else {
		c.status(500)
		return c.json({ success: false, message: 'Something went wrong' })
	}
})
app.get('/transfers', async c => {
	const { results } = await c.env.DB.prepare(`
	  select * from transfers
	`).all()
	return c.json(results)
})
app.get('/homes/join', async c => {
	const { results } = await c.env.DB.prepare(`
	  select * from joins
	`).all()
	return c.json(results)
})
app.post('/homes/join', async c => {
	const { homeNumber, memberId, joinAt } = await c.req.json<HomeJoinInfo>()
	const { results } = await c.env.DB.prepare(`
	  select * from joins where homeNumber = ? and memberId = ?
	`).bind(homeNumber, memberId).all()
	if (results.length > 0) {
		c.status(500)
		return c.json({ success: false, message: 'This member already join this home' })
	}
	const { success } = await c.env.DB.prepare(`
    insert into joins (homeNumber, memberId, joinAt) values (?, ?, ?)
  `).bind(homeNumber, memberId, joinAt || new Date().getTime()).run()
	if (success) {
		c.status(201)
		return c.json({ success: true, message: 'Home joined' })
	} else {
		c.status(500)
		return c.json({ success: false, message: 'Something went wrong' })
	}
})
app.post('/homes/leave', async c => {
	const { homeNumber, memberId } = await c.req.json<HomeJoinInfo>()
	const { results } = await c.env.DB.prepare(`
	  select * from joins where homeNumber = ? and memberId = ?
	`).bind(homeNumber, memberId).all()
	if (results.length < 1) {
		c.status(500)
		return c.json({ success: false, message: 'This member is not join this home' })
	}
	const { success } = await c.env.DB.prepare(`
    DELETE FROM joins where homeNumber = ? and memberId = ?
  `).bind(homeNumber, memberId).run()
	if (success) {
		c.status(201)
		return c.json({ success: true, message: 'Home leaved' })
	} else {
		c.status(500)
		return c.json({ success: false, message: 'Something went wrong' })
	}
})
app.get('/homes', async c => {
	const { results } = await c.env.DB.prepare(`
	  select * from homes
	`).all()
	return c.json(results)
})
app.post('/homes', async c => {
	const { homeNumber, name, price } = await c.req.json<HomeData>()
	const { success } = await c.env.DB.prepare(`
    insert into homes (homeNumber, name, price) values (?, ?, ?)
  `).bind(homeNumber, name, price).run()
	if (success) {
		c.status(201)
		return c.json({ success: true, message: 'Home Created' })
	} else {
		c.status(500)
		return c.json({ success: false, message: 'Something went wrong' })
	}
})
app.put('/homes', async c => {
	const { homeNumber, name, price } = await c.req.json<HomeData>()
	const { success } = await c.env.DB.prepare(`
    replace into homes (homeNumber, name, price) values (?, ?, ?)
  `).bind(homeNumber, name, price).run()
	if (success) {
		c.status(201)
		return c.json({ success: true, message: 'Home Updated' })
	} else {
		c.status(500)
		return c.json({ success: false, message: 'Something went wrong' })
	}
})
app.get('/members', async c => {
	const { results } = await c.env.DB.prepare(`
	  select * from members
	`).all()
	return c.json(results)
})
app.post('/members', async c => {
	const { id, name, email, joinDate, note } = await c.req.json<MemberData>()
	const { success } = await c.env.DB.prepare(`
    insert into members (id, name, email, joinDate, note) values (?, ?, ?, ?, ?)
  `).bind(id, name, email, joinDate, note).run()
	if (success) {
		c.status(201)
		return c.json({ success: true, message: 'Member Created' })
	} else {
		c.status(500)
		return c.json({ success: false, message: 'Something went wrong' })
	}
})
app.put('/members', async c => {
	const { id, name, email, joinDate, note, leaveDate } = await c.req.json<MemberData>()
	const { success } = await c.env.DB.prepare(`
    replace into members (id, name, email, joinDate, note, leaveDate) values (?, ?, ?, ?, ?, ?)
  `).bind(id, name, email, joinDate, note, leaveDate).run()
	if (success) {
		c.status(201)
		return c.json({ success: true, message: 'Member Updated' })
	} else {
		c.status(500)
		return c.json({ success: false, message: 'Something went wrong' })
	}
})
export default app