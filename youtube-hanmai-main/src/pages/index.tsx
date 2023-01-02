import { Link, useRouteData } from 'solid-app-router'
import { Component, For, createEffect, createSignal } from 'solid-js'
import { useTitle } from '../core/services/useTitle'
import { Data } from './fetch.data'
import { HomeData, MemberData } from '../worker/src/interface'

const Page: Component = () => {
  const data = useRouteData<() => Data>() as any
  const [selectedHome, setSelectHome] = createSignal({} as any)
  useTitle('ตาราง')
  createEffect(() => {
    if (data()) {
      setSelectHome(data()?.all[0])
      console.log('signal')
    }
  }, [data()])

  return (
    <div class="space-y-4">
      <div class="border-emerald-400 bg-emerald-900 border-2 p-4 rounded-md border-ra">
        <h1 class="font-bold text-2xl text-gray-100">ประกาศ</h1>
        <div class="text-gray-300">
          จะไม่หารแล้ว,จะออกจากบ้าน โปรดแจ้งก่อน!!!
          <br />
          พร้อมเปย์ เบอร์ 0882433029
          <br />
          ธนาคาร (กรุงเทพ): เลขที่บช. 9140226847
          <br />
          ชื่อบช. กฤษดา เสนีวงศ์ ณ อยุธยา ทั้งหมด
          <br />
          โปรดจ่ายเงินก่อนสิ้นเดือนเพราะถ้าไม่จ่ายและไม่แจ้งว่าจะจ่ายช้า ทางเจ้าของบ้านหามาจ่ายไม่ทัน
          <br />
          ถ้าจะจ่ายช้าโปรดแจ้งก่อนจะได้หามาโป๊ะ
        </div>
      </div>
      <div class="flex gap-2 mt-4 w-full justify-center">
        <div class="flex gap-2">
          <For
            each={data()?.all}
            fallback={
              data() === undefined ? <div></div> : <div> - โอเค โล่ง - </div>
            }
          >
            {(home: HomeData) => (
              <div class="shadow rounded-md overflow-hidden text-xs">
                <button onClick={() => setSelectHome(home)} class="bg-green-500 border-emerald-200 transition-all duration-150 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xs">
                  {home.name}
                </button>
              </div>
            )}
          </For>
        </div>
      </div>
      <div class="flex justify-center">
        <a href="/checkout">
          <button class="bg-red-500 transition-all duration-150 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm">
            จ่ายตัง
          </button>
        </a>
      </div>
      <div class="text-xl font-bold text-center mt-4">
        {selectedHome()?.name}
      </div>
      {
        <div class="w-full">
          <table class="table-auto w-full text-center border-spacing-2 border-separate">
            <thead>
              <tr>
                <th>รอบ/เดือน</th>
                <For
                  each={selectedHome()?.members}>
                  {(member: MemberData) => (
                    <th>{`${member.name.split(' ')[0]}` + (member.amountLeft > 0 ? ` (${member.amountLeft}฿)` : '')}</th>
                  )}
                </For>
              </tr>
            </thead>
            <tbody>
              <For
                each={selectedHome()?.rowData?.rows}
                fallback={
                  data() === undefined ? <div>- รอสักประเดี๋ยว -</div> : <div> - โอเค โล่ง - </div>
                }
              >
                {(cols: any[]) => (
                  <tr>
                    <For
                      each={cols}
                    >
                      {(col: string | number) => (
                        <td class={(Number(cols[0]?.split('/')[1])) == new Date().getFullYear() && (Number(cols[0]?.split('/')[0])) == (new Date().getMonth() + 1) && 'animate-pulse'}>
                          {typeof col == 'string' ? col : (col == 1 ? <div class="p-1 text-xs bg-emerald-600 rounded-md font-bold">จ่ายแล้ว</div> : col == 2 ? <div class="p-1 text-xs bg-yellow-600 rounded-md font-bold">ยังไม่เข้าร่วม</div> : col == 3 ? <div class="p-1 text-xs bg-blue-700 rounded-md font-bold">จ่ายแล้ว (ล่วงหน้า)</div> : (Number(cols[0]?.split('/')[1])) > new Date().getFullYear() || (Number(cols[0]?.split('/')[0])) > (new Date().getMonth() + 1) ? <div class="p-1 text-xs bg-pink-700 rounded-md font-bold">ยังไม่ถึงกำหนด</div> : <div class="p-1 text-xs bg-rose-700 rounded-md font-bold">ยังไม่จ่าย</div>)}
                        </td>
                      )}
                    </For>
                  </tr>

                )}
              </For>
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default Page
