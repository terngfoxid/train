import { useEffect, useState } from "react";
import Loading from "./overlay/Loading";
import Chibi_Event from "./overlay/Chibi_Event";
import 'animate.css';

export default function Active_Event_Card(ship: any) {

    const [eventdata, setEventdata] = useState({
        data: {
            banner: null,
            button: null,
            chibi: null,
            event_guide: null,
            name: null,
            newship: null,
            newship_chibi: null,
            error:null,
        }
    });

    const callAPI = async () => {
        try {
            const res = await fetch('/api/active_event');
            const loaddata = await res.json()
            setEventdata({ data: loaddata })
            return
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callAPI()
    }, []);

    if (eventdata.data.banner == null && eventdata.data.error == null) {
        return (
            <div className="flex justify-center">
                <Loading />
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
                        <h1 className={card_style.title_style}>
                            {eventdata.data.name}
                        </h1>
                    </div>

                </div>


                {eventdata.data.chibi != null ? <>
                    <Chibi_Event chibi={eventdata.data.chibi} />
                </> : <></>}
            </div>
        )
    }
}