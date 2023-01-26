import Link from "next/link";

export default function B_Event_Card() {

    const card_style = (
        {
            cover: 'group-hover:animate-pulse absolute top-0 left-0 h-full w-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-10 rounded-lg',
            shape: "group relative w-11/12 rounded-lg shadow-md border bg-neutral-200 hover:bg-neutral-300 border-gray-300 dark:border-gray-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 border-b-4 border-t-1 border-l-1 border-r-1 duration-300",
            body_style: "py-2 text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl text-center ",
            image_style: "w-full rounded-lg shadow-xl",
            image_src: "/images/Parallel Superimposition 600x300.png",
        }
    );

    return (
        <button className={card_style.shape}>
            <Link href="/#" className="w-full">
                <img src={card_style.image_src} className={card_style.image_style} alt='button image' />
                <div className={card_style.cover}></div>
            </Link>
        </button>
    )
}