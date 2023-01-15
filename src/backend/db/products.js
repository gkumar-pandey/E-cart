import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    product: "OnePlus 6",
    img: "https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=126",
    category: "Phones",
    price: "₹100",
    rating: "⭐⭐⭐⭐⭐",

    qty: 1
  },
  {
    _id: uuid(),
    product: "Toothbrush",
    img: "https://images.pexels.com/photos/3588229/pexels-photo-3588229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "Health",
    price: "₹100",
    rating: "⭐⭐⭐⭐⭐",
    qty: 1
  },
  {
    _id: uuid(),
    product: "Football",
    img: "https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "Sports",
    price: "₹100",
    rating: "⭐⭐⭐⭐⭐",
    qty: 1
  },
  {
    _id: uuid(),
    product: "Toothpaste",
    category: "Health",
    img: "https://images.pexels.com/photos/4465125/pexels-photo-4465125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: "₹100",
    rating: "⭐⭐⭐⭐⭐",

    qty: 1
  },
  {
    _id: uuid(),
    product: "IPhone XR",
    category: "Phones",
    img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: "₹100",
    rating: "⭐⭐⭐⭐⭐",

    qty: 1
  },
  {
    _id: uuid(),
    product: "Basketball",
    category: "Sports",
    img: "https://images.pexels.com/photos/3558072/pexels-photo-3558072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: "₹100",
    rating: "⭐⭐⭐⭐⭐",

    qty: 1
  }
];
