const url =
  "https://gist.githubusercontent.com/hiteshsahu/f58bcca95532fde77fd0d9e94a9c3148/raw/4ef7b30240c781341f1994f12453e9e7a5c2c67d/GirlImages.json";

const bodyEl = document.querySelector("body");

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((result) => {
    const data = result.GirlImages;
    data.forEach((element) => {
      bodyEl.insertAdjacentHTML(
        "beforeend",
        `
            <div class="girl_card">
                <img src="${element["image-url"]}" alt="">
                <h1 class="descript">${element.description}</h1>
            </div>
    `
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
