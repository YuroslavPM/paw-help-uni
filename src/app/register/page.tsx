import Link from "next/link";

export default function RegisterPage() {
    return (
        <>
            <header className="w-full px-6 py-6 md:px-10 flex items-center justify-between z-10">
                <Link href="/" className="flex items-center gap-3 text-text-main hover:opacity-80 transition-opacity cursor-pointer">
                    <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-text-main shadow-sm">
                        <span className="material-symbols-outlined text-[24px]">pets</span>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">PawHelp</h2>
                </Link>
                <div className="hidden md:block">
                    <p className="text-base font-medium text-stone-600">
                        Имате акаунт?
                        <Link
                            className="text-text-main font-bold hover:underline ml-1 text-lg"
                            href="/login"
                        >
                            Вход
                        </Link>
                    </p>
                </div>
            </header>
            <main className="flex-1 flex items-center justify-center px-4 py-6 md:px-8 lg:px-12 w-full max-w-[1440px] mx-auto">
                <div className="w-full max-w-7xl bg-surface-light rounded-3xl shadow-soft overflow-hidden flex flex-col md:flex-row min-h-[650px] border border-stone-200">
                    <div className="relative w-full md:w-5/12 lg:w-1/2 bg-[#FFF8F0] p-8 lg:p-12 flex flex-col justify-between overflow-hidden group">
                        <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[60%] bg-[#FFECD6] rounded-[100%] -rotate-12 z-0 pointer-events-none"></div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/50 mb-8 shadow-sm">
                                <span className="material-symbols-outlined text-lg text-amber-600">
                                    volunteer_activism
                                </span>
                                <span className="text-sm font-bold text-stone-700 uppercase tracking-wider">
                                    За общността
                                </span>
                            </div>
                            <h3 className="text-3xl lg:text-5xl font-black text-stone-800 leading-tight mb-6">
                                Станете част от <br />
                                промяната.
                            </h3>
                            <p className="text-stone-700 text-lg font-medium leading-relaxed max-w-md">
                                Създайте профил и помогнете на тези, които имат най-голяма нужда от вашата подкрепа.
                            </p>
                        </div>
                        <div className="relative z-10 mt-8 flex-1 flex items-end justify-center">
                            <div
                                className="w-full h-72 lg:h-96 bg-contain bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                                data-alt="Illustration of a friendly orange cat mascot smiling warmly"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwOrPMeSMrE7f7Ltshpp-nhQsRokLEVPreeMGL2uGY3x-N45-Is6gzgASBvPt5Tn2tr53se01xENYlQk9p41WL2-d1V8LCjS64x39YQASNqCe4bOX0DdGy0J1_Lwl4n5T1qo35X3V_xeZzVFrUcgzgbKdnncNg9y_aE9kf0CPGsvZiO08xvH5hsBJ_UxpVCrvjxOArMjDrsUu6j8ikRqJgZczB2R4OxjgvyVeQZm1GjLBkpNW9biwS_HqLU3aeHg287smLNWMsgCk')",
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="w-full md:w-7/12 lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-surface-light">
                        <div className="max-w-lg mx-auto w-full">
                            <div className="mb-6">
                                <h1 className="text-4xl font-extrabold text-text-main mb-3">
                                    Създаване на акаунт
                                </h1>
                                <p className="text-lg text-stone-600 font-medium">
                                    Попълнете данните си за регистрация.
                                </p>
                            </div>

                            <form action="#" className="space-y-4">
                                <div className="space-y-2">
                                    <label
                                        className="text-lg font-bold text-text-main ml-1 block"
                                        htmlFor="fullname"
                                    >
                                        Име и Фамилия
                                    </label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-stone-500 text-[24px]">
                                            badge
                                        </span>
                                        <input
                                            className="w-full h-14 pl-14 pr-4 bg-input-light border-2 border-transparent focus:border-primary/50 rounded-2xl text-lg text-text-main placeholder-stone-500 focus:ring-4 focus:ring-primary/20 focus:bg-white transition-all duration-200 font-semibold shadow-sm"
                                            id="fullname"
                                            placeholder="Иван Иванов"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label
                                        className="text-lg font-bold text-text-main ml-1 block"
                                        htmlFor="email"
                                    >
                                        Имейл адрес
                                    </label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-stone-500 text-[24px]">
                                            mail
                                        </span>
                                        <input
                                            className="w-full h-14 pl-14 pr-4 bg-input-light border-2 border-transparent focus:border-primary/50 rounded-2xl text-lg text-text-main placeholder-stone-500 focus:ring-4 focus:ring-primary/20 focus:bg-white transition-all duration-200 font-semibold shadow-sm"
                                            id="email"
                                            placeholder="ivan@example.com"
                                            type="email"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label
                                        className="text-lg font-bold text-text-main ml-1 block"
                                        htmlFor="password"
                                    >
                                        Парола
                                    </label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-stone-500 text-[24px]">
                                            lock
                                        </span>
                                        <input
                                            className="w-full h-14 pl-14 pr-4 bg-input-light border-2 border-transparent focus:border-primary/50 rounded-2xl text-lg text-text-main placeholder-stone-500 focus:ring-4 focus:ring-primary/20 focus:bg-white transition-all duration-200 font-semibold shadow-sm"
                                            id="password"
                                            placeholder="••••••••"
                                            type="password"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 py-2 cursor-pointer">
                                    <input type="checkbox" id="volunteer" className="w-6 h-6 rounded-md border-2 border-stone-300 text-primary focus:ring-primary/50 cursor-pointer accent-primary" />
                                    <label htmlFor="volunteer" className="text-lg font-bold text-stone-700 cursor-pointer select-none">
                                        Искам да бъда доброволец
                                    </label>
                                </div>

                                <div className="pt-2">
                                    <button
                                        className="w-full bg-primary hover:bg-primary-hover active:scale-[0.99] text-[#121715] font-extrabold h-16 rounded-2xl shadow-[0_4px_14px_0_rgba(133,224,194,0.39)] hover:shadow-[0_6px_20px_rgba(133,224,194,0.3)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 text-xl cursor-pointer"
                                        type="button"
                                    >
                                        <span>Регистрация</span>
                                        <span className="material-symbols-outlined text-lg font-black stroke-[3]">
                                            arrow_forward
                                        </span>
                                    </button>
                                </div>
                            </form>
                            <div className="mt-8 text-center md:hidden">
                                <p className="text-base font-medium text-stone-600">
                                    Имате акаунт?
                                    <Link
                                        className="text-text-main font-bold text-lg hover:underline"
                                        href="/login"
                                    >
                                        Вход
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="w-full py-8 text-center">
                <p className="text-sm font-medium text-stone-500">
                    © 2024 PawHelp Inc. Всички права запазени.
                </p>
            </footer>
        </>
    );
}
