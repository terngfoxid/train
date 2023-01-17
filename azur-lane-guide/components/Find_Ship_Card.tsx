import Link from 'next/link'

export default function Find_Ship_Card() {

    const card_style = (
        {
            title_style: 'text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center',
            shape: "w-11/12 md:w-5/6 2xl:w-2/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
            position: "flex justify-center",
            body_style: "py-2 text-zinc-700 dark:text-zinc-300 text-lg md:text-2xl text-center",
            button_style: "cursor-pointer w-full py-2 rounded hover:bg-neutral-300 dark:hover:bg-neutral-700 flex flex justify-center items-center",
        }
    );

    return (
        <div className={card_style.position}>
            <div className={card_style.shape}>
                <br></br>
                <h1 className={card_style.title_style}>
                    <div className="md:flex md:justify-center md:items-center md:text-3xl">
                        <p>ข้อมูลเรือ</p>
                    </div>
                </h1>
                <br className=""></br>
                <div className={card_style.body_style}>

                    <h1 className={card_style.title_style}>
                        <div className="md:flex md:justify-center md:items-center md:text-3xl">
                            <p>Faction หลัก</p>
                        </div>
                    </h1>
                    <br></br>

                    <div className="md:grid md:grid-cols-3 md:gap-y-2">

                        <div className="flex justify-center">
                            <Link className="w-11/12 flex items-center" href="/faction/Eagle Union">
                                <div className={card_style.button_style}>
                                    <div className="flex justify-center items-center">
                                        <div className="hidden dark:block"><img src="/images/faction/Eagle Union Iv.webp" alt='faction image' width="50" /></div>
                                        <div className="block dark:hidden"><img src="/images/faction/Eagle Union.png" alt='faction image' width="50" /></div>
                                        <p>&nbsp;Eagle Union</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <br className="md:hidden"></br>

                        <div className="flex justify-center">
                            <Link className="w-11/12 flex items-center" href="/faction/Royal Navy">
                                <div className={card_style.button_style}>
                                    <div className="flex justify-center items-center">
                                        <div className="hidden dark:block"><img src="/images/faction/Royal Navy Iv.webp" alt='faction image' width="50" /></div>
                                        <div className="block dark:hidden"><img src="/images/faction/Royal Navy.png" alt='faction image' width="50" /></div>
                                        <p>&nbsp;Royal Navy</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <br className="md:hidden"></br>

                        <div className="flex justify-center">
                            <Link className="w-11/12 flex items-center" href="/faction/Sakura Empire">
                                <div className={card_style.button_style}>
                                    <div className="flex justify-center items-center">
                                        <div className="hidden dark:block"><img src="/images/faction/Sakura Empire Iv.webp" alt='faction image' width="50" /></div>
                                        <div className="block dark:hidden"><img src="/images/faction/Sakura Empire.png" alt='faction image' width="50" /></div>
                                        <p>&nbsp;Sakura Empire</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <br className="md:hidden"></br>

                        <div className="flex justify-center">
                            <Link className="w-11/12 flex items-center" href="/faction/Iron Blood">
                                <div className={card_style.button_style}>
                                    <div className="flex justify-center items-center">
                                        <div className="hidden dark:block"><img src="/images/faction/Iron Blood Iv.webp" alt='faction image' width="50" /></div>
                                        <div className="block dark:hidden"><img src="/images/faction/Iron Blood.png" alt='faction image' width="50" /></div>
                                        <p>&nbsp;Iron Blood</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <br className="md:hidden"></br>

                        <div className="flex justify-center">
                            <Link className="w-11/12 flex items-center" href="/faction/Dragon Empery">
                                <div className={card_style.button_style}>
                                    <div className="flex justify-center items-center">
                                        <div className="hidden dark:block"><img src="/images/faction/Dragon Empery Iv.webp" alt='faction image' width="50" /></div>
                                        <div className="block dark:hidden"><img src="/images/faction/Dragon Empery.png" alt='faction image' width="50" /></div>
                                        <p>&nbsp;Dragon Empery</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <br className="md:hidden"></br>

                        <div className="flex justify-center">
                            <Link className="w-11/12 flex items-center" href="/faction/Northern Parliament">
                                <div className={card_style.button_style}>
                                    <div className="flex justify-center items-center">
                                        <div className="hidden dark:block"><img src="/images/faction/Northern Parliament Iv.webp" alt='faction image' width="50" /></div>
                                        <div className="block dark:hidden"><img src="/images/faction/Northern Parliament.png" alt='faction image' width="50" /></div>
                                        <p>&nbsp;Northern Parliament</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <br className="md:hidden"></br>

                        <div className="flex justify-center">
                            <Link className="w-11/12 flex items-center" href="/faction/Iris Libre">
                                <div className={card_style.button_style}>
                                    <div className="flex justify-center items-center">
                                        <div className="hidden dark:block"><img src="/images/faction/Iris Libre Iv.webp" alt='faction image' width="50" /></div>
                                        <div className="block dark:hidden"><img src="/images/faction/Iris Libre.png" alt='faction image' width="50" /></div>
                                        <p>&nbsp;Iris Libre</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <br className="md:hidden"></br>

                        <div className="flex justify-center">
                            <Link className="w-11/12 flex items-center" href="/faction/Vichya Dominion">
                                <div className={card_style.button_style}>
                                    <div className="flex justify-center items-center">
                                        <div className="hidden dark:block"><img src="/images/faction/Vichya Dominion Iv.webp" alt='faction image' width="50" /></div>
                                        <div className="block dark:hidden"><img src="/images/faction/Vichya Dominion.png" alt='faction image' width="50" /></div>
                                        <p>&nbsp;Vichya Dominion</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <br className="md:hidden"></br>

                        <div className="flex justify-center">
                            <Link className="w-11/12 flex items-center" href="/faction/Sardegna Empire">
                                <div className={card_style.button_style}>
                                    <div className="flex justify-center items-center">
                                        <div className="hidden dark:block"><img src="/images/faction/Sardegna Empire Iv.webp" alt='faction image' width="50" /></div>
                                        <div className="block dark:hidden"><img src="/images/faction/Sardegna Empire.png" alt='faction image' width="50" /></div>
                                        <p>&nbsp;Sardegna Empire</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <br></br>
                    <h1 className={card_style.title_style}>
                        <div className="md:flex md:justify-center md:items-center md:text-3xl">
                            <p>Faction เสริม</p>
                        </div>
                    </h1>
                    <br></br>

                    <div className="md:grid md:grid-cols-3 md:gap-y-2">

                        <div className="flex justify-center">
                            <Link className="w-11/12 flex items-center" href="/faction/Tempesta">
                                <div className={card_style.button_style}>
                                    <div className="flex justify-center items-center">
                                        <div className="hidden dark:block"><img src="/images/faction/Tempesta Iv.webp" alt='faction image' width="50" /></div>
                                        <div className="block dark:hidden"><img src="/images/faction/Tempesta.png" alt='faction image' width="50" /></div>
                                        <p>&nbsp;Tempesta</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <br className="md:hidden"></br>

                        <div className="flex justify-center">
                            <Link className="w-11/12 flex items-center" href="/faction/META">
                                <div className={card_style.button_style}>
                                    <div className="flex justify-center items-center">
                                        <div className=""><img src="/images/faction/META.png" alt='faction image' width="50" /></div>
                                        <p>&nbsp;META</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <br className="md:hidden"></br>

                        <div className="flex justify-center">
                            <Link className="w-11/12 flex items-center" href="/faction/Collab">
                                <div className={card_style.button_style}>
                                    <div className="flex justify-center items-center">
                                        <div className="hidden dark:block"><img src="/images/faction/Collab Iv.webp" alt='faction image' width="50" /></div>
                                        <div className="block dark:hidden"><img src="/images/faction/Collab.png" alt='faction image' width="50" /></div>
                                        <p>&nbsp;Collab</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <br className="md:hidden"></br>

                    </div>

                </div>
                <br className="hidden md:block"></br>
            </div>
        </div>
    )
}