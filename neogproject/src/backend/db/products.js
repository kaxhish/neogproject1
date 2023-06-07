import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Ikigai",
    author: "Hector Garcia",
    price: "600",
    categoryName: "non-fiction",
    rating:"4.1",
    image:"https://cdn2.penguin.com.au/covers/original/9781786330895.jpg"
  },
  {
    _id: uuid(),
    title: "Atomic habits",
    author: "james clear",
    price: "390",
    categoryName: "self-help",
    rating:"4.8",
    image:"https://cdn2.penguin.com.au/covers/original/9781473565425.jpg"
  },
  {
    _id: uuid(),
    title: "The Almanack of Naval Ravikant",
    author: "Tim-Ferris",
    price: "1000",
    categoryName: "self-help",
    rating:"5.8",
    image:"https://kbimages1-a.akamaihd.net/b4036c6a-e74c-414a-a36d-e838999c4740/1200/1200/False/the-almanack-of-naval-ravikant.jpg"
  },
  {
    _id: uuid(),
    title: "Who will cry when you die",
    author: "Robin sharma",
    price: "1200",
    categoryName: "non-fiction",
    rating:"2.1",
    image:"https://myreadforchange.com/wp-content/uploads/2021/04/amazoncom-rs.jpg"
  },
  {
    _id: uuid(),
    title: "Man's search for meaning",
    author: "Viktore Frankl",
    price: "590",
    categoryName: "non-fiction",
    rating:"4.8",
    image:"https://th.bing.com/th/id/OIP.opMguM3pgWP0G3foLmD-OgHaLx?pid=ImgDet&rs=1"
  },
  {
    _id: uuid(),
    title: "Do it Today",
    author: "Darius Foroux",
    price: "100",
    categoryName: "self-help",
    rating:"3.8",
    image:"https://m.media-amazon.com/images/I/41-G7AIOZyL._SY346_.jpg"
  },
  {
    _id: uuid(),
    title: "The Power Of Now",
    author: "Eckhart Tolle",
    price: "800",
    categoryName: "self-help",
    rating:"1.8",
    image:"data:image/jpeg;base64,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"
  },
  {
    _id: uuid(),
    title: "The Thousand Names",
    author: "Django wexler",
    price: "1090",
    categoryName: "fiction",
    rating:"2.1",
    image:"https://i2.wp.com/www.rantingdragon.com/anticipation/bestof2013/big/13.jpg"
  },
  {
    _id: uuid(),
    title: "The Alchemist",
    author: "panlo caelno",
    price: "2000",
    categoryName: "fiction",
    rating:"1.8",
    image:"https://th.bing.com/th/id/OIP.VstFlWVjoGA72T1UYfjYkwHaL9?pid=ImgDet&rs=1"
  },
 
];
