import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    roadmap5,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    mail,
    github,
    youtube,
    linkedin,
    logo,
    logo_bg,
    inningiq,
    jyBaseball,
} from "../assets";


export const navigation = [
    {
        id: "0",
        title: "features",
        url: "/InningIQ/#features",
    },
    {
        id: "1",
        title: "howToUse",
        url: "/InningIQ/#features",
    },
    {
        id: "2",
        title: "roadmap",
        url: "/InningIQ/#roadmap",
    },
    {
        id: "3",
        title: "services",
        // url: "https://vaclisinc.github.io/jyBaseball/",
        type: "dropdown",
        component: "Services",
    },
    {
        id: "4",
        title: "languages",
        type: "dropdown",
        component: "LanguageSwitcher",
        // url: "#languages",
    },
    {
        id: "5",
        title: "signUp",
        url: "/InningIQ/#signup",
        onlyMobile: true,
    },
    {
        id: "6",
        title: "signIn",
        url: "/InningIQ/#signin",
        onlyMobile: true,
    },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [logo, logo_bg, inningiq];

export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
];

export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
];

export const roadmap = [
    {
        id: "0",
        title: "roadmap1_title",
        text: "roadmap1_description",
        date: "Mar 2023",
        status: "done",
        imageUrl: jyBaseball,
        colorful: true,
        link: "https://vaclisinc.github.io/jyBaseball/",
    },
    {
        id: "1",
        title: "roadmap2_title",
        text: "roadmap2_description",
        date: "Sep 2024",
        status: "progress",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "roadmap3_title",
        text: "roadmap3_description",
        date: "Sep 2024",
        status: "progress",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "roadmap4_title",
        text: "roadmap4_description",
        date: "?",
        status: "progress",
        imageUrl: roadmap4,
    },
    {
        id: "4",
        title: "roadmap5_title",
        text: "roadmap5_description",
        date: "?",
        status: "progress",
        imageUrl: roadmap5,
    },
];

export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
    {
        id: "0",
        title: "Seamless Integration",
        text: collabText,
    },
    {
        id: "1",
        title: "Smart Automation",
    },
    {
        id: "2",
        title: "Top-notch Security",
    },
];

export const collabApps = [
    {
        id: "0",
        title: "Figma",
        icon: figma,
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "Notion",
        icon: notion,
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: discord,
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Slack",
        icon: slack,
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Photoshop",
        icon: photoshop,
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Protopie",
        icon: protopie,
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Framer",
        icon: framer,
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Raindrop",
        icon: raindrop,
        width: 38,
        height: 32,
    },
];

export const pricing = [
    {
        id: "0",
        title: "Basic",
        description: "AI chatbot, personalized recommendations",
        price: "0",
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
    {
        id: "1",
        title: "Premium",
        description: "Advanced AI chatbot, priority support, analytics dashboard",
        price: "9.99",
        features: [
            "An advanced AI chatbot that can understand complex queries",
            "An analytics dashboard to track your conversations",
            "Priority support to solve issues quickly",
        ],
    },
    {
        id: "2",
        title: "Enterprise",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        price: null,
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
];

export const features = [
    {
        id: "0",
        title: "features1_title",
        text: "features1_description",
        backgroundUrl: "./assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        available: true,
        url: "/InningIQ/InningIQAssistant"
    },
    {
        id: "1",
        title: "features2_title",
        text: "features2_description",
        backgroundUrl: "./assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
        available: false,
        url: "/"
    },
    {
        id: "2",
        title: "features3_title",
        text: "features3_description",
        backgroundUrl: "./assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
        available: true,
        url:"https://vaclisinc.github.io/jyBaseball"
    }
    // ,
    // {
    //     id: "3",
    //     title: "Fast responding",
    //     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    //     backgroundUrl: "assets/benefits/card-4.svg",
    //     iconUrl: benefitIcon4,
    //     imageUrl: benefitImage2,
    //     light: true,
    // },
    // {
    //     id: "4",
    //     title: "Ask anything",
    //     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    //     backgroundUrl: "assets/benefits/card-5.svg",
    //     iconUrl: benefitIcon1,
    //     imageUrl: benefitImage2,
    // },
    // {
    //     id: "5",
    //     title: "Improve everyday",
    //     text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    //     backgroundUrl: "assets/benefits/card-6.svg",
    //     iconUrl: benefitIcon2,
    //     imageUrl: benefitImage2,
    // },
];

export const socials = [
    {
        id: "0",
        title: "Mail",
        iconUrl: mail,
        url: "mailto:vacliscofounders@gmail.com",
    },
    {
        id: "1",
        title: "Youtube",
        iconUrl: youtube,
        url: "https://www.youtube.com/@vaclis_daily",
    },
    {
        id: "2",
        title: "Github",
        iconUrl: github,
        url: "https://github.com/vaclisinc",
    },
    {
        id: "3",
        title: "Linkedin",
        iconUrl: linkedin,
        url: "https://www.linkedin.com/in/vaclis/",
    },
];