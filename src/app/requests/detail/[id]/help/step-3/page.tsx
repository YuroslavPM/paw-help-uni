"use client";

import Link from "next/link";
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { requests } from "../../../../../../data/requests";

export default function HelpStep3({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const router = useRouter();
    const [showSuccess, setShowSuccess] = useState(false);
    const request = requests.find((r) => r.id === id);

    if (!request) return null;

    const handleConfirm = () => {
        setShowSuccess(true);
        setTimeout(() => {
            router.push("/home");
        }, 2500);
    };

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
                            Стъпка 3 от 3
                        </span>
                        <div className="flex gap-1">
                            <div className="h-1.5 w-8 rounded-full bg-primary/30"></div>
                            <div className="h-1.5 w-8 rounded-full bg-primary/30"></div>
                            <div className="h-1.5 w-8 rounded-full bg-primary"></div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:px-6">
                    <div className="w-full max-w-lg">
                        <div className="bg-card-light rounded-2xl shadow-soft border border-gray-100 overflow-hidden relative">
                            <div className="pt-10 pb-6 px-8 flex flex-col items-center text-center relative">
                                <div className="size-32 mb-6 relative">
                                    <div
                                        className="w-full h-full bg-contain bg-center bg-no-repeat"
                                        data-alt="Illustration of a friendly cartoon cat mascot waving happily with a heart"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZREOhLKn-vJPBnXZIkTIkNUvxGXGVuaQbf35hG_G_EocToeHOXx2ERyuR0D3omRm3PZOc3Q1eJ5I_H6a7mLAX9dv_YHCrQpNzDAYVCSeG250fHbRyiQZY0qq3bceLrhKdc1_m0p1d8GAJzMB9moE9bCKcLYbSSSjWIiUI0kHvLzVoiy8Y7hxdAi6gUSsUeNZttTYrAOGCk3azQZxVJw45bl9g8R0NamCqpempINkfEPEKxUknNFrN2uXyeILQHzjEGNXweiGg9OU')",
                                        }}
                                    ></div>
                                    <div className="absolute -right-2 -top-2 text-yellow-400 animate-pulse delay-75">
                                        <span className="material-symbols-outlined text-[24px] fill-current">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                                <h1 className="text-3xl font-black text-text-main mb-3 tracking-tight leading-tight">
                                    Благодарим ви, че помагате!
                                </h1>
                                <p className="text-text-secondary text-base leading-relaxed max-w-sm">
                                    {request.postedBy.name.split(" ")[0]} и нейният домашен любимец очакват вашата подкрепа.
                                    Моля, прегледайте детайлите, преди да потвърдите.
                                </p>
                            </div>
                            <div className="px-6 pb-8">
                                <div className="bg-background-light rounded-xl p-5 border border-gray-100">
                                    <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-200">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="size-10 rounded-full bg-cover bg-center"
                                                data-alt={`Profile picture of ${request.postedBy.name}`}
                                                style={{
                                                    backgroundImage: `url('${request.postedBy.avatar}')`,
                                                }}
                                            ></div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-text-main">
                                                    {request.postedBy.name}
                                                </span>
                                                <div className="flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[14px] text-yellow-500 fill-current">
                                                        star
                                                    </span>
                                                    <span className="text-xs font-medium text-text-secondary">
                                                        4.9 (24 Отзива)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-white border border-gray-100 shadow-sm flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px] text-green-500">
                                                verified_user
                                            </span>
                                            <span className="text-xs font-bold text-text-main">
                                                Проверен
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-5">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                                                ЗАДАЧА
                                            </span>
                                            <div className="flex items-center gap-2 text-text-main font-semibold">
                                                <span className="material-symbols-outlined text-[18px] text-primary">
                                                    {request.categoryIcon}
                                                </span>
                                                <span>{request.category}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                                                КОГА
                                            </span>
                                            <div className="flex items-center gap-2 text-text-main font-semibold">
                                                <span className="material-symbols-outlined text-[18px] text-primary">
                                                    schedule
                                                </span>
                                                <span>{request.time}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                                                ДЕЙНОСТ
                                            </span>
                                            <div className="flex items-center gap-2 text-text-main font-semibold">
                                                {/* Using title/needs to display something relevant */}
                                                <span className="text-sm truncate max-w-[120px]">{request.title.split(" ").slice(0, 3).join(" ")}...</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                                                ЛОКАЦИЯ
                                            </span>
                                            <div className="flex items-center gap-2 text-text-main font-semibold">
                                                <span className="text-sm truncate max-w-[120px]">{request.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-24 rounded-lg overflow-hidden group/map cursor-pointer">
                                        <img
                                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/map:opacity-100 transition-opacity"
                                            data-alt={`Abstract map preview`}
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC19uuiLjl4KZ_6z6iwVzoz2BCGZfUrQbKb3SHXOULh2bANJK2iBTQty3mruJmXNuMNM_9TSMm16q1ENMpZJB4uuS47aXzA6XYQyq4w7k2NBz5caGM-7bbyfxkp0Q3sSAVDThjNZr-Y1z9t-rxCrB9t7aj85T-8couraK2rtoreaW5urt-cU-o63wSSHrvNTubzQtViO8RGjaQv2vHbJv5qxG1vTTb5rgspsIFbQtixJHqux3B8WWqP1whuRdLgzMUp-lD-Luv5Arc"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-2 left-3 flex items-center gap-1.5 text-white">
                                            <span className="material-symbols-outlined text-[16px]">
                                                location_on
                                            </span>
                                            <span className="text-xs font-bold text-text-shadow-sm">
                                                {request.location}, Пловдив
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-8 pb-8 flex flex-col gap-4">
                                <button
                                    onClick={handleConfirm}
                                    className="w-full bg-primary hover:bg-[#74dcb8] active:scale-[0.98] transition-all duration-200 text-[#121715] font-bold text-xl rounded-xl py-4 shadow-[0_4px_14px_0_rgba(133,224,194,0.39)] flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>Потвърди</span>
                                    <span className="material-symbols-outlined text-[24px] font-bold">
                                        check_circle
                                    </span>
                                </button>
                                <div className="flex justify-center">
                                    <Link
                                        href={`/requests/detail/${id}/help/step-2`}
                                        className="text-sm font-semibold text-text-secondary hover:text-text-main transition-colors"
                                    >
                                        Отказ
                                    </Link>
                                </div>
                                <div className="pt-2 text-center border-t border-gray-100 mt-2">
                                    <p className="text-[11px] text-text-secondary leading-normal">
                                        С потвърждаването се съгласявате с нашите{" "}
                                        <a
                                            className="underline decoration-1 underline-offset-2 hover:text-primary"
                                            href="#"
                                        >
                                            Насоки на общността
                                        </a>{" "}
                                        и{" "}
                                        <a
                                            className="underline decoration-1 underline-offset-2 hover:text-primary"
                                            href="#"
                                        >
                                            Правила за безопасност
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"></div>
                    <div className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-scale-in text-center overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/30 to-transparent -z-10"></div>
                        <div className="mx-auto size-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary-dark shadow-sm">
                            <span className="material-symbols-outlined text-5xl animate-bounce">
                                thumb_up
                            </span>
                        </div>
                        <h2 className="text-2xl font-black text-[#121715] mb-2 leading-tight">
                            Супер! <br /> Вие сте страхотни!
                        </h2>
                        <p className="text-text-muted font-medium mb-6">
                            Благодарим ви за добрината. {request.postedBy.name} ще бъде уведомена веднага.
                        </p>
                        <div className="w-full bg-background-light h-1.5 rounded-full overflow-hidden">
                            <div className="h-full bg-primary animate-progress-bar rounded-full"></div>
                        </div>
                        <p className="text-xs text-text-muted mt-3 font-semibold">Пренасочване към началото...</p>
                    </div>
                </div>
            )}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scale-in {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                @keyframes progress-bar {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                .animate-fade-in { animation: fade-in 0.3s ease-out; }
                .animate-scale-in { animation: scale-in 0.4s ease-out cubic-bezier(0.16, 1, 0.3, 1); }
                .animate-progress-bar { animation: progress-bar 2.5s linear forwards; }
            `}</style>
        </div>
    );
}
