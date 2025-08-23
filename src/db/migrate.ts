import { config } from 'dotenv';
import { getDb } from './index';
import { products } from './schema';

// Load environment variables from .env.local
config({ path: '.env.local' });

export async function migrate() {
  try {
    console.log('🔄 Running database migration...');

    // Get database connection
    const db = getDb();

    // Create products table using raw SQL
    // This is a simplified approach - in production you'd use Drizzle migrations
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS "products" (
        "id" serial PRIMARY KEY,
        "name" varchar(255) NOT NULL,
        "description" text NOT NULL,
        "category" varchar(100) NOT NULL,
        "price" decimal(10,2) NOT NULL,
        "image_url" text NOT NULL,
        "brand" varchar(100) NOT NULL,
        "size" varchar(50),
        "color" varchar(100),
        "in_stock" integer NOT NULL DEFAULT 0,
        "created_at" timestamp DEFAULT now() NOT NULL,
        "updated_at" timestamp DEFAULT now() NOT NULL
      );
    `;

    await db.execute(createTableSQL);

    console.log('✅ Migration completed successfully!');
    console.log('💡 Run "npm run db:seed" to populate with sample data');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  }
}

// Run migration if this file is executed directly
if (require.main === module) {
  migrate()
    .then(() => {
      console.log('🎉 Migration completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Migration failed:', error);
      process.exit(1);
    });
}
