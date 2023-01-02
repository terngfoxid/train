import Link from "next/link";
import Image from "next/image"

export default function Main_Card({ id }) {

    const card_style = (
        {
            title: 'ชื่อเรื่อง',
            title_style: 'inline-block py-3 pl-3 pr-4 text-zinc-200 text-2xl font-bold font-serif text-left',
            shape: "w-11/12 rounded-lg shadow-md border border-gray-500 bg-neutral-800",
            position: "flex justify-center",
            header_position: "flex justify-center",
            header_image: "/images/test_image.png",
            header_image_position: "flex justify-center",
            header_text_position: "flex justify-center",
            header_respons: "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 ",
            body_style: "",
            //---
            tag_style: "inline-block py-3 pl-3 pr-4 text-zinc-200 text-1xl font-serif text-center rounded hover:bg-neutral-700",
        }
    );

    const tag_list = [];
    //วนลูปใส่ tag
    tag_list.push(
        <Link className={card_style.tag_style} href="/">Hentai</Link>
    )
    tag_list.push(
        <Link className={card_style.tag_style} href="/">Loli</Link>
    )
    tag_list.push(
        <Link className={card_style.tag_style} href="/">Rape</Link>
    )
    tag_list.push(
        <Link className={card_style.tag_style} href="/">NTR</Link>
    )
    tag_list.push(
        <Link className={card_style.tag_style} href="/">MMF threesome</Link>
    )
    tag_list.push(
        <Link className={card_style.tag_style} href="/">Kemonomimi</Link>
    )

    return (
        <div className={card_style.position}>
            <div className={card_style.shape}>
                <br></br>
                <div className={card_style.position}>
                    <div className="w-11/12 md:w-11/12">
                        <div className={card_style.header_position}>
                            <div className="w-full">
                                <div className={card_style.header_respons}>
                                    <div className={card_style.header_image_position}>
                                        <div className="w11/12 md:w-5/6">
                                            <div className={card_style.header_image_position}>
                                                <Image
                                                    src={card_style.header_image}
                                                    alt="Cover"
                                                    width="300"
                                                    height="500"
                                                    className="rounded" // just an example
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={card_style.header_text_position}>
                                        <div className="w-11/12">
                                            <h1 className={card_style.title_style}>({id}){card_style.title}</h1>
                                            <br></br>
                                            <div className="">
                                                <h1 className={card_style.title_style}>Tag: </h1>
                                                {tag_list}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className={card_style.body_style}>

                </div>
                <br></br>
            </div>
        </div>
    )
}