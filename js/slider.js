class Slider {
  constructor(id) {
    this.sliderBox = document.getElementById(id);
    this.sliderUl = this.sliderBox.children[0];
    this.sliderList = this.sliderUl.children;
    this.len = this.sliderList.length;
    this.i = 0; //控制移动的核心变量
    this.timer = null;
    this.autoPlay();
    this.clearAndAdd();
  }
  autoPlay() {
    this.timer = setInterval(() => {
      this.move();
    }, 3000);
  }
  move() {
    this.i++;
    if (this.i == this.len) {
      this.i = 0;
    }
    if (this.i == -1) {
      this.i = this.len - 1;
    }
    if (this.circles) {
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].className = "";
      }
      this.circles[this.i].className = "hover";
    }

    for (let i = 0; i < this.len; i++) {
      this.sliderList[i].style.opacity = 0;
    }
    /* startMove(this.sliderList[this.i], {
      opacity: 100
    }); */
    this.sliderList[this.i].style.opacity = 1;
  }
  addBtn() {
    let oDiv = document.createElement("div");
    oDiv.className = "btns";
    oDiv.innerHTML = "<span>&lt;</span><span>&gt;</span>"
    this.sliderBox.appendChild(oDiv);
    let prev = oDiv.children[0];
    prev.onclick = () => {
      this.i -= 2;
      this.move();
    }
    let next = oDiv.children[1];
    next.onclick = () => {
      this.move();
    }
  }
  addCircle() {
    let oUl = document.createElement("ul");
    oUl.className = "nums";
    let str = "";
    for (let i = 0; i < this.len; i++) {
      str += `<li>${i + 1}</li>`;
    }
    oUl.innerHTML = str;
    this.sliderBox.appendChild(oUl);
    this.circles = oUl.children;
    this.circles[0].className = "hover";
    for (let i = 0; i < this.circles.length; i++) {
      this.circles[i].onmouseover = () => {
        this.i = i - 1;
        this.move();
      }
    }
  }
  clearAndAdd() {
    this.sliderBox.onmouseover = () => {
      //箭头函数里的this指向实例
      clearInterval(this.timer);
    }
    this.sliderBox.onmouseout = () => {
      this.timer = setInterval(() => {
        this.move();
      }, 3000);
    }
  }
}