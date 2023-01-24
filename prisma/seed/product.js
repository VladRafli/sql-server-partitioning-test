const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async function () {
  /**
   * @type {import('@prisma/client').Products[]}
   */
  let products = [];
  for (let i = 0; i < 4000; i++) {
    products.push({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      quantity: parseInt(faker.random.numeric(3), 10),
      price: faker.commerce.price(undefined, undefined, undefined),
    });
  }

  await prisma.products.createMany({
    data: products,
  });
};
