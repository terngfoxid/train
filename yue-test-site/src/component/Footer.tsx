import { Component, createSignal } from 'solid-js';

const Footer: Component = () => {

    const footer_style = (
        {
            appname: "© 2022 Yue's lab",
            creator: "Made by SSTfoxide",
            //------
            bar_style: "bg-neutral-300 shadow-xl",//Footer Bar color
            appname_style: "text-lg text-zinc-600 font-bold text-center my-1",//App name style
            creator_style: "text-xs text-zinc-600 text-center my-1 italic",//App name style
        }
    );

    return (
        <div>
            <footer class={footer_style.bar_style}>
                <div class='w-screen h-auto py-1'>
                    <div>
                        <p class={footer_style.appname_style}>{footer_style.appname}</p>
                        <p class={footer_style.creator_style}>{footer_style.creator}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
