let gxuanran = document.querySelector(".ad-nba");
console.log(gxuanran);
$.ajax({
    url: "http://jx.xuzhixiang.top/ap/api/cart-list.php",
    type: "get",
    async: false,
    data: {
      id: 74824,
    },
    success: function (data) {
      let str = "";
      $.each(data, function (i, n) {
        $.each(n, function (index, value) {
          str +=
            `<table class="zuidade">
            <colgroup>
              <col style="width: 5%" />
              <col style="width: 35%" />
              <col style="width: 17%" />
              <col style="width: 9%" />
              <col style="width: 9%" />
              <col style="width: 10%" />
              <col style="width: 10%" />
              <col style="width: 5%" />
            </colgroup>
            <tbody>
              <tr class="next-table-row last first">
                <td><input class="cheak" type="checkbox" /></td>
                <td
                  class="single next-table-cell first"
                  colspan="1"
                  rowspan="1"
                >
                  <div class="next-table-cell-wrapper">
                    <div
                      class="next-row project-name-wrapper"
                      data-spm="list"
                    >
                      <div class="next-col project-name-img">
                        <img
                          src="${value.pimg}"
                          data-spm="ditempic"
                        />
                      </div>
                      <div class="next-col project-name-right">
                        <div
                          class="next-row project-name"
                          data-spm="dtitle"
                        >
                          ${value.pname}
                        </div>
                        <div class="next-row project-name-perform">
                          <span>2021.12.15 20:00</span>
                        </div>
                        <div class="next-row project-name-venue">
                          ${value.pdesc}
                        </div>
                        <div class="next-row project-name-tips"></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="seatInfo next-table-cell">
                  <div class="next-table-cell-wrapper">
                    <span class="no-seat">暂无座位信息</span>
                  </div>
                </td>
                <td class="next-table-cell">
                  <div class="next-table-cell-wrapper jiage">${value.pprice}</div>
                </td>
                <td class="next-table-cell">
                  <div class="next-table-cell-wrapper jiajian">
                    <a data-id=${value.pid} class="cart-jian">-</a><input class="cart-input" type="text" value="${value.pnum}"><a data-id=${value.pid} class="cart-jia">+</a>
                  </div>
                </td>
                <td class="next-table-cell">
                  <div class="next-table-cell-wrapper">
                    <span class="no-discount">-</span>
                  </div>
                </td>
                <td class="next-table-cell last">
                  <div class="next-table-cell-wrapper">
                    <span class="total">${value.pprice*value.pnum}</span>
                  </div>
                </td>
                <td data-id=${value.pid} class="sancu">删除</td>
              </tr>
            </tbody>
          </table>`;
        })
        gxuanran.innerHTML = str;
      })
    }
})
