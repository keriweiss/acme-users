const faker = require("faker");

let users, userMap;

users = JSON.parse(window.localStorage.getItem("users"));
userMap = JSON.parse(window.localStorage.getItem("userMap"));

if (!users || !userMap) {
  users = new Array(4).fill("").map((_) => faker.name.firstName());
  window.localStorage.setItem("users", JSON.stringify(users));

  userMap = users.reduce((acc, name) => {
    acc[name] = new Array(1 + faker.random.number(2))
      .fill("")
      .map((user, index) => {
        if (index === 0) {
          return `Job:${faker.name.jobTitle()}`;
        }
        if (index === 1) {
          return `Field: ${faker.name.jobType()}`;
        }
        if (index === 2) {
          return `Location: ${faker.address.state()}`;
        }
      });
    return acc;
  }, {});
  window.localStorage.setItem("userMap", JSON.stringify(userMap));
}

module.exports = {
  users,
  userMap,
};
