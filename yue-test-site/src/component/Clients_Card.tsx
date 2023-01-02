import { Component } from 'solid-js';


const Clients_Card: Component = () => {

    const card_style = (
        {
            shape: "w-11/12 md:w-5/6 2xl:w-7/12 rounded-lg ",
            client_shape: "",
        }
    );


    return (
        <div class='flex justify-center'>
            <div class={card_style.shape}>
                <div class='grid grid-cols-3'>
                    <div class='flex justify-start'>
                        <div class='w-5/6'>
                            <div class='w-full h-max'>
                                <a href='#'>
                                    <img src="/images/client.webp" class='rounded-full shadow-xl object-contain h-full w-full' alt='client image'/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class='flex justify-center'>
                        <div class='w-5/6'>
                            <div class='w-full h-max'>
                                <a href='#'>
                                    <img src="/images/client.webp" class='rounded-full shadow-xl object-contain h-full w-full' alt='client image'/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class='flex justify-end'>
                        <div class='w-5/6'>
                            <div class='w-full h-max'>
                                <a href='#'>
                                    <img src="/images/client.webp" class='rounded-full shadow-xl object-contain h-full w-full' alt='client image'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients_Card;
