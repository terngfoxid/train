import { Component, For, createSignal, createEffect } from 'solid-js'
import { useRouteData } from 'solid-app-router'
import jsQR from 'jsqr'
import axios from 'axios'
import { Buffer } from 'buffer'
import toast, { Toaster } from 'solid-toast';

import { Data, ENDPOINT_URL } from './fetch.data'
import { useTitle } from '../core/services/useTitle'
import { HomeData, MemberData } from '../worker/src/interface'
import jpg from 'jpeg-js'
import { PNG } from 'pngjs/browser';
import sizeOf from 'buffer-image-size'

const Page: Component = () => {
  const data = useRouteData<() => Data>() as any
  const [selectedHome, setSelectHome] = createSignal({} as HomeData)
  const [selectedMember, setSelectMember] = createSignal({} as MemberData)
  const [isRequesting, setIsRequesting] = createSignal(false)
  useTitle('เติมสะตางงงง')
  createEffect(() => {
    console.log('finsihed', data())
    setSelectHome(data()?.homes[0])
    setSelectMember(data()?.homes[0]?.members[0])
  }, [data()?.homes[0]])
  function getBase64(file) {
    return new Promise(async (resolve, reject) => {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function () {
        resolve(reader.result)
      };
      reader.onerror = function (error) {
        reject(error)
      };
    })
  }
  function readQRFromSlip(base64): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        try {
          try {
            const png = PNG.sync.read(Buffer.from(base64.slice('data:image/png;base64,'.length), 'base64'));
            const qrCodeResult = await jsQR(Uint8ClampedArray.from(png.data), png.width, png.height);
            if (qrCodeResult) return resolve(qrCodeResult.data)
            setIsRequesting(false)
            return reject('QR Code not found')
          } catch (e) {
            const jpegData = Buffer.from(base64.slice('data:image/png;base64,'.length), 'base64')
            let rawImageData = jpg.decode(jpegData);
            let clampedArray = new Uint8ClampedArray(rawImageData.data.length);
            const size = sizeOf(jpegData)
            let i;
            for (i = 0; i < rawImageData.data.length; i++) {
              clampedArray[i] = rawImageData.data[i];
            }
            const qrCodeResult = await jsQR(clampedArray, size.width, size.height);
            if (qrCodeResult) return resolve(qrCodeResult.data)
          }
          setIsRequesting(false)
          reject('QR Code not found')
        } catch (e) {
          setIsRequesting(false)
          console.error('read qr failed', e)
          reject('Read QR failed')
        }
      } catch (e) {
        setIsRequesting(false)
        console.error('read qr failed', e)
        reject('Read QR failed')
      }
    })
  }

  return (
    <>
      <Toaster />
      <div class="mt-4 space-y-4">
        <div
          class="py-4 px-6 bg-[#222222] rounded-lg border text-xl border-gray-900"
        >
          <div>
            <div class="font-bold">เติมสะตางงงง</div>
            {
              data()?.homes?.length > 0 && <div class="mt-4">
                <div class="relative">
                  <p>เลือกบ้าน</p>
                  <select onChange={(e) => {
                    setSelectHome(data()?.homes.find(x => x.homeNumber == (e.target as any).value))
                    setSelectMember(data()?.homes.find(x => x.homeNumber == (e.target as any).value)?.members[0])
                  }} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <For
                      each={data()?.homes}
                      fallback={
                        data() === undefined ? <div></div> : <div> - โอเค โล่ง - </div>
                      }
                    >
                      {(home: HomeData, index) => (
                        <option selected={!index()} value={home.homeNumber}>{home.name}</option>
                      )}
                    </For>
                  </select>
                </div>
                <div class="relative mt-4">
                  <p>เลือกคนหาร</p>
                  {selectedHome()?.members?.length > 0 ?
                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e) => {
                      setSelectMember(selectedHome()?.members.find(x => x.id == (e.target as any).value))
                    }}>
                      <For
                        each={selectedHome()?.members}
                        fallback={
                          data() === undefined ? <div></div> : <div> - โอเค โล่ง - </div>
                        }
                      >
                        {(member: MemberData) => (
                          <option value={member.id}>{member.name}</option>
                        )}
                      </For>
                    </select>
                    : <div class="text-center">บ้านนี้ยังไม่เปิดหาร</div>}
                </div>
              </div>
            }
            <div class="my-4 h-0.5 w-full bg-gray-300" />
            {
              selectedMember()?.id && <div>
                <div class="flex justify-center mt-4">
                  <div
                    class="bg-wihte border-8 rounded bg-[#e5e7eb]"
                  >
                    <img src="/pp.jpg" alt="promptpay" class="max-w-[250px] mb-1 bg-[#e5e7eb]" />
                    <img src="/qr.png" alt="promptpay qr" class="max-w-[300px] bg-[#e5e7eb]" />
                    <div class="text-sm text-center mt-2 bg-[#e5e7eb] text-black">
                      พร้อมเปย์ เบอร์ 0882433029
                      <br />
                      ธนาคาร (กรุงเทพ): เลขที่บช. 9140226847
                    </div>
                    <a download="promptpayqr.jpg" class="bg-[#e5e7eb]" href="/qr.png">
                      <button
                        class="w-full mt-2 rounded-md bg-emerald-600 p-2 text-sm"
                      >
                        บันทึก QR Code นี้
                      </button>
                    </a>
                  </div>
                </div>
                <div class="mt-6">
                  <div class="rounded-md my-2 text-md bg-yellow-800 p-4">
                    <div>
                      <b>สำคัญ:</b> รับเฉพาะสลิปที่มี QRCode อยู่เท่านั้น
                      <div class="flex justify-center text-sm gap-4">
                        <div class="text-center w-1/2">
                          <img
                            src="/slip_accept.png"
                            class="m-auto max-w-[150px]"
                            alt="accpeted slip"
                          />
                          <div color="green.300" class="font-bold">
                            รับ
                          </div>
                          <div>
                            สลิปจำเป็นต้องมี QR Code และภาพชัดและสามารถอ่านได้สะดวก
                          </div>
                        </div>
                        <div class="text-center w-1/2">
                          <img
                            src="/slip_deny.png"
                            alt="accpeted slip"
                            class="m-auto max-w-[150px]"
                          />
                          <div color="red.300" class="font-bold">
                            ไม่รับ
                          </div>
                          <div>สลิปไม่มี QR Code ภาพไม่ชัดหรือใช้การไม่ได้</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center mt-4">
                  <div class="p-6 rounded-md text-center text-base">
                    <div class="text-md mb-2">- ตรวจสอบอีกครั้ง -</div>
                    <div class="my-2">
                      <span class="font-bold">บ้าน: </span>
                      <span class='bg-red-600 rounded-md animate-pulse px-2'>
                        {selectedHome().name}
                      </span>
                    </div>
                    <div class="my-2">
                      <span class="font-bold" >ราคา: </span>
                      <span class='bg-red-600 rounded-md animate-pulse px-2'>
                        {selectedHome().price} บาท/เดือน
                      </span>
                    </div>
                    <div class="my-2">
                      <span class="font-bold">ชื่อ: </span>
                      <span class='bg-red-600 rounded-md animate-pulse px-2'>
                        {selectedMember().name}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <p>เลือกสลิป</p>
                  {
                    isRequesting() && <div>กำลังอัพโหลด รอสักครู่...</div>
                  }
                  <input type="file" name="slip" id="slip" class={isRequesting() && 'hidden'} onClick={(e: any) => {
                    e.target.value = null
                    e.target.files = []
                  }} onChange={async (e: any) => {
                    setIsRequesting(true)
                    const file: File = e?.target?.files[0]
                    if (file) {
                      try {
                        if (!file.type.includes('image')) throw Error('This file is not image')
                        const code = await readQRFromSlip(await getBase64(file))
                        console.log('code', code)
                        const { data } = await axios.post(ENDPOINT_URL + '/transfers', {
                          barcodeId: code,
                          memberId: selectedMember()?.id,
                          homeId: selectedHome()?.homeNumber
                        })
                        toast.success(data.message || 'Transfer sent but i\'m not sure it\'s save')
                      } catch (e) {
                        console.error('stack', e)
                        console.error(e?.response?.data?.message || e?.message)
                        if (e.response) {
                          return toast.error(e?.response?.data?.message)
                        }
                        return toast.error(e?.message || e || 'Unknown error')
                      }

                    }
                  }} />
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
