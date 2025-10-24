import { Product } from './product';

export const PRODUCTS: Product[] = [
  {
    id: 'p001',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    description: 'Premium noise-cancelling headphones with 30-hour battery life and crystal-clear sound.',
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1617727553254-54e9b8e4b377?w=800',
    rating: 4.8,
    reviewCount: 1290,
    inStock: true,
    category: 'Electronics'
  },
  {
    id: 'p002',
    name: 'Nike Air Zoom Pegasus 40',
    description: 'Lightweight, breathable running shoes designed for both speed and comfort.',
    price: 119.95,
    imageUrl: 'https://images.unsplash.com/photo-1600181953020-0c63e7d20b4b?w=800',
    rating: 4.5,
    reviewCount: 845,
    inStock: true,
    category: 'Footwear'
  },
  {
    id: 'p003',
    name: 'Apple Watch Series 9',
    description: 'Advanced smartwatch with health monitoring, GPS, and customizable watch faces.',
    price: 399.00,
    imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800',
    rating: 4.9,
    reviewCount: 2113,
    inStock: false,
    category: 'Wearables'
  },
  {
    id: 'p004',
    name: 'Philips HD7432 Coffee Maker',
    description: 'Compact drip coffee machine with aroma twister and automatic shut-off feature.',
    price: 74.99,
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    rating: 4.3,
    reviewCount: 562,
    inStock: true,
    category: 'Home Appliances'
  },
  {
    id: 'p005',
    name: 'Logitech G502 HERO Gaming Mouse',
    description: 'High-performance gaming mouse with 11 customizable buttons and RGB lighting.',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800',
    rating: 4.7,
    reviewCount: 1587,
    inStock: true,
    category: 'Accessories'
  },
  {
    id: 'p006',
    name: 'Samsung 27" 4K UHD Monitor',
    description: 'Ultra HD display with vibrant colors, HDR10 support, and slim bezels for immersive visuals.',
    price: 329.00,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
    rating: 4.6,
    reviewCount: 732,
    inStock: true,
    category: 'Computers'
  },
  {
    id: 'p007',
    name: 'Instant Pot Duo 7-in-1',
    description: 'Multifunctional electric pressure cooker for fast, healthy, and tasty meals.',
    price: 99.00,
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e17e?w=800',
    rating: 4.8,
    reviewCount: 2410,
    inStock: false,
    category: 'Kitchen'
  },
  {
    id: 'p008',
    name: 'Kindle Paperwhite (11th Gen)',
    description: 'Waterproof e-reader with a glare-free 6.8” display and adjustable warm light.',
    price: 139.99,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?w=800',
    rating: 4.9,
    reviewCount: 1923,
    inStock: true,
    category: 'Books & Media'
  }
];
