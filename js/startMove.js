function startMove(domobj, json, fn) {
  clearInterval(domobj.timer);
  domobj.timer = setInterval(() => {
    let flag = true; //假设都达到了目标值
    for (let attr in json) {
      let iTar = json[attr]; //目标值
      let iCur = 0;
      if (attr == "opacity") {
        iCur = parseInt(getStyle(domobj, "opacity") * 100);
      } else {
        iCur = parseInt(getStyle(domobj, attr));
      }

      let iSpeed = (iTar - iCur) / 10;
      iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
      if (attr == "opacity") {
        domobj.style.opacity = (iCur + iSpeed) / 100;
      } else {
        domobj.style[attr] = iCur + iSpeed + "px";
      }

      if (iCur != iTar) {
        //只要有一个没有达到目标值，假设不成立
        flag = false;
      }
    }
    if (flag) {
      clearInterval(domobj.timer);
      if (fn) {
        fn();
      }
    }
  }, 20);
}

function getStyle(domobj, attr) {
  if (window.getComputedStyle) {
    return getComputedStyle(domobj, null)[attr];
  }
  return domobj.currentStyle[attr];
}