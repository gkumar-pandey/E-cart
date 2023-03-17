import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    brand: "boat",
    type: "wired",
    addedInYear: 2021,
    alt: "boAt Bassheads 242",
    productName: "boAt Bassheads 242",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679040801/e-cart/p1_g792zl_rzoboq.jpg",
    description:
      "boAt Bassheads 242 in Ear Wired Earphones with Mic(Neon Green)",
    price: "1800.00",
    oldPrice: "3000.00",
    inStock: true,
    discount: 18,
    rating: 3
  },
  {
    _id: uuid(),
    type: "speaker",
    brand: "marshall",
    addedInYear: 2022,
    alt: "Marshall Stockwell",
    productName: "Marshall Stockwell",
    image:
      " https://res.cloudinary.com/dlykup1dh/image/upload/v1679040875/e-cart/p2_qqvfba_xhcmhj.jpg",
    description:
      "Marshall Stockwell Wireless Bluetooth Portable Speaker (Black)",
    price: "4750.00",
    oldPrice: "5000.00",
    inStock: true,
    discount: 5,
    rating: 5
  },
  {
    _id: uuid(),
    brand: "boat",
    type: "wireless",
    addedInYear: 2020,
    alt: "boAt Airdopes 121v2",
    productName: "boAt Airdopes 121v2",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679040964/e-cart/p3_gmwgnj_jbrtxh.jpg",
    description:
      "boAt Airdopes 121v2 True Wireless Earbuds with Upto 14 Hours Playback, LED Indicators and Multifunction Controls(Active Black)",
    price: "2100.00",
    oldPrice: "3000.00",
    inStock: true,
    discount: 10,
    rating: 4
  },
  {
    _id: uuid(),
    brand: "jbl",
    type: "speaker",
    addedInYear: 2020,
    alt: "JBL Charge 4",
    productName: "JBL Charge 4",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679041765/e-cart/p4_gsyfsc_u2x1ci.jpg",
    description:
      "JBL Charge 4, Wireless Portable Bluetooth Speaker, 7500mAh Built-in Powerbank, AUX & Type C (Without Mic, Black)",
    price: "2500.00",
    oldPrice: "3000.00",
    inStock: true,
    discount: 10,
    rating: 4
  },
  {
    _id: uuid(),
    brand: "sony",
    type: "wireless",
    addedInYear: 2022,
    alt: "Sony WH-CH510",
    productName: "Sony WH-CH510",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679041825/e-cart/p5_bxkrft_m2rvat.jpg",
    description:
      "Sony WH-CH510, On-Ear Headphones, up-to 35Hrs Playtime, Lightweight, Type-C, Play/Pause Control, 30mm Driver, Blue",
    price: "2900.00",
    oldPrice: "4000.00",
    inStock: false,
    discount: 15,
    rating: 3
  },
  {
    _id: uuid(),
    brand: "bose",
    type: "wireless",
    addedInYear: 2022,
    alt: "Bose SoundSport 761529",
    productName: "Bose SoundSport 761529",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679041916/e-cart/p6_xx3wxy_e7jfpk.jpg",
    description:
      "Bose SoundSport 761529 Bluetooth Wireless In Ear Earphones With Microphone Black",
    price: "500.00",
    oldPrice: "800.00",
    inStock: true,
    discount: 30,
    rating: 3
  },
  {
    _id: uuid(),
    brand: "boat",
    type: "wireless",
    addedInYear: 2022,
    alt: "boAt Airdopes 441",
    productName: "boAt Airdopes 441",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679041967/e-cart/p7_bjo3jn_ekni69.jpg",
    description:
      "boAt Airdopes 441 TWS Ear-Buds with Up to 35H Total Playback, Super Touch Controls, Secure Sports Fit & Type-C Port(Raging Red)",
    price: "2400.00",
    oldPrice: "3000.00",
    inStock: true,
    discount: 18,
    rating: 4
  },
  {
    _id: uuid(),
    addedInYear: 2021,
    brand: "bose",
    type: "noise_cancelling",
    productName: "Bose Touch Control,Triple Black",
    alt: "Bose Touch Control",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679041997/e-cart/p8_udpu7y_fbu1oi.jpg",
    description:
      "Bose QuietComfort Noise Cancelling Earbuds - Bluetooth Truly Wireless in Ear Earbuds, Noise Cancelling Earbuds with Touch Control,Triple Black",
    price: "1500.00",
    oldPrice: "3000.00",
    inStock: true,
    discount: 50,
    rating: 4
  },

  {
    _id: uuid(),
    brand: "marshall",
    type: "wireless",
    addedInYear: 2022,
    alt: "Marshall Major IV",
    productName: "Marshall Major IV",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679042029/e-cart/p9_rnye3d_btxidi.jpg",
    description:
      "Marshall Major IV Wireless Bluetooth On Ear Headphone with Mic (Black)",
    price: "4000.00",
    oldPrice: "5000.00",
    inStock: true,
    discount: 5,
    rating: 5
  },
  {
    _id: uuid(),
    addedInYear: 2019,
    brand: "jbl",
    type: "speaker",
    productName: "JBL Go 3",
    alt: "JBL Go 3",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679042055/e-cart/p10_py5knj_bidzv6.jpg",
    description:
      "JBL Go 3, Wireless Ultra Portable Bluetooth Speaker, Vibrant Colors with Rugged Fabric Design, Waterproof, Type C (Without Mic, Teal), Standard",
    price: "2999.00",
    oldPrice: "3999.00",
    inStock: false,
    discount: 30,
    rating: 4
  },
  {
    _id: uuid(),
    brand: "boat",
    type: "wireless",
    addedInYear: 2022,
    alt: "boAt Rockerz 450",
    productName: "boAt Rockerz 450",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679042079/e-cart/p11_mbade4_xfmgeo.jpg",
    description:
      "boAt Rockerz 450 Pro Bluetooth Wireless On Ear Headphones with Mic (Hazel Beige)",
    price: "1900.00",
    oldPrice: "2000.00",
    inStock: true,
    discount: 20,
    rating: 3
  },
  {
    _id: uuid(),
    brand: "sony",
    type: "wired",
    addedInYear: 2022,
    alt: "Sony MDR-XB55AP",
    productName: "Sony MDR-XB55AP",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679042109/e-cart/p12_auvdnf_jugued.jpg",
    description: "Sony MDR-XB55AP Wired in Ear Headphones with Mic (Black)",
    price: "2900.00",
    oldPrice: "4000.00",
    inStock: false,
    discount: 15,
    rating: 4
  },
  {
    _id: uuid(),
    type: "wireless",
    brand: "marshall",
    addedInYear: 2022,
    alt: "Marshall Minor II",
    productName: "Marshall Minor II",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679042131/e-cart/p13_xknthh_jwf1p0.jpg",
    description:
      "Marshall Minor II Wireless Bluetooth in Ear Headphone with Mic (Brown)",
    price: "3750.00",
    oldPrice: "4000.00",
    inStock: false,
    discount: 5,
    rating: 4
  },
  {
    _id: uuid(),
    brand: "sony",
    type: "wired",
    addedInYear: 2022,
    alt: "Sony MDR-ZX110AP",
    productName: "Sony MDR-ZX110AP",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679042157/e-cart/p14_ktssf6_vemqmn.jpg",
    description:
      "Sony MDR-ZX110AP Wired On-Ear Headphones with tangle free cable, 3.5mm Jack, Headset with Mic for phone calls and 1 Year Warranty - (Black)",
    price: "1390.00",
    oldPrice: "2000.00",
    inStock: true,
    discount: 15,
    rating: 4
  },
  {
    _id: uuid(),
    brand: "marshall",
    type: "speaker",
    addedInYear: 2022,
    alt: "Marshall Stanmore II",
    productName: "Marshall Stanmore II",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679042205/e-cart/p15_ygzmyx_r93xk9.jpg",
    description:
      "Marshall Stanmore II Bluetooth Speaker, Brown. Classic Marshall details such as a textured vinyl covering.",
    price: "4000.00",
    oldPrice: "5000.00",
    inStock: true,
    discount: 20,
    rating: 5
  },
  {
    _id: uuid(),
    brand: "bose",
    type: "wireless",
    addedInYear: 2022,
    alt: "Bose QuietComfort 35",
    productName: "Bose QuietComfort 35",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679042241/e-cart/p16_qmllyb_rnx9zx.jpg",
    description:
      "Bose QuietComfort 35 II Noise Cancelling Bluetooth Headphones— Wireless, Over Ear Headphones with Built in Microphone and Alexa Voice Control, Black",
    price: "4900.00",
    oldPrice: "7000.00",
    inStock: true,
    discount: 25,
    rating: 4
  },
  {
    _id: uuid(),
    brand: "sony",
    type: "speaker",
    addedInYear: 2022,
    alt: "Sony SRS-XB13",
    productName: "Sony SRS-XB13",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679042285/e-cart/p17_z6inbi_kw9pnc.jpg",
    description:
      "Sony SRS-XB13 Wireless Extra Bass Portable Compact Bluetooth Speaker with 16 Hours Battery Life, Type-C, IP67 Waterproof.",
    price: "4000.00",
    oldPrice: "5000.00",
    inStock: true,
    discount: 20,
    rating: 4
  },
  {
    _id: uuid(),
    brand: "bose",
    type: "noise_cancelling",
    addedInYear: 2022,
    alt: "Bose Sport Earbuds",
    productName: "Bose QuietComfort",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679042306/e-cart/p18_kbadek_vhe9rc.png",
    description:
      "Bose QuietComfort Noise Cancelling Earbuds - True Wireless Earbuds, Bluetooth in-Ear Headphones, The World's Most Effective Noise Cancelling Earbuds",
    price: "3900.00",
    oldPrice: "5000.00",
    inStock: true,
    discount: 30,
    rating: 4
  },
  {
    _id: uuid(),
    brand: "boat",
    type: "wireless",
    addedInYear: 2021,
    alt: "boAt Rockerz 550",
    productName: "boAt Rockerz 550",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1679042306/e-cart/p18_kbadek_vhe9rc.png",
    description:
      "boAt Rockerz 550 Bluetooth Wireless Over Ear Headphone with Mic (Black Symphony)",
    price: "900.00",
    oldPrice: "1000.00",
    inStock: false,
    discount: 30,
    rating: 4
  }
];
