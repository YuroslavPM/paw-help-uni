"use client";

import Link from "next/link";
import { useState } from "react";

export default function RequestDetailPage() {
    return (
        <div className="bg-background-light min-h-screen flex flex-col font-display text-text-main text-lg transition-colors duration-200">
            <header className="sticky top-0 z-50 bg-surface-light/90 backdrop-blur-md border-b border-gray-100 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-dark">
                            <span className="material-symbols-outlined filled text-4xl text-[#121715]">
                                pets
                            </span>
                        </div>
                        <h2 className="text-[#121715] text-2xl font-bold tracking-tight">
                            PawHelp
                        </h2>
                    </div>
                    <div className="hidden md:flex flex-1 max-w-lg mx-8">
                        <div className="relative w-full group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-text-muted text-2xl">
                                    search
                                </span>
                            </div>
                            <input
                                className="block w-full pl-12 pr-4 py-3 border-none rounded-xl bg-background-light text-base placeholder-text-muted focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                                placeholder="Търси молби, помощ или доброволци..."
                                type="text"
                            />
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            className="text-base font-bold text-text-main hover:text-primary transition-colors"
                            href="#"
                        >
                            Молби
                        </Link>
                        <Link
                            className="text-base font-bold text-text-muted hover:text-primary transition-colors"
                            href="#"
                        >
                            Доброволци
                        </Link>
                        <Link
                            className="text-base font-bold text-text-muted hover:text-primary transition-colors"
                            href="#"
                        >
                            Общност
                        </Link>
                    </nav>
                    <div className="ml-6 flex items-center gap-4">
                        <div
                            className="size-12 rounded-full bg-cover bg-center ring-2 ring-white shadow-sm"
                            data-alt="User profile picture"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBMRUoa3FQ2MvneJO5R2uUC7Z_1RlfEsHtsI203eZS45u6ta5RiKRW5I8iyjbDzE86-pyEV53sxGHtcSaRdSu9v7EWYSxYCQwxo-z5g-V8rM76BmSSRMAO1dBVaJmuFpBLZOHtFJCBRkLnN6K3bSRTHyuuwnQG0NTK8BczmZmv3mw8BuOnl55BAdVRVST-hqRJi1jXNFbDM1klc3Rfh8qeL47ImAwB6554hNUv4MjBgO_u3uceiQrJP6W1xbLlbItERCaaUrNk9uAk')",
                            }}
                        ></div>
                    </div>
                </div>
            </header>
            <main className="flex-grow px-4 py-8 md:px-8 lg:py-12">
                <div className="max-w-6xl mx-auto">
                    <nav className="flex items-center gap-2 mb-8 text-base text-text-muted">
                        <Link className="hover:text-primary transition-colors" href="/home">
                            Начало
                        </Link>
                        <span className="material-symbols-outlined text-sm">
                            chevron_right
                        </span>
                        <Link className="hover:text-primary transition-colors" href="#">
                            Молби
                        </Link>
                        <span className="material-symbols-outlined text-sm">
                            chevron_right
                        </span>
                        <span className="font-bold text-text-main">Помощ за Бакстър</span>
                    </nav>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        <div className="lg:col-span-8 space-y-10">
                            <div className="space-y-5">
                                <div className="flex flex-wrap gap-3">
                                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-base font-bold border border-accent/20">
                                        <span className="material-symbols-outlined filled text-[20px]">
                                            emergency
                                        </span>
                                        Спешно: Нужна е помощ днес
                                    </span>
                                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background-light text-text-muted text-base font-medium">
                                        <span className="material-symbols-outlined text-[20px]">
                                            directions_car
                                        </span>
                                        Транспорт
                                    </span>
                                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background-light text-text-muted text-base font-medium">
                                        <span className="material-symbols-outlined text-[20px]">
                                            pets
                                        </span>
                                        Куче
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-main leading-tight tracking-tight">
                                    Нужен е транспорт за Бакстър до ветеринаря
                                </h1>
                            </div>
                            <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden shadow-xl shadow-accent/5 relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 pointer-events-none"></div>
                                <img
                                    alt="Голдън ретривър на име Бакстър"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    data-alt="Golden Retriever dog named Baxter looking gently at the camera"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7fAc-msB_hEgsi30h_AL0Em0YJzenxlv1WAazRh2k0lpoHj8jgKTL0GME-TZRZemqRpiYPVo1iNXwFjfOa7XiPiUsJnhURadPdBpSuX-cqJwyrUPzd1LX6fJ0k4P5GxHz-6UHK7exk7Dis4xSL3Y4kS-Im4cmrh-tF9SHvehTruw6bVXlM76YDVZskS2-Z-wDCdi7WfgE_wbrsgmmFUNkk8AmJGRqkQwC9MbHkkQHxzjvpdaXEKD8A3qkToo-P6eues_zOx2s5CU"
                                />
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2">
                                    <button className="bg-white/90 backdrop-blur text-sm font-bold px-4 py-2 rounded-xl shadow-sm hover:bg-white transition-colors cursor-pointer">
                                        Виж 4 Снимки
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-3 pr-6 bg-surface-light rounded-full shadow-md border border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <img
                                            alt="Марта С."
                                            className="size-14 rounded-full object-cover border-2 border-white"
                                            data-alt="Martha S. profile picture"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD-_jrL6k9Z9Zjycg-SYU7Egb7FCoJqdmi91bmE-4KgI4gY9jIbaTjn9zc3TvhwBKuuiuA-SMHgT5a9XS6iP2NTeNrckZjnB6gFn34VDLLzRtbP1K57xpQjG57W9vjnhGA4ZZkCG-q52hGb3R3gj8GZzVUWbNfUp_ymQa3QNjtiXkVmPCdRx8kBVpHRLIKKtdBx0YUTpap9XMqv8kPfToJrqfa2GPg8zxqIwarBH9UZsqZYMQWSllnTK6do1GtEOrKMOR5t3eWUAo"
                                        />
                                        <div
                                            className="absolute -bottom-1 -right-1 bg-secondary text-white rounded-full p-0.5 border-2 border-white"
                                            title="Verified Volunteer"
                                        >
                                            <span className="material-symbols-outlined text-[16px] font-bold block">
                                                verified
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-base font-bold text-text-main">
                                            Публикувано от Марта С.
                                        </p>
                                        <p className="text-sm text-text-muted">
                                            Член от 2021 • 12 Помощи
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden sm:block text-sm font-medium text-text-muted bg-gray-100 px-4 py-2 rounded-xl">
                                    Преди 2 часа
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-text-main flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-3xl">
                                            feed
                                        </span>
                                        Историята
                                    </h3>
                                    <p className="text-lg leading-relaxed text-gray-700">
                                        Бакстър е моят 8-годишен голдън ретривър. Обикновено е пълен
                                        с енергия, но напоследък има затруднения да ходи със задните
                                        си крака. Имам записан час за ветеринар този следобед в
                                        клиниката в центъра.
                                    </p>
                                    <p className="text-lg leading-relaxed text-gray-700">
                                        За съжаление, колата ми е на ремонт, а Бакстър е твърде
                                        тежък (около 40 кг), за да го вдигна сама безопасно. Търся
                                        някой с по-ниска кола или рампа, който може да ни помогне с
                                        транспорта. Ще покрия разходите за гориво!
                                    </p>
                                </div>
                                <div className="bg-background-light p-8 rounded-3xl space-y-6 h-fit">
                                    <h3 className="text-2xl font-bold text-text-main flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-3xl">
                                            check_circle
                                        </span>
                                        Какво е нужно
                                    </h3>
                                    <ul className="space-y-6">
                                        <li className="flex items-start gap-4">
                                            <div className="mt-1 p-2 bg-white rounded-xl text-secondary shadow-sm">
                                                <span className="material-symbols-outlined text-[24px]">
                                                    directions_car
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block font-bold text-text-main text-lg">
                                                    Голям автомобил
                                                </span>
                                                <span className="text-base text-text-muted">
                                                    Комби, Ван или кола с рампа
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="mt-1 p-2 bg-white rounded-xl text-secondary shadow-sm">
                                                <span className="material-symbols-outlined text-[24px]">
                                                    fitness_center
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block font-bold text-text-main text-lg">
                                                    Помощ при вдигане
                                                </span>
                                                <span className="text-base text-text-muted">
                                                    Бакстър е тежък и има нужда от подкрепа
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="mt-1 p-2 bg-white rounded-xl text-secondary shadow-sm">
                                                <span className="material-symbols-outlined text-[24px]">
                                                    schedule
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block font-bold text-text-main text-lg">
                                                    Двупосочен курс
                                                </span>
                                                <span className="text-base text-text-muted">
                                                    ~2 часа общо време
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-text-main flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-3xl">
                                        location_on
                                    </span>
                                    Локация
                                </h3>
                                <div className="bg-surface-light rounded-3xl p-2 border border-gray-100 shadow-sm">
                                    <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden bg-gray-100">
                                        <img
                                            alt="Map of location"
                                            className="w-full h-full object-cover opacity-80"
                                            data-alt="Abstract map view of Maplewood District"
                                            data-location="Maplewood District"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgxh7WQvevKYM2Vi0oFFu5cpla2bFpOCHv3CODmnvmfSkfeka4rbm9hk9yn_KfTw34IW6b3gEjMAeceggLtQlClw2Lnk7qNbqtoqcmI6ngUFEFrlbvWsvwjf_CehpUuxUcWGAMsmel2s1Qqas1bIODerK6n_pmxXjib1H7_CJOoIWTgyasrmDlzSwHeeplB2BCMQea12xH5rXDhRILLiZhdZbfh5fF_x6Onpub8pHl0OEA4dMf9uVAvhbBnsDzEUlpeNZ0YSmBJ7s"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="relative">
                                                <div className="absolute -inset-4 bg-secondary/30 rounded-full animate-ping"></div>
                                                <div className="bg-surface-light text-text-main px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-secondary filled text-2xl">
                                                        location_on
                                                    </span>
                                                    <div className="text-left">
                                                        <span className="block text-xs font-bold uppercase tracking-wider text-text-muted">
                                                            Район
                                                        </span>
                                                        <span className="block text-base font-bold">
                                                            Квартал Мейпълууд
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <p className="text-base text-text-muted text-center sm:text-left">
                                            Точният адрес се предоставя след приемане на молбата.
                                        </p>
                                        <button className="text-primary text-base font-bold hover:underline cursor-pointer">
                                            Упътване
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4">
                            <div className="sticky top-28 space-y-8">
                                <div className="bg-surface-light rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                                    <div className="relative z-10 text-center space-y-8">
                                        <div>
                                            <p className="text-text-muted font-medium mb-2 text-sm uppercase tracking-wide">
                                                Статус
                                            </p>
                                            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full font-bold text-base">
                                                <span className="relative flex h-3 w-3">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                                                </span>
                                                Отворена молба
                                            </div>
                                        </div>
                                        <div className="bg-background-light rounded-2xl p-5 flex flex-col gap-4">
                                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                                <span className="text-base text-text-muted">Дата</span>
                                                <span className="text-lg font-bold text-text-main">
                                                    Днес, 24 Окт
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-base text-text-muted">Час</span>
                                                <span className="text-lg font-bold text-text-main">
                                                    14:30 - 16:30
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <button className="w-full bg-accent hover:bg-accent-hover text-white font-extrabold text-xl py-5 rounded-2xl shadow-lg shadow-accent/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                                                Искам да помогна
                                            </button>
                                            <button className="w-full bg-white border-2 border-gray-100 hover:border-primary/50 text-text-main font-bold text-lg py-4 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer">
                                                <span className="material-symbols-outlined">
                                                    chat_bubble
                                                </span>
                                                Пиши на Марта
                                            </button>
                                        </div>
                                        <div className="pt-2">
                                            <button className="text-text-muted hover:text-accent transition-colors text-base flex items-center justify-center gap-2 mx-auto font-medium cursor-pointer">
                                                <span className="material-symbols-outlined">
                                                    favorite
                                                </span>
                                                Запази за по-късно
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-blue-50 rounded-2xl p-6 flex items-start gap-4 border border-blue-100">
                                    <span className="material-symbols-outlined text-secondary text-3xl shrink-0">
                                        shield
                                    </span>
                                    <div>
                                        <p className="text-base font-bold text-text-main">
                                            PawHelp Сигурност
                                        </p>
                                        <p className="text-sm text-text-muted mt-2 leading-relaxed">
                                            Винаги се срещайте на публични места първоначално.
                                            Проверете нашите{" "}
                                            <Link
                                                className="underline hover:text-primary font-semibold"
                                                href="#"
                                            >
                                                Правила за общността
                                            </Link>{" "}
                                            преди да помогнете.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="mt-12 py-10 bg-surface-light border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-text-muted text-base">
                        © 2023 PawHelp Inc. Всички права запазени.
                    </div>
                    <div className="flex gap-8">
                        <Link
                            className="text-base font-medium text-text-muted hover:text-primary"
                            href="#"
                        >
                            Поверителност
                        </Link>
                        <Link
                            className="text-base font-medium text-text-muted hover:text-primary"
                            href="#"
                        >
                            Условия
                        </Link>
                        <Link
                            className="text-base font-medium text-text-muted hover:text-primary"
                            href="#"
                        >
                            Помощ
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
