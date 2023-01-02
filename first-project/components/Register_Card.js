import Link from "next/link";

export default function Register_Card() {

    const card_style = (
        {
            title: 'สมัครสมาชิก',
            title_style: 'text-zinc-200 text-2xl font-bold font-serif text-center',
            shape: "w-11/12 md:w-10/12 lg:w-7/12 rounded-lg shadow-md border border-gray-500 bg-neutral-800",
            position: "flex justify-center",
            body_style: "w-5/6",
            body_text_style:"block py-3 pl-3 pr-4 rounded text-zinc-300 text-2xl font-serif text-left",
            body_position: "flex justify-center",
            //----Register and Forgot password Link
            other_link_style: "w-5/12 block py-3 pl-3 pr-4 rounded hover:bg-neutral-600 bg-neutral-700 text-zinc-300 text-2xl font-serif text-center",
            other_link_position: "flex justify-evenly",
            //----Login Password input box
            from_style: "grid grid-cols-1 md:grid-cols-2 gap-4",
            input_style: "flex form-control block w-full px-4 py-2 text-xl font-normal text-gray-900 bg-zinc-400 bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-zinc-200 focus:border-blue-600 focus:outline-none",
            position_input: "flex justify-center",
            //button
            button_style: "w-8/12 md:w-1/2 lg:w-1/2 inline-block block py-3 pl-3 pr-4 rounded hover:bg-neutral-600 bg-neutral-700 hover:shadow-lg focus:bg-zinc-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-600 active:shadow-lg transition duration-150 ease-in-out text-zinc-300 text-2xl font-serif text-center",
        }
    );

    return (
        <div className={card_style.position}>
            <div className={card_style.shape}>
                <br></br>
                <h1 className={card_style.title_style}>{card_style.title}</h1>
                <br></br>
                <div className={card_style.body_position}>
                    <div className={card_style.body_style}>
                        <from class={card_style.from_style}>
                            <p className={card_style.body_text_style}>Username</p>
                            <div class={card_style.position_input}>
                                <input
                                    type="text"
                                    class={card_style.input_style}
                                    id="LoginInput"
                                    placeholder="Username"
                                />
                            </div>
                            <p className={card_style.body_text_style}>Password</p>
                            <div class={card_style.position_input}>
                                <input
                                    type="password"
                                    class={card_style.input_style}
                                    id="PasswordInput"
                                    placeholder="Password"
                                />
                            </div>
                            <p className={card_style.body_text_style}>Confirm Password</p>
                            <div class={card_style.position_input}>
                                <input
                                    type="password"
                                    class={card_style.input_style}
                                    id="CPasswordInput"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <p className={card_style.body_text_style}>Email Address</p>
                            <div class={card_style.position_input}>
                                <input
                                    type="email"
                                    class={card_style.input_style}
                                    id="EmailInput"
                                    placeholder="Email Address"
                                />
                            </div>
                        </from>
                        <br></br>
                        <div className={card_style.body_position}>
                            <button
                                type="button"
                                class={card_style.button_style}
                            >
                                ยืนยันการสมัครสมาชิก
                            </button>
                        </div>
                        <br></br>
                        <br></br>
                        <div className={card_style.body_position}>
                            <p className={card_style.body_text_style}>มีบัญชีแล้ว</p>
                        </div>
                        <br></br>
                    </div>
                </div>

                <div className={card_style.other_link_position}>
                    <Link href="/login" className={card_style.other_link_style}>เข้าสู่ระบบ</Link>
                </div>
                <br></br>
            </div>
        </div>
    )
}