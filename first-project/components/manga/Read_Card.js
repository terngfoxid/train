import Image from "next/image"
import Loading from "../overlay/Loading";

const Read_Card = ({ total_page, ch }) => {


    const card_style = (
        {
            title_style: 'inline-block py-3 pl-3 pr-4 text-zinc-200 text-2xl font-bold font-serif text-left',
            ch_name_style: 'bg-neutral-700 block py-3 pl-3 pr-4 text-zinc-200 text-2x1 font-serif text-left rounded hover:bg-neutral-600',
            shape: "w-11/12 rounded-lg shadow-md border border-gray-500 bg-neutral-800",
            position: "flex justify-center",
            pic_show_style: "grid grid-cols-1 gap-1",
            pic_area_style: "w-11/12 md:w-5/6",
            pic_area_used: "w-full",
        }
    );

    const pic_list = [];
    //วนลูปใส่ตอน
    for (let i = 0; i < total_page; i++) {
        const pic_num = i
        pic_list.push(
            <Image
                src="/images/test_image.png"
                alt="body"
                layout="responsive"
                width={1}
                height={1}
                quality={100}
                className="" // just an example
            />
        )
    }

    //For error when ch == null because content is loading
    if (ch == null) return (
        <div className={card_style.position}>               
                    <Loading />
        </div>
    )

    return (
        <div className={card_style.position}>
            <div className={card_style.shape}>
                <br></br>
                <div className={card_style.position}>
                    <div className={card_style.title_style}>({ch[0]}) ตอนที่ {ch[1]}</div>
                </div>
                <div className={card_style.position}>
                    <div className={card_style.pic_area_style}>
                        <div className={card_style.position}>
                            <div className={card_style.pic_area_used}>
                                <div className={card_style.pic_show_style}>
                                    {pic_list}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default Read_Card