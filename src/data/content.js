export const NAV_ITEMS = [
  { label: "Store", href: "https://www.apple.com/us/shop/goto/store" },
  { label: "Mac", href: "https://www.apple.com/mac/" },
  { label: "iPad", href: "https://www.apple.com/ipad/" },
  { label: "iPhone", href: "https://www.apple.com/iphone/" },
  { label: "Watch", href: "https://www.apple.com/watch/" },
  { label: "Vision", href: "https://www.apple.com/apple-vision-pro/" },
  { label: "AirPods", href: "https://www.apple.com/airpods/" },
  { label: "TV & Home", shortLabel: "Home", href: "https://www.apple.com/tv-home/" },
  { label: "Entertainment", href: "https://www.apple.com/entertainment/" },
  { label: "Accessories", href: "https://www.apple.com/us/shop/goto/buy_accessories" },
  { label: "Support", href: "https://support.apple.com/?cid=gn-ols-home-hp-tab" },
];

export const RIBBON = {
  text: "Thank you, Veterans. We honor you today and every day.",
  linkLabel: "Learn about your special savings",
  href: "https://www.apple.com/us/shop/goto/eppstore/veteransandmilitary",
};

const img = (name) => ({
  sm: `/assets/apple/${name}-sm.jpg`,
  md: `/assets/apple/${name}-md.jpg`,
  lg: `/assets/apple/${name}-lg.jpg`,
});

export const HEROES = [
  {
    id: "holiday-2026",
    theme: "dark",
    background: "#5a122c",
    title: "Gifts they’ll love.",
    subtitle: "Find their perfect match this holiday.",
    align: "bottom",
    images: img("hero-holiday"),
    ctas: [
      { label: "Shop gifts", href: "https://www.apple.com/us/shop/goto/store", variant: "primary" },
    ],
  },
  {
    id: "iphone-duo",
    theme: "light",
    background: "#f5f5f7",
    title: "iPhone Duo",
    subtitle: "Hello, hello.",
    align: "top",
    images: img("hero-duo"),
    ctas: [
      { label: "Learn more", href: "https://www.apple.com/iphone-duo/", variant: "primary" },
      { label: "Buy", href: "https://www.apple.com/us/shop/goto/buy_iphone/iphone_duo", variant: "secondary" },
    ],
  },
  {
    id: "macbook-pro",
    theme: "dark",
    background: "#000000",
    title: "MacBook Pro",
    subtitle: "PROLED XDR Display",
    subtitleClassName:
      "bg-gradient-to-r from-[#2997ff] via-[#9b8cff] to-[#ff7a45] bg-clip-text text-transparent",
    align: "top",
    images: img("hero-mac"),
    ctas: [
      { label: "Learn more", href: "https://www.apple.com/macbook-pro/", variant: "primary" },
      { label: "Buy", href: "https://www.apple.com/us/shop/goto/buy_mac/macbook_pro", variant: "secondary" },
    ],
  },
];

export const PROMOS = [
  {
    id: "iphone-18-pro",
    theme: "dark",
    background: "#000000",
    title: "iPhone 18 Pro",
    subtitle: "Pro further.",
    images: img("promo-iphone"),
    ctas: [
      { label: "Learn more", href: "https://www.apple.com/iphone-18-pro/", variant: "primary" },
      { label: "Buy", href: "https://www.apple.com/us/shop/goto/buy_iphone/iphone_18_pro", variant: "secondary" },
    ],
  },
  {
    id: "apple-watch-series-12",
    theme: "dark",
    background: "#000000",
    split: true,
    logoSrc: "/assets/apple/logo-watch.png",
    logoAlt: "Apple Watch Series 12",
    logoWidth: 232,
    subtitle: "The most accurate heart rate sensing in a wearable.¹",
    images: img("promo-watch"),
    ctas: [
      { label: "Learn more", href: "https://www.apple.com/apple-watch-series-12/", variant: "primary" },
      { label: "Buy", href: "https://www.apple.com/us/shop/goto/buy_watch/apple_watch_series_12", variant: "secondary" },
    ],
  },
  {
    id: "ipad",
    theme: "light",
    background: "#f5f5f7",
    title: "iPad",
    subtitle: "Now with the speed of the A16 chip and double the starting storage.",
    images: img("promo-ipad"),
    ctas: [
      { label: "Learn more", href: "https://www.apple.com/ipad-11/", variant: "primary" },
      { label: "Buy", href: "https://www.apple.com/us/shop/goto/buy_ipad/ipad", variant: "secondary" },
    ],
  },
  {
    id: "airpods-pro-3",
    theme: "light",
    background: "#f5f5f7",
    title: "AirPods Pro 3",
    subtitle: "The world’s best in-ear Active Noise Cancellation.",
    images: img("promo-airpods"),
    ctas: [
      { label: "Learn more", href: "https://www.apple.com/airpods-pro/", variant: "primary" },
      { label: "Buy", href: "https://www.apple.com/us/shop/goto/buy_airpods/airpods_pro_3", variant: "secondary" },
    ],
  },
  {
    id: "apple-upgrade",
    theme: "light",
    background: "#f5f5f7",
    logoSrc: "/assets/apple/logo-apple-upgrade.png",
    logoAlt: "Apple Upgrade",
    logoWidth: 150,
    subtitle: "Love it. Lease it. Upgrade it.²",
    images: img("promo-upgrade"),
    ctas: [
      { label: "Learn more", href: "https://www.apple.com/us/shop/goto/apple_upgrade", variant: "primary" },
    ],
  },
  {
    id: "apple-card",
    theme: "light",
    background: "#f5f5f7",
    logoSrc: "/assets/apple/logo-apple-card.png",
    logoAlt: "Apple Card",
    logoWidth: 94,
    subtitle: "Get up to 3% Daily Cash back with every purchase.",
    images: img("promo-card"),
    ctas: [
      { label: "Learn more", href: "https://www.apple.com/apple-card/", variant: "primary" },
      { label: "Apply now", href: "https://card.apple.com/apply/application", variant: "secondary" },
    ],
  },
];

export const ENTERTAINMENT = [
  {
    title: "Stick",
    note: "Comedy",
    detail: "New season.",
    image: "/assets/apple/ent-stick.jpg",
    imageSm: "/assets/apple/ent-stick-sm.jpg",
  },
  {
    title: "Nocturne",
    note: "Crime",
    detail: "The only way to save a villain’s missing victim is to get close enough to risk becoming one.",
    image: "/assets/apple/ent-nocturne.jpg",
    imageSm: "/assets/apple/ent-nocturne-sm.jpg",
  },
  {
    title: "Formula 1",
    note: "Live sports",
    detail: "Every Grand Prix, live.",
    image: "/assets/apple/ent-f1.jpg",
    imageSm: "/assets/apple/ent-f1-sm.jpg",
  },
  {
    title: "Awkwafina: The Unlikely Cook",
    note: "Documentary",
    detail: "Awkwafina sets off on a culinary road trip to revive her family’s restaurant.",
    image: "/assets/apple/ent-awkwafina.jpg",
    imageSm: "/assets/apple/ent-awkwafina-sm.jpg",
  },
  {
    title: "MLS",
    note: "Live sports",
    detail: "Every match. Every week.",
    image: "/assets/apple/ent-mls.jpg",
    imageSm: "/assets/apple/ent-mls-sm.jpg",
  },
  {
    title: "Tenzing",
    note: "Drama",
    detail: "Based on the true story of the thrilling quest to summit Everest for the first time.",
    image: "/assets/apple/ent-tenzing.jpg",
    imageSm: "/assets/apple/ent-tenzing-sm.jpg",
  },
];

// Grouped exactly like apple.com: five columns on desktop,
// each group becomes its own accordion on mobile.
export const FOOTER_COLUMNS = [
  [
    {
      title: "Shop and Learn",
      links: [
        { label: "Store", href: "https://www.apple.com/us/shop/goto/store" },
        { label: "Mac", href: "https://www.apple.com/mac/" },
        { label: "iPad", href: "https://www.apple.com/ipad/" },
        { label: "iPhone", href: "https://www.apple.com/iphone/" },
        { label: "Watch", href: "https://www.apple.com/watch/" },
        { label: "Vision", href: "https://www.apple.com/apple-vision-pro/" },
        { label: "AirPods", href: "https://www.apple.com/airpods/" },
        { label: "Home", href: "https://www.apple.com/tv-home/" },
        { label: "AirTag", href: "https://www.apple.com/airtag/" },
        { label: "Accessories", href: "https://www.apple.com/us/shop/goto/buy_accessories" },
        { label: "Gift Cards", href: "https://www.apple.com/us/shop/goto/giftcards" },
      ],
    },
    {
      title: "Apple Wallet",
      links: [
        { label: "Wallet", href: "https://www.apple.com/wallet/" },
        { label: "Apple Card", href: "https://www.apple.com/apple-card/" },
        { label: "Apple Pay", href: "https://www.apple.com/apple-pay/" },
        { label: "Apple Cash", href: "https://www.apple.com/apple-pay/" },
      ],
    },
  ],
  [
    {
      title: "Account",
      links: [
        { label: "Manage Your Apple Account", href: "https://account.apple.com/" },
        { label: "Apple Store Account", href: "https://www.apple.com/us/shop/goto/account" },
        { label: "iCloud.com", href: "https://www.icloud.com/" },
      ],
    },
    {
      title: "Entertainment",
      links: [
        { label: "Apple One", href: "https://www.apple.com/apple-one/" },
        { label: "Apple TV", href: "https://www.apple.com/apple-tv-plus/" },
        { label: "Apple Music", href: "https://www.apple.com/apple-music/" },
        { label: "Apple Arcade", href: "https://www.apple.com/apple-arcade/" },
        { label: "Apple Fitness+", href: "https://www.apple.com/apple-fitness-plus/" },
        { label: "Apple News+", href: "https://www.apple.com/apple-news/" },
        { label: "Apple Podcasts", href: "https://www.apple.com/apple-podcasts/" },
        { label: "Apple Books", href: "https://www.apple.com/apple-books/" },
        { label: "App Store", href: "https://www.apple.com/app-store/" },
      ],
    },
  ],
  [
    {
      title: "Apple Store",
      links: [
        { label: "Find a Store", href: "https://www.apple.com/retail/" },
        { label: "Genius Bar", href: "https://www.apple.com/retail/geniusbar/" },
        { label: "Today at Apple", href: "https://www.apple.com/today/" },
        { label: "Group Reservations", href: "https://www.apple.com/today/groups/" },
        { label: "Apple Camp", href: "https://www.apple.com/today/camp/" },
        { label: "Apple Store App", href: "https://www.apple.com/apple-store-app/" },
        { label: "Certified Refurbished", href: "https://www.apple.com/us/shop/goto/special_deals" },
        { label: "Apple Upgrade", href: "https://www.apple.com/us/shop/goto/apple_upgrade" },
        { label: "Apple Trade In", href: "https://www.apple.com/us/shop/goto/trade_in" },
        { label: "Financing", href: "https://www.apple.com/us/shop/goto/payment_plan" },
        { label: "Carrier Deals at Apple", href: "https://www.apple.com/us/shop/goto/buy_iphone/carrier_offers" },
        { label: "Order Status", href: "https://www.apple.com/us/shop/goto/order/list" },
        { label: "Shopping Help", href: "https://www.apple.com/us/shop/goto/help" },
      ],
    },
  ],
  [
    {
      title: "For Business",
      links: [
        { label: "Apple and Business", href: "https://www.apple.com/business/" },
        { label: "Shop for Business", href: "https://www.apple.com/retail/business/" },
      ],
    },
    {
      title: "For Education",
      links: [
        { label: "Apple and Education", href: "https://www.apple.com/education/" },
        { label: "Shop for K-12", href: "https://www.apple.com/education/k12/" },
        { label: "Shop for College", href: "https://www.apple.com/us/shop/goto/educationrouting" },
      ],
    },
    {
      title: "For Healthcare",
      links: [
        { label: "Apple and Healthcare", href: "https://www.apple.com/healthcare/" },
      ],
    },
    {
      title: "For Government",
      links: [
        { label: "Apple and Government", href: "https://www.apple.com/government/" },
        { label: "Shop for Veterans and Military", href: "https://www.apple.com/us/shop/goto/eppstore/veteransandmilitary" },
        { label: "Shop for State and Local Employees", href: "https://www.apple.com/us/shop/goto/eppstore/stateandlocal" },
        { label: "Shop for Federal Employees", href: "https://www.apple.com/us/shop/goto/eppstore/federal" },
      ],
    },
  ],
  [
    {
      title: "Apple Values",
      links: [
        { label: "Accessibility", href: "https://www.apple.com/accessibility/" },
        { label: "Education", href: "https://www.apple.com/education/" },
        { label: "Environment", href: "https://www.apple.com/environment/" },
        { label: "Inclusion and Diversity", href: "https://www.apple.com/diversity/" },
        { label: "Privacy", href: "https://www.apple.com/privacy/" },
        { label: "Racial Equity and Justice", href: "https://www.apple.com/racial-equity-justice-initiative/" },
        { label: "Supply Chain Innovation", href: "https://www.apple.com/supply-chain/" },
      ],
    },
    {
      title: "About Apple",
      links: [
        { label: "Newsroom", href: "https://www.apple.com/newsroom/" },
        { label: "Apple Leadership", href: "https://www.apple.com/leadership/" },
        { label: "Career Opportunities", href: "https://www.apple.com/careers/" },
        { label: "Investors", href: "https://investor.apple.com/" },
        { label: "Ethics & Compliance", href: "https://www.apple.com/compliance/" },
        { label: "Events", href: "https://www.apple.com/apple-events/" },
        { label: "Contact Apple", href: "https://www.apple.com/contact/" },
      ],
    },
  ],
];

export const FOOTER_NOTES = [
  "Based on data from an Apple-conducted study of heart rate accuracy, during July and August 2026, utilizing commercially available best-selling wearables available as of June 2026. For more information, visit apple.com/HRAccuracy.",
  "Apple Upgrade is a device leasing program available in the U.S. (excluding U.S. territories). Leases are provided by Klarna: subject to eligibility and credit approval, including final approval at checkout. Device must be in good condition upon return; damage fees may apply.",
  "To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.",
  "A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV. Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.",
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "https://www.apple.com/legal/privacy/" },
  { label: "Terms of Use", href: "https://www.apple.com/legal/internet-services/terms/site.html" },
  { label: "Sales and Refunds", href: "https://www.apple.com/us/shop/goto/help/sales_refunds" },
  { label: "Legal", href: "https://www.apple.com/legal/" },
  { label: "Site Map", href: "https://www.apple.com/sitemap/" },
];
