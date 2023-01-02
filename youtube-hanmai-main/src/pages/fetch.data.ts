import { HomeJoinInfo, HomeData, TransferData, MemberData } from './../worker/src/interface';
import { createResource } from 'solid-js'
import { RouteDataFunc } from 'solid-app-router'

import axios from 'axios'
// export const ENDPOINT_URL = 'http://localhost:8787'
export const ENDPOINT_URL = 'https://hanyoutube.otpvua14lk.workers.dev'
export interface Data {
  home_joins: HomeJoinInfo[],
  homes: HomeData[],
  transfers: TransferData[],
  members: MemberData[]
  all?: any[]
}
function getMonthDifference(startDate, endDate) {
  return (
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear())
  );
}
const FetchData: RouteDataFunc = ctx => {
  // const {} = ctx.params

  const [data] = createResource<Data>(async () => {
    const { data: home_joins } = await axios.get(
      ENDPOINT_URL + '/homes/join'
    )
    const { data: homes } = await axios.get(
      ENDPOINT_URL + '/homes'
    )
    const { data: transfers } = await axios.get(
      ENDPOINT_URL + '/transfers'
    )
    const { data: members } = await axios.get(
      ENDPOINT_URL + '/members'
    )
    const data: Data = {
      home_joins,
      homes,
      transfers,
      members
    }
    const allData = []
    for (const home of data.homes) {
      const memberInThisHouse: MemberData[] = []
      for (const joinMember of data.home_joins) {
        if (home.homeNumber == joinMember.homeNumber) {
          const memberJoin = data.members.find(x => x.id == joinMember.memberId)
          if (memberJoin) {
            memberJoin.transfers = []
            for (const tran of data.transfers) {
              if (tran.memberId == memberJoin.id && tran.homeNumber == joinMember.homeNumber) memberJoin.transfers.push(tran)
            }
            console.log(new Date(joinMember.joinAt), joinMember.joinAt)
            memberJoin.joinDate = joinMember.joinAt
            memberInThisHouse.push(memberJoin)
          }
        }
      }
      home.members = memberInThisHouse
      for (const mem of home.members) {
        let bal = 0
        for (const tran of mem.transfers) {
          bal += tran.amount
          console.log('bal', bal)
        }
        mem.payCount = Math.floor(bal == 0 ? 0 : bal / home.price)
        mem.amountLeft = mem.transfers.reduce((sum, a) => sum + a.amount, 0) % home.price
        console.log('paycount', mem.payCount)
      }
      const maxPayCount = Math.max.apply(Math, home.members.map(function (o) { return o.payCount }));
      const newestTrans = new Date(Math.max.apply(Math, home.members.map(function (o) {
        return Math.max.apply(Math, o.transfers.map(y => y.time));
      })))
      const offsetStart = newestTrans.getTime() > new Date().getTime() ? newestTrans : new Date()
      const offsetEnd = new Date(Math.min.apply(Math, home.members.map(function (o) {
        return o.joinDate
      })))

      console.log("---")
      offsetStart.setMonth(offsetStart.getMonth() + 4)
      const rows = []
      for (let i = getMonthDifference(offsetEnd, offsetStart); i >= 0; i--) {
        
        const cols = []
        const currentDT = new Date(offsetEnd.getTime())

        currentDT.setMonth(currentDT.getMonth() +i)

        cols.push(`${(currentDT.getMonth() + 1).toString().padStart(2, '0')}/${currentDT.getFullYear()}`)
        for (const mem of home.members) {
          mem.skipCount = getMonthDifference(offsetEnd, new Date(mem.joinDate))
          if (mem.skipCount > i) {
            cols.push(2)
          } else if ((mem.payCount + mem.skipCount) > i) {
            if (getMonthDifference(new Date(), currentDT) > 0) {
              cols.push(3)
            } else {
              cols.push(1)
            }
          } else {
            cols.push(0)
          }
        }
        rows.push(cols)
      }
      home.rowData = {
        maxPayCount,
        offsetStart,
        offsetEnd,
        rows
      }
      allData.push(home)
    }
    data.all = allData
    console.log('data', data)
    return data
  })
  return data
}

export default FetchData
