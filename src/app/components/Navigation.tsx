"use client";

import Link from 'next/link';
import { VscMenu, VscClose } from "react-icons/vsc";
import { useState } from "react";


type Props = { className: string, isMobile?: boolean, onClick?: any };

function NavigationLinks({ ...props }:Props){
    let childClassNames = "hover:border-b-2 border-indigo-600";
    if(props.isMobile){
        childClassNames = "hover:border-b-2 border-indigo-600 flex my-8 pl-7"
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
    const [showMobileNav, setShowMobileNav] = useState(true);
    const [expandMobileNav, setExpandMobileNav] = useState(false);

    function closeMobileNavigation() {
        setShowMobileNav(true);
        setExpandMobileNav(false);
    }

    return (
        <nav>
            <div className="flex sm:flex-wrap md:flex-nowrap justify-between m-12">
                <Link className="hover:border-b-2 border-indigo-600 md:flex-none" href="/">LC</Link>
                { showMobileNav ? (
                    <VscMenu className="cursor-pointer sm:inline-block md:hidden" onClick={() => { 
                        setShowMobileNav(false)
                        setExpandMobileNav(true)
                    }} size={26}/>
                ) : (
                    <VscClose className="cursor-pointer rounded border-2 border-indigo-600 sm:inline-block md:hidden" onClick={ () => closeMobileNavigation() } size={27} color="4F46E5"/>
                )}
                { showMobileNav ? <NavigationLinks className='hidden space-x-4 sm:hidden md:inline-flex'/>
                        : <NavigationLinks className='hidden space-x-4 md:inline-flex' />
                }
            </div>

            { expandMobileNav &&
                <NavigationLinks className="flex flex-col min-h-full m-5 md:hidden" isMobile={expandMobileNav} onClick={closeMobileNavigation}/>
            }
        </nav>
    )
}