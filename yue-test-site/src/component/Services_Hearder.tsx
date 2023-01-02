import { Component } from 'solid-js';


const Services_Header: Component = () => {

    const card_style = (
        {
            header_text: "Services",
            header_TH_text: "บริการของเรา",
            shape: "w-11/12 md:w-5/6 2xl:w-2/3 rounded-lg ",
            header_text_style: "text-4xl md:text-5xl text-gray-600 font-bold italic text-center",
        }
    );


    return (
        <div class='flex justify-center'>
            <div class={card_style.shape}>
                <div id="services" class='flex justify-center'>
                    <div class='w-5/6'>
                        <h1 class={card_style.header_text_style}>{card_style.header_text+" "}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="30" height="30" fill="currentColor" class='animate__animated animate__rubberBand animate__infinite	animate__slower'>
                                <path d="M275.2 250.5c7 7.375 18.5 7.375 25.5 0l108.1-114.2c31.5-33.12 29.72-88.1-5.65-118.7c-30.88-26.75-76.75-21.9-104.9 7.724L287.1 36.91L276.8 25.28C248.7-4.345 202.7-9.194 171.1 17.56C136.7 48.18 134.7 103.2 166.4 136.3L275.2 250.5zM568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.1c0-8.746 7.25-15.1 15.1-15.1h78.25c15.1 0 30.75-10.87 33.37-26.62c3.25-19.1-12.12-37.37-31.62-37.37H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74l-55.37-.0253c-8.748 0-15.1 7.275-15.1 16.02L.0001 496C.0001 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.187 61.7-20.28l135.1-99.51C577.5 379.1 581.3 354.1 568.2 336.3z" />
                            </svg>
                        </h1>
                        <h1 class={card_style.header_text_style}>{card_style.header_TH_text}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services_Header;
