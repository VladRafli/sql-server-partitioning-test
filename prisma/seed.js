const { PrismaClient } = require("@prisma/client");
const product = require("./seed/product");
const user = require("./seed/user");
const prisma = new PrismaClient();

async function main() {
  await user()
  await product()
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
