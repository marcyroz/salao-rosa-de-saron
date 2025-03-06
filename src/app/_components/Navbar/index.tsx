"use client";

import { useState } from "react";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import AsideMenu from '../AsideMenu';
import logo from "../../../../public/logo.svg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-[#B97271] text-white relative overflow-hidden">
            <div className="container flex mx-auto items-center justify-between gap-10 w-full h-32 px-4">
                <Image src={logo} width={130} alt="logo rosa de saron" />

                {/* Menu Desktop */}
                <nav className="hidden space-x-20 text-xl lg:flex">
                    <a>HOME</a>
                    <a>SOBRE NÓS</a>
                    <a>BENEFÍCIOS</a>
                    <a>SERVIÇOS</a>
                    <a>FAQ</a>
                </nav>

                {/* Botão do menu mobile */}
                <div className="lg:hidden">
                    <button className="cursor-pointer" onClick={() => setIsMenuOpen(true)}>
                        <AlignJustify size={32} />
                    </button>
                </div>
            </div>

            {/* Menu lateral (AsideMenu) */}
            <AsideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
    );
};

export default Navbar;
