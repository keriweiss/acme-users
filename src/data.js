const faker = require("faker");

let users, userMap;

users = JSON.parse(window.localStorage.getItem("users"));
userMap = JSON.parse(window.localStorage.getItem("userMap"));

if (!users || !userMap) {
  users = new Array(10).fill("").map((_) => faker.name.firstName());
  window.localStorage.setItem("users", JSON.stringify(users));

  userMap = users.reduce((acc, name) => {
    acc[name] = new Array(1 + faker.random.number(2))
      .fill("")
      .map((user, index) => {
        const details = [
          `Job:${faker.name.jobTitle()}`,
          `Field: ${faker.name.jobType()}`,
          `Location: ${faker.address.state()}`,
        ];
        return details[index];
      });
    return acc;
  }, {});
  window.localStorage.setItem("userMap", JSON.stringify(userMap));
}

module.exports = {
  users,
  userMap,
};
