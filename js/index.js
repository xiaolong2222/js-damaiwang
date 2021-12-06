let denglu = document.querySelector(".header-login");
let ying = document.querySelector(".login-zy");
function yiRu(a, b) {
    a.addEventListener("mouseover", function () {
        b.style.display = "block";
        b.addEventListener("mouseover", function () {
          b.style.display = "block";
          b.addEventListener("mouseout", function () {
            b.style.display = "none";
          });
        });
        a.addEventListener("mouseout", function () {
          b.style.display = "none";
        });
      });
}
yiRu(denglu, ying);
let cat = document.querySelector(".header-cat");
let yin = document.querySelector(".cat-yin");
yiRu(cat, yin);
let guo = document.querySelector(".header-cs");
let yinchang = document.querySelector(".header-cs-yin");
yiRu(guo, yinchang);