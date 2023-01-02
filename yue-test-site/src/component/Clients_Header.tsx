import { Component } from 'solid-js';


const Clients_Header: Component = () => {

    const card_style = (
        {
            header_text: "Our Clients",
            header_TH_text: "ลูกค้าของเรา",
            shape: "w-11/12 md:w-5/6 2xl:w-2/3 rounded-lg ",
            header_text_style: "text-4xl md:text-5xl text-gray-600 font-bold italic text-center",
        }
    );


    return (
        <div class='flex justify-center'>
            <div class={card_style.shape}>
                <div class='flex justify-center' id="clients">
                    <div class='w-5/6'>
                        <h1 class={card_style.header_text_style}>{card_style.header_text + " "}
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16" >
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                            </svg>
                        </h1>
                        <h1 class={card_style.header_text_style}>{card_style.header_TH_text}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients_Header;
