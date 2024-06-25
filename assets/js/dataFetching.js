"use strict";
// 1) Зробити запит даних до одного із серверів (одного з API) на вибір, використовуючи fetch()
// 2) Відобразити дані на сторінці за допомогою DOM
// 3) * Прикрасити стилями за потребою

// Варіанти серверів (API):

// - Випадкове зображення собаки https://dog.ceo/api/breeds/image/random
// Наприклад, при натисканні на кнопку або саме зображення змінювати зображення на нове рандомне.

const IMG_URL = "https://dog.ceo/api/breeds/image/random";

getImgData();

const image = document.querySelector(".imgDog");

function updateImg(imgData) {
  image.src = imgData.message;
}

const button = document.querySelector(".btnNextImg");
function getImgData() {
  fetch(IMG_URL)
    .then((response) => response.json())
    .then((data) => updateImg(data))
    .catch((error) => console.log("error :>> ", error));
}
button.addEventListener("click", getImgData);
