const { default: mongoose } = require('mongoose');
const Product = require('./models/ProductModel');

mongoose
  .connect('mongodb://127.0.0.1:27017/try-store')
  .then((res) => {
    console.log(`Connected to MongoDB`);
  })
  .catch((e) => {
    console.log(`err connection mongodb ${e}`);
  });

const ProductInsert = [
  {
    name: 'HP Envy 13',
    color: 'Silver',
    deskripsi: 'Powerful and Stylish Laptop from HP.',
    stock: 20,
    image: 'hp_envy_13.jpg',
  },
  {
    name: 'Dell XPS 15',
    color: 'Space Gray',
    deskripsi: 'High-performance laptop with InfinityEdge display.',
    stock: 15,
    image: 'dell_xps_15.jpg',
  },
  {
    name: 'Lenovo ThinkPad X1 Carbon',
    color: 'Black',
    deskripsi: 'Business laptop with a durable and lightweight design.',
    stock: 25,
    image: 'lenovo_thinkpad_x1_carbon.jpg',
  },
  {
    name: 'Asus ZenBook 14',
    color: 'Royal Blue',
    deskripsi: 'Ultra-slim laptop with NanoEdge display and powerful performance.',
    stock: 18,
    image: 'asus_zenbook_14.jpg',
  },
  {
    name: 'Apple MacBook Pro 13',
    color: 'Space Gray',
    deskripsi: 'Professional-grade laptop with Retina display and powerful hardware.',
    stock: 12,
    image: 'macbook_pro_13.jpg',
  },
  {
    name: 'Acer Predator Helios 300',
    color: 'Black',
    deskripsi: 'Gaming laptop with high-refresh-rate display and powerful graphics.',
    stock: 10,
    image: 'acer_predator_helios_300.jpg',
  },
  {
    name: 'Microsoft Surface Laptop 4',
    color: 'Platinum',
    deskripsi: 'Sleek and versatile laptop with touchscreen and great battery life.',
    stock: 22,
    image: 'surface_laptop_4.jpg',
  },
  {
    name: 'Razer Blade 15',
    color: 'Mercury White',
    deskripsi: 'Premium gaming laptop with customizable RGB lighting.',
    stock: 8,
    image: 'razer_blade_15.jpg',
  },
  {
    name: 'Samsung Galaxy Book Flex',
    color: 'Royal Silver',
    deskripsi: '2-in-1 laptop with QLED display and S Pen support.',
    stock: 15,
    image: 'samsung_galaxy_book_flex.jpg',
  },
  {
    name: 'LG Gram 17',
    color: 'Dark Silver',
    deskripsi: 'Ultra-lightweight laptop with a large 17-inch display.',
    stock: 10,
    image: 'lg_gram_17.jpg',
  },
  {
    name: 'Dell Alienware m15 R6',
    color: 'Lunar Light',
    deskripsi: 'High-performance gaming laptop with AlienFX lighting.',
    stock: 5,
    image: 'dell_alienware_m15_r6.jpg',
  },
];

Product.insertMany(ProductInsert)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(`data err insert seeds.js ${e}`);
  });
