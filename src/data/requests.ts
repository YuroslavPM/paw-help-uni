export interface Request {
    id: string;
    title: string;
    cardTitle?: string; // Optional title for the card if different from main title
    category: "Разходка на куче" | "Пазаруване" | "Транспорт" | "Временен дом" | "Помощ в градината";
    categoryIcon: string;
    urgency: "Normal" | "Urgent";
    distance: string;
    description: string;
    postedBy: {
        name: string;
        avatar: string;
        memberSince: string;
        helpsCount: number;
    };
    image: string;
    date: string;
    time: string;
    location: string;
    needs: {
        icon: string;
        title: string;
        subtitle: string;
    }[];
}

export const requests: Request[] = [
    {
        id: "1",
        cardTitle: "Разходка за Бъстър",
        title: "Нужен е транспорт за Бакстър до ветеринаря",
        category: "Разходка на куче",
        categoryIcon: "pets",
        urgency: "Urgent", // Changed to Urgent based on details page
        distance: "0.8 км",
        description: "Бакстър е моят 8-годишен голдън ретривър. Обикновено е пълен с енергия, но напоследък има затруднения да ходи със задните си крака. Имам записан час за ветеринар този следобед в клиниката в центъра.\n\nЗа съжаление, колата ми е на ремонт, а Бакстър е твърде тежък (около 40 кг), за да го вдигна сама безопасно. Търся някой с по-ниска кола или рампа, който може да ни помогне с транспорта. Ще покрия разходите за гориво!",
        postedBy: {
            name: "Марта С.",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAD-_jrL6k9Z9Zjycg-SYU7Egb7FCoJqdmi91bmE-4KgI4gY9jIbaTjn9zc3TvhwBKuuiuA-SMHgT5a9XS6iP2NTeNrckZjnB6gFn34VDLLzRtbP1K57xpQjG57W9vjnhGA4ZZkCG-q52hGb3R3gj8GZzVUWbNfUp_ymQa3QNjtiXkVmPCdRx8kBVpHRLIKKtdBx0YUTpap9XMqv8kPfToJrqfa2GPg8zxqIwarBH9UZsqZYMQWSllnTK6do1GtEOrKMOR5t3eWUAo",
            memberSince: "2021",
            helpsCount: 12
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7fAc-msB_hEgsi30h_AL0Em0YJzenxlv1WAazRh2k0lpoHj8jgKTL0GME-TZRZemqRpiYPVo1iNXwFjfOa7XiPiUsJnhURadPdBpSuX-cqJwyrUPzd1LX6fJ0k4P5GxHz-6UHK7exk7Dis4xSL3Y4kS-Im4cmrh-tF9SHvehTruw6bVXlM76YDVZskS2-Z-wDCdi7WfgE_wbrsgmmFUNkk8AmJGRqkQwC9MbHkkQHxzjvpdaXEKD8A3qkToo-P6eues_zOx2s5CU",
        date: "Днес, 24 Окт",
        time: "14:30 - 16:30",
        location: "Квартал Мейпълууд",
        needs: [
            { icon: "directions_car", title: "Голям автомобил", subtitle: "Комби, Ван или кола с рампа" },
            { icon: "fitness_center", title: "Помощ при вдигане", subtitle: "Бакстър е тежък и има нужда от подкрепа" },
            { icon: "schedule", title: "Двупосочен курс", subtitle: "~2 часа общо време" },
        ]
    },
    {
        id: "2",
        title: "Пазаруване за възрастна дама",
        category: "Пазаруване",
        categoryIcon: "shopping_cart",
        urgency: "Urgent",
        distance: "2.0 км",
        description: "Не мога да изляза. Имам нужда от помощ за закупуване на котешка храна за Луна и основни продукти за мен за седмицата.",
        postedBy: {
            name: "Анна",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWXvyro24oLcoEkGAAhcLBXc1H2HazXb4Sb4CvpITfIwTcRD-eCQvA0qQYnrsB4mIy7evOx2_3ZYlIhf13j-6PyFHzoiChgcp-yHpolgoLkzSONksHxJNJtjapwiYeNrzqhz4yjZDfn9zLPW6jAWoNaQ032TFBTya1J-9of8bRUXwFdUiohtwLQl784SU8F6ZeSruOE15EL6KTDLjpfEADDSWL2MyBeeHdZE9EPx9XpAjjB3G0KflYOLK5G9nOps90buM-4VHPvXQ",
            memberSince: "2020",
            helpsCount: 24
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGK5ulqxuLSDd2TOOqKZ5wieq9K2XifpMXYrIoOXyeLPzqJvm0gecTyO9RYKRpdqzMyLWEjTZNiFnrUX0fSlXjqOEtMGtkdMKMLXMuOWVt3GwNMbA8DVerc_6zmwtF9XM5GSr8cILRe0pO8Bju9MuaUtvXoD4hCCRBoKT3T9Ov4Nu00PzkaelIPipinXemFkHBWxn_9IeJtmX1pxGUc0SdE6F6c3zUXrUx-nk1ceiuc_ZRGeVnfpd0btSBTbagjhXvM1dQY2NinOA",
        date: "Днес, 24 Окт",
        time: "Възможно най-скоро",
        location: "Център",
        needs: [
            { icon: "shopping_cart", title: "Списък с покупки", subtitle: "Около 10 артикула" },
            { icon: "credit_card", title: "Плащане", subtitle: "В брой при доставка" }
        ]
    },
    {
        id: "3",
        title: "Транспорт до ветеринар",
        category: "Транспорт",
        categoryIcon: "directions_car",
        urgency: "Normal",
        distance: "3.2 км",
        description: "Моят мопс има час за преглед в 14:00. Колата ми се развали и имам нужда от превоз за двама ни до клиниката.",
        postedBy: {
            name: "Джон",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhyfdYfp1oifVFiTBZCNU5rXBFVkpU3dWusJR3ovt2GuPmZR5LlTt0WegSoL8ntk1OS6z7qRmGOwNpl5zRwbUGyFnezlFVv32YqplkyfTeZW6ftyroFMYyLYTSXGDfmnHRt5Ao4G-3H-B1qjmv_9ALMVvJFYXoR_eBDX_jXBba5UV8bpirXaZxDp8pOl1LFTqQE2Ikv9eo9BytO4Crx8bRUpCannEhdq29rkM15jMRLaqbBs5PHPJkGMt397vF3Uxr_CU2c2_hnX8",
            memberSince: "2023",
            helpsCount: 2
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3MqHsY3EkyvwlCpuRAedKKAGVw_BZpSa_9dYhBDmGwETu6R9MfGjrf2LrwV7MhLSm8fAXWaWOcXsAr3zD3lERIsn9O1BTSynJwisg492xFIDJXmmuzjwqQQP25dI-5mashUSreKRbfrDfgirRzKyIyy9Kv7cq2oh5GvrDxylV7I90nzZqfXP7xW1ZEl0YS8kVgdvSX6_qnW7yonEr8ffRU8-EvCyNMiW_n8MpQyt7CftHQfOfe56c-hZoxaft57GSkb71d5b54SI",
        date: "Днес, 24 Окт",
        time: "13:30",
        location: "Квартал Изток",
        needs: [
            { icon: "directions_car", title: "Транспорт", subtitle: "Нужен е багажник за количка" }
        ]
    },
    {
        id: "4",
        title: "Временен дом за котета",
        category: "Временен дом",
        categoryIcon: "home_health",
        urgency: "Normal",
        distance: "5.6 км",
        description: "Намерих котило от 3 котета. Приютите са пълни. Търся временен дом за 2 седмици, докато се организира транспорт.",
        postedBy: {
            name: "Сара",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAD7k8YPxowSaJnPHQIcznCqsYwEGVB6MNDZDeEofJMPgmnmJl7nEoafRia5iSZGZKDkKW6P_7xr--NqqpIl34sTtHZZNjxsGiSJXX4Be_vieIj725lTmSEemACt5zTBV4w4V8PlmS81MGI43z3WaS1PXkj-tbStViQyClRNG3gERQh5Wm05w-qCdmEeR1bLsB1_MTdCJpaq25m8JqOLzjy9Z7NhahQzcsDxewQjwXb4gy1TjkkCiZlv-sOmmR6eeuufKGGnkrNQCg",
            memberSince: "2021",
            helpsCount: 15
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd-6KNiERhvvnRIY7aTzaBnei975XSHEybx5Pbto7pgb0VRyJZQR11VjtGTxxssKpoyBi4lhRPAtv30nKAVRF_9L1zWKOmoZy_kfBMtXI1_RgvoqrqVspfx6yoP5kLV0V-Exv7Trq43pFjx0SDXRMxCI3C-LQgDCjFiMkzgpa_RDLn72feqox2trvqNuVnuB9BO_-2U9ZY0Tgwarh9lDGiTG3i0CqUCnMvE4OxHaIU3DlFWUiLWK4EFGDf2S4zhxfW5TjxDGdM-wg",
        date: "Веднага",
        time: "2 седмици",
        location: "Тракия",
        needs: [
            { icon: "home", title: "Пространство", subtitle: "Топла стая" },
            { icon: "pets", title: "Храна осигурена", subtitle: "" }
        ]
    },
    {
        id: "5",
        title: "Почистване на двора",
        category: "Помощ в градината",
        categoryIcon: "yard",
        urgency: "Normal",
        distance: "1.2 км",
        description: "Дворът е обрасъл и кучето ми трудно играе там. Имам нужда от помощ за косене и почистване на градината.",
        postedBy: {
            name: "Елена",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ_CscRaIwclD1gDbkVeky4SS3u3PkYgMhUht74572UnXJNPXDwT_jTuqEg14fdkcmKiO-EXija1vu8CA8kZ-WYbslYTwqevfh_n6M7VH6oAg03wnIkTtaWmy-dO_6Oe3Mgpl2QdyF-VgJL4XnOdRSRYHEnYhVfA77ERGMDljTwsUWnILc9f4XTp4GJrrvXeSz5MJ6nMgREXo8srKAh-0dWuBtefKarUwToZBcTtPCmtcU3eW7i3NT2WE-imMLz7J9dTbpAOnGXJ4",
            memberSince: "2024",
            helpsCount: 0
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8WI_BsY4C59FnLkLD0-XkhhDB-jW7IsG0LBO3HOjVi6I0D7qIvEpuMzudyLXX1J6z8icxMtC-irOI140BlFCmFvJW0cOLkuJ0FPFXMTp9P5I6qW9NB-EQIOMCVmYIpjescUukV5P26BSG05Kzz3pCJE9dQ42ON-B1ZMFSHCmKlFB0janUGW3MO9yy2kwWgwUEQYTd3MwPepd7O2_2btKHArTe4tKDGOgL4-r2yI49bi_UFF1kVQ2JfxW7Jt5A38evHhTBlYxhJzA",
        date: "Събота, 26 Окт",
        time: "Сутринта",
        location: "Кючук Париж",
        needs: [
            { icon: "yard", title: "Косене", subtitle: "Тревата е висока" },
            { icon: "cleaning_services", title: "Извозване", subtitle: "На отпадъци" }
        ]
    }
];
