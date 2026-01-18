"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path: string) => pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#f1f4f3] transition-colors duration-200">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/home" className="flex items-center gap-3">
                        <div className="size-10 text-primary flex items-center justify-center bg-primary/20 rounded-full p-2">
                            <span className="material-symbols-outlined text-[24px] font-bold">
                                pets
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-[#121715]">
                            PawHelp
                        </h2>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex items-center gap-8">
                            <Link
                                className={`${isActive('/home') ? 'text-[#121715] font-bold' : 'text-[#67837a] font-semibold'} text-base hover:text-primary transition-colors flex items-center gap-2`}
                                href="/home"
                            >
                                <span className="material-symbols-outlined text-[24px]">
                                    home
                                </span>
                                Начало
                            </Link>
                            <Link
                                className={`${isActive('/map') ? 'text-[#121715] font-bold' : 'text-[#67837a] font-semibold'} text-base hover:text-primary transition-colors flex items-center gap-2`}
                                href="/map"
                            >
                                <span className="material-symbols-outlined text-[24px]">
                                    map
                                </span>
                                Карта
                            </Link>
                            <Link
                                className={`${isActive('/messages') ? 'text-[#121715] font-bold' : 'text-[#67837a] font-semibold'} text-base hover:text-primary transition-colors flex items-center gap-2`}
                                href="/messages"
                            >
                                <span className="material-symbols-outlined text-[24px]">
                                    chat_bubble
                                </span>
                                Съобщения
                            </Link>
                        </nav>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        {/* Add Button - Hidden on mobile in original, but now accessible via menu or we can keep it here if space permits.
                            Let's keep it hidden on small screens to match desktop layout preference, and put it in mobile menu.
                        */}
                        <button className="hidden sm:flex items-center justify-center rounded-xl h-12 px-6 bg-primary hover:bg-primary-hover text-[#121715] text-base font-bold tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer">
                            <span className="material-symbols-outlined text-[22px] mr-2">
                                add
                            </span>
                            Добави
                        </button>

                        <Link href="/profile" className="hidden sm:block">
                            <div
                                className="bg-center bg-no-repeat bg-cover rounded-full size-12 border-2 border-white shadow-sm cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                                data-alt="User profile picture of Sarah"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5LUmpsVAtTRc0N7vVRID5ZPdrw4lmhzLX2T3lnv3CrVJkjn3uOVWGD_kBadIjeLQGMUPMuo1N1o2khzrsPzDXNLqUGV05LXBX4VHDaTc8vfqS30JVvVisyZTUDO55NySzya0IwqGREKNILX-ihrwHyi-3w5LKOKcm64sgHUNCb-UlmARoa14kap52lq_rJ9Avf6ImHJQE2wtbZuvS-_T7hDDSXin2WeTVWq2EtlVC4Vet7bytxlvyexPTxRzkbDBD9TtjyMtVra8")',
                                }}
                            ></div>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-[#121715] hover:bg-gray-100 rounded-full transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined text-[28px]">
                                {isMobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-[#f1f4f3] shadow-lg animate-in slide-in-from-top-2 duration-200">
                    <nav className="flex flex-col p-4 gap-2">
                        <Link
                            className={`p-4 rounded-xl flex items-center gap-3 ${isActive('/home') ? 'bg-primary/10 text-primary font-bold' : 'text-[#121715] font-semibold hover:bg-gray-50'}`}
                            href="/home"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="material-symbols-outlined text-[24px]">home</span>
                            Начало
                        </Link>
                        <Link
                            className={`p-4 rounded-xl flex items-center gap-3 ${isActive('/map') ? 'bg-primary/10 text-primary font-bold' : 'text-[#121715] font-semibold hover:bg-gray-50'}`}
                            href="/map"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="material-symbols-outlined text-[24px]">map</span>
                            Карта
                        </Link>
                        <Link
                            className={`p-4 rounded-xl flex items-center gap-3 ${isActive('/messages') ? 'bg-primary/10 text-primary font-bold' : 'text-[#121715] font-semibold hover:bg-gray-50'}`}
                            href="/messages"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="material-symbols-outlined text-[24px]">chat_bubble</span>
                            Съобщения
                        </Link>
                        <Link
                            className="p-4 rounded-xl flex items-center gap-3 text-[#121715] font-semibold hover:bg-gray-50"
                            href="/profile"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <div
                                className="bg-center bg-no-repeat bg-cover rounded-full size-6 border border-gray-200"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5LUmpsVAtTRc0N7vVRID5ZPdrw4lmhzLX2T3lnv3CrVJkjn3uOVWGD_kBadIjeLQGMUPMuo1N1o2khzrsPzDXNLqUGV05LXBX4VHDaTc8vfqS30JVvVisyZTUDO55NySzya0IwqGREKNILX-ihrwHyi-3w5LKOKcm64sgHUNCb-UlmARoa14kap52lq_rJ9Avf6ImHJQE2wtbZuvS-_T7hDDSXin2WeTVWq2EtlVC4Vet7bytxlvyexPTxRzkbDBD9TtjyMtVra8")',
                                }}
                            ></div>
                            Профил
                        </Link>
                        <button
                            className="mt-2 w-full flex items-center justify-center rounded-xl h-12 bg-primary text-[#121715] text-base font-bold tracking-wide shadow-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="material-symbols-outlined text-[22px] mr-2">add</span>
                            Добави
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
