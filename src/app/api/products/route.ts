import { NextResponse } from 'next/server';
import { getDb } from '@/db';
import { products } from '@/db/schema';

export async function GET() {
  try {
    const db = getDb();

    const allProducts = await db
      .select()
      .from(products)
      .orderBy(products.createdAt);

    return NextResponse.json(allProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
