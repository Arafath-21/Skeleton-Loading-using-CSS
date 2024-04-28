const container = document.querySelector(".container");
const cardTemplate = document.querySelector("#card-template");
for (let i = 0; i < 10; i++) {
  container.append(cardTemplate.content.cloneNode(true));
}

fetch("data.json")
  .then((response) => response.json())
  .then((posts) => {
    container.innerHTML = "";
    posts.forEach((post) => {
      const div = cardTemplate.content.cloneNode(true);
      div.querySelector("#card-link").href = post.link;
      div.querySelector("#logo-img").src = post.logoImage;
      div.querySelector("#card-title").textContent = post.title;
      div.querySelector("#card-details").textContent = post.details;
      div.querySelector("#cover-img").src = post.coverImage;
      div.querySelector(
        "#card-footer"
      ).innerHTML = ` <ion-icon name="arrow-up"></ion-icon>
    <ion-icon name="chatbox-ellipses"></ion-icon>
    <ion-icon name="bookmark"></ion-icon>`;
      container.append(div);
    });
  });