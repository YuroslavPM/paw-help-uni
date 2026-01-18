"use client";

import Link from "next/link";
import { useState } from "react";
import { requests } from "../../data/requests";

export default function MapPage() {
    const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);

    const selectedRequest = requests.find((r) => r.id === selectedRequestId);

    return (
        <div className="bg-background-light min-h-screen flex flex-col font-display antialiased overflow-hidden">
            <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#f1f4f3] transition-colors duration-200">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4">
                    <div className="flex items-center justify-between gap-4">
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
                        <div className="hidden md:flex items-center gap-8">
                            <nav className="flex items-center gap-8">
                                <Link
                                    className="text-[#67837a] text-base font-semibold hover:text-primary transition-colors flex items-center gap-2"
                                    href="/home"
                                >
                                    <span className="material-symbols-outlined text-[24px]">
                                        home
                                    </span>
                                    Начало
                                </Link>
                                <Link
                                    className="text-[#121715] text-base font-bold hover:text-primary transition-colors flex items-center gap-2"
                                    href="/map"
                                >
                                    <span className="material-symbols-outlined text-[24px]">
                                        map
                                    </span>
                                    Карта
                                </Link>
                                <Link
                                    className="text-[#67837a] text-base font-semibold hover:text-primary transition-colors flex items-center gap-2"
                                    href="/messages"
                                >
                                    <span className="material-symbols-outlined text-[24px]">
                                        chat_bubble
                                    </span>
                                    Съобщения
                                </Link>
                            </nav>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/profile">
                                <div
                                    className="bg-center bg-no-repeat bg-cover rounded-full size-12 border-2 border-white shadow-sm cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                                    data-alt="User profile picture of Sarah"
                                    style={{
                                        backgroundImage:
                                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5LUmpsVAtTRc0N7vVRID5ZPdrw4lmhzLX2T3lnv3CrVJkjn3uOVWGD_kBadIjeLQGMUPMuo1N1o2khzrsPzDXNLqUGV05LXBX4VHDaTc8vfqS30JVvVisyZTUDO55NySzya0IwqGREKNILX-ihrwHyi-3w5LKOKcm64sgHUNCb-UlmARoa14kap52lq_rJ9Avf6ImHJQE2wtbZuvS-_T7hDDSXin2WeTVWq2EtlVC4Vet7bytxlvyexPTxRzkbDBD9TtjyMtVra8")',
                                    }}
                                ></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 relative w-full h-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJ6p3sI4qL7F_j-xXkZlBw69q0l1T3k-8I8x4J9sS9rN1X7p2L4M8y5Q_O6E4V7R3K9H2Z1W0T5Y6U8i3o9A4S2D1F7G0H5J6K8L9M3N2P1Q4R5S6T7U8V9W0X1Y2Z3a4B5C6D7E8F9G0H1I2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5A6B7C8D9E0F1G2H3I4J5K6L7M8N9O0P1Q2R3S4T5U6V7W8X9Y0Z')`, // Placeholder map image
                        backgroundSize: 'cover',
                        filter: 'contrast(0.9) brightness(1.05)'
                    }}
                >
                    {/* Placeholder content since we don't have a real map tile server */}
                    <div className="absolute inset-0 bg-[#e5e3df] opacity-100">
                        {/* Simulate map tiles/features visually with CSS if needed, but image is better. Using a more generic map-like background color/pattern if image fails */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#a3c2c2 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        {/* Streets simulation (very abstract) */}
                        <div className="absolute top-[30%] left-0 w-full h-4 bg-white/70 transform -rotate-2"></div>
                        <div className="absolute top-0 left-[40%] w-4 h-full bg-white/70 transform rotate-12"></div>
                        <div className="absolute top-[60%] left-0 w-full h-6 bg-white/70 transform rotate-1"></div>
                        <div className="absolute top-0 left-[20%] w-3 h-full bg-white/70 transform -rotate-6"></div>
                    </div>

                    {/* Pins */}
                    {requests.map((request) => (
                        <button
                            key={request.id}
                            className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 ${selectedRequestId === request.id ? 'z-30 scale-110' : 'z-10 hover:z-20 hover:scale-105'}`}
                            style={{ top: request.mapPosition.top, left: request.mapPosition.left }}
                            onClick={() => setSelectedRequestId(request.id)}
                        >
                            <div className={`relative flex flex-col items-center`}>
                                <div className={`size-12 rounded-full shadow-lg border-2 border-white flex items-center justify-center transition-colors ${selectedRequestId === request.id ? 'bg-primary text-text-main' : 'bg-white text-primary'}`}>
                                    <span className="material-symbols-outlined text-2xl">
                                        {request.categoryIcon}
                                    </span>
                                </div>
                                <div className={`absolute -bottom-2 size-3 bg-white transform rotate-45 border-r border-b border-gray-100 ${selectedRequestId === request.id ? 'bg-primary' : 'bg-white'}`}></div>
                                <div className="absolute top-full mt-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm text-xs font-bold text-text-main opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {request.postedBy.name}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Selected Request Card */}
                {selectedRequest && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-sm px-4 z-40 animate-slide-up">
                        <div className="bg-white rounded-3xl p-5 shadow-2xl border border-gray-100">
                            <div className="absolute -top-3 right-5">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedRequestId(null); }}
                                    className="size-8 rounded-full bg-gray-100 flex items-center justify-center text-text-muted hover:bg-gray-200 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-lg">close</span>
                                </button>
                            </div>
                            <div className="flex gap-4 mb-4">
                                <div
                                    className="size-16 rounded-2xl bg-cover bg-center shrink-0 border border-gray-100"
                                    style={{ backgroundImage: `url('${selectedRequest.image}')` }}
                                ></div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-text-main leading-tight mb-1 truncate">
                                        {selectedRequest.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-text-muted">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                                            <span className="truncate">{selectedRequest.distance}</span>
                                        </div>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
                                            <span className="truncate">{selectedRequest.time}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Link href={`/requests/detail/${selectedRequest.id}`} className="flex-1 bg-[#121715] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-colors">
                                    Виж детайли
                                </Link>
                                {selectedRequest.urgency === "Urgent" && (
                                    <div className="px-3 py-3 rounded-xl bg-red-50 text-red-500 font-bold flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[20px]">priority_high</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <style jsx>{`
                @keyframes slide-up {
                    from { transform: translate(-50%, 100%); opacity: 0; }
                    to { transform: translate(-50%, 0); opacity: 1; }
                }
                .animate-slide-up { animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
            `}</style>
        </div>
    );
}
