import type { Component } from 'solid-js';
import { createSignal, createEffect } from "solid-js";
import anime from 'animejs/lib/anime.es.js';

const AnimeJS_Testing: Component = () => {

    const [isPlay, setIsplay] = createSignal(false)

    const card_style = (
        {
            header_text: "AnimeJS",
            shape: "w-5/6 md:w-1/3 2xl:w-1/4 rounded-lg bg-neutral-200 shadow-xl",
            header_text_style: "text-4xl md:text-5xl text-gray-600 font-bold italic text-center",
        }
    );

    const toggle = () => {
        var elements = document.querySelectorAll('.square');

        console.log(isPlay())

        if(isPlay() == false){
            anime({
                targets: elements,
                translateX: 250,
                rotate: '2turn',
                duration: 3000,
                endDelay: 1000,
            });
            console.log("playing")
            setIsplay(true)
        }
        else{
            anime({
                targets: elements,
                translateX: 250,
                rotate: '2turn',
                duration: 3000,
                endDelay: 1000,
                direction: 'reverse',
            });
            console.log("playback")
            setIsplay(false)
        }

    }

    createEffect(() => {

    }, [])

    return (
        <div class='flex justify-center'>
            <div class={card_style.shape}>
                <h1 class={card_style.header_text_style}>{card_style.header_text}</h1>
                <br></br>
                <div class="flex justify-center">
                    <div class='line w-11/12'>
                        <div class="square h-10 w-10 bg-red-500"
                            onClick={toggle}>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
        </div >
    );
};

export default AnimeJS_Testing;
