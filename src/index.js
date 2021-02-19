const { users, userMap } = require("./data");
const render = require("./render");
const userList = document.querySelector("#user-list");

let curr = window.location.hash.slice(1) * 1;

const _render = () => {
  render({ users, userMap, userList, curr });
};

_render();

window.addEventListener("hashchange", () => {
  curr = window.location.hash.slice(1) * 1;
  _render();
});
