import g_img1 from './g_img1.png';
import g_img2_1 from './g_img2_1.png';
import g_img2_2 from './g_img2_2.png';
import g_img2_3 from './g_img2_3.png';
import g_img2_4 from './g_img2_4.png';
import g_img3 from './g_img3.png';
import g_img4 from './g_img4.png';
import g_img5 from './g_img5.png';
import g_img6 from './g_img6.png';
import g_img7 from './g_img7.png';
import g_img8 from './g_img8.png';
import g_img9 from './g_img9.png';
import g_img10 from './g_img10.png';
import g_img11 from './g_img11.png';
import g_img12 from './g_img12.png';
import g_img13 from './g_img13.png';
import g_img14 from './g_img14.png';
import g_img15 from './g_img15.png';
import g_img16 from './g_img16.png';
import g_img17 from './g_img17.png';
import g_img18 from './g_img18.png';
import g_img19 from './g_img19.png';
import g_img20 from './g_img20.png';
import g_img21 from './g_img21.png';
import g_img22 from './g_img22.png';
import g_img23 from './g_img23.png';
import g_img24 from './g_img24.png';
import g_img25 from './g_img25.png';
import g_img26 from './g_img26.png';
import g_img27 from './g_img27.png';
import g_img28 from './g_img28.png';
import g_img29 from './g_img29.png';
import g_img30 from './g_img30.png';
import g_img31 from './g_img31.png';
import g_img32 from './g_img32.png';
import g_img33 from './g_img33.png';
import g_img34 from './g_img34.png';
import g_img35 from './g_img35.png';
import g_img36 from './g_img36.png';
import g_img37 from './g_img37.png';
import g_img38 from './g_img38.png';
import g_img39 from './g_img39.png';
import g_img40 from './g_img40.png';
import g_img41 from './g_img41.png';
import g_img42 from './g_img42.png';
import g_img43 from './g_img43.png';
import g_img44 from './g_img44.png';
import g_img45 from './g_img45.png';
import g_img46 from './g_img46.png';
import g_img47 from './g_img47.png';
import g_img48 from './g_img48.png';
import g_img49 from './g_img49.png';
import g_img50 from './g_img50.png';
import g_img51 from './g_img51.png';
import g_img52 from './g_img52.png';

import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Samsung Galaxy Z Fold 6",
        description: "A premium foldable smartphone with a 7.6-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 3, and 50MP triple camera.",
        price: 164999,
        image: [g_img1],
        category: "Smartphones",
        subCategory: "Foldable",
        variants: ["256GB", "512GB"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Apple iPhone 15 Pro",
        description: "A flagship iPhone with A17 Pro chip, 6.1-inch Super Retina XDR display, and 48MP main camera with advanced computational photography.",
        price: 119900,
        image: [g_img2_1, g_img2_2, g_img2_3, g_img2_4],
        category: "Smartphones",
        subCategory: "Premium",
        variants: ["256GB", "512GB", "1TB"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Sony WH-1000XM5 Headphones",
        description: "Top-tier noise-canceling wireless headphones with 30mm drivers, 30-hour battery life, and superior sound quality.",
        price: 34990,
        image: [g_img3],
        category: "Audio",
        subCategory: "Headphones",
        variants: ["Black", "Silver"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Google Pixel 8",
        description: "A compact smartphone with Tensor G3 chip, 6.2-inch Actua display, and 50MP camera with enhanced AI features.",
        price: 75999,
        image: [g_img4],
        category: "Smartphones",
        subCategory: "Mid-Range",
        variants: ["128GB", "256GB"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Apple Watch Ultra 2",
        description: "A rugged smartwatch with a 1.92-inch Retina display, S9 SiP, and advanced health features like ECG and blood oxygen monitoring.",
        price: 89900,
        image: [g_img5],
        category: "Wearables",
        subCategory: "Smartwatches",
        variants: ["Titanium"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Bose QuietComfort Ultra Earbuds",
        description: "Wireless earbuds with immersive audio, industry-leading noise cancellation, and 6-hour battery life.",
        price: 25900,
        image: [g_img6],
        category: "Audio",
        subCategory: "Earbuds",
        variants: ["Black", "White Smoke"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "DJI Mavic 3 Classic",
        description: "A professional drone with a 20MP Hasselblad camera, 46-minute flight time, and 5.1K video recording.",
        price: 159999,
        image: [g_img7],
        category: "Drones",
        subCategory: "Professional",
        variants: ["Standard", "Fly More Combo"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Samsung Galaxy Watch 6",
        description: "A stylish smartwatch with a 1.5-inch Super AMOLED display, Exynos W930, and comprehensive health tracking.",
        price: 29999,
        image: [g_img8],
        category: "Wearables",
        subCategory: "Smartwatches",
        variants: ["40mm", "44mm"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Anker Soundcore Liberty 3 Pro",
        description: "Wireless earbuds with coaxial acoustic design, active noise cancellation, and 8-hour battery life.",
        price: 12999,
        image: [g_img9],
        category: "Audio",
        subCategory: "Earbuds",
        variants: ["Black", "White"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "ASUS ROG Zephyrus G14 (2024)",
        description: "A compact gaming laptop with AMD Ryzen 9 8945HS, RTX 4070, and 14-inch 120Hz OLED display.",
        price: 189999,
        image: [g_img10],
        category: "Laptops",
        subCategory: "Gaming",
        variants: ["16GB RAM", "32GB RAM"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Xiaomi 14",
        description: "A premium smartphone with Snapdragon 8 Gen 3, 6.36-inch AMOLED display, and 90W hypercharging.",
        price: 69999,
        image: [g_img11],
        category: "Smartphones",
        subCategory: "Premium",
        variants: ["256GB", "512GB"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Amazon Echo Show 10",
        description: "A 10.1-inch smart display with Alexa, 1080p video calls, and motion-tracking for seamless interaction.",
        price: 22999,
        image: [g_img12],
        category: "Smart Home",
        subCategory: "Displays",
        variants: ["Charcoal", "Glacier White"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Fitbit Versa 4",
        description: "A fitness smartwatch with SpO2 monitoring, built-in GPS, and 6-day battery life.",
        price: 19990,
        image: [g_img13],
        category: "Wearables",
        subCategory: "Fitness Trackers",
        variants: ["Black", "Pink Sand"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Sony PlayStation 5 Slim",
        description: "A compact gaming console with 1TB SSD, 4K gaming, and support for ray tracing.",
        price: 54990,
        image: [g_img14],
        category: "Gaming",
        subCategory: "Consoles",
        variants: ["Disc", "Digital"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Microsoft Surface Laptop 5",
        description: "A sleek laptop with Intel Core i7, 13.5-inch PixelSense display, and 18-hour battery life.",
        price: 129900,
        image: [g_img15],
        category: "Laptops",
        subCategory: "Ultrabooks",
        variants: ["16GB RAM", "32GB RAM"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "JBL Charge 5",
        description: "A portable Bluetooth speaker with 20-hour battery life, IP67 waterproofing, and powerful bass.",
        price: 15990,
        image: [g_img16],
        category: "Audio",
        subCategory: "Speakers",
        variants: ["Black", "Blue"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Razer Blade 15 (2023)",
        description: "A gaming laptop with Intel Core i7-13800H, RTX 4070, and 15.6-inch QHD 240Hz display.",
        price: 229999,
        image: [g_img17],
        category: "Laptops",
        subCategory: "Gaming",
        variants: ["1TB SSD", "2TB SSD"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Garmin Forerunner 955",
        description: "A multisport watch with solar charging, heart rate monitoring, and up to 20 days of battery life.",
        price: 49990,
        image: [g_img18],
        category: "Wearables",
        subCategory: "Sports Watches",
        variants: ["Black", "Whitestone"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Nintendo Switch OLED",
        description: "A hybrid console with a 7-inch OLED display, 64GB storage, and enhanced audio.",
        price: 34990,
        image: [g_img19],
        category: "Gaming",
        subCategory: "Consoles",
        variants: ["White", "Neon Red/Blue"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Ring Stick Up Cam Battery",
        description: "A versatile 1080p security camera with motion detection and battery-powered design.",
        price: 9999,
        image: [g_img20],
        category: "Smart Home",
        subCategory: "Security",
        variants: ["White", "Black"],
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "aaaau",
        name: "Bose QuietComfort 45 Headphones",
        description: "Wireless headphones with active noise cancellation, 24-hour battery life, and balanced audio.",
        price: 29990,
        image: [g_img21],
        category: "Audio",
        subCategory: "Headphones",
        variants: ["Black", "White Smoke"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaav",
        name: "Logitech G Pro X Wireless",
        description: "A gaming headset with 50mm drivers, Blue VO!CE mic, and 20-hour battery life.",
        price: 18990,
        image: [g_img22],
        category: "Gaming",
        subCategory: "Accessories",
        variants: ["Black"],
        date: 1716635445448,
        bestseller: false
    },
    {
        _id: "aaaaw",
        name: "Meta Quest 3",
        description: "A mixed-reality VR headset with Snapdragon XR2 Gen 2, 4K+ displays, and 120Hz refresh rate.",
        price: 64990,
        image: [g_img23],
        category: "Gaming",
        subCategory: "VR",
        variants: ["128GB", "512GB"],
        date: 1716636545448,
        bestseller: false
    },
    {
        _id: "aaaax",
        name: "Samsung Odyssey G9",
        description: "A 49-inch curved QLED gaming monitor with 240Hz refresh rate and 1ms response time.",
        price: 129999,
        image: [g_img24],
        category: "Gaming",
        subCategory: "Monitors",
        variants: ["Black"],
        date: 1716637645448,
        bestseller: false
    },
    {
        _id: "aaaay",
        name: "Anker PowerCore 20000",
        description: "A 20000mAh power bank with 20W PowerIQ 3.0 fast charging and compact design.",
        price: 4999,
        image: [g_img25],
        category: "Accessories",
        subCategory: "Power Banks",
        variants: ["Black", "White"],
        date: 1716638745448,
        bestseller: false
    },
    {
        _id: "aaaaz",
        name: "LG OLED C4 65-Inch TV",
        description: "A 65-inch 4K OLED TV with 120Hz refresh rate, Dolby Vision IQ, and webOS smart platform.",
        price: 249990,
        image: [g_img26],
        category: "Televisions",
        subCategory: "OLED",
        variants: ["55-Inch", "65-Inch"],
        date: 1716639845448,
        bestseller: false
    },
    {
        _id: "aaaba",
        name: "GoPro HERO 12 Black",
        description: "An action camera with 5.3K HDR video, HyperSmooth 5.0 stabilization, and 33ft waterproofing.",
        price: 39990,
        image: [g_img27],
        category: "Cameras",
        subCategory: "Action",
        variants: ["Standard", "Creator Edition"],
        date: 1716640945448,
        bestseller: false
    },
    {
        _id: "aaabb",
        name: "Razer DeathAdder V2 Pro",
        description: "A wireless gaming mouse with 20K DPI sensor, optical switches, and 70-hour battery life.",
        price: 10990,
        image: [g_img28],
        category: "Gaming",
        subCategory: "Accessories",
        variants: ["Black"],
        date: 1716642045448,
        bestseller: false
    },
    {
        _id: "aaabc",
        name: "OnePlus 12",
        description: "A flagship smartphone with Snapdragon 8 Gen 3, 6.82-inch QHD+ AMOLED, and 100W SUPERVOOC charging.",
        price: 69999,
        image: [g_img29],
        category: "Smartphones",
        subCategory: "Premium",
        variants: ["256GB", "512GB"],
        date: 1716643145448,
        bestseller: false
    },
    {
        _id: "aaabd",
        name: "Jabra Elite 8 Active",
        description: "Rugged wireless earbuds with ANC, Dolby Audio, and 8-hour battery life.",
        price: 17990,
        image: [g_img30],
        category: "Audio",
        subCategory: "Earbuds",
        variants: ["Black", "Navy"],
        date: 1716644245448,
        bestseller: false
    },
    {
        _id: "aaabe",
        name: "Lenovo Legion 5 Pro (2023)",
        description: "A gaming laptop with AMD Ryzen 7 7745HX, RTX 4070, and 16-inch WQXGA 165Hz display.",
        price: 159999,
        image: [g_img31],
        category: "Laptops",
        subCategory: "Gaming",
        variants: ["1TB SSD", "2TB SSD"],
        date: 1716645345448,
        bestseller: false
    },
    {
        _id: "aaabf",
        name: "Sony A7 IV Mirrorless Camera",
        description: "A full-frame mirrorless camera with 33MP sensor, 4K 60fps video, and real-time Eye AF.",
        price: 249990,
        image: [g_img32],
        category: "Cameras",
        subCategory: "Mirrorless",
        variants: ["Body Only", "With 28-70mm Lens"],
        date: 1716646445448,
        bestseller: false
    },
    {
        _id: "aaabg",
        name: "Tile Mate (2022)",
        description: "A Bluetooth tracker with 250ft range, IP67 water resistance, and 3-year battery life.",
        price: 2499,
        image: [g_img33],
        category: "Accessories",
        subCategory: "Trackers",
        variants: ["Black", "White"],
        date: 1716647545448,
        bestseller: false
    },
    {
        _id: "aaabh",
        name: "Samsung Galaxy Tab S9 Ultra",
        description: "A 14.6-inch Dynamic AMOLED 2X tablet with Snapdragon 8 Gen 2 and S Pen support.",
        price: 119999,
        image: [g_img34],
        category: "Tablets",
        subCategory: "Premium",
        variants: ["256GB", "512GB"],
        date: 1716648645448,
        bestseller: false
    },
    {
        _id: "aaabi",
        name: "Bose SoundLink Flex",
        description: "A compact Bluetooth speaker with 12-hour battery life, IP67 waterproofing, and rich sound.",
        price: 14990,
        image: [g_img35],
        category: "Audio",
        subCategory: "Speakers",
        variants: ["Black", "Stone Blue"],
        date: 1716649745448,
        bestseller: false
    },
    {
        _id: "aaabj",
        name: "Apple MacBook Pro 14 (M3 Max)",
        description: "A high-performance laptop with M3 Max chip, 14.2-inch Liquid Retina XDR, and 18-hour battery life.",
        price: 319900,
        image: [g_img36],
        category: "Laptops",
        subCategory: "Workstations",
        variants: ["512GB", "1TB"],
        date: 1716650845448,
        bestseller: false
    },
    {
        _id: "aaabk",
        name: "Google Nest Doorbell Wired",
        description: "A 1080p video doorbell with HDR, intelligent alerts, and continuous recording.",
        price: 17990,
        image: [g_img37],
        category: "Smart Home",
        subCategory: "Security",
        variants: ["Snow", "Ivy"],
        date: 1716651945448,
        bestseller: false
    },
    {
        _id: "aaabl",
        name: "Oppo Find X7 Ultra",
        description: "A flagship smartphone with Snapdragon 8 Gen 3, 6.82-inch AMOLED, and 50MP quad-camera system.",
        price: 84999,
        image: [g_img38],
        category: "Smartphones",
        subCategory: "Premium",
        variants: ["256GB", "512GB"],
        date: 1716653045448,
        bestseller: false
    },
    {
        _id: "aaabm",
        name: "Logitech MX Mechanical",
        description: "A wireless mechanical keyboard with tactile switches, backlighting, and multi-device connectivity.",
        price: 14990,
        image: [g_img39],
        category: "Accessories",
        subCategory: "Keyboards",
        variants: ["Graphite", "Grey"],
        date: 1716654145448,
        bestseller: false
    },
    {
        _id: "aaabn",
        name: "Acer Predator Helios 16 (2024)",
        description: "A gaming laptop with Intel Core i9-13900HX, RTX 4080, and 16-inch QHD+ 240Hz display.",
        price: 199999,
        image: [g_img40],
        category: "Laptops",
        subCategory: "Gaming",
        variants: ["1TB SSD", "2TB SSD"],
        date: 1716655245448,
        bestseller: false
    },
    {
        _id: "aaabo",
        name: "Vivo X100 Pro",
        description: "A premium smartphone with MediaTek Dimensity 9300, 6.78-inch AMOLED, and 50MP Zeiss triple camera.",
        price: 89999,
        image: [g_img41],
        category: "Smartphones",
        subCategory: "Premium",
        variants: ["256GB", "512GB"],
        date: 1716656345448,
        bestseller: false
    },
    {
        _id: "aaabp",
        name: "Roku Smart TV 4K",
        description: "A 43-inch 4K LED TV with Dolby Vision, HDR10, and built-in Roku streaming platform.",
        price: 29990,
        image: [g_img42],
        category: "Smart Home",
        subCategory: "Streaming",
        variants: ["Black"],
        date: 1716657445448,
        bestseller: false
    },
    {
        _id: "aaabq",
        name: "Ecovacs Deebot T20 Omni",
        description: "A robot vacuum and mop with 6000Pa suction, auto-emptying, and hot-water mopping.",
        price: 109999,
        image: [g_img43],
        category: "Smart Home",
        subCategory: "Cleaning",
        variants: ["White"],
        date: 1716658545448,
        bestseller: false
    },
    {
        _id: "aaabr",
        name: "Samsung QN90C 55-Inch QLED TV",
        description: "A 55-inch 4K QLED TV with 120Hz refresh rate, Neo Quantum HDR, and Tizen OS.",
        price: 159999,
        image: [g_img44],
        category: "Televisions",
        subCategory: "QLED",
        variants: ["55-Inch", "65-Inch"],
        date: 1716659645448,
        bestseller: false
    },
    {
        _id: "aaabs",
        name: "Corsair K65 RGB Mini",
        description: "A compact mechanical gaming keyboard with Cherry MX Speed switches and customizable RGB lighting.",
        price: 12990,
        image: [g_img45],
        category: "Gaming",
        subCategory: "Accessories",
        variants: ["Black", "White"],
        date: 1716660745448,
        bestseller: false
    },
    {
        _id: "aaabt",
        name: "DJI Osmo Action 4",
        description: "A rugged action camera with 4K HDR video, 1/1.3-inch sensor, and 10m waterproofing.",
        price: 34990,
        image: [g_img46],
        category: "Cameras",
        subCategory: "Compact",
        variants: ["Standard", "Adventure Combo"],
        date: 1716661845448,
        bestseller: false
    },
    {
        _id: "aaabu",
        name: "iRobot Roomba j7+",
        description: "A robot vacuum with auto-emptying, PrecisionVision navigation, and pet waste avoidance.",
        price: 79990,
        image: [g_img47],
        category: "Smart Home",
        subCategory: "Cleaning",
        variants: ["Black"],
        date: 1716662945448,
        bestseller: false
    },
    {
        _id: "aaabv",
        name: "ASUS ZenBook 14 OLED (2024)",
        description: "A premium ultrabook with Intel Core Ultra 7, 14-inch 3K OLED display, and 15-hour battery life.",
        price: 129999,
        image: [g_img48],
        category: "Laptops",
        subCategory: "Workstations",
        variants: ["512GB SSD", "1TB SSD"],
        date: 1716664045448,
        bestseller: false
    },
    {
        _id: "aaabw",
        name: "Arlo Pro 4 Spotlight Camera",
        description: "A wireless 2K security camera with color night vision and built-in spotlight.",
        price: 19990,
        image: [g_img49],
        category: "Smart Home",
        subCategory: "Security",
        variants: ["White", "Black"],
        date: 1716665145448,
        bestseller: false
    },
    {
        _id: "aaabx",
        name: "Netgear Nighthawk AX5400",
        description: "A Wi-Fi 6 router with 5.4Gbps speeds, 6-stream connectivity, and advanced QoS.",
        price: 24990,
        image: [g_img50],
        category: "Networking",
        subCategory: "Routers",
        variants: ["Black"],
        date: 1716666245448,
        bestseller: false
    },
    {
        _id: "aaaby",
        name: "Sony WF-C510",
        description: "Affordable wireless earbuds with 11-hour battery life, IPX4 water resistance, and clear sound.",
        price: 5990,
        image: [g_img51],
        category: "Audio",
        subCategory: "Earbuds",
        variants: ["Black", "White"],
        date: 1716667345448,
        bestseller: false
    },
    {
        _id: "aaabz",
        name: "Dell Alienware AW2723DF",
        description: "A 27-inch QHD gaming monitor with 280Hz refresh rate and 1ms response time.",
        price: 59990,
        image: [g_img52],
        category: "Gaming",
        subCategory: "Monitors",
        variants: ["Black"],
        date: 1716668445448,
        bestseller: false
    }
];
