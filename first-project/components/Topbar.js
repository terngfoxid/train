import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react';

export default () => {
    const [navbar, setNavbar] = useState(false);

    const header_style = (
      {
        menu_bar_style : "w-full bg-neutral-800 shadow",//Header Bar color
        menu_appname_style : "text-3xl text-zinc-100 font-bold font-serif italic",//App name on left
        menu_list_text_style : "text-center text-zinc-100 font-bold font-serif italic",//Text of Menu list on right 
        menu_list_style : "block py-3 pl-3 pr-4 rounded hover:bg-neutral-700",//Hover of Menu list on right 
      }
    );

    //test show login/logout link
    var login_session = false;

    //Menu Preset
    const menu_list=[];
    menu_list.push(
      <li><Link className={header_style.menu_list_style} href="/">Home</Link></li>
    )
    menu_list.push(
      <li><Link className={header_style.menu_list_style} href="/#">Test</Link></li>
    )
    menu_list.push(
      <li><Link className={header_style.menu_list_style} href="/contact">Contact</Link></li>
    )
    

    //Add last Menu Login/Logout 
    if(login_session == true){
      menu_list.push(
        <li><Link className={header_style.menu_list_style} href="/#">Profile</Link></li>
      )
      menu_list.push(
        <li><Link className={header_style.menu_list_style} href="/#">Logout</Link></li>
      )
    }
    else{
      menu_list.push(
        <li><Link className={header_style.menu_list_style} href="/login">Login</Link></li>
      )
    }

    return (
      <div >
        <Head>
          <title>My Pototype</title>
          <link rel="icon" href="/favicon/icon.ico" />
          <meta
            name="description"
            content="Create Next JS Responsive Menu"
          />
          <meta charset="UTF-8"></meta>
        </Head>
        
        <nav className={header_style.menu_bar_style}>
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-5">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a href="/">
                  <h2 className={header_style.menu_appname_style}>My App</h2>
                </a>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
              </div>
                
              </div>
            </div>

            <div>
              <div className={`fixed flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}>
                <div className={header_style.menu_list_text_style}>
                  <ul className="items-center justify-center space-y-8 md:flex md:space-x-20 md:space-y-0">
                    {menu_list}
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </nav>

      </div>
    )
  }