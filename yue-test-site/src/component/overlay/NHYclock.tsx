import type { Component } from 'solid-js';
import Firework from './Firework';
import { createSignal, createEffect } from "solid-js";


const HNYclock: Component = () => {

    const [clock, setClock] = createSignal("")

    const card_style = (
        {
            header_text: "Timer",
            shape: "w-5/6 md:w-1/3 2xl:w-1/4 rounded-lg bg-neutral-200 shadow-xl",
            header_text_style: "text-4xl md:text-5xl text-gray-600 font-bold italic text-center",
        }
    );

    const thisday = new Date();
    const day = thisday.getDate();
    const month = thisday.getUTCMonth();

    const toggleVisibility = () => {
        const current = new Date();
        const time = current.toLocaleTimeString();
        setClock(time)
        setTimeout(() => {
            toggleVisibility()
        }, 1000);

    }
    createEffect(() => {
        toggleVisibility()
    }, [])

    return (<div>

        {((day == 31) && (month == 11)) ?
            <div>
                <br></br>
                <div class='flex justify-center'>

                    <div class={card_style.shape}>
                        <h1 class={card_style.header_text_style}>
                            New Year Clock
                        </h1>
                        <h1 class={card_style.header_text_style}>
                            {clock()}
                        </h1>
                    </div>
                </div>
            </div> : null
        }
    </div>);
};

export default HNYclock;
