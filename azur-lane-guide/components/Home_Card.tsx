import Link from "next/link";

export default function Home_Card() {

    const card_style = (
        {
            title_style: 'text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center',
            shape: "w-11/12 md:w-5/6 2xl:w-2/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
            position: "flex justify-center",
            body_style: "py-2 text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl text-center",
        }
    );

    return (
        <div className={card_style.position}>
            <div className={card_style.shape}>
                <br></br>
                <h1 className={card_style.title_style}>
                    <div className="md:flex md:justify-center md:items-center md:text-3xl">
                        <p>ยินดีต้อนรับเข้าสู่</p>
                        <p className="hidden md:block">&nbsp;</p>
                        <p>Azur Lane Guide TH</p>
                        <p className="hidden md:block">&nbsp;</p>
                        <p className="text-xs">(รุ่นทดสอบ V.0.1)</p>
                    </div>
                </h1>
                <br className="hidden md:block"></br>
                <div className={card_style.body_style}>
                    <div className="flex justify-center">
                        <div className="w-11/12 md:w-11/12 text-xs md:text-2xl">
                            <div className="md:grid md:grid-cols-3">
                                <div className="md:col-span-2">
                                    <p className="py-1 ">เว็บไซต์นี้จัดทำเพื่อสนับสนุนผู้เล่นเกม Azur Lane ชาวไทย</p>
                                    <p className="py-1 ">เรามีการเก็บข้อมูลบางส่วนไว้ใน Browser แบบ Offline</p>
                                    <p className="py-1 ">เนื่องจากต้องการประหยัดค่าใช้จ่ายในการดูแลเว็บไซต์</p>
                                    <p className="py-1 ">หากข้อมูลตัวละครไม่มีการอัพเดตเช่น ไม่มีร่าง Retrofit ใหม่</p>
                                    <p className="py-1 ">ให้ทำการลบ ประวัติการใช้งาน หรือ Cookies ของเว็บไซต์นี้</p>
                                    <p className="py-1 ">***ขออภัยในความไม่สดวก***</p>
                                </div>
                                <br className="md:hidden"></br>
                                <div className="flex justify-center items-center">
                                    <div className="w-11/12">
                                        <img className="object-scale-down" src={"/images/Azur_Lane_English_Logo.webp"} alt="Azur Lane Logo"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br className="hidden md:block"></br>
            </div>
        </div>
    )
}