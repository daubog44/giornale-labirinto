const el_back = document.querySelector(".card__side--back");
const el_front = document.querySelector(".card__side--front");
const btn = document.querySelector(".btn");
t = 0;
btn.addEventListener("click", function (e) {
  if (t === 0) {
    el_back.style.transform = `rotateY(0deg)`;
    el_front.style.transform = `rotateY(-180deg)`;
    t = 1;
  } else {
    el_back.style.transform = `rotateY(180deg)`;
    el_front.style.transform = `rotateY(0deg)`;
    t = 0;
  }
});
