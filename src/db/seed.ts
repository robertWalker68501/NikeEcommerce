import { config } from 'dotenv';
import { getDb } from './index';
import { products } from './schema';

// Load environment variables from .env.local
config({ path: '.env.local' });

const sampleProducts = [
  {
    name: 'Nike Air Max 270',
    description:
      'The Nike Air Max 270 delivers unrivaled, all-day comfort. The Air unit under the heel is the tallest ever and provides lightweight cushioning with every step.',
    category: 'Sneakers',
    price: '150.00',
    imageUrl:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    brand: 'Nike',
    size: 'US 10',
    color: 'Black/White',
    inStock: 25,
  },
  {
    name: 'Nike Dri-FIT Training T-Shirt',
    description:
      'The Nike Dri-FIT Training T-Shirt is made with lightweight, breathable fabric that helps you stay dry and comfortable during your workout.',
    category: 'Apparel',
    price: '35.00',
    imageUrl:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    brand: 'Nike',
    size: 'L',
    color: 'Gray',
    inStock: 50,
  },
  {
    name: 'Nike Zoom Pegasus 38',
    description:
      'The Nike Zoom Pegasus 38 offers a smooth, responsive ride for your daily training runs. The breathable upper keeps your feet cool and comfortable.',
    category: 'Running',
    price: '120.00',
    imageUrl:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
    brand: 'Nike',
    size: 'US 9',
    color: 'Blue/Orange',
    inStock: 30,
  },
  {
    name: 'Nike Pro Combat Shorts',
    description:
      'The Nike Pro Combat Shorts provide lightweight coverage and mobility for training. The built-in liner offers support and comfort.',
    category: 'Apparel',
    price: '45.00',
    imageUrl:
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=500&fit=crop',
    brand: 'Nike',
    size: 'M',
    color: 'Black',
    inStock: 40,
  },
  {
    name: 'Nike React Vision',
    description:
      'The Nike React Vision delivers a smooth, responsive ride with a breathable upper that adapts to your foot for a secure, comfortable fit.',
    category: 'Sneakers',
    price: '110.00',
    imageUrl:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop',
    brand: 'Nike',
    size: 'US 11',
    color: 'White/Red',
    inStock: 20,
  },
];

export async function seed() {
  try {
    console.log('🌱 Seeding database...');

    // Get database connection
    const db = getDb();

    // Clear existing data
    await db.delete(products);

    // Insert sample products
    const insertedProducts = await db
      .insert(products)
      .values(sampleProducts)
      .returning();

    console.log(`✅ Seeded ${insertedProducts.length} products`);
    return insertedProducts;
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

// Run seed if this file is executed directly
if (require.main === module) {
  seed()
    .then(() => {
      console.log('🎉 Seeding completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Seeding failed:', error);
      process.exit(1);
    });
}
