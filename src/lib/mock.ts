import { Category, Order, PaymentMethod, Product, UserAddress } from "@/models";
import organic_vegitable_image from "@/assets/images/organic_vegitable_image.png";
import fresh_fruits_image from "@/assets/images/fresh_fruits_image.png";
import bottles_image from "@/assets/images/bottles_image.png";
import maggi_image from "@/assets/images/maggi_image.png";
import dairy_product_image from "@/assets/images/dairy_product_image.png";
import bakery_image from "@/assets/images/bakery_image.png";
import grain_image from "@/assets/images/grain_image.png";
import potato_image_1 from "@/assets/images/potato_image_1.png";
import potato_image_2 from "@/assets/images/potato_image_2.png";
import potato_image_3 from "@/assets/images/potato_image_3.png";
import potato_image_4 from "@/assets/images/potato_image_4.png";
import tomato_image from "@/assets/images/tomato_image.png";
import carrot_image from "@/assets/images/carrot_image.png";
import apple_image from "@/assets/images/apple_image.png";
import amul_milk_image from "@/assets/images/amul_milk_image.png";
import coca_cola_image from "@/assets/images/coca_cola_image.png";
import brown_bread_image from "@/assets/images/brown_bread_image.png";
import basmati_rice_image from "@/assets/images/basmati_rice_image.png";
import paneer_image from "@/assets/images/paneer_image.png";
import orange_image from "@/assets/images/orange_image.png";
import pepsi_image from "@/assets/images/pepsi_image.png";
import wheat_flour_image from "@/assets/images/wheat_flour_image.png";
import cheese_image from "@/assets/images/cheese_image.png";
import eggs_image from "@/assets/images/eggs_image.png";
import spinach_image_1 from "@/assets/images/spinach_image_1.png";
import onion_image_1 from "@/assets/images/onion_image_1.png";
import banana_image_1 from "@/assets/images/banana_image_1.png";
import mango_image_1 from "@/assets/images/mango_image_1.png";
import grapes_image_1 from "@/assets/images/grapes_image_1.png";
import paneer_image_2 from "@/assets/images/paneer_image_2.png";
import sprite_image_1 from "@/assets/images/sprite_image_1.png";
import fanta_image_1 from "@/assets/images/fanta_image_1.png";
import seven_up_image_1 from "@/assets/images/seven_up_image_1.png";
import top_ramen_image from "@/assets/images/top_ramen_image.png";
import knorr_soup_image from "@/assets/images/knorr_soup_image.png";
import yippee_image from "@/assets/images/yippee_image.png";
import maggi_oats_image from "@/assets/images/maggi_oats_image.png";
import butter_croissant_image from "@/assets/images/butter_croissant_image.png";
import chocolate_cake_image from "@/assets/images/chocolate_cake_image.png";
import whole_wheat_bread_image from "@/assets/images/whole_wheat_bread_image.png";
import vanilla_muffins_image from "@/assets/images/vanilla_muffins_image.png";
import quinoa_image from "@/assets/images/quinoa_image.png";
import brown_rice_image from "@/assets/images/brown_rice_image.png";
import barley_image from "@/assets/images/barley_image.png";

export const mockCategories: Category[] = [
  {
    id: "cat_1",
    name: "Organic veggies",
    slug: "vegetables",
    bgColor: "#FEF6DA",
    image: organic_vegitable_image,
  },
  {
    id: "cat_2",
    name: "Fresh Fruits",
    slug: "fruits",
    bgColor: "#FEE0E0",
    image: fresh_fruits_image,
  },
  {
    id: "cat_3",
    name: "Cold Drinks",
    slug: "drinks",
    bgColor: "#F0F5DE",
    image: bottles_image,
  },
  {
    id: "cat_4",
    name: "Instant Food",
    slug: "instant",
    bgColor: "#E1F5EC",
    image: maggi_image,
  },
  {
    id: "cat_5",
    name: "Dairy Products",
    slug: "dairy",
    bgColor: "#FEE6CD",
    image: dairy_product_image,
  },
  {
    id: "cat_6",
    name: "Bakery & Breads",
    slug: "bakery",
    bgColor: "#E0F6FE",
    image: bakery_image,
  },
  {
    id: "cat_7",
    name: "Grains & Cereals",
    slug: "grains",
    bgColor: "#F1E3F9",
    image: grain_image,
  },
];

export const mockCategoriesMap = new Map<string, Category>(
  mockCategories.map((category) => [category.slug, category])
);

export const mockProducts: Product[] = [
  // Vegetables
  {
    id: "prod_1",
    name: "Potato 500g",
    slug: "potato-500g",
    category: mockCategoriesMap.get("vegetables")!,
    price: 25,
    offerPrice: 20,
    images: [potato_image_1, potato_image_2, potato_image_3, potato_image_4],
    description:
      "Fresh and organic. Rich in carbohydrates. Ideal for curries and fries.",
    rating: 5,
    inStock: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    id: "prod_2",
    name: "Tomato 1 kg",
    slug: "tomato-1-kg",
    category: mockCategoriesMap.get("vegetables")!,
    price: 40,
    offerPrice: 35,
    images: [tomato_image],
    description:
      "Juicy and ripe. Rich in Vitamin C. Perfect for salads and sauces. Farm fresh quality.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_3",
    name: "Carrot 500g",
    slug: "carrot-500g",
    category: mockCategoriesMap.get("vegetables")!,
    price: 30,
    offerPrice: 28,
    images: [carrot_image],
    description:
      "Sweet and crunchy. Good for eyesight. Ideal for juices and salads.",
    rating: 5,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_4",
    name: "Spinach 500g",
    slug: "spinach-500g",
    category: mockCategoriesMap.get("vegetables")!,
    price: 18,
    offerPrice: 15,
    images: [spinach_image_1],
    description:
      "Rich in iron. High in vitamins. Perfect for soups and salads.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_5",
    name: "Onion 500g",
    slug: "onion-500g",
    category: mockCategoriesMap.get("vegetables")!,
    price: 22,
    offerPrice: 19,
    images: [onion_image_1],
    description: "Fresh and pungent. Perfect for cooking. A kitchen staple.",
    rating: 5,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Fruits
  {
    id: "prod_6",
    name: "Apple 1 kg",
    slug: "apple-1-kg",
    category: mockCategoriesMap.get("fruits")!,
    price: 120,
    offerPrice: 110,
    images: [apple_image],
    description:
      "Crisp and juicy. Rich in fiber. Boosts immunity. Perfect for snacking and desserts. Organic and farm fresh.",
    rating: 5,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_7",
    name: "Orange 1 kg",
    slug: "orange-1-kg",
    category: mockCategoriesMap.get("fruits")!,
    price: 80,
    offerPrice: 75,
    images: [orange_image],
    description:
      "Juicy and sweet. Rich in Vitamin C. Perfect for juices and salads.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_8",
    name: "Banana 1 kg",
    slug: "banana-1-kg",
    category: mockCategoriesMap.get("fruits")!,
    price: 50,
    offerPrice: 45,
    images: [banana_image_1],
    description:
      "Sweet and ripe. High in potassium. Great for smoothies and snacking.",
    rating: 5,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_9",
    name: "Mango 1 kg",
    slug: "mango-1-kg",
    category: mockCategoriesMap.get("fruits")!,
    price: 150,
    offerPrice: 140,
    images: [mango_image_1],
    description:
      "Sweet and flavorful. Perfect for smoothies and desserts. Rich in Vitamin A.",
    rating: 5,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_10",
    name: "Grapes 500g",
    slug: "grapes-500g",
    category: mockCategoriesMap.get("fruits")!,
    price: 70,
    offerPrice: 65,
    images: [grapes_image_1],
    description:
      "Fresh and juicy. Rich in antioxidants. Perfect for snacking and fruit salads.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Dairy
  {
    id: "prod_11",
    name: "Amul Milk 1L",
    slug: "amul-milk-1l",
    category: mockCategoriesMap.get("dairy")!,
    price: 60,
    offerPrice: 55,
    images: [amul_milk_image],
    description:
      "Pure and fresh. Rich in calcium. Ideal for tea, coffee, and desserts. Trusted brand quality.",
    rating: 5,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_12",
    name: "Paneer 200g",
    slug: "paneer-200g",
    category: mockCategoriesMap.get("dairy")!,
    price: 90,
    offerPrice: 85,
    images: [paneer_image],
    description:
      "Soft and fresh. Rich in protein. Ideal for curries and snacks.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_13",
    name: "Eggs 12 pcs",
    slug: "eggs-12-pcs",
    category: mockCategoriesMap.get("dairy")!,
    price: 90,
    offerPrice: 85,
    images: [eggs_image],
    description: "Farm fresh. Rich in protein. Ideal for breakfast and baking.",
    rating: 5,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_14",
    name: "Paneer 200g",
    slug: "paneer-200g",
    category: mockCategoriesMap.get("dairy")!,
    price: 90,
    offerPrice: 85,
    images: [paneer_image_2],
    description:
      "Soft and fresh. Rich in protein. Ideal for curries and snacks.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_15",
    name: "Cheese 200g",
    slug: "cheese-200g",
    category: mockCategoriesMap.get("dairy")!,
    price: 140,
    offerPrice: 130,
    images: [cheese_image],
    description:
      "Creamy and delicious. Perfect for pizzas and sandwiches. Rich in calcium.",
    rating: 5,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Drinks
  {
    id: "prod_16",
    name: "Coca-Cola 1.5L",
    slug: "coca-cola-1.5l",
    category: mockCategoriesMap.get("drinks")!,
    price: 80,
    offerPrice: 75,
    images: [coca_cola_image],
    description:
      "Refreshing and fizzy. Perfect for parties and gatherings. Best served chilled.",
    rating: 5,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_17",
    name: "Pepsi 1.5L",
    slug: "pepsi-1.5l",
    category: mockCategoriesMap.get("drinks")!,
    price: 78,
    offerPrice: 73,
    images: [pepsi_image],
    description:
      "Chilled and refreshing. Perfect for celebrations. Best served cold.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_18",
    name: "Sprite 1.5L",
    slug: "sprite-1.5l",
    category: mockCategoriesMap.get("drinks")!,
    price: 79,
    offerPrice: 74,
    images: [sprite_image_1],
    description:
      "Refreshing citrus taste. Perfect for hot days. Best served chilled.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_19",
    name: "Fanta 1.5L",
    slug: "fanta-1.5l",
    category: mockCategoriesMap.get("drinks")!,
    price: 77,
    offerPrice: 72,
    images: [fanta_image_1],
    description:
      "Sweet and fizzy. Great for parties and gatherings. Best served cold.",
    rating: 3,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_20",
    name: "7 Up 1.5L",
    slug: "7-up-1.5l",
    category: mockCategoriesMap.get("drinks")!,
    price: 76,
    offerPrice: 71,
    images: [seven_up_image_1],
    description:
      "Refreshing lemon-lime flavor. Perfect for refreshing. Best served chilled.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Grains
  {
    id: "prod_21",
    name: "Basmati Rice 5kg",
    slug: "basmati-rice-5kg",
    category: mockCategoriesMap.get("grains")!,
    price: 550,
    offerPrice: 520,
    images: [basmati_rice_image],
    description:
      "Long grain and aromatic. Perfect for biryani and pulao. Premium quality.",
    rating: 5,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_22",
    name: "Wheat Flour 5kg",
    slug: "wheat-flour-5kg",
    category: mockCategoriesMap.get("grains")!,
    price: 250,
    offerPrice: 230,
    images: [wheat_flour_image],
    description:
      "High-quality whole wheat. Soft and fluffy rotis. Rich in nutrients.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_23",
    name: "Organic Quinoa 500g",
    slug: "organic-quinoa-500g",
    category: mockCategoriesMap.get("grains")!,
    price: 450,
    offerPrice: 420,
    images: [quinoa_image],
    description:
      "High in protein and fiber. Gluten-free. Rich in vitamins and minerals.",
    rating: 5,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_24",
    name: "Brown Rice 1kg",
    slug: "brown-rice-1kg",
    category: mockCategoriesMap.get("grains")!,
    price: 120,
    offerPrice: 110,
    images: [brown_rice_image],
    description:
      "Whole grain and nutritious. Helps in weight management. Good source of magnesium.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_25",
    name: "Barley 1kg",
    slug: "barley-1kg",
    category: mockCategoriesMap.get("grains")!,
    price: 150,
    offerPrice: 140,
    images: [barley_image],
    description:
      "Rich in fiber. Helps improve digestion. Low in fat and cholesterol.",
    rating: 3,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Bakery
  {
    id: "prod_26",
    name: "Brown Bread 400g",
    slug: "brown-bread-400g",
    category: mockCategoriesMap.get("bakery")!,
    price: 40,
    offerPrice: 35,
    images: [brown_bread_image],
    description:
      "Soft and healthy. Made from whole wheat. Ideal for breakfast and sandwiches.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_27",
    name: "Butter Croissant 100g",
    slug: "butter-croissant-100g",
    category: mockCategoriesMap.get("bakery")!,
    price: 50,
    offerPrice: 45,
    images: [butter_croissant_image],
    description:
      "Flaky and buttery. Freshly baked. Perfect for breakfast or snacks.",
    rating: 5,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_28",
    name: "Chocolate Cake 500g",
    slug: "chocolate-cake-500g",
    category: mockCategoriesMap.get("bakery")!,
    price: 350,
    offerPrice: 325,
    images: [chocolate_cake_image],
    description:
      "Rich and moist. Made with premium cocoa. Ideal for celebrations and parties.",
    rating: 5,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_29",
    name: "Whole Bread 400g",
    slug: "whole-bread-400g",
    category: mockCategoriesMap.get("bakery")!,
    price: 45,
    offerPrice: 40,
    images: [whole_wheat_bread_image],
    description:
      "Healthy and nutritious. Made with whole wheat flour. Ideal for sandwiches and toast.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_30",
    name: "Vanilla Muffins 6 pcs",
    slug: "vanilla-muffins-6-pcs",
    category: mockCategoriesMap.get("bakery")!,
    price: 100,
    offerPrice: 90,
    images: [vanilla_muffins_image],
    description:
      "Soft and fluffy. Perfect for a quick snack. Made with real vanilla.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Instant
  {
    id: "prod_31",
    name: "Maggi Noodles 280g",
    slug: "maggi-noodles-280g",
    category: mockCategoriesMap.get("instant")!,
    price: 55,
    offerPrice: 50,
    images: [maggi_image],
    description:
      "Instant and easy to cook. Delicious taste. Popular among kids and adults.",
    rating: 5,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_32",
    name: "Top Ramen 270g",
    slug: "top-ramen-270g",
    category: mockCategoriesMap.get("instant")!,
    price: 45,
    offerPrice: 40,
    images: [top_ramen_image],
    description:
      "Quick and easy to prepare. Spicy and flavorful. Loved by college students and families.",
    rating: 3,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_33",
    name: "Knorr Cup Soup 70g",
    slug: "knorr-cup-soup-70g",
    category: mockCategoriesMap.get("instant")!,
    price: 35,
    offerPrice: 30,
    images: [knorr_soup_image],
    description:
      "Convenient for on-the-go. Healthy and nutritious. Variety of flavors.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_34",
    name: "Yippee Noodles 260g",
    slug: "yippee-noodles-260g",
    category: mockCategoriesMap.get("instant")!,
    price: 50,
    offerPrice: 45,
    images: [yippee_image],
    description:
      "Non-fried noodles for healthier choice. Tasty and filling. Convenient for busy schedules.",
    rating: 4,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    id: "prod_35",
    name: "Oats Noodles 72g",
    slug: "oats-noodles-72g",
    category: mockCategoriesMap.get("instant")!,
    price: 40,
    offerPrice: 35,
    images: [maggi_oats_image],
    description:
      "Healthy alternative with oats. Good for digestion. Perfect for breakfast or snacks.",
    rating: 3,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
];

export const mockAddresses: UserAddress[] = [
  {
    id: "addr-1",
    firstName: "Nguyen",
    lastName: "Van A",
    email: "vana@example.com",
    street: "123 Le Loi",
    city: "Ho Chi Minh",
    state: "HCMC",
    zipcode: "700000",
    country: "VN",
    phone: "+84901234567",
  },
  {
    id: "addr-2",
    firstName: "Tran",
    lastName: "Thi B",
    email: "thib@example.com",
    street: "456 Tran Hung Dao",
    city: "Ha Noi",
    state: "HN",
    zipcode: "100000",
    country: "VN",
    phone: "+84987654321",
  },
  {
    id: "addr-3",
    firstName: "Le",
    lastName: "Van C",
    email: "vanc@example.com",
    street: "789 Phan Chau Trinh",
    city: "Da Nang",
    state: "DN",
    zipcode: "550000",
    country: "VN",
    phone: "+84912345678",
  },
];

export const mockOrders: Order[] = [
  {
    id: "order-001",
    paymentType: PaymentMethod.CARD,
    totalAmount: mockProducts[0].price * 2 + mockProducts[1].price * 1,
    shippingAddress: mockAddresses[0],
    items: [
      {
        id: "item-001",
        product: mockProducts[0],
        unitPrice: mockProducts[0].price,
        quantity: 2,
        subTotal: mockProducts[0].price * 2,
      },
      {
        id: "item-002",
        product: mockProducts[1],
        unitPrice: mockProducts[1].price,
        quantity: 1,
        subTotal: mockProducts[1].price * 1,
      },
    ],
    createdAt: "2025-08-01T10:00:00Z",
    updatedAt: "2025-08-01T10:00:00Z",
  },
  {
    id: "order-002",
    paymentType: PaymentMethod.COD,
    totalAmount: mockProducts[2].price * 3,
    shippingAddress: mockAddresses[1],
    items: [
      {
        id: "item-003",
        product: mockProducts[2],
        unitPrice: mockProducts[2].price,
        quantity: 3,
        subTotal: mockProducts[2].price * 3,
      },
    ],
    createdAt: "2025-08-05T14:30:00Z",
    updatedAt: "2025-08-05T14:30:00Z",
  },
];
