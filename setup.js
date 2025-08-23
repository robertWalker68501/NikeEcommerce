#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Nike Store Setup');
console.log('==================\n');

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env.local file...');

  const envContent = `# Database Configuration
DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"

# Example for Neon PostgreSQL:
# DATABASE_URL="postgresql://username:password@ep-xxx-xxx-xxx.region.aws.neon.tech/database?sslmode=require"
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env.local created successfully!');
  console.log(
    '⚠️  Please update the DATABASE_URL with your actual database credentials\n'
  );
} else {
  console.log('✅ .env.local already exists\n');
}

console.log('📋 Next steps:');
console.log('1. Update .env.local with your database connection string');
console.log('2. Run "npm run db:generate" to generate database schema');
console.log('3. Run "npm run db:migrate" to set up the database');
console.log('4. Run "npm run db:seed" to populate with sample data');
console.log('5. Run "npm run dev" to start the development server\n');

console.log('🎯 For Neon PostgreSQL setup:');
console.log('1. Go to https://neon.tech');
console.log('2. Create a new project');
console.log('3. Copy the connection string');
console.log('4. Update .env.local with the connection string\n');

console.log('🚀 Happy coding!');
