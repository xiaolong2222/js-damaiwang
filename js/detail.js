var vbn = location.search.split("?")[1];
let lbj = document.querySelector(".ad-zhongtou");


  $.ajax({
    url: "http://jx.xuzhixiang.top/ap/api/detail.php",
    type: "get",
    async:false,
    data: {
      id: vbn,
    },
    success: function (data) {
      console.log(data);
      let str = "";
      $.each(data, function (i, n) {
        str +=
          `<div class="ad-zstt">
            <div class="ad-baokou">
              <div class="ad-yuantou">
                <img class="ad-img" src="${n.pimg}" />
              </div>
              <div class="ad-sanfen">
                <div class="lbj-tiaotou">
                  <span>【上海】${n.pname}</span>
                </div>
                <div class="lbj-sanfen">
                  <div class="lbj-zhuansheng">时间：2022.22.22</div>
                  <div class="lbj-erji">
                    <div class="ad-tizhong">地点:${n.pdesc}</div>
                    <a
                      href="//ditu.amap.com/regeo?spm=a2oeg.project.projectinfo.daddress.688f37a4suKWkB&amp;lng=121.498068&amp;lat=31.264419&amp;name=上海市&amp;src=damai&amp;callnative=0&amp;platform=pc"
                      target="_blank"
                      class="ad-xiazhi"
                    ></a>
                  </div>
                </div>
                <div class="lbj-koulan">
                  <div class="baoluo">
                    <img class="weishao" src="img/xbiao3.png" alt="" />
                    场次时间均为演出当地时间
                  </div>
                  <div class="kzui">
                    <div class="kzui-left">场次</div>
                    <div class="kzui-right">
                      <div class="klus">
                        <span>2022.02.02&nbsp;星期二&nbsp;12:12</span>
                      </div>
                    </div>
                  </div>
                  <div class="kzui">
                    <div class="kzui-left">票档</div>
                    <div class="kzui-right">
                      <div class="klus">
                        <span>全票价${n.pprice}元</span>
                      </div>
                    </div>
                  </div>
                  <div class="xiaoka">
                    <div class="number">数量</div>
                    <div class="kd-nb">
                      <div class="bobu">
                        <div class="kd">
                          <a class="kd-jian">-</a>
                          <div class="kd-qizhi">
                            <input
                              autocomplete="off"
                              spellcheck="false"
                              class="kd-input"
                            />
                            <span class="kd-long">张</span>
                          </div>
                          <a class="kd-jian kd-jia">+</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="kuli">
                    <div class="kuli-sanfen">加入购物车</div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
      })
      lbj.innerHTML = str;
    }
  })


let jiana = document.querySelectorAll(".kd-jian")[0];
console.log(jiana);
let jiaa = document.querySelectorAll(".kd-jian")[1];
let shul = document.querySelector(".kd-input");
shul.value = 1;
console.log(shul);
let count = 1;
jiana.addEventListener("click", function () {
  count--
  if (count <= 1) {
    count = 1;
  }
  shul.value = count;
})
jiaa.addEventListener("click", function () {
  count++
  shul.value = count;
})


let ad = document.querySelector(".kuli-sanfen");

ad.addEventListener("click", function () {

  let num = shul.value;
  console.log(num);
  $.ajax({
    url: "http://jx.xuzhixiang.top/ap/api/add-product.php",
    type: "get",
    async: false,
    data: {
      pid: vbn,
      uid: 74824,
      pnum:num,
    },
    success: function (data) {
      console.log(data);
    }
  })
  window.open("cart.html");
})