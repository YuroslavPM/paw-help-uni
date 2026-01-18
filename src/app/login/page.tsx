import Link from "next/link";

export default function LoginPage() {
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
                        Нямате акаунт?
                        <Link
                            className="text-text-main font-bold hover:underline ml-1 text-lg"
                            href="/register"
                        >
                            Регистрация
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
                                Свързваме <br />
                                лапички и хора.
                            </h3>
                            <p className="text-stone-700 text-lg font-medium leading-relaxed max-w-md">
                                Присъединете се към хиляди доброволци, които правят живота на
                                животните по-добър всеки ден.
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
                            <div className="mb-8">
                                <h1 className="text-4xl font-extrabold text-text-main mb-3">
                                    Добре дошли!
                                </h1>
                                <p className="text-lg text-stone-600 font-medium">
                                    Моля, въведете данните си за вход.
                                </p>
                            </div>
                            <button className="w-full flex items-center justify-center gap-4 bg-white border-2 border-stone-200 hover:bg-stone-50 text-text-main font-bold h-16 rounded-2xl transition-all duration-200 mb-8 group text-lg shadow-sm cursor-pointer">
                                <svg
                                    className="w-6 h-6 group-hover:scale-110 transition-transform"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    ></path>
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    ></path>
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"
                                        fill="#FBBC05"
                                    ></path>
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    ></path>
                                </svg>
                                Вход с Google
                            </button>
                            <div className="relative flex items-center gap-4 my-8">
                                <div className="h-[2px] bg-stone-200 flex-1"></div>
                                <span className="text-sm font-bold text-stone-500 uppercase tracking-widest">
                                    или
                                </span>
                                <div className="h-[2px] bg-stone-200 flex-1"></div>
                            </div>
                            <form action="#" className="space-y-6">
                                <div className="space-y-2">
                                    <label
                                        className="text-lg font-bold text-text-main ml-1 block"
                                        htmlFor="username"
                                    >
                                        Потребителско име
                                    </label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-stone-500 text-[24px]">
                                            person
                                        </span>
                                        <input
                                            className="w-full h-16 pl-14 pr-4 bg-input-light border-2 border-transparent focus:border-primary/50 rounded-2xl text-lg text-text-main placeholder-stone-500 focus:ring-4 focus:ring-primary/20 focus:bg-white transition-all duration-200 font-semibold shadow-sm"
                                            id="username"
                                            placeholder="Въведете име"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center ml-1">
                                        <label
                                            className="text-lg font-bold text-text-main"
                                            htmlFor="password"
                                        >
                                            Парола
                                        </label>
                                        <a
                                            className="text-sm md:text-base font-bold text-primary-hover hover:underline hover:text-green-600 transition-colors"
                                            href="#"
                                        >
                                            Забравена парола?
                                        </a>
                                    </div>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-stone-500 text-[24px]">
                                            lock
                                        </span>
                                        <input
                                            className="w-full h-16 pl-14 pr-4 bg-input-light border-2 border-transparent focus:border-primary/50 rounded-2xl text-lg text-text-main placeholder-stone-500 focus:ring-4 focus:ring-primary/20 focus:bg-white transition-all duration-200 font-semibold shadow-sm"
                                            id="password"
                                            placeholder="••••••••"
                                            type="password"
                                        />
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <button
                                        className="w-full bg-primary hover:bg-primary-hover active:scale-[0.99] text-[#121715] font-extrabold h-16 rounded-2xl shadow-[0_4px_14px_0_rgba(133,224,194,0.39)] hover:shadow-[0_6px_20px_rgba(133,224,194,0.3)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 text-xl cursor-pointer"
                                        type="button"
                                    >
                                        <span>Вход</span>
                                        <span className="material-symbols-outlined text-lg font-black stroke-[3]">
                                            arrow_forward
                                        </span>
                                    </button>
                                </div>
                            </form>
                            <div className="mt-10 text-center md:hidden">
                                <p className="text-base font-medium text-stone-600">
                                    Нямате акаунт?
                                    <Link
                                        className="text-text-main font-bold text-lg hover:underline"
                                        href="/register"
                                    >
                                        Регистрация
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
