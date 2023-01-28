import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Wireless",
    img: "https://res.cloudinary.com/dlykup1dh/image/upload/v1674900880/e-cart/earphones_b_1_fktype.webp"
  },
  {
    _id: uuid(),
    categoryName: "Speakers",
    img: "https://res.cloudinary.com/dlykup1dh/image/upload/v1674900795/e-cart/speaker3_jqagje.webp"
  },
  {
    _id: uuid(),
    categoryName: "Smart watch",
    img: "https://res.cloudinary.com/dlykup1dh/image/upload/v1674901941/e-cart/watch_3_nwa8jf.webp"
  },
  {
    _id: uuid(),
    categoryName: "Wired",
    img: "https://res.cloudinary.com/dlykup1dh/image/upload/v1674901189/e-cart/earphones_a_1_m6ng1b.webp"
  }
];
