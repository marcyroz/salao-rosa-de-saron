"use client";

import { X } from "lucide-react";

interface AsideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const AsideMenu: React.FC<AsideMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div className='lg:hidden absolute z-50'>

            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={onClose}
            ></div>

            <aside
                className={`fixed top-0 right-0 h-screen w-64 bg-[#F1F1F1] shadow-lg p-6 flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <button className="mb-6 self-start cursor-pointer" onClick={onClose}>
                    <X size={28} className='text-gray-500' />
                </button>

                <nav className="flex flex-col space-y-4 text-lg text-[#B97271] font-bold">
                    <a href='#hero' onClick={onClose}>HOME</a>
                    <a href="#about" onClick={onClose}>SOBRE NÓS</a>
                    <a href="#benefits" onClick={onClose}>BENEFÍCIOS</a>
                    <a href="#services" onClick={onClose}>SERVIÇOS</a>
                    <a href="#faq" onClick={onClose}>FAQ</a>
                </nav>
            </aside>
        </div>
    );
};

export default AsideMenu;
