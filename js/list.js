let like = document.querySelector(".sever__box");
$.ajax({
    url: "http://jx.xuzhixiang.top/ap/api/allproductlist.php",
    type: "get",
    data: {
      uid: 74824,
      pagesize: 3,
      pagenum: 2,
    },
    success: function (data) {
      let str = "";
      $.each(data, function (i, n) {
        $.each(n, function (index, value) {
          str +=
            `<div class="search__item">
            <a href="" target="_blank" class="search__item__poster"
              ><img src="${value.pimg}" alt=""
            /></a>
            <div class="search__item__info">
              <a href="" target="_blank" class="search__item__info__title"
                >${value.pname}</a
              >
              <div class="search__item__info__venue">${value.pdesc}</div>
              <div class="search__item__info__price">
                <strong>${value.pprice}元</strong>起
              </div>
            </div>
          </div>`;
        })
        like.innerHTML = str;
      })
    }
})


function List(a, b, c) {
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
              `<div class="items">
              <a class="items__img">
                <span class="items__img__tag">体育</span>
                <img src="${value.pimg}" />
              </a>
              <div class="items__txt">
                <div class="items__txt__title">
                  <span>【上海】</span>
                  <a href=""
                    >${value.pname}</a
                  >
                </div>
                <div class="items__txt__time">
                  <a class="items__txt__venue__icon" href=""></a>
                  ${value.pdesc}
                </div>
                <div class="items__txt__time">
                  <a class="items__txt__time__icon" href=""></a>
                  2022.22.22
                </div>
                <div class="items__txt__price">
                  <span>${value.pprice}</span>
                </div>
              </div>
            </div>`;
          })
          c.innerHTML = str;
        })
      }
    })
}
let itemBox = document.querySelector(".item__box")
List(14, 0, itemBox);
function Main(a, b, c) {
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
              `<div class="items">
              <a class="items__img">
                <span class="items__img__tag">演唱会</span>
                <img src="${value.pimg}" />
              </a>
              <div class="items__txt">
                <div class="items__txt__title">
                  <span>【上海】</span>
                  <a href=""
                    >${value.pname}</a
                  >
                </div>
                <div class="items__txt__time">
                  <a class="items__txt__venue__icon" href=""></a>
                  ${value.pdesc}
                </div>
                <div class="items__txt__time">
                  <a class="items__txt__time__icon" href=""></a>
                  2022.22.22
                </div>
                <div class="items__txt__price">
                  <span>${value.pprice}</span>
                </div>
              </div>
            </div>`;
          })
          c.innerHTML = str;
        })
      }
    })
}

let Item = document.querySelectorAll(".search-sort-item");
for (let i = 0; i < Item.length; i++){
    Item[i].addEventListener("click", function () {
        for (let i = 0; i < Item.length; i++) {
            console.log(i);
            Item[i].className = "search-sort-item";
          }
        this.className = "search-sort-item search-sort-item-active";
        if (this == Item[0]) {
            let itemBox = document.querySelector(".item__box")
            List(14, 0, itemBox);  
        }
        if (this == Item[1]) {
            let itemBox = document.querySelector(".item__box")
            Main(6, 1, itemBox);
        }
        if (this == Item[2]) {
            let itemBox = document.querySelector(".item__box")
            List(4, 2, itemBox);   
        }
        if (this == Item[3]) {
            let itemBox = document.querySelector(".item__box")
            Main(6, 2, itemBox);
        }
    })
}
$(".fiex-botton").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 222,);
});
let fiex1 = document.querySelector(".fiex-top");
let xiaz1 = document.querySelector(".qrcode");

function yichu(a, b) {
  a.addEventListener("mouseover", function () {
      b.style.display = "block";
      
      a.addEventListener("mouseout", function () {
        b.style.display = "none";
      });
    });
}
yichu(fiex1, xiaz1);
