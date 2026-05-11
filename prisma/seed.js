#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Uncomment to seed initial data
  // const user = await prisma.user.create({
  //   data: {
  //     email: 'demo@example.com',
  //     name: 'Demo User',
  //     credits: 100,
  //   },
  // });

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
