"use client";

import Link from "next/link";
import { use } from "react";
import { requests } from "../../../../../../data/requests";

export default function HelpStep2({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const request = requests.find((r) => r.id === id);

    if (!request) return null;

    return (
        <div className="bg-background-light min-h-screen flex flex-col font-display antialiased transition-colors duration-200">
            <div className="fixed inset-0 pointer-events-none ambient-bg z-0"></div>
            <div className="relative z-10 flex flex-col min-h-screen">
                <header className="w-full px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
                    <Link href="/home" className="flex items-center gap-2 text-text-main">
                        <div className="size-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-[20px]">
                                pets
                            </span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">PawHelp</span>
                    </Link>
                    <div className="hidden sm:flex items-center gap-2">
                        <span className="text-sm font-medium text-text-secondary">
                            Стъпка 2 от 3
                        </span>
                        <div className="flex gap-1">
                            <div className="h-1.5 w-8 rounded-full bg-primary/30"></div>
                            <div className="h-1.5 w-8 rounded-full bg-primary"></div>
                            <div className="h-1.5 w-8 rounded-full bg-primary/30"></div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:px-6">
                    <div className="w-full max-w-lg">
                        <div className="bg-card-light rounded-2xl shadow-soft border border-gray-100 overflow-hidden relative p-8">
                            <h1 className="text-3xl font-black text-text-main mb-2 tracking-tight">
                                Потвърдете времето
                            </h1>
                            <p className="text-text-secondary text-base mb-6">
                                Моля, потвърдете, че сте свободни в посоченото време.
                            </p>

                            <div className="bg-background-light p-5 rounded-2xl border border-gray-200 mb-6 flex items-center gap-4">
                                <div className="size-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                                    <span className="material-symbols-outlined text-[24px]">schedule</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-text-main text-lg">{request.date}</h3>
                                    <p className="text-text-secondary font-medium">{request.time}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl border border-primary/20">
                                    <div className="flex items-center justify-center size-6 rounded bg-primary text-[#121715]">
                                        <span className="material-symbols-outlined text-[18px] font-bold">check</span>
                                    </div>
                                    <span className="text-text-main font-bold text-sm">
                                        Да, свободен съм по това време
                                    </span>
                                </div>

                                <Link
                                    href={`/requests/detail/${id}/help/step-3`}
                                    className="w-full bg-primary hover:bg-primary-hover active:scale-[0.98] transition-all duration-200 text-[#121715] font-bold text-xl rounded-xl py-4 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-4"
                                >
                                    <span>Продължи</span>
                                    <span className="material-symbols-outlined text-[24px]">
                                        arrow_forward
                                    </span>
                                </Link>

                                <Link
                                    href={`/requests/detail/${id}/help/step-1`}
                                    className="flex justify-center text-sm font-semibold text-text-secondary hover:text-text-main transition-colors mt-4"
                                >
                                    Назад
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
