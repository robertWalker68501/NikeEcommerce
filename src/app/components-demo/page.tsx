'use client';

import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

const ComponentsDemo = () => {
  // Sample data for the Card component
  const sampleProducts = [
    {
      id: '1',
      title: "Nike Air Force 1 Mid '07",
      description:
        "The Nike Air Force 1 Mid '07 delivers unrivaled, all-day comfort with a classic design that never goes out of style.",
      image: '/shoes/shoe-1.jpg',
      price: '$98.30',
      category: "Men's Shoes",
      brand: 'Nike',
      badge: 'Best Seller',
      colors: 6,
      sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
      inStock: true,
    },
    {
      id: '2',
      title: 'Nike Air Max 270',
      description:
        'The Nike Air Max 270 delivers unrivaled, all-day comfort with the tallest Air unit ever.',
      image: '/shoes/shoe-2.webp',
      price: '$150.00',
      category: "Men's Shoes",
      brand: 'Nike',
      colors: 4,
      sizes: ['US 8', 'US 9', 'US 10'],
      inStock: true,
    },
    {
      id: '3',
      title: 'Nike Zoom Pegasus 38',
      description:
        'The Nike Zoom Pegasus 38 offers a smooth, responsive ride for your daily training runs.',
      image: '/shoes/shoe-3.webp',
      price: '$120.00',
      category: 'Running',
      brand: 'Nike',
      colors: 3,
      sizes: ['US 9', 'US 10', 'US 11'],
      inStock: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Component Showcase
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Explore our responsive UI components built with Next.js, TypeScript,
            and Tailwind CSS
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Card Components Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reusable Card Components
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible card components that can be used for products, articles,
              or any content display needs.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProducts.map((product) => (
              <Card
                key={product.id}
                {...product}
                href={`/products/${product.id}`}
              />
            ))}
          </div>

          {/* Card Variants */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Card Variants
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card with onClick */}
              <Card
                id="4"
                title="Interactive Card"
                description="This card has an onClick handler and demonstrates different interaction patterns."
                image="/shoes/shoe-4.webp"
                price="$89.99"
                category="Demo"
                brand="Nike"
                colors={2}
                sizes={['S', 'M', 'L']}
                inStock={true}
                onClick={() => alert('Card clicked!')}
              />

              {/* Card without link or onClick */}
              <Card
                id="5"
                title="Static Card"
                description="This card is purely presentational with no interactive elements."
                image="/shoes/shoe-5.avif"
                price="$75.00"
                category="Demo"
                brand="Nike"
                colors={1}
                sizes={['One Size']}
                inStock={false}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Component Features
            </h2>
            <p className="text-lg text-gray-600">
              Built with modern web development best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast & Responsive
              </h3>
              <p className="text-gray-600">
                Built with Next.js and optimized for performance across all
                devices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Type Safe
              </h3>
              <p className="text-gray-600">
                Full TypeScript support with proper interfaces and type
                checking.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Customizable
              </h3>
              <p className="text-gray-600">
                Flexible props system allows for various use cases and styling
                options.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComponentsDemo;
