import { Component } from 'solid-js';
import { createSignal, createEffect } from "solid-js";

const About_Card: Component = () => {

    const [stopLoding, setStopLoding] = createSignal(false)
    const [percent, setPercent] = createSignal(0);

    const progressUP = () => {
        if (percent() < 101) {
            setTimeout(() => {
                setPercent(percent() + 1)
                setTimeout(() => {
                    progressUP();
                }, 220);
            }, 300);

        }
        else setStopLoding(true)
    };

    createEffect(() => {
        if (stopLoding() == false) {
            progressUP();
        }
    }, [])

    const card_style = (
        {
            header_text: "เราคือ  Yue's Developer team!",
            body_text: "ทีม Developer ที่มีประสบการณ์ทั้งทางด้าน FRONT END , BACK END และ FULL STACK",
            //------
            shape: "w-11/12 md:w-2/3 2xl:w-5/12 rounded-lg bg-neutral-200 shadow-xl ",
            //------Upper
            upper_shape: "flex justify-center bg-neutral-900 rounded-t-lg",
            header_loading_text_style: "text-xs md:text-2xl text-zinc-100 font-bold italic",
            loading_text_style: "text-zinc-300 font-bold ",
            loading_bar_style: "w-full bg-gray-300 rounded-full h-2.5 ",
            loading_bar_inner_style: "bg-indigo-400 h-2.5 rounded-full",
            //------Lower
            header_lower_text_style: "text-xl md:text-3xl text-zinc-700 font-bold italic text-center md:py-1",
            body_lower_text_style: "text-sm md:text-lg text-zinc-600 font-bold text-center",
        }
    );

    const loading_bar = [];
    loading_bar.push(
        <><div class={card_style.upper_shape}>
            <div class='w-full h-40 md:h-80 items-center'>
                <div class='h-full items-center flex justify-center'>
                    <div class='w-full'>
                        <div class={card_style.header_loading_text_style+' flex justify-center'}>
                            {percent() < 3 ? <h1>Yue Engine Booting</h1> :
                            percent() < 7 ? <h1>Yue Engine Booting.</h1> :
                            percent() < 10 ? <h1>Yue Engine Booting..</h1> :
                            percent() < 20 ? <h1>Yue Engine Booting...</h1> : 
                            percent() < 30 ? <h1>Yue Engine Booting</h1> : 
                            percent() < 50 ? <h1>Yue Engine Booting.</h1> :
                            percent() < 75 ? <h1>Yue Engine Booting..</h1> :
                            <h1>Yue Engine Booting...</h1> }
                            
                        </div>
                        <div class='flex justify-center'>
                        <div class='w-5/6'>
                        <div class="flex justify-between mb-1 items-center">
                            <span class={card_style.loading_text_style}>Loading</span>
                            <span class={card_style.loading_text_style}>{percent()}%</span>
                        </div>
                        <div class={card_style.loading_bar_style}>
                            <div class={card_style.loading_bar_inner_style} style={"width: " + percent() + "%"}></div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
    //example call image
    //<img src="../../public/images/yue_dark.png" class="animate-bounce-alt max-w-full h-11/12 " />
    const animation_scene = [];
    animation_scene.push(
        <><div class={card_style.upper_shape}>
            <div class='w-5/6 md:w-full 2xl:w-160 h-40 md:h-80 items-center md:flex md:justify-center'>
                <div class='w-full md:w-11/12 h-11/12 items-center justify-center flex'>
                    <div class='relative w-11/12 h-5/6 flex items-center justify-center'>
                        <div class='items-end w-full max-w-160 h-full '>
                            <img src="/images/y.webp" class='animate__animated animate__backInRight animate__delay-1.5s animate__slow absolute bottom-0 left-0 object-contain h-full w-full' alt='Yue image'/>
                            <div class='flex justify-center items-end w-full h-full'>
                                <div class='w-1/12 '>
                                <p> </p>
                                </div>
                                <img src="/images/u.webp" class='animate__animated animate__heartBeat animate__delay-2s animate__slow object-contain h-2/3 w-1/4' alt='Yue image'/>
                            </div>
                            <img src="/images/e.webp" class='animate__animated animate__bounce animate__delay-2s animate__slow absolute bottom-0 right-0 object-contain h-2/3 w-1/4' alt='Yue image'/>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )

    return (
        <div class='flex justify-center'>
            <div class={card_style.shape} id="about">
                <div class='md:grid md:grid-rows-3'>
                    <div class="md:row-span-2">
                        {stopLoding() ?
                            animation_scene
                            :
                            loading_bar}
                    </div>
                    <div class='md:row-span-1 md:flex md:items-center'>
                        <div class='flex justify-center w-full h-full md:items-center'>
                            <div class='w-11/12 h-11/12 items-center md:flex md:items-center md:justify-center'>
                                <div>
                                <h1 class={card_style.header_lower_text_style}>{card_style.header_text}</h1>
                                <p class={card_style.body_lower_text_style}>{card_style.body_text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About_Card;
