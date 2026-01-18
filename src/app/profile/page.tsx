"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../../components/Header";

export default function ProfilePage() {
    return (
        <div className="bg-background-light min-h-screen flex flex-col font-display text-text-main antialiased overflow-x-hidden">
            <Header />
            <main className="flex-grow max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-text-main">Моят профил</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <aside className="lg:col-span-4 flex flex-col gap-8">
                        <div className="bg-surface rounded-3xl p-8 shadow-soft text-center relative overflow-hidden group border border-gray-100">
                            <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-36 h-36 rounded-full p-1.5 bg-gradient-to-tr from-primary to-blue-200 mb-5 shadow-md">
                                    <div className="w-full h-full rounded-full bg-cover bg-center border-4 border-white" data-alt="Close up portrait of Sarah, a middle-aged woman with glasses smiling warmly" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBorkrQCBLX8AT1K6kB0F5D-f3PyHvyQXpiVygG2ApQPifGYgLll_0TmiUEFhNTtpufk-MshwwG_2BRtqTdoxyVQStMraZuO60XSoMXNR2wV_uOmLuSbH2qTGbYtxee20k-K2tm_JRCoITPvqD61HvU1DpsxqGwKlX76sSZ9DJQzt5r8vXL0F70gNetI49GKfavMfdeR4XjR2uyJd3cmTU4yPVQly9IfRKcQAYRysAe9m5ARKZGVvQaybNkdSQx5dRdVk1ffI0LVOk")' }}></div>
                                </div>
                                <h2 className="text-2xl font-bold text-text-main mb-2">Сара Дженкинс</h2>
                                <p className="text-text-muted text-base font-medium flex items-center gap-2 mb-6 bg-gray-50 px-3 py-1 rounded-full w-fit mx-auto">
                                    <span className="material-symbols-outlined text-primary-dark text-[20px]">verified</span>
                                    Член от 2021
                                </p>
                                <div className="bg-background-light rounded-2xl p-5 mb-8 w-full text-left">
                                    <p className="text-text-main text-base leading-relaxed relative">
                                        <span className="text-3xl text-primary font-serif leading-none mr-1 absolute -top-2 -left-1">"</span>
                                        <span className="pl-3 block">
                                            Обичам животните. Аз съм пенсиониран учител и искам да помагам на съседите си с разходки на кучета и посещения при ветеринар.
                                        </span>
                                    </p>
                                </div>
                                <div className="flex w-full gap-4">
                                    <button className="flex-1 h-14 rounded-2xl bg-[#f1f4f3] text-text-main font-bold text-base hover:bg-gray-200 transition-colors border border-transparent hover:border-gray-300">
                                        Редактирай
                                    </button>
                                    <button className="flex-[2] h-14 rounded-2xl bg-primary text-text-main font-bold text-base shadow-lg shadow-primary/20 hover:bg-[#74dcb7] transition-all flex items-center justify-center gap-2 hover:scale-[1.02]">
                                        <span className="material-symbols-outlined text-[22px]">share</span>
                                        Сподели
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface rounded-3xl p-8 shadow-soft border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-text-main">Значки</h3>
                                <Link className="text-sm font-bold text-text-muted hover:text-primary-dark uppercase tracking-wider p-2 hover:bg-gray-50 rounded-lg transition-colors" href="#">Виж всички</Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#fff8e1] border-2 border-[#fdf0c5] hover:border-orange-300 transition-colors cursor-pointer text-center gap-3 group">
                                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-orange-400 text-3xl">trophy</span>
                                    </div>
                                    <div>
                                        <p className="text-base font-bold text-gray-800">Топ помощник</p>
                                        <p className="text-sm text-gray-600 font-medium">50+ задачи</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#e3f2fd] border-2 border-[#bbdefb] hover:border-blue-300 transition-colors cursor-pointer text-center gap-3 group">
                                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-blue-400 text-3xl">history_edu</span>
                                    </div>
                                    <div>
                                        <p className="text-base font-bold text-gray-800">Ранобудник</p>
                                        <p className="text-sm text-gray-600 font-medium">От '21</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#e8f5e9] border-2 border-[#c8e6c9] hover:border-green-300 transition-colors cursor-pointer text-center gap-3 sm:col-span-2 sm:flex-row sm:!justify-start sm:!text-left group">
                                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                                        <span className="material-symbols-outlined text-green-500 text-3xl">volunteer_activism</span>
                                    </div>
                                    <div>
                                        <p className="text-base font-bold text-gray-800">Звезда на общността</p>
                                        <p className="text-sm text-gray-600 font-medium">Гласувана за "Най-надеждна" от 15 съседи</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <section className="lg:col-span-8 flex flex-col gap-8">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            <div className="bg-surface p-6 rounded-3xl shadow-soft border-2 border-transparent hover:border-primary/30 transition-all flex items-center gap-5 cursor-default">
                                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-dark">
                                    <span className="material-symbols-outlined text-3xl">pets</span>
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold text-text-main">12</p>
                                    <p className="text-base font-medium text-text-muted">Помогнати любимци</p>
                                </div>
                            </div>
                            <div className="bg-surface p-6 rounded-3xl shadow-soft border-2 border-transparent hover:border-orange-200 transition-all flex items-center gap-5 cursor-default">
                                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500">
                                    <span className="material-symbols-outlined text-3xl">schedule</span>
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold text-text-main">40ч</p>
                                    <p className="text-base font-medium text-text-muted">Доброволчество</p>
                                </div>
                            </div>
                            <div className="bg-surface p-6 rounded-3xl shadow-soft border-2 border-transparent hover:border-purple-200 transition-all flex items-center gap-5 cursor-default">
                                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-500">
                                    <span className="material-symbols-outlined text-3xl">star</span>
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold text-text-main">5.0</p>
                                    <p className="text-base font-medium text-text-muted">Рейтинг</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/50 rounded-3xl p-2 md:p-6">
                            <div className="flex items-center justify-between mb-8 px-2">
                                <h2 className="text-2xl font-bold text-text-main flex items-center gap-3">
                                    Моите добрини
                                    <span className="bg-primary/20 text-primary-dark text-xs font-bold px-3 py-1.5 rounded-full align-middle uppercase tracking-wide">Потвърден</span>
                                </h2>
                                <div className="flex gap-3">
                                    <button aria-label="Filter" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-50 text-text-muted transition-transform hover:scale-105">
                                        <span className="material-symbols-outlined text-xl">filter_list</span>
                                    </button>
                                    <button aria-label="Sort" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-50 text-text-muted transition-transform hover:scale-105">
                                        <span className="material-symbols-outlined text-xl">sort</span>
                                    </button>
                                </div>
                            </div>
                            <div className="relative pl-4 space-y-8">
                                <div className="absolute left-4 top-6 bottom-6 w-[3px] bg-gray-200 rounded-full"></div>

                                {/* Item 1 */}
                                <div className="relative pl-10 card-hover">
                                    <div className="absolute left-[8.5px] top-8 w-5 h-5 rounded-full border-4 border-white bg-primary shadow-sm z-10"></div>
                                    <div className="bg-surface rounded-3xl p-6 shadow-soft border border-gray-100 flex flex-col md:flex-row gap-6">
                                        <div className="w-full md:w-36 h-36 shrink-0 rounded-2xl bg-gray-100 overflow-hidden relative group cursor-pointer shadow-inner">
                                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Golden Retriever dog smiling in a park" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhonDQTD_jF7lLWk4lFJVVDAn5EfwQoisnpvaToeCECDChvfQn_r4Sre7lw6XFV_DgyzvHkgyPtCiAdQ8ZOPjpLYACaxrUAleDD-Cnzuc8D7zKc2g0DKoaXS4_01k9d_UH7HuStH4tjjWprPr0uiIr59zJOkMpGu1JfQ-c0w_QRlLSUADBYJTXxiDPt_V6ZNpDgRSHZb6m8cRebA3-maE8YUauS3KDPvv5ozusxbzSu696P7_urfnoDaYYJW_iPFnlyOg5BqdGCqM")' }}></div>
                                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-text-main shadow-sm">
                                                Макс
                                            </div>
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-xl font-bold text-text-main">Разходка на куче (Макс)</h3>
                                                    <span className="text-sm font-bold text-text-muted bg-background-light px-3 py-1.5 rounded-xl">12 Окт</span>
                                                </div>
                                                <p className="text-base text-text-muted mb-4 flex items-center gap-1.5">
                                                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                                                    Централен парк
                                                </p>
                                            </div>
                                            <div className="bg-warm-beige p-4 rounded-2xl border border-orange-100/50 relative">
                                                <span className="absolute -top-3 left-4 text-orange-200 material-symbols-outlined text-3xl bg-surface rounded-full px-1">format_quote</span>
                                                <p className="text-base text-gray-700 italic pt-1 pl-2 font-medium">
                                                    "Сара беше чудесна с Макс! Той се върна толкова щастлив и изморен. Силно я препоръчвам."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="relative pl-10 card-hover">
                                    <div className="absolute left-[8.5px] top-8 w-5 h-5 rounded-full border-4 border-white bg-blue-400 shadow-sm z-10"></div>
                                    <div className="bg-surface rounded-3xl p-6 shadow-soft border border-gray-100 flex flex-col md:flex-row gap-6">
                                        <div className="w-full md:w-36 h-36 shrink-0 rounded-2xl bg-gray-100 overflow-hidden relative group cursor-pointer shadow-inner">
                                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Black cat looking out from a comfortable carrier" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApSP7C8hddn9TXOEHWRiamSAX4QVZspm2XGNs0sMnSRZZUfreDRVkSgMUSrq8xs5pOk7ggC7Quez__c-ldb2AAB6GRIWNXapWAyPO9DSu8T2XV8lUK_PRuIVBi2-gSHNAl8EEetbwcPy-cZHXAUZ0L6iy0nunNaUKzJ7OWUwxTzWX_BZAQSXX49uXSy_4giOOj3l07CqMvieIOAKpmg4XIP5omkqQoQpDASF-5zdKFEea7VtQGswejXoLEEnaClMx4wQnY_GRvOHI")' }}></div>
                                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-text-main shadow-sm">
                                                Луна
                                            </div>
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-xl font-bold text-text-main">Транспорт до ветеринар (Луна)</h3>
                                                    <span className="text-sm font-bold text-text-muted bg-background-light px-3 py-1.5 rounded-xl">28 Сеп</span>
                                                </div>
                                                <p className="text-base text-text-muted mb-4 flex items-center gap-1.5">
                                                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                                                    Клиника "Щастливи лапи"
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3 mt-2">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100">
                                                    <span className="material-symbols-outlined text-[16px]">directions_car</span>
                                                    Транспорт
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-green-50 text-green-700 text-sm font-bold border border-green-100">
                                                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                                                    Завършено
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div className="relative pl-10 card-hover">
                                    <div className="absolute left-[8.5px] top-8 w-5 h-5 rounded-full border-4 border-white bg-orange-400 shadow-sm z-10"></div>
                                    <div className="bg-surface rounded-3xl p-6 shadow-soft border border-gray-100 flex flex-col md:flex-row gap-6">
                                        <div className="w-full md:w-36 h-36 shrink-0 rounded-2xl bg-gray-100 overflow-hidden relative group cursor-pointer shadow-inner">
                                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Two puppies playing in a garden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAErMcwyoEiuZrzJqVGTSwYPAvyLUVziyrZkyQ7fiFVfHT3AFT6FMv7yuwk8PM4lDwzpsAwyYgEakcsdU_Ei2vz21TcUHsaha5rKAeD_E04SKSpleqLCPwCXWag9p1hgv1KKgmg7JVYA5zMjC3NajI5ZTrBqRcotIcqDVdXnj51O04XlGrgcraxetNaqyNojLkree1KrdMD2q309O6nnbr1_kxhrxDGJn4fqT5pu6_4notBA4-rldF_R5c5eFxWbFBlRL7akO6Cvp8")' }}></div>
                                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-text-main shadow-sm">
                                                Коко &amp; Бийн
                                            </div>
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-xl font-bold text-text-main">Гледане на животни (уикенд)</h3>
                                                    <span className="text-sm font-bold text-text-muted bg-background-light px-3 py-1.5 rounded-xl">15 Авг</span>
                                                </div>
                                                <p className="text-base text-text-muted mb-4 flex items-center gap-1.5">
                                                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                                                    Квартал Север
                                                </p>
                                            </div>
                                            <div className="bg-warm-beige p-4 rounded-2xl border border-orange-100/50 relative">
                                                <span className="absolute -top-3 left-4 text-orange-200 material-symbols-outlined text-3xl bg-surface rounded-full px-1">format_quote</span>
                                                <p className="text-base text-gray-700 italic pt-1 pl-2 font-medium">
                                                    "Спасител! За кученцата бяха полагани толкова добри грижи."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 text-center">
                                <button className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-text-muted hover:text-text-main bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    Зареди по-стари заявки
                                    <span className="material-symbols-outlined">expand_more</span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
