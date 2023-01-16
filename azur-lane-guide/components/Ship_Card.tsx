import { useEffect, useState } from "react";
import Loading from "./overlay/Loading";

export default function Ship_Card(ship: any) {
    const [shipdata, setShipdata] = useState({ data: {
        name : null,
        skill : null,
        faction : null,
        type : null,
        error : null,
        re: null,
    }});

    const callAPI = async () => {
        try {
            const res = await fetch('/api/ship/' + ship.ship.toLowerCase());
            const loaddata = await res.json()
            setShipdata({ data: loaddata })
            localStorage.setItem(""+ship.ship.replaceAll("_"," ").toLowerCase() , JSON.stringify(loaddata))
            return
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {

        const buffername= ship.ship.replaceAll("_"," ").toLowerCase();

        const localdata = localStorage.getItem(""+ship.ship)
        if((localdata != null) && (JSON.parse(localdata).name == buffername))
        {
            setShipdata({ data: JSON.parse(localdata) })
        }
        else
        {
            callAPI()
        }
    }, []);

    if (shipdata.data.name == null && shipdata.data.error ==null) {
        return (
            <div className="flex justify-center">
                <Loading />
            </div>
        )
    }
    else if(shipdata.data.error != null)
    {
        const buffername= ship.ship.replaceAll("_"," ").toLowerCase()
        localStorage.removeItem(buffername)

        const card_style = (
            {
                title_style: 'text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center',
                shape: "w-11/12 md:w-1/2 2xl:w-1/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
                position: "flex justify-center",
                body_style: "text-zinc-600 dark:text-zinc-400 text-xl text-center",
            }
        );

        
        return (
            <div className={card_style.position}>
                <div className={card_style.shape}>
                    <br></br>
                    <h1 className={card_style.title_style}>Error 404 Ship Not Found</h1>
                    <br></br>
                    <div className={card_style.body_style}>
                        <p>ไม่พบข้อมูลเรือ</p>
                        <p>โปรดตรวจสอบชื่อของเรือในลิงค์</p>
                    </div>
                    <br></br>
                </div>
            </div>
        )
    }
    else {
        const card_style = (
            {
                title_style: 'text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center',
                shape: "w-11/12 md:w-5/6 2xl:w-2/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
                position: "flex justify-center",
                body_style: "text-zinc-600 dark:text-zinc-400 text-2xl text-center",
            }
        );

        return (
            <div className={card_style.position}>
                <div className={card_style.shape}>
                    <br></br>
                    <h1 className={card_style.title_style}>{shipdata.data.name}</h1>
                    <br></br>
                    <div className={card_style.body_style}>
                        <p>Faction: {shipdata.data.faction}</p>
                        <p>Type: {shipdata.data.type}</p>
                        <div className="flex justify-center">
                            <div className="w-11/12 md:w-11/12">
                                <p className="text-xs py-2">(รูปอาจจะโหลดช้าหน่อยนะ)</p>
                        <img className="object-scale-down" src={"https://drive.google.com/uc?export=view&id="+shipdata.data.skill} alt={shipdata.data.name+" picture"}></img>
                        {(shipdata.data.re != null) ? <>
                            <p>Retrofit</p>
                            <img className="object-scale-down" src={"https://drive.google.com/uc?export=view&id="+shipdata.data.re} alt={shipdata.data.name+" picture"}></img>
                        </>: <></>}
                        </div>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>
        )
    }
}