"use client";

import Link from "next/link";
import { requests } from "../../data/requests";
import Header from "../../components/Header";

export default function HomePage() {
    return (
        <>
            <Header />
            <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-8 py-8 pb-24">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#e0f7ef] via-[#f1f9f6] to-white p-10 mb-10 shadow-sm">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="flex flex-col gap-3 max-w-2xl">
                            <h1 className="text-[#121715] text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                                Добро утро, Сара!{" "}
                                <span className="inline-block animate-bounce">👋</span>
                            </h1>
                            <p className="text-[#5c7a70] text-xl font-medium">
                                Има{" "}
                                <span className="text-[#121715] font-bold">5 съседи</span>{" "}
                                наблизо, които се нуждаят от помощ.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm">
                            <div className="bg-[#F78269]/20 p-3 rounded-xl text-[#F78269]">
                                <span className="material-symbols-outlined text-[28px]">
                                    notifications_active
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-[#F78269] uppercase tracking-wider">
                                    Спешно
                                </span>
                                <span className="text-base font-semibold">
                                    2 молби изтичат скоро
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                        <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#121715] pl-6 pr-6 shadow-md transition-transform active:scale-95 cursor-pointer">
                            <p className="text-white text-base font-bold">Всички</p>
                        </button>
                        <button className="group flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white border border-gray-100 pl-5 pr-5 hover:border-primary/50 transition-all active:scale-95 shadow-sm hover:shadow cursor-pointer">
                            <span className="material-symbols-outlined text-[20px] text-gray-500 group-hover:text-primary">
                                shopping_cart
                            </span>
                            <p className="text-[#121715] text-base font-medium">Пазаруване</p>
                        </button>
                        <button className="group flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white border border-gray-100 pl-5 pr-5 hover:border-primary/50 transition-all active:scale-95 shadow-sm hover:shadow cursor-pointer">
                            <span className="material-symbols-outlined text-[20px] text-gray-500 group-hover:text-primary">
                                pets
                            </span>
                            <p className="text-[#121715] text-base font-medium">
                                Разходка на куче
                            </p>
                        </button>
                        <button className="group flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white border border-gray-100 pl-5 pr-5 hover:border-primary/50 transition-all active:scale-95 shadow-sm hover:shadow cursor-pointer">
                            <span className="material-symbols-outlined text-[20px] text-gray-500 group-hover:text-primary">
                                yard
                            </span>
                            <p className="text-[#121715] text-base font-medium">
                                Помощ в градината
                            </p>
                        </button>
                        <button className="group flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white border border-gray-100 pl-5 pr-5 hover:border-primary/50 transition-all active:scale-95 shadow-sm hover:shadow cursor-pointer">
                            <span className="material-symbols-outlined text-[20px] text-gray-500 group-hover:text-primary">
                                directions_car
                            </span>
                            <p className="text-[#121715] text-base font-medium">Транспорт</p>
                        </button>
                        <div className="w-px bg-gray-200 mx-2 h-12 shrink-0"></div>
                        <button className="group flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-transparent pl-3 pr-3 hover:bg-gray-100 transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-[20px] text-gray-500">
                                near_me
                            </span>
                            <p className="text-gray-600 text-base font-medium">Най-близки</p>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {requests.map((request) => (
                        <div
                            key={request.id}
                            className={`group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1 ${request.urgency === "Urgent" ? "ring-2 ring-[#F78269]/20" : ""
                                }`}
                        >
                            <div
                                className="h-56 w-full bg-cover bg-center relative"
                                data-alt={request.title}
                                style={{
                                    backgroundImage: `url("${request.image}")`,
                                }}
                            >
                                {request.urgency === "Urgent" && (
                                    <div className="absolute top-4 right-4 bg-[#F78269] text-white rounded-full px-4 py-1.5 text-sm font-bold flex items-center gap-1.5 shadow-md animate-pulse">
                                        <span className="material-symbols-outlined text-[18px]">
                                            bolt
                                        </span>
                                        Спешно
                                    </div>
                                )}
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-bold text-[#121715] flex items-center gap-1.5 shadow-sm">
                                    <span className="material-symbols-outlined text-[18px] text-primary">
                                        {request.categoryIcon}
                                    </span>
                                    {request.category}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex flex-col gap-2 mb-3">
                                    <h3 className="text-xl font-bold text-[#121715] leading-tight group-hover:text-primary transition-colors">
                                        {request.cardTitle || request.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-[#0c4a63]">
                                        <span className="material-symbols-outlined text-[20px]">
                                            location_on
                                        </span>
                                        <span className="text-base font-bold">
                                            На разстояние: {request.distance}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-[#67837a] text-base leading-relaxed mb-6 line-clamp-2">
                                    {request.description}
                                </p>
                                <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="size-8 rounded-full bg-gray-200 bg-cover"
                                            data-alt="User avatar"
                                            style={{
                                                backgroundImage: `url("${request.postedBy.avatar}")`,
                                            }}
                                        ></div>
                                        <span className="text-sm font-semibold text-gray-600">
                                            Публикувано от {request.postedBy.name}
                                        </span>
                                    </div>
                                    <Link
                                        href={`/requests/detail/${request.id}`}
                                        className="text-base font-bold text-primary hover:text-primary-hover hover:underline decoration-2 underline-offset-4 cursor-pointer"
                                    >
                                        Виж детайли
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <div className="fixed bottom-8 right-8 z-40">
                <button className="flex items-center justify-center size-16 rounded-full bg-[#121715] hover:bg-black text-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <span className="material-symbols-outlined text-[36px]">add</span>
                </button>
            </div>
        </>
    );
}
