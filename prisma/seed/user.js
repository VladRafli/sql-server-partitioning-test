const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const prisma = new PrismaClient();

module.exports = async function () {
  /**
   * @type {import('@prisma/client').Users[]}
   */
  let users = Array.from({ length: 1000 }).map(() => ({
    username: faker.internet.userName(),
    password: faker.internet.password(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    dob: faker.datatype.datetime(),
    address: faker.address.streetAddress(),
    createdAt: faker.date.between('2016-01-01T00:00:00.000Z', '2022-12-31T00:00:00.000Z')
  }));

  await prisma.users.createMany({
    data: users
  })
};
