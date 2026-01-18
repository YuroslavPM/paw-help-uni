"use client";

import Link from "next/link";
import { use } from "react";
import { requests } from "../../../../data/requests";
import Header from "../../../../components/Header";

export default function RequestDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const request = requests.find((r) => r.id === id);

    if (!request) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-light">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-text-main mb-4">
                        Молбата не е намерена
                    </h1>
                    <Link href="/home" className="text-primary hover:underline font-bold">
                        Обратно към началото
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background-light min-h-screen flex flex-col font-display text-text-main text-lg transition-colors duration-200">
            <Header />
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
                        <span className="font-bold text-text-main">{request.title}</span>
                    </nav>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        <div className="lg:col-span-8 space-y-10">
                            <div className="space-y-5">
                                <div className="flex flex-wrap gap-3">
                                    {request.urgency === "Urgent" && (
                                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-base font-bold border border-accent/20">
                                            <span className="material-symbols-outlined filled text-[20px]">
                                                emergency
                                            </span>
                                            Спешно: Нужна е помощ днес
                                        </span>
                                    )}
                                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background-light text-text-muted text-base font-medium">
                                        <span className="material-symbols-outlined text-[20px]">
                                            {request.categoryIcon}
                                        </span>
                                        {request.category}
                                    </span>
                                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background-light text-text-muted text-base font-medium">
                                        <span className="material-symbols-outlined text-[20px]">
                                            pets
                                        </span>
                                        Куче
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-main leading-tight tracking-tight">
                                    {request.title}
                                </h1>
                            </div>
                            <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden shadow-xl shadow-accent/5 relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 pointer-events-none"></div>
                                <img
                                    alt={request.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    data-alt={request.title}
                                    src={request.image}
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
                                            alt={request.postedBy.name}
                                            className="size-14 rounded-full object-cover border-2 border-white"
                                            data-alt={`${request.postedBy.name} profile picture`}
                                            src={request.postedBy.avatar}
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
                                            Публикувано от {request.postedBy.name}
                                        </p>
                                        <p className="text-sm text-text-muted">
                                            Член от {request.postedBy.memberSince} •{" "}
                                            {request.postedBy.helpsCount} Помощи
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
                                    <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-wrap">
                                        {request.description}
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
                                        {request.needs.map((need, index) => (
                                            <li key={index} className="flex items-start gap-4">
                                                <div className="mt-1 p-2 bg-white rounded-xl text-secondary shadow-sm">
                                                    <span className="material-symbols-outlined text-[24px]">
                                                        {need.icon}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-text-main text-lg">
                                                        {need.title}
                                                    </span>
                                                    <span className="text-base text-text-muted">
                                                        {need.subtitle}
                                                    </span>
                                                </div>
                                            </li>
                                        ))}
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
                                            data-alt={`Abstract map view of ${request.location}`}
                                            data-location={request.location}
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
                                                            {request.location}
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
                                                    {request.date}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-base text-text-muted">Час</span>
                                                <span className="text-lg font-bold text-text-main">
                                                    {request.time}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <Link
                                                href={`/requests/detail/${id}/help/step-1`}
                                                className="w-full bg-primary hover:bg-primary-hover text-[#121715] font-extrabold text-xl py-5 rounded-2xl shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center"
                                            >
                                                Искам да помогна
                                            </Link>
                                            <Link href="/messages" className="w-full bg-white border-2 border-gray-100 hover:border-primary/50 text-text-main font-bold text-lg py-4 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer">
                                                <span className="material-symbols-outlined">
                                                    chat_bubble
                                                </span>
                                                Пиши на {request.postedBy.name.split(" ")[0]}
                                            </Link>
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
