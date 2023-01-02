import { Component } from 'solid-js';


const ServicesL_Card: Component = () => {

    const card_style = (
        {
            header_text: "Web Development",
            body_text: "ทีมของเรามีประสบการณ์ในการออกเว็บไซต์ ให้รองรับการใช้งานในหลากหลายอุปกรณ์",
            body_text_small: "เรามีบริการออกแบบ และ พัฒนาเว็บไซต์",
            //------setting image and link
            link_another_web: "https://www.hareshi.net",
            small_image: "/images/hareshi_logo_example.webp",
            middle_image: "/images/hareshi_example.webp",
            small_image_style: "bg-amber-900 border-4 border-amber-200 hover:bg-amber-700",
            //------shape text box
            shape: "w-11/12 md:w-5/6 2xl:w-2/3 rounded-lg",//
            text_shape_style: "rounded-lg shadow-xl bg-neutral-200 md:shadow-none md:bg-transparent",
            header_text_style: "text-2xl text-gray-600 font-bold italic text-center",
            body_text_style: "text-xl text-gray-500 font-bold text-center px-2",
        }
    );


    return (
        <div class='flex justify-center'>
            <div class={card_style.shape}>
                <div class='h-40 md:h-50 lg:h-65 xl:h-80'>
                    <div class='grid grid-cols-7 w-full h-full'>
                        <div class='col-span-4 md:col-span-3'>
                            <div class='flex justify-start w-full h-full '>
                                <div class={'w-full h-full flex justify-center 2xl:justify-end items-center ' + card_style.text_shape_style}>
                                    <div class='h-11/12 w-95'>
                                        <div class='md:items-center w-full h-full flex justify-center'>
                                            <div>
                                                <h1 class={card_style.header_text_style}>{card_style.header_text}</h1>
                                                <h2 class={card_style.body_text_style + " hidden md:block"}>{card_style.body_text}</h2>
                                                <h2 class={card_style.body_text_style + " block md:hidden"}>{card_style.body_text_small}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-span-3 md:col-span-4 w-full h-full'>
                            <div class='flex justify-end w-full h-full'>
                                <div class='relative w-11/12 items-center flex md:justify-center'>
                                    <div class='invisible md:visible items-center md:flex md:justify-center md:w-full md:h-full'>
                                        <a href={card_style.link_another_web} class='items-center flex '>
                                            <img src={card_style.middle_image} class='hidden md:block absolute bottom-0 left-0 rounded-lg shadow-xl object-cover h-full' alt='service image'/>
                                        </a>
                                    </div >
                                    <div class={'visible md:invisible items-center flex justify-center h-max py-1 w-full rounded-lg shadow-xl ' + card_style.small_image_style}>
                                        <a href={card_style.link_another_web} class='items-center flex justify-center'>
                                            <img src={card_style.small_image} class='object-cover w-11/12' alt='service image'/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesL_Card;
