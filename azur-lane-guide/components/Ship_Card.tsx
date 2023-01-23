import { useEffect, useState } from "react";
import Loading from "./overlay/Loading";
import Chibi from "./overlay/Chibi";
import 'animate.css';

export default function Ship_Card(ship: any) {
    const [shipdata, setShipdata] = useState({
        data: {
            name: null,
            skill: null,
            faction: null,
            type: null,
            error: null,
            re: null,
            faction_short: null,
            fatesim: null,
            chibi: null,
            gear: null,
        }
    });

    const callAPI = async () => {
        try {
            const res = await fetch('/api/ship/' + ship.ship.toLowerCase());
            const loaddata = await res.json()
            setShipdata({ data: loaddata })
            localStorage.setItem("" + ship.ship.replaceAll("_", " ").toLowerCase(), JSON.stringify(loaddata))
            return
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {

        const buffername = ship.ship.replaceAll("_", " ").toLowerCase();

        const localdata = localStorage.getItem("" + ship.ship)
        if ((localdata != null) && (JSON.parse(localdata).name == buffername)) {
            setShipdata({ data: JSON.parse(localdata) })
        }
        else {
            callAPI()
        }
    }, []);

    if (shipdata.data.name == null && shipdata.data.error == null) {
        return (
            <div className="flex justify-center">
                <Loading />
            </div>
        )
    }
    else if (shipdata.data.error != null) {
        const buffername = ship.ship.replaceAll("_", " ").toLowerCase()
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
            <div>
                <div id="shipdata" className={card_style.position}>
                    <div className={card_style.shape}>
                        <br></br>
                        <h1 className={card_style.title_style}>
                            {shipdata.data.faction_short != null ? <>
                                {shipdata.data.faction_short + " "}
                            </> : <></>}
                            {shipdata.data.name}
                        </h1>
                        <br></br>
                        <div className={card_style.body_style}>
                            <p>Faction: {shipdata.data.faction}</p>
                            <p>Type: {shipdata.data.type}</p>
                            <div className="flex justify-center">
                                <div className="w-11/12 md:w-11/12">
                                    <p className="text-xs py-2">(รูปอาจจะโหลดช้าหน่อยนะ)</p>
                                    {(shipdata.data.skill != null) ? <>
                                        <img className="cursor-zoom-in object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.skill} alt={shipdata.data.name + " picture"}
                                            onClick={() => {
                                                document.getElementById("present0")?.classList.remove("hidden")
                                                document.getElementById("shipchibi")?.classList.add("hidden")
                                                document.getElementById("shipdata")?.classList.add("hidden")
                                                document.getElementById("shipdata2")?.classList.add("hidden")
                                                document.body.classList.remove("overflow-x-hidden");
                                                document.body.classList.add("w-max");
                                            }}
                                        >
                                        </img>
                                    </> : <></>}

                                    {(shipdata.data.re != null) ? <>
                                        <p>Retrofit</p>
                                        <img className="cursor-zoom-in object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.re} alt={shipdata.data.name + " picture"}
                                            onClick={() => {
                                                document.getElementById("present1")?.classList.remove("hidden")
                                                document.getElementById("shipchibi")?.classList.add("hidden")
                                                document.getElementById("shipdata")?.classList.add("hidden")
                                                document.getElementById("shipdata2")?.classList.add("hidden")
                                                document.body.classList.remove("overflow-x-hidden");
                                                document.body.classList.add("w-max");
                                            }}
                                        >
                                        </img>
                                    </> : <></>}

                                    {(shipdata.data.fatesim != null) ? <>
                                        <p>Fate Simulation</p>
                                        <img className="cursor-zoom-in object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.fatesim} alt={shipdata.data.name + " picture"}
                                            onClick={() => {
                                                document.getElementById("present2")?.classList.remove("hidden")
                                                document.getElementById("shipchibi")?.classList.add("hidden")
                                                document.getElementById("shipdata")?.classList.add("hidden")
                                                document.getElementById("shipdata2")?.classList.add("hidden")
                                                document.body.classList.remove("overflow-x-hidden");
                                                document.body.classList.add("w-max");
                                            }}
                                        >
                                        </img>
                                    </> : <></>}

                                </div>
                            </div>
                        </div>
                        <br></br>
                    </div>

                </div>

                {(shipdata.data.gear != null) ? <>
                    <br></br>
                    <div id="shipdata2" className={card_style.position}>
                        <div className={card_style.shape + " relative"}>
                            <br></br>
                            <div className={card_style.body_style + " z-10"}>
                                <p className="pb-4">อุปกรณ์สวมใส่แนะนำ</p>
                                <div className="flex justify-center">
                                    <div className="w-11/12 md:w-11/12">
                                        <img className="cursor-zoom-in object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.gear} alt={shipdata.data.name + " picture"}
                                            onClick={() => {
                                                document.getElementById("present3")?.classList.remove("hidden")
                                                document.getElementById("shipchibi")?.classList.add("hidden")
                                                document.getElementById("shipdata")?.classList.add("hidden")
                                                document.getElementById("shipdata2")?.classList.add("hidden")
                                                document.body.classList.remove("overflow-x-hidden");
                                                document.body.classList.add("w-max");
                                            }}
                                        >
                                        </img>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="absolute top-2 right-0 z-0 h-10 w-1/6 md:w-max">
                                <div className="animate__animated animate__fadeInRight animate__delay-1s animate__slow">

                                    {(shipdata.data.type == "CV") ?
                                        <><img className="" src="/images/gear/Tenrai.png" alt={"aircraft picture"}></img></> : <></>
                                    }

                                </div>
                            </div>
                        </div>
                    </div></> : <></>}

                {(shipdata.data.skill != null) ? <>
                    <div id="present0" className="hidden bg-gray-900 w-max"
                        onClick={() => {
                            document.getElementById("present0")?.classList.add("hidden")
                            document.getElementById("shipchibi")?.classList.remove("hidden")
                            document.getElementById("shipdata")?.classList.remove("hidden")
                            document.getElementById("shipdata2")?.classList.remove("hidden")
                            document.body.classList.add("overflow-x-hidden");
                            document.body.classList.remove("w-max");
                        }}
                    >
                        <img className="cursor-zoom-out object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.skill} alt={shipdata.data.name + " picture"}></img>
                    </div></> : <></>}

                {(shipdata.data.re != null) ? <>
                    <div id="present1" className="hidden bg-gray-900 w-max"
                        onClick={() => {
                            document.getElementById("present1")?.classList.add("hidden")
                            document.getElementById("shipchibi")?.classList.remove("hidden")
                            document.getElementById("shipdata")?.classList.remove("hidden")
                            document.getElementById("shipdata2")?.classList.remove("hidden")
                            document.body.classList.add("overflow-x-hidden");
                            document.body.classList.remove("w-max");
                        }}
                    >
                        <img className="cursor-zoom-out object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.re} alt={shipdata.data.name + " picture"}></img>
                    </div></> : <></>}

                {(shipdata.data.fatesim != null) ? <>
                    <div id="present2" className="hidden bg-gray-900 w-max"
                        onClick={() => {
                            document.getElementById("present2")?.classList.add("hidden")
                            document.getElementById("shipchibi")?.classList.remove("hidden")
                            document.getElementById("shipdata")?.classList.remove("hidden")
                            document.getElementById("shipdata2")?.classList.remove("hidden")
                            document.body.classList.add("overflow-x-hidden");
                            document.body.classList.remove("w-max");
                        }}
                    >
                        <img className="cursor-zoom-out object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.fatesim} alt={shipdata.data.name + " picture"}></img>
                    </div></> : <></>}

                {(shipdata.data.gear != null) ? <>
                    <div id="present3" className="hidden bg-gray-900 w-max"
                        onClick={() => {
                            document.getElementById("present3")?.classList.add("hidden")
                            document.getElementById("shipchibi")?.classList.remove("hidden")
                            document.getElementById("shipdata")?.classList.remove("hidden")
                            document.getElementById("shipdata2")?.classList.remove("hidden")
                            document.body.classList.add("overflow-x-hidden");
                            document.body.classList.remove("w-max");
                        }}
                    >
                        <img className="cursor-zoom-out object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.gear} alt={shipdata.data.name + " picture"}></img>
                    </div></> : <></>}

                {shipdata.data.chibi != null ? <>
                    <Chibi chibi={shipdata.data.chibi} />
                </> : <></>}
            </div>
        )
    }
}