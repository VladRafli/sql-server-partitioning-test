const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const prisma = new PrismaClient();

module.exports = async function () {
  /**
   * @type {import('@prisma/client').Products[]}
   */
  let products = Array.from({ length: 4000 }).map(() => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    quantity: parseInt(faker.random.numeric(3), 10),
    price: parseInt(faker.commerce.price(undefined, undefined, undefined), 10),
    createdAt: faker.date.between('2016-01-01T00:00:00.000Z', '2022-12-31T00:00:00.000Z')
  }));
  
  await prisma.products.createMany({
    data: products
  })
};
