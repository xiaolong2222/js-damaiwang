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
let box = document.querySelector(".box-left");
let right = document.querySelector(".box-right");

function data(a,b,c) {
  $.ajax({
    url: "http://jx.xuzhixiang.top/ap/api/allproductlist.php",
    type: "get",
    data: {
      uid: 74824,
      pagesize: a,
      pagenum: b,
    },
    success: function (data) {
      let str = "";
      $.each(data, function (i, n) {
        $.each(n, function (index, value) {
          str = `
                <img class="box-left-bg" src="${value.pimg}"/>
                <div class="box-left-info">
                  <div class="title-abc">${value.pname}</div>
                  <div class="details">￥${value.pprice}<span>起</span></div>
                </div>
              `;
        })
        c.innerHTML = str;
      })
    }
  })
}
data(2, 6, box);
function cate(a, b, c) {
  $.ajax({
    url: "http://jx.xuzhixiang.top/ap/api/allproductlist.php",
    type: "get",
    data: {
      uid: 74824,
      pagesize: a,
      pagenum: b,
    },
    success: function (data) {
      let str = "";
      $.each(data, function (i, n) {
        $.each(n, function (index, value) {
          str +=
            `<a href="" class="box-right__item" target="_blank">
             <div class="itemimg">
               <img src="${value.pimg}" />
              </div>
            <div class="iteminfo">
              <div class="title" title="${value.pname}">
                ${value.pname}
                </div>
              <div class="venue">${value.pdesc}</div>
            <div class="showtime">2021.12.29-12.30</div>
          <div class="showtime"></div>
         <div class="price">¥${value.pprice}<span>起</span></div>
        </div>
      </a>`;
        })
        c.innerHTML = str;
      })
    }
  })
}
cate(7, 1, right);
let box2 = document.querySelector(".tfre");
data(1, 6, box2);
let right2 = document.querySelector(".jhgf");
cate(6, 0, right2);
let box3 = document.querySelector(".iopu");
data(2, 6, box3);
let right3 = document.querySelector(".ertw");
cate(7, 1, right3);
let box4 = document.querySelector(".mnbv");
data(1, 6, box4);
let right4 = document.querySelector(".bvcx");
cate(6, 0, right4);