const url = "/data.json";

const cardCont = document.querySelector(".cards__wrapper");
cardCont.children;

document.addEventListener("DOMContentLoaded", () => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      const data = result;
      data.forEach((el) => {
        cardCont.insertAdjacentHTML(
          "beforeend",
          `
      <div class="cards__item" id="root">
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
});

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

function createCounter() {
  let counter = 0;
  return {
    increment() {
      counter++;
    },
    decrement() {
      counter--;
    },
    getCount() {
      return counter;
    },
  };
}
const counter = createCounter();
counter.decrement();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());

function findElementByClass(element, myClass) {
  if (!element) return false
  if (element.classList.contains(myClass)) {
      return element;
  }
  if (!element.children) {
    return false;
  } else {
    [...element.children].forEach((child) => {
      let result = findElementByClass(child, myClass)
      return result ? result : false
    }) 
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  const targetElement = findElementByClass(rootElement, "banner__title-h2");
  console.log(targetElement);
});
