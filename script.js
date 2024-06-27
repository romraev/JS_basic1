const url = "/data.json";

const cardCont = document.querySelector(".cards__wrapper");

document.addEventListener("DOMContentLoaded", () => {
  fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((result) => {
    const data = result;
    data.forEach((el) => {
      cardCont.insertAdjacentHTML(
        "beforeend", `
      <div class="cards__item">
        <div class="item-img" style="background-image: url(${el.img})">
          <div class="item-img__hover">
            <button class="item-img__hover-btn">Add to Cart</button>
          </div>
        </div>
        <div class="item-description">
          <h4 class="item-title">${el.header}</h4>
          <p class="item-text">
            ${el.descript}
          </p>
          <p class="item-price">${el.price}</p>
        </div>
      </div>
    `
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
})

