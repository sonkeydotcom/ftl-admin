export const products = [
  {
    id: 1,
    title: "Classic T-Shirt",
    price: 25,
    description: "A comfortable and stylish classic T-shirt for everyday wear.",
    image:
      "https://images.vans.com/is/image/VansEU/VN000GGGNAV-HERO?wid=640&hei=800&fmt=jpeg&qlt=85,1&op_sharpen=1&resMode=sharp2&op_usm=1,1,6,0",
    category: "Clothing",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy"],
    quantity: 50,
  },
  {
    id: 2,
    title: "Wireless Earbuds",
    price: 75,
    description:
      "Compact and lightweight wireless earbuds with excellent sound quality.",
    image: "https://ca.targus.com/cdn/shop/files/51206_0.jpg?v=1702392744",
    category: "Electronics",
    sizes: [],
    colors: ["Black", "White"],
    quantity: 30,
  },
  {
    id: 3,
    title: "Water Bottle",
    price: 15,
    description:
      "Durable and eco-friendly reusable water bottle with a 1-liter capacity.",
    image:
      "https://t4.ftcdn.net/jpg/00/04/52/55/360_F_4525555_jOV1LfMBSqSrUfcqL1uJy2yDPS0Doe7O.jpg",
    category: "Accessories",
    sizes: ["1L"],
    colors: ["Blue", "Gray", "Green"],
    quantity: 100,
  },
  {
    id: 4,
    title: "Running Shoes",
    price: 120,
    description:
      "Lightweight running shoes designed for performance and comfort.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAd1TIU_C2BkHFesbqHyDXppAWkGXnlU7kcA&s",
    category: "Footwear",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "White", "Red"],
    quantity: 25,
  },
  {
    id: 5,
    title: "Gaming Mouse",
    price: 45,
    description:
      "High-precision gaming mouse with customizable buttons and RGB lighting.",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTTE_g7J9ZTEGjwCJZVQ3QJHSeI4zfKZJ2E05Dwx4teyusicuTTTLwwhxiv4htYjH-qCGGHjBfxtu9Q_iTrq9IifQPN-BeG420Z6J4wRduc3H-bp1Xw3A9Slg",
    category: "Gaming",
    sizes: [],
    colors: ["Black", "Gray"],
    quantity: 40,
  },
];

export const OrderList = [
  {
    id: 1,
    customerName: "John Doe",
    products: [
      {
        id: 1,
        title: "Classic T-Shirt",
        quantity: 2,
        price: 25,
      },
      {
        id: 2,
        title: "Wireless Earbuds",
        quantity: 1,
        price: 75,
      },
    ],
    totalPrice: 100,
    status: "Pending",
    date: "July 5th, 2022",
  },
];
