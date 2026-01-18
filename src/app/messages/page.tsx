"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface Message {
    id: string;
    text: string;
    sender: "me" | "other";
    time: string;
    isRead?: boolean;
}

export default function MessagesPage() {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Здравейте! Много благодаря, че предложихте помощ. Бъстър много се вълнува да се запознае с вас! 🐶",
            sender: "other",
            time: "09:42",
        },
        {
            id: "2",
            text: "Здравейте, Марта! Мога да помогна с разходката на Бъстър този вторник. 10:00 часа удобно ли е за вас?",
            sender: "me",
            time: "09:45",
            isRead: true,
        },
        {
            id: "3",
            text: "Това би било чудесно, благодаря! Той обича парка до библиотеката.",
            sender: "other",
            time: "Току-що",
        },
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + "px";
        }
    }, [inputValue]);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            text: inputValue.trim(),
            sender: "me",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isRead: false,
        };

        setMessages((prev) => [...prev, newMessage]);
        setInputValue("");

        // Reset height
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="bg-background-light h-screen flex flex-col font-display text-[#121715] overflow-hidden transition-colors duration-200">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dce1e0] bg-surface-light px-6 md:px-10 py-3 shrink-0 z-10 shadow-sm relative">
                <Link href="/home" className="flex items-center gap-3 text-[#121715]">
                    <div className="size-8 text-chat-primary">
                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-[#121715] text-xl font-bold leading-tight tracking-[-0.015em]">PawHelp</h2>
                </Link>
                <div className="hidden md:flex flex-1 justify-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <Link className="text-[#64748b] hover:text-chat-primary font-medium transition-colors" href="/home">Начало</Link>
                    <Link className="text-[#64748b] hover:text-chat-primary font-medium transition-colors" href="#">Заявки</Link>
                    <Link className="text-chat-primary font-bold border-b-2 border-chat-primary" href="/messages">Съобщения</Link>
                    <Link className="text-[#64748b] hover:text-chat-primary font-medium transition-colors" href="#">Общност</Link>
                </div>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-gray-100 cursor-pointer hover:ring-chat-primary transition-all" data-alt="User" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1gk0WeW0ENdMcIQmTUtpplQFJg7W4MB7poF3JdPp0W8zp4-jl5oPBSj22BJQgaCKQBehSlYpbgxlzJHVgWi8Em_HS2m3HGYOTFHIvfv11tVJkK7d5jYKo1ctYykeiBLHmKAv4Nz5dHGPCSbOMoRtNYum3gzhvESdaxf_A4_OiqJHNZK_b_r2ZXCE0sGD4LO1vPFSO5oVvOYhMajytQ6oRZycRNMJb7OKqNeLSFBwuI0xSB9GMIi1mWzVYAlc5qvy7SvrToprPAww")' }}></div>
            </header>

            <div className="flex flex-1 overflow-hidden max-w-[1400px] mx-auto w-full md:py-6 md:px-6 gap-6">
                {/* Sidebar */}
                <aside className="hidden md:flex w-[360px] flex-col bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden shrink-0">
                    <div className="p-5 border-b border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-2xl font-bold text-gray-900">Съобщения</h1>
                            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
                                <span className="material-symbols-outlined text-[20px]">edit_square</span>
                            </button>
                        </div>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">search</span>
                            <input className="w-full bg-gray-100 border-none rounded-xl py-2.5 pl-10 pr-4 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-chat-primary/20 focus:bg-white transition-all outline-none" placeholder="Търсене..." />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
                        {/* Active Chat Item */}
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-chat-primary/5 border border-chat-primary/10 cursor-pointer relative">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-chat-primary rounded-r-full"></div>
                            <div className="relative shrink-0">
                                <div className="size-14 rounded-full bg-cover bg-center ring-2 ring-white shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNDi7s7BwKpSwUQeuJ4wyTo2GHUHdNb2Q-o_3HE5hxm570hZw5vC89-HmRx8mTZXNo1bMItDP1D4pXRXVdSBHKi1aCERj0mC6ekHe8BFeCgZuwRteXr7rzUmqP7pOlIUeNRPrke7zH2hRNY581RmbRZ4TdBXaENsHty-UVOkE EJWGA79e7CtxVI_4yrXNDtiCWRB1GLAZQhZIE7a7mFwttDFdfLjhVXV6a7UuOMl5rsPFQ4yxToyLfjBG6nwg9xQOawS849_6nTA")' }}></div>
                                <div className="absolute bottom-0.5 right-0.5 size-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="font-bold text-gray-900 truncate">Марта</h3>
                                    <span className="text-xs font-semibold text-chat-primary">2м</span>
                                </div>
                                <p className="text-sm text-gray-600 truncate font-medium">Това би било чудесно, благодаря!</p>
                            </div>
                        </div>

                        {/* Other Items */}
                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent">
                            <div className="relative shrink-0">
                                <div className="size-14 rounded-full bg-cover bg-center ring-1 ring-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnBprmf2-dxgC8dDqjieJeOIVAoczGJIW3s8_B2KSvbkFqHG5xNAD8dVVkJV0VOZCNTkCDQtEzOl9BgpoQh0bFP59w17SC6ddcOFgO96zPL3962KtkxcN1g3Ri4U1oLMNYJUzHR3lcMwqQM7NlpGkC-kjw4HoIiuKTjDivV9SoLzSdLKEzhW4sroOeYjiU1TiZkSLhgEruQyw_u7qSz_CvAkiIfDU97iiQtYh69lSgBJaSU81ZbhIWDE0kBshJIsuehrR6VnYnUeg")' }}></div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="font-bold text-gray-900 truncate">Местен приют</h3>
                                    <span className="text-xs text-gray-400">1д</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">Получихме дарението, благодарим!</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent">
                            <div className="relative shrink-0">
                                <div className="size-14 rounded-full bg-cover bg-center ring-1 ring-gray-200 grayscale" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArFyZjHu2TsnylrFSMFoWI9SFyPRWDhYKtRv6w0Rfgsj07C891NZZvWrbQcmNMgOHe0QavhzEGENbrBxSQiWuf8e1VQ3MkfuvYw1N_qMt2U11RW2QGTGHWgKvq5aPhK5BhUA-uXRMhnPwHedZih6BxK2Vn5YYP8StF2eiCnBnIDkOC9zkGJip9OKSpG97fbVHkh3k3uzbbyKtHT9iZNHagceozoPZmF1R08cDGPBLhlghxiAoRzNKiUqsz8QQA2a8Dh9uHsPN23xY")' }}></div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="font-bold text-gray-900 truncate">Иван</h3>
                                    <span className="text-xs text-gray-400">3д</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">Свободни ли сте този уикенд?</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Chat Area */}
                <main className="flex flex-1 flex-col bg-white md:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    {/* Chat Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white/80 backdrop-blur-sm z-10">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="size-12 rounded-full bg-cover bg-center ring-2 ring-gray-50 shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWXzDyhVVSo33pUBp8xECq-JGOXZUq5uk8nRXvAy5Wh0kSJtAjrck1k5iQ4yHXX-yeSVvDmIDiGS78jf--56UU0eX2ohQYcV_XrDIRzp24mvhTSeaOANuhH0j-v4KR0NqvUO9BpBvHEgFI1hgThKhxFlMA7GJ2vI_KXcTMLkmKpiiNuvnNj5my9179sqWfkfKRXC4ldo0jN1awgP8LZkJaxCKKrTbwjvJ5nPeEPLT_7E_UJfXVwTIJ_acGF7CDn__23YqhlPwkzN8")' }}></div>
                                <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full"></div>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Марта В.</h2>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1 bg-chat-primary/10 px-2 py-0.5 rounded-md">
                                        <span className="material-symbols-outlined text-[14px] text-chat-primary">pets</span>
                                        <span className="text-xs font-semibold text-chat-primary">Разходка на куче</span>
                                    </div>
                                    <Link href="/requests/detail/2" className="text-xs text-gray-500 hover:text-gray-900 hover:underline">Виж детайли</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
                                <span className="material-symbols-outlined text-[20px]">phone</span>
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
                                <span className="material-symbols-outlined text-[20px]">videocam</span>
                            </button>
                            <div className="w-px h-6 bg-gray-200 mx-1"></div>
                            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
                                <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-[#f8fafc] space-y-6">
                        <div className="flex justify-center my-4">
                            <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Днес, 9:41</span>
                        </div>

                        {/* System Message */}
                        <div className="flex justify-center">
                            <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-100 text-yellow-800 rounded-lg text-sm">
                                <span className="material-symbols-outlined text-[18px]">verified</span>
                                <span>Вие приехте заявката на Марта.</span>
                            </div>
                        </div>

                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex w-full ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                                <div className={`flex max-w-[70%] md:max-w-[60%] gap-2 ${msg.sender === "me" ? "flex-row-reverse" : "flex-row"}`}>
                                    {/* Avatar for 'other' only */}
                                    {msg.sender === "other" && (
                                        <div className="shrink-0 self-end">
                                            <div className="size-8 rounded-full bg-cover bg-center ring-1 ring-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVibiYnzS8iyuCCG33FN7epVkJBBGxmWmOhdAzWIoNUyqNPYowlrKXeqTArH566a5m7jas6sdFfIAqQifgMCa_7Jl9nSmNcuLQULvblJ8wh8XeSD9LXLNB_lB9brH-lae9yThODn-AVHIEfVQEAQriw2dPipSbMbqABHSGDuI4GPLDvlGBKo6iCYK_wEOkLl7akpliPPnkbFaCTvspTNOJlitlBSzAS0DL8aIIlwMrCV98t92BzxH8D6wiQpS_vniAOolbaFd-qKI")' }}></div>
                                        </div>
                                    )}

                                    <div className={`flex flex-col ${msg.sender === "me" ? "items-end" : "items-start"}`}>
                                        <div className={`
                                            px-5 py-3 text-[15px] leading-relaxed shadow-sm break-words relative
                                            ${msg.sender === "me"
                                                ? "bg-chat-sender-light text-white rounded-2xl rounded-tr-sm"
                                                : "bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-tl-sm"
                                            }
                                        `}>
                                            {msg.text}
                                        </div>
                                        <div className="flex items-center gap-1 mt-1 px-1">
                                            <span className="text-[11px] font-medium text-gray-400">{msg.time}</span>
                                            {msg.sender === "me" && msg.isRead && (
                                                <span className="material-symbols-outlined text-[14px] text-chat-primary">done_all</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-gray-100">
                        <div className="flex items-end gap-3 max-w-4xl mx-auto">
                            <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors shrink-0">
                                <span className="material-symbols-outlined text-[24px]">add_circle</span>
                            </button>
                            <div className="flex-1 bg-gray-100 rounded-[24px] px-4 py-2 flex items-end gap-2 focus-within:ring-2 focus-within:ring-gray-200 transition-shadow">
                                <textarea
                                    ref={textareaRef}
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Напишете съобщение..."
                                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-gray-800 placeholder-gray-500 resize-none max-h-32 min-h-[24px] py-1 text-base custom-scrollbar"
                                    rows={1}
                                />
                                <div className="flex gap-1 pb-1">
                                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                        <span className="material-symbols-outlined text-[22px]">sentiment_satisfied</span>
                                    </button>
                                </div>
                            </div>
                            {inputValue.trim() ? (
                                <button
                                    onClick={handleSendMessage}
                                    className="p-3 bg-chat-primary hover:bg-chat-primary-dark text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all shrink-0"
                                >
                                    <span className="material-symbols-outlined text-[24px] translate-x-0.5">send</span>
                                </button>
                            ) : (
                                <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors shrink-0">
                                    <span className="material-symbols-outlined text-[24px]">mic</span>
                                </button>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
