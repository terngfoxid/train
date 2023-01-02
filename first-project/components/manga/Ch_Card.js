import Link from "next/link";

export default function Ch_Card({ total_ch , id}) {


    const card_style = (
        {
            ch_name_style: 'bg-neutral-700 block py-3 pl-3 pr-4 text-zinc-200 text-2x1 font-serif text-left rounded hover:bg-neutral-600',
            shape: "w-11/12 rounded-lg shadow-md border border-gray-500 bg-neutral-800",
            position: "flex justify-center",
            ch_show_style: "grid grid-cols-2 gap-1",
            ch_link_style: "w-5/6",
        }
    );

    const ch_list = [];
    //วนลูปใส่ตอน
    for (let i = total_ch; i > 0; i--) {
        const ch_num = i 
        ch_list.push(
            <Link className={card_style.ch_name_style} href={"/manga/"+id+"/"+ch_num}>ตอนที่ {ch_num} </Link>
        )
    }


    return (
        <div className={card_style.position}>
            <div className={card_style.shape}>
                <br></br>
                <div className={card_style.position}>
                    <div className={card_style.ch_link_style}>
                        <div className={card_style.ch_show_style}>

                            {ch_list}

                        </div>
                    </div>
                </div>
                <br></br>
            </div>
        </div>
    )
}