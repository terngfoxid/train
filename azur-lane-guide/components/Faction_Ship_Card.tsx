import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "./overlay/Loading";

export default function Faction_Ship_Card(faction: any) {
    const [shipdata, setShipdata] = useState({ data: { error: null, data: [{ name: null, type: null, chibi: null }] } });

    const callAPI = async () => {
        try {
            const res = await fetch('/api/faction/' + faction.faction)
            const loaddata = await res.json()
            setShipdata({ data: loaddata })
            return
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callAPI()
    }, []);
    try {
        if (shipdata.data.error != null) {

            const card_style = (
                {
                    title_style: 'text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center',
                    shape: "w-11/12 md:w-1/2 2xl:w-1/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
                    position: "flex justify-center",
                    body_style: "text-zinc-600 dark:text-zinc-400 text-xl text-center ",
                }
            );

            return (
                <div className={card_style.position}>
                    <div className={card_style.shape}>
                        <br></br>
                        <h1 className={card_style.title_style}>
                            <p>Error 404</p>
                            <p>Ship in Faction Not Found</p>
                        </h1>
                        <br></br>
                        <div className={card_style.body_style}>
                            <p>ไม่พบข้อมูลเรือ</p>
                            <p>Database ยังไม่มีข้อมูล</p>
                        </div>
                        <br></br>
                    </div>
                </div>
            )
        }

        else if (shipdata.data.data[0].name == null) {

            return (
                <div className="flex justify-center">
                    <Loading />
                </div>
            )

        }
        else {
            const card_style = (
                {
                    title_style: 'py-2 text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center',
                    shape: "w-11/12 md:w-5/6 2xl:w-2/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
                    position: "flex justify-center",
                    body_style: "text-zinc-700 dark:text-zinc-300 text-base text-center",
                    button_style: "w-11/12 rounded-lg bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 shadow",
                    text_bg: "",
                }
            );

            const ship_list = [];
            let count = 0;
            for (count = 0; count < shipdata.data.data.length; count++) {
                const buffer = count
                ship_list.push(
                    <div className="flex justify-center">
                        <div className={card_style.button_style}>
                            <div className="">
                                <Link className={card_style.body_style} href={"/ship/" + shipdata.data.data[buffer].name}>
                                    <div className="flex justify-start items-center w-full">
                                        <img src={"/images/type/" + shipdata.data.data[buffer].type + ".png"} alt='type image' width="50" />
                                        <div className="inline-block rounded bg-neutral-400 dark:bg-neutral-600 w-full ">
                                            <p>&nbsp;{shipdata.data.data[buffer].name}</p>
                                        </div>
                                    </div>
                                    <div>
                                        {shipdata.data.data[buffer].chibi != null ? <>
                                            <div className="w-full flex justify-center items-center aspect-video">
                                                <img src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.data[buffer].chibi} alt='ship chibi image' />
                                            </div></> : <></>
                                        }
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }

            return (
                <div className={card_style.position}>
                    <div className={card_style.shape}>
                        <div className="flex justify-center">
                            <h1 className={card_style.title_style}>เรือ {faction.faction}</h1>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2">
                            {ship_list}
                        </div>
                        <br></br>
                    </div>
                </div>
            )
        }
    } catch (err) {
        console.log(err);
        return (
            <div>

            </div>
        )
    }
}