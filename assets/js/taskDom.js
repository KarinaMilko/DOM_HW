// Базовий рівень

// 1) HTML: є кнопка.
//     JS: При натисканні на кнопку змінити текст цієї кнопки.

const buttonText = document.querySelector(".btnText");
const changeText = (e) => (buttonText.textContent = "New text");
buttonText.addEventListener("click", changeText);
console.dir(buttonText);

// 2) HTML: є кнопка.
//     JS: При натисканні на кнопку змінити її колір.

const buttonColor = document.querySelector(".btnColor");
const changeColor = (e) => (buttonColor.style.backgroundColor = "green");
buttonColor.addEventListener("click", changeColor);

// 3) HTML: є зображення.
//     JS: Зробити так, щоб при появі сторінки відображалася одна картинка, а при наведенні миші на неї відображалася інша.

const image = document.querySelector(".natureImg");
const changeImg = (e) => {
  image.style.width = "200px";
  image.src =
    "https://kartinki.pics/uploads/posts/2022-02/thumbs/1644924339_3-kartinkin-net-p-kartinki-leto-priroda-4.jpg";
  image.alt = "nature";
};
image.addEventListener("mouseenter", changeImg);

// Розширена версія

// Дана інформація про користувача в об'єкті:
const user = {
  firstName: "Test",
  lastName: "Testovych",
  profilePhoto:
    "https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg",
  birthday: new Date("2000-05-16"),
  nickname: "super dev",
  likesCount: 10,
};

// Реалізувати обробку наступних подій:
// при натисканні на кнопку "Завантажити" додати інфо про користувача в <article></article>
const button = document.querySelector(".btnDld");

button.onclick = () => {
  const infoArticle = document.querySelector(".userCard");
  infoArticle.innerHTML = `
    <div class='userWrapper '>
      <img class= 'userPhoto'src="${user.profilePhoto}" alt="userPhoto" />
      <h2 class = 'userName'>${user.firstName} ${user.lastName}</h2>
        <p class='userNickname'> Nickname: ${user.nickname}</p>
        <p class='userDate'> Birthday: ${user.birthday.toLocaleDateString()} year</p>
        <span><i id="hurt" class="fa-regular fa-heart"></i> ${
          user.likesCount
        }</span>
    </div>
 `;
  // при натисканні на сердечко перефарбувати його в червоний колір.
  const like = document.querySelector("#hurt");
  const changeColorLikes = (e) => {
    like.style.color = "red";
  };
  like.addEventListener("click", changeColorLikes);
  // при наведенні на дату народження показувати кількість повних років.
  const date = document.querySelector(".userDate");
  const fullYearsOld = (e) => {
    date.innerHTML = `<p>${user.birthday.getDate()} years old</p>`;
  };
  date.addEventListener("mouseenter", fullYearsOld);
};

// * стилізувати картку
