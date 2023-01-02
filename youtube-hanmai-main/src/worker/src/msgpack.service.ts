import { encode, decode } from 'msgpack-lite'
export enum SERVICE_TYPE {
	KBIZ = 0x4a,
	KPLUS = 0xa2,
	SCBEASY = 0x45,
	TRUEWALLET = 0x0b
}

export class MessagePackService {
	PAYMENT_SECRET = "zczijlimzjdsxnhljrjuowknueruahvfarbbjvvemroynvjbtbmlghuiupxhkatdaqlqtimkvutnnqjmfyuwnxxwgsluarjb"
	// PAYMENT_ENDPOINT = 'http://localhost:3000'
	PAYMENT_ENDPOINT = 'https://payment.0127001.xyz'
	async getSlipData(slipId: string) {
		const payload = await this.pack(SERVICE_TYPE.SCBEASY, {
			action: 'billscan',
			data: {
				barcode: slipId,
				pin: '000000'
			}
		})
		const res = await fetch(
			`${this.PAYMENT_ENDPOINT}?query=${payload.toString('hex')}`
		)
		const data = await res.text()
		const buffer = Buffer.from(data, 'hex')
		const resultDecode = this.unpack(buffer)
		const signature = this.getSignature(buffer)
		if (!signature) {
			throw new Error('Invalid signature')
		}
		const payloadDecode = this.getPayload(resultDecode.payload)
		if (payloadDecode.status.code != 1000) {
			throw new Error(payloadDecode.status.description)
		}

		return payloadDecode.data
	}

	private getSignatureString(serviceType: SERVICE_TYPE, payloadLength = 0) {
		const current = new Date()
		if (current.getTimezoneOffset() === 0)
			current.setHours(current.getHours() + 7)
		return (
			serviceType +
			'|' +
			payloadLength +
			'|' +
			current.getDate() +
			'|' +
			current.getDay() +
			'|' +
			current.getMonth() +
			'|' +
			current.getFullYear() +
			'|' +
			current.getHours() +
			'|' +
			current.getMinutes()
		)
	}

	buf2hex(buffer: ArrayBuffer) { // buffer is an ArrayBuffer
		return [...new Uint8Array(buffer)]
			.map(x => x.toString(16).padStart(2, '0'))
			.join('');
	}

	private async generateSignature(serviceType: SERVICE_TYPE, payload: Buffer) {
		// const signature = crypto.subtle.digest('sha256', this.PAYMENT_SECRET)
		// 	.update(this.getSignatureString(serviceType, payload.length))
		// 	.digest('hex')
		const signature = await this.hmacSha256(this.PAYMENT_SECRET, this.getSignatureString(serviceType, payload.length))
		return Buffer.from(signature, 'hex')
	}

	async pack(serviceType: SERVICE_TYPE, payloadUnProcess: any = '') {
		const payload: Buffer = encode(payloadUnProcess)
		const signature = await this.generateSignature(serviceType, payload)
		const signatureLength = signature.length
		const data = Buffer.alloc(8 + signatureLength + payload.length)
		data.writeUInt32BE(serviceType, 0)
		data.writeUInt32BE(signatureLength, 4)
		signature.copy(data, 8)
		payload.copy(data, 8 + signatureLength)
		return data
	}

	unpack(data: Buffer) {
		const serviceType = data.readUInt32BE(0)
		const signatureLength = data.readUInt32BE(4)
		const signature = data.slice(8, 8 + signatureLength).toString('hex')
		const payload = data.slice(8 + signatureLength)
		return {
			serviceType,
			signatureLength,
			signature,
			payload,
			totalLength: data.length
		}
	}
	async generateKey(str: string) {
		const enc = new TextEncoder();
		const key = await crypto.subtle.importKey(
			"raw", // raw format of the key - should be Uint8Array
			enc.encode(str),
			{ // algorithm details
				name: "HMAC",
				hash: { name: "SHA-256" }
			},
			false, // export = false
			["sign", "verify"]);
		return key
	}
	async hmacSha256(key: string, str: string) {
		const buf = new TextEncoder().encode(str);
		const sig = await crypto.subtle.sign("HMAC", (await this.generateKey(key)), buf);
		const b = new Uint8Array(sig);
        const res = Array.prototype.map.call(b, x => x.toString(16).padStart(2, '0')).join("")
		return res
		// return this.buf2hex(sig);
	}
	async getSignature(data: any) {
		try {
			const { serviceType, signature, payload } = this.unpack(data)
			const signatureString = this.getSignatureString(
				serviceType,
				payload.length
			)
			const signatureTest = await this.hmacSha256(this.PAYMENT_SECRET, signatureString)
			if (signatureTest === signature) return signatureString.split('|')
		} catch (err) {
			console.error('Signature Error: ', err)
		}
		return null
	}

	getPayload(payload: Buffer) {
		return decode(payload)
	}
}
