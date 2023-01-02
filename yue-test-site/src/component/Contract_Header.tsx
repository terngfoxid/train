import { Component } from 'solid-js';


const Contract_Header: Component = () => {

    const card_style = (
        {
            header_text: "Contract",
            header_TH_text: "ติดต่อเรา",
            shape: "w-11/12 md:w-5/6 2xl:w-2/3 rounded-lg ",
            header_text_style: "text-4xl md:text-5xl text-gray-600 font-bold italic text-center",
        }
    );


    return (
        <div class='flex justify-center'>
            <div class={card_style.shape}>
                <div class='flex justify-center' id="contract">
                    <div class='w-5/6'>
                        <h1 class={card_style.header_text_style}>{card_style.header_text + " "}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="30px" height="30px" fill="currentColor" class='animate__animated animate__tada animate__infinite'>
                                <rect width="256" height="256" fill="none" />
                                <path d="M222,158.4l-46.9-20a15.6,15.6,0,0,0-15.1,1.3l-25.1,16.7a76.5,76.5,0,0,1-35.2-35h0L116.3,96a15.9,15.9,0,0,0,1.4-15.1L97.6,34a16.3,16.3,0,0,0-16.7-9.6A56.2,56.2,0,0,0,32,80c0,79.4,64.6,144,144,144a56.2,56.2,0,0,0,55.6-48.9A16.3,16.3,0,0,0,222,158.4Z" /><path d="M157.4,47.7a72.6,72.6,0,0,1,50.9,50.9,8,8,0,0,0,7.7,6,7.6,7.6,0,0,0,2.1-.3,7.9,7.9,0,0,0,5.6-9.8,88,88,0,0,0-62.2-62.2,8,8,0,1,0-4.1,15.4Z" />
                                <path d="M149.1,78.6a40.4,40.4,0,0,1,28.3,28.3,7.9,7.9,0,0,0,7.7,6,6.4,6.4,0,0,0,2-.3,7.9,7.9,0,0,0,5.7-9.8,55.8,55.8,0,0,0-39.6-39.6,8,8,0,1,0-4.1,15.4Z" />
                            </svg>
                        </h1>
                        <h1 class={card_style.header_text_style}>{card_style.header_TH_text}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract_Header;
