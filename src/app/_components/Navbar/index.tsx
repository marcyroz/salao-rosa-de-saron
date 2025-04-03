"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import AsideMenu from '../AsideMenu';
import logo from "../../../../public/logos/logo.svg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);


    const handleScroll = () => {
        if (window.scrollY > 140) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className={`bg-[#B97271] text-white overflow-hidden sticky top-0 z-50 transition-all duration-300 ${scrolling ? "opacity-60" : "opacity-100"
                    }`}
            >
                <div className="container flex mx-auto items-center justify-between gap-10 w-full h-32 px-4">
                    <Image src={logo} width={130} alt="logo rosa de saron" />

                    <nav className="hidden space-x-20 text-xl lg:flex">
                        <a href='#hero'>HOME</a>
                        <a href='#about'>SOBRE NÓS</a>
                        <a href='#benefits'>BENEFÍCIOS</a>
                        <a href='#services'>SERVIÇOS</a>
                        <a href='#faq'>FAQ</a>
                    </nav>

                    <div className="lg:hidden">
                        <button
                            className="cursor-pointer"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <AlignJustify size={32} />
                        </button>
                    </div>
                </div>
            </div>

            <AsideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Navbar;
