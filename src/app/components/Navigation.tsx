"use client";

import Link from 'next/link';
import { VscMenu, VscClose } from "react-icons/vsc";
import { useState } from "react";


type Props = { className: string, isMobile?: boolean, onClick?: any };

function NavigationLinks({ ...props }:Props){
    let childClassNames = "hover:border-b-2 border-blue-800";
    if(props.isMobile){
        childClassNames = "hover:border-b-2 border-indigo-50 flex my-8"
    }
    return  (
        <ul className={props.className}>
            <li className={childClassNames} onClick={props.onClick}><Link href="/">Work</Link></li>
            <li className={childClassNames} onClick={props.onClick}><Link href="/about">About</Link></li>
            <li className={childClassNames} onClick={props.onClick}><Link href="/">Contact</Link></li>
        </ul>
    );
}

export default function Nav() {
    const [showMobileNavIcon, setShowMobileNavIcon] = useState(true);
    const [expandMobileNav, setExpandMobileNav] = useState(false);

    function closeMobileNavigation() {
        setShowMobileNavIcon(true);
        setExpandMobileNav(false);
    }

    return (
        <nav className={ expandMobileNav ? "bg-blue-800 md:bg-transparent" : undefined}>
            <div className="flex sm:flex-wrap md:flex-nowrap justify-between p-12">
                <Link className={ expandMobileNav ? "hover:border-b-2 border-indigo-50 md:border-blue-800 text-indigo-50 md:text-black md:flex-none" : "hover:border-b-2 border-blue-800 md:text-black md:flex-none"} href="/">LC</Link>
                { showMobileNavIcon ? (
                    <VscMenu className="cursor-pointer sm:inline-block md:hidden rounded active:border-2 active:border-blue-800" onClick={() => { 
                        setShowMobileNavIcon(false)
                        setExpandMobileNav(true)
                    }} size={26}/>
                ) : (
                    <VscClose className="cursor-pointer rounded active:border-2 active:border-indigo-50 text-indigo-50 sm:inline-block md:hidden" onClick={ () => closeMobileNavigation() } size={27} color="4F46E5"/>
                )}
                { showMobileNavIcon ? <NavigationLinks className='hidden space-x-4 sm:hidden md:inline-flex'/>
                        : <NavigationLinks className='hidden space-x-4 md:inline-flex' />
                }
            </div>

            { expandMobileNav &&
                <NavigationLinks className="flex flex-col items-center bg-blue-800 text-indigo-50 p-12 min-h-full md:hidden" isMobile={expandMobileNav} onClick={closeMobileNavigation}/>
            }
        </nav>
    )
}