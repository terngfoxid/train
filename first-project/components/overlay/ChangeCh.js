import { useEffect, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'

export default function ChangeCh({ ch, total_ch }) {

    const [isVisible, setIsVisible] = useState(false)

    //show or not show
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const btn_style = (
        {
            symbol_style: ' w-5/6 text-zinc-200 text-2xl font-bold font-serif ',
            btn_style: " p-2 rounded shadow-md border border-gray-800 bg-[#4F526C] hover:bg-neutral-400",
            set_overlay: "fixed bottom-2 left-2 md:bottom-5 md:left-5 ",
            select_style: "p-1.5 rounded shadow-md border border-gray-800 text-zinc-200 text-2xl bg-[#4F526C] inline-block align-top "
        }
    );

    const clickBtnBack = (event) => {
        Router.push("/manga/" + ch[0] + "/" + (parseInt(ch[1], 10) - 1))
    }
    const clickBtnNext = (event) => {
        Router.push("/manga/" + ch[0] + "/" + (parseInt(ch[1], 10) + 1))
    }
    const selectchangeCh = (event) => {
        Router.push("/manga/" + ch[0] + "/" + event.target.value)
    }

    if (ch == null) return (
        <div className={btn_style.set_overlay}> </div>
    )

    //add back btn
    const menu_list = [];
    if (ch[1] > 1) {
        menu_list.push(
            <button onClick={clickBtnBack} className={btn_style.btn_style + " rotate-180"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path
                        fill="white"
                        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"
                    />
                </svg>
            </button>
        )
    }
    //add space
    menu_list.push(
        <a> </a>
    )

    //---add select ch
    const ch_list = [];

    for (let i = 0; i < total_ch; i++) {
        const ch_num = i + 1
        if (ch_num == ch[1]) {
            ch_list.push(
                <option value={"" + ch_num + ""} selected>ตอนที่ {ch_num}</option>
            )
        }
        else {
            ch_list.push(
                <option value={"" + ch_num + ""}>ตอนที่ {ch_num}</option>
            )
        }
    }

    menu_list.push(
        <select onChange={selectchangeCh} id="chapter" className={btn_style.select_style}>
            {ch_list}
        </select>
    )

    //---

    //add space
    menu_list.push(
        <a> </a>
    )

    //add next btn
    if (ch[1] < (total_ch)) {
        menu_list.push(
            <button onClick={clickBtnNext} className={btn_style.btn_style}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path
                        fill="white"
                        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"
                    />
                </svg>
            </button>
        )
    }

    return (
        <div className={btn_style.set_overlay}>
            <div className="">
                {menu_list}
            </div>
        </div>
    )
}