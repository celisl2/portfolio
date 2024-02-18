"use client";

import Link from 'next/link';
import { VscMenu, VscClose } from "react-icons/vsc";
import { useState } from "react";


function getMobileNav(isEnabled:Boolean) {
    if(isEnabled){

    }
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

                {   showMobileNav ? 
                    <VscMenu className="cursor-pointer sm:inline-block md:hidden" onClick={() => { 
                        setShowMobileNav(false)
                        setExpandMobileNav(true)
                    }} size={26}/> : 
                    <VscClose className="cursor-pointer rounded border-2 border-indigo-600 sm:inline-block md:hidden" onClick={ () => {
                        setShowMobileNav(true)
                        setExpandMobileNav(false)
                    }} size={27} color="4F46E5"/>
                }

                {showMobileNav && expandMobileNav == false ? 
                <ul className="hidden space-x-4 sm:hidden md:inline-flex">
                    <li className="hover:border-b-2 border-indigo-600"><Link href="/">Work</Link></li>
                    <li className="hover:border-b-2 border-indigo-600"><Link href="/about">About</Link></li>
                    <li className="hover:border-b-2 border-indigo-600"><Link href="/">Contact</Link></li>
                </ul> : 
                <ul className="hidden space-x-4 md:inline-flex">
                    <li className="hover:border-b-2 border-indigo-600"><Link href="/">Work</Link></li>
                    <li className="hover:border-b-2 border-indigo-600"><Link href="/about">About</Link></li>
                    <li className="hover:border-b-2 border-indigo-600"><Link href="/">Contact</Link></li>
                </ul>}
            </div>
            {expandMobileNav &&
                <div className="flex justify-left items-center h-screen">
                    <ul className="flex flex-col min-h-full m-5  md:hidden">
                        <li className="hover:border-b-2 border-indigo-600 flex my-8 pl-7" onClick={() => closeMobileNavigation()}><Link className="text-xl text-center" href="/">Work</Link></li>
                        <li className="flex my-8 pl-7" onClick={() => closeMobileNavigation()}><Link className="text-xl" href="/about">About</Link></li>
                        <li className="flex my-8 pl-7" onClick={() => closeMobileNavigation()}><Link className="text-xl text-center" href="/">Contact</Link></li>
                    </ul>
                </div>
            }
        </nav>
    )
}