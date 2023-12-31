export const storeProducts = [
  {
    id: 1,
    title: "Avast-Antiviruz",
    image: "data:image/png;base64,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",
    price: 10,
    category: "software",
    company: "Avast",
    info: "Greatest antivirus software ever , to keep your system free from viruses",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 2,
    title: "Avira Liscence Agreement",
    image: "data:image/png;base64,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",
    price: 16,
    category: "software",
    company: "Avira",
    info: "This Avira Product End User License Agreement and Terms of Use  is a legal agreement between you individually, or if you are authorized to acquire Avira’s products",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 3,
    title: "HP External Disk 1 TB",
    image: "https://rukminim2.flixcart.com/image/850/1000/external-hard-drive/j/w/e/hp-1tb-original-imaeehxkybbg3tx7.jpeg?q=90",
    category: "electronics",
    price: 8,
    company: "hp",
    info: "Small, Compact & Wight less hard drive !! It is a portable and quality one.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 4,
    title: "Apache Liscence",
    image: "https://www.mend.io/wp-content/media/2021/05/top-10-apache-license-questions-answered.png",
    category : "software",
    price: 18,
    company: "Apache",
    info: "The Apache License is a permissive software license written by the Apache Software Foundation.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 5,
    title: "D-Link WiFi Routers",
    image: "https://www.abtech-me.com/pub/media/catalog/product/cache/cf3f2243ef4940fd5c66f2ff035145ac/3/0/300.jpg",
    price: 24,
    category: "electronics",
    company: "D-Link",
    info: "D-Link offers a comprehensive range of home networking solutions designed to meet the diverse needs of every family.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 6,
    title: "Yamaha LoudSpeakers",
    image: "https://m.media-amazon.com/images/I/612rBFiBRzL.jpg",
    category : "electronics",
    price: 17,
    company: "Yamaha Music Company",
    info: "A range of passive loudspeakers offering high power handling and outstanding sonic performance in a portable, lightweight, yet rugged design.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 7,
    title: "Realme Buds Air 5",
    image: "https://fdn.gsmarena.com/imgroot/news/20/12/realme-buds-air-pro/-1200w5/gsmarena_007.jpg",
    category : "electronics",
    price: 30,
    company: "Realme",
    info: "Realme Buds is the first earphone made by realme which comes with 160% louder bass, 11 mm drivers and built-in magnets",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 8,
    title: "Mozilla Public Licenses",
    image: "https://fossa.com/blog/content/images/2021/04/mozilla-101.png",
    category : "software",
    price: 2,
    company: "MPL",
    info: "The Mozilla Public License is a  license for most Mozilla Foundation software such as Firefox and Thunderbird.",
    inCart: false,
    count: 0,
    total: 0,
  },
];

export const detailProduct = {
  id: 1,
  title: "Google Pixel - Black",
  image: "image/product-1.png",
  price: 10,
  company: "google",
  info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
  inCart: false,
  count: 0,
  total: 0,
};
