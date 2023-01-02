import { Component, createSignal } from 'solid-js';

const Topbar: Component = () => {

    const [navbar, setNavbar] = createSignal(false);

    const topbar_style = (
        {
            appname: "Yue.sh Team",
            svg_appname: "",
            //------
            bar_style: "bg-neutral-200 shadow-xl",//Header Bar color
            appname_style: "text-3xl text-zinc-600 font-bold my-1",//App name on left
            list_style: "cursor-pointer block py-3 pl-3 pr-4 rounded hover:bg-neutral-300 no-underline text-center text-zinc-600 font-bold shadow md:shadow-none",//Hover of Menu list on right 
            smalldevice_style: "bg-neutral-200 w-full h-full items-center shadow md:shadow-none",
            unhide_menu_style: "p-2 text-gray-700 rounded-md outline-none border-gray-300 border shadow ",
        }
    );

    const clickBTTabout = (event) => {
        var access = document.getElementById("about");
        access.scrollIntoView({behavior: 'smooth'});
    }

    const clickBTTservices = (event) => {
        var access = document.getElementById("services");
        access.scrollIntoView({behavior: 'smooth'});
    }

    const clickBTTclients = (event) => {
        var access = document.getElementById("clients");
        access.scrollIntoView({behavior: 'smooth'});
    }

    const clickBTTcontract = (event) => {
        var access = document.getElementById("contract");
        access.scrollIntoView({behavior: 'smooth'});
    }

    const menu_list = [];
    menu_list.push(
        <div class={topbar_style.list_style} onClick={clickBTTabout}>
            {navbar() ? 'About us  ' : 'About us'}
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-file-earmark-code-fill md:hidden" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z" />
            </svg>
        </div>
    )
    menu_list.push(
        <div class={topbar_style.list_style} onClick={clickBTTservices}>
            {navbar() ? 'Services  ' : 'Services'}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="15" height="15" fill="currentColor" class="md:hidden">
                <path d="M275.2 250.5c7 7.375 18.5 7.375 25.5 0l108.1-114.2c31.5-33.12 29.72-88.1-5.65-118.7c-30.88-26.75-76.75-21.9-104.9 7.724L287.1 36.91L276.8 25.28C248.7-4.345 202.7-9.194 171.1 17.56C136.7 48.18 134.7 103.2 166.4 136.3L275.2 250.5zM568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.1c0-8.746 7.25-15.1 15.1-15.1h78.25c15.1 0 30.75-10.87 33.37-26.62c3.25-19.1-12.12-37.37-31.62-37.37H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74l-55.37-.0253c-8.748 0-15.1 7.275-15.1 16.02L.0001 496C.0001 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.187 61.7-20.28l135.1-99.51C577.5 379.1 581.3 354.1 568.2 336.3z" />
            </svg>
        </div>
    )
    menu_list.push(
        <div class={topbar_style.list_style} onClick={clickBTTclients}>
            {navbar() ? 'Our Clients  ' : 'Our Clients'}
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-people-fill md:hidden" viewBox="0 0 16 16" >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            </svg>
        </div>
    )
    menu_list.push(
        <div class={topbar_style.list_style} onClick={clickBTTcontract}>
            {navbar() ? 'Contract  ' : 'Contract'}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class='md:hidden' width="15px" height="15px" fill="currentColor">
                <rect width="256" height="256" fill="none" />
                <path d="M222,158.4l-46.9-20a15.6,15.6,0,0,0-15.1,1.3l-25.1,16.7a76.5,76.5,0,0,1-35.2-35h0L116.3,96a15.9,15.9,0,0,0,1.4-15.1L97.6,34a16.3,16.3,0,0,0-16.7-9.6A56.2,56.2,0,0,0,32,80c0,79.4,64.6,144,144,144a56.2,56.2,0,0,0,55.6-48.9A16.3,16.3,0,0,0,222,158.4Z" /><path d="M157.4,47.7a72.6,72.6,0,0,1,50.9,50.9,8,8,0,0,0,7.7,6,7.6,7.6,0,0,0,2.1-.3,7.9,7.9,0,0,0,5.6-9.8,88,88,0,0,0-62.2-62.2,8,8,0,1,0-4.1,15.4Z" />
                <path d="M149.1,78.6a40.4,40.4,0,0,1,28.3,28.3,7.9,7.9,0,0,0,7.7,6,6.4,6.4,0,0,0,2-.3,7.9,7.9,0,0,0,5.7-9.8,55.8,55.8,0,0,0-39.6-39.6,8,8,0,1,0-4.1,15.4Z" />
            </svg>
        </div>
    )


    return (
        <div>
            <nav class={topbar_style.bar_style}>
                <div class='justify-center w-screen items-center flex mx-auto'>
                    <div class='w-full md:w-5/6 h-full flex'>
                        <div class="w-full md:flex md:justify-between">
                            <div class='flex justify-center h-16'>
                                <div class='w-11/12 h-16 md:w-full'>
                                    <div class='flex justify-between items-center h-16 block'>
                                        <a href="/" class='no-underline h-full items-center flex'>
                                            <h2 class={topbar_style.appname_style}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="currentColor">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M5.33 3.271a3.5 3.5 0 0 1 4.472 4.474L20.647 18.59l-2.122 2.121L7.68 9.867a3.5 3.5 0 0 1-4.472-4.474L5.444 7.63a1.5 1.5 0 1 0 2.121-2.121L5.329 3.27zm10.367 1.884l3.182-1.768 1.414 1.414-1.768 3.182-1.768.354-2.12 2.121-1.415-1.414 2.121-2.121.354-1.768zm-7.071 7.778l2.121 2.122-4.95 4.95A1.5 1.5 0 0 1 3.58 17.99l.097-.107 4.95-4.95z" />
                                                    </g>
                                                </svg>
                                                {" " + topbar_style.appname}
                                            </h2>
                                        </a>
                                        <div class="md:hidden">
                                            <button
                                                class={topbar_style.unhide_menu_style}
                                                onClick={() => setNavbar(!navbar())}
                                                aria-label="menu"
                                            >
                                                {navbar() ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-6 h-6 text-white"
                                                        viewBox="0 0 20 20"
                                                        fill="black"
                                                    >
                                                        <path

                                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"

                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-6 h-6 text-white"
                                                        fill="black"
                                                        viewBox="0 0 24 24"
                                                        stroke='black'

                                                    >
                                                        <path
                                                            d="M4 6h16M4 12h16M4 18h16"
                                                        />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='m-0 h-full items-center'>
                                <div class={navbar() ? 'flex-auto justify-self-center mt-0 block md:h-full md:items-center' : 'hidden md:block md:h-full md:items-center'}>
                                    <div class={topbar_style.smalldevice_style}>
                                        <ul class="items-center justify-center gap-x-2 space-y-8 md:flex md:space-x-20 md:space-y-0 h-full w-full p-0 m-0">
                                            {menu_list}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </div>
    );
};

export default Topbar;
