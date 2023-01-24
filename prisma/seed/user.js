const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async function () {
  /**
   * @type {import('@prisma/client').Users[]}
   */
  let users = [];
  for (let i = 0; i < 4000; i++) {
    users.push({
      username: faker.internet.userName(),
      password: faker.internet.password(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      dob: faker.datatype.datetime(),
      address: faker.address.streetAddress(),
    });
  }

  await prisma.users.createMany({
    data: users,
  });
};
