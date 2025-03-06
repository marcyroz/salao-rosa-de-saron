"use client";

import { X } from "lucide-react";
import Image from 'next/image';
import logo from "../../../../public/logo.svg";

interface AsideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const AsideMenu: React.FC<AsideMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div className='lg:hidden absolute z-50'>
            {/* Overlay escuro no fundo */}
            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={onClose}
            ></div>

            {/* Menu lateral */}
            <aside
                className={`fixed top-0 right-0 h-screen w-64 bg-[#F1F1F1] shadow-lg p-6 flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Botão de fechar */}
                <button className="mb-6 self-start cursor-pointer" onClick={onClose}>
                    <X size={28} className='text-gray-500' />
                </button>

                {/* Links do menu */}
                <nav className="flex flex-col space-y-4 text-lg text-[#B97271] font-bold">
                    <a href="#" onClick={onClose}>HOME</a>
                    <a href="#" onClick={onClose}>SOBRE NÓS</a>
                    <a href="#" onClick={onClose}>BENEFÍCIOS</a>
                    <a href="#" onClick={onClose}>SERVIÇOS</a>
                    <a href="#" onClick={onClose}>FAQ</a>
                </nav>
            </aside>
        </div>
    );
};

export default AsideMenu;
