# Nike Store - Next.js App

A modern e-commerce application built with Next.js, featuring Nike products with a beautiful UI and robust backend.

## 🚀 Features

- **Next.js 15** with TypeScript and App Router
- **TailwindCSS** for modern, responsive design
- **Drizzle ORM** with PostgreSQL (Neon)
- **Zustand** for state management
- **ESLint & Prettier** for code quality
- **Responsive design** with mobile-first approach
- **Product catalog** with sample Nike items
- **Real-time database queries** using Drizzle ORM

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (Neon)
- **ORM**: Drizzle ORM
- **State Management**: Zustand
- **Code Quality**: ESLint, Prettier
- **Development**: Drizzle Kit, TSX

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Neon PostgreSQL database (or any PostgreSQL instance)

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd nike
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```bash
cp env.example .env.local
```

Edit `.env.local` and add your database connection string:

```env
DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"
```

### 3. Database Setup

Generate the database schema:

```bash
npm run db:generate
```

Run migrations (if using Drizzle migrations):

```bash
npm run db:migrate
```

Seed the database with sample products:

```bash
npm run db:seed
```

### 4. Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Database Schema

The application includes a `products` table with the following structure:

- `id`: Primary key (serial)
- `name`: Product name
- `description`: Product description
- `category`: Product category (Sneakers, Apparel, Running, etc.)
- `price`: Product price (decimal)
- `imageUrl`: Product image URL
- `brand`: Brand name
- `size`: Product size (optional)
- `color`: Product color (optional)
- `inStock`: Available stock quantity
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate database schema
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Drizzle Studio

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   │   └── products/   # Products API
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/          # React components
│   ├── ProductCard.tsx # Individual product card
│   └── ProductsGrid.tsx # Products grid layout
├── db/                 # Database configuration
│   ├── index.ts        # Database connection
│   ├── schema.ts       # Database schema
│   └── seed.ts         # Sample data
└── store/              # State management
    └── useProductStore.ts # Zustand store
```

## 🌟 Features

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Product Catalog**: Beautiful grid layout for products
- **State Management**: Zustand store for products data
- **API Integration**: RESTful API endpoints for products
- **Database Integration**: Real-time queries with Drizzle ORM
- **Type Safety**: Full TypeScript support
- **Code Quality**: ESLint and Prettier configuration

## 🔧 Configuration Files

- `.prettierrc` - Prettier formatting rules
- `drizzle.config.ts` - Drizzle ORM configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - TailwindCSS configuration
- `eslint.config.mjs` - ESLint configuration

## 📱 Responsive Design

The application is fully responsive and works on:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

This application can be deployed to:

- Vercel (recommended for Next.js)
- Netlify
- AWS
- Any platform supporting Node.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the console for error messages
2. Verify your database connection
3. Ensure all environment variables are set
4. Check the database schema and migrations

---

Built with ❤️ using Next.js and modern web technologies.
