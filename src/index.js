const { users, userMap } = require("./data");

const userList = document.querySelector("#user-list");

let curr = window.location.hash.slice(1) * 1;

const render = () => {
  const html = `
    ${users
      .map(
        (user, index) => `
    <li><a href ='#${index}'>${user}</a>
    ${
      curr === index
        ? `<ul>${userMap[user]
            .map(
              (detail) => `
        <li> ${detail}</li>`
            )
            .join("")}</ul>`
        : ""
    }
    </li>`
      )
      .join("")}
      `;
  userList.innerHTML = html;
};

render();

window.addEventListener("hashchange", () => {
  curr = window.location.hash.slice(1) * 1;
  render();
});
