const faker = require("faker");

const users = new Array(4).fill("").map((_) => faker.name.firstName());

const userMap = users.reduce((acc, name) => {
  acc[name] = new Array(1 + faker.random.number(2))
    .fill("")
    .map((_) => faker.name.jobTitle());
  return acc;
}, {});

module.exports = {
  users,
  userMap,
};
