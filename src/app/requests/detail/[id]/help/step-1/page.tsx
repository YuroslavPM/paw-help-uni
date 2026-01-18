"use client";

import Link from "next/link";
import { use } from "react";
import { requests } from "../../../../../../data/requests";

export default function HelpStep1({
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
                            Стъпка 1 от 3
                        </span>
                        <div className="flex gap-1">
                            <div className="h-1.5 w-8 rounded-full bg-primary"></div>
                            <div className="h-1.5 w-8 rounded-full bg-primary/30"></div>
                            <div className="h-1.5 w-8 rounded-full bg-primary/30"></div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:px-6">
                    <div className="w-full max-w-lg">
                        <div className="bg-card-light rounded-2xl shadow-soft border border-gray-100 overflow-hidden relative p-8">
                            <h1 className="text-3xl font-black text-text-main mb-2 tracking-tight">
                                Представете се
                            </h1>
                            <p className="text-text-secondary text-base mb-6">
                                Напишете кратко съобщение на {request.postedBy.name.split(" ")[0]}, за да знае кой сте.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-text-main mb-2">
                                        Вашето съобщение
                                    </label>
                                    <textarea
                                        className="w-full p-4 rounded-xl bg-background-light border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all min-h-[120px] resize-none text-base text-text-main placeholder-text-muted"
                                        placeholder={`Здравей, аз съм [Име]. Бих искал да помогна с ${request.title.toLowerCase()}...`}
                                    ></textarea>
                                </div>

                                <Link
                                    href={`/requests/detail/${id}/help/step-2`}
                                    className="w-full bg-primary hover:bg-primary-hover active:scale-[0.98] transition-all duration-200 text-[#121715] font-bold text-xl rounded-xl py-4 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-4"
                                >
                                    <span>Продължи</span>
                                    <span className="material-symbols-outlined text-[24px]">
                                        arrow_forward
                                    </span>
                                </Link>

                                <Link
                                    href={`/requests/detail/${id}`}
                                    className="flex justify-center text-sm font-semibold text-text-secondary hover:text-text-main transition-colors mt-4"
                                >
                                    Отказ
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
