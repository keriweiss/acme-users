const render = ({ userList, userMap, users, curr }) => {
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

module.exports = render;
