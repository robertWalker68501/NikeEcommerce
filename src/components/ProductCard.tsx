import Image from 'next/image';
import { Product } from '@/db/schema';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <span className="text-sm text-gray-500">{product.brand}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {product.size && (
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {product.size}
              </span>
            )}
            {product.color && (
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {product.color}
              </span>
            )}
          </div>

          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span
            className={`text-sm font-medium ${
              product.inStock > 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {product.inStock > 0
              ? `${product.inStock} in stock`
              : 'Out of stock'}
          </span>

          <button
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              product.inStock > 0
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={product.inStock === 0}
          >
            {product.inStock > 0 ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  );
}
