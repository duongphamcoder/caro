// lưu lượt đánh của mỗi người trên local store (true là x đánh, false là o đánh)
localStorage.setItem("turn", true);

// lấy ra các ô
const boxs = document.querySelectorAll(".caro_item");

// biến này dùng để kiểm tra có hòa hay không
const draw = true;

// biến này dùng để đếm số lượt đã qua
let count = 0;

// biến này dùng để lấy số điểm mà người dùng nhập vào
const pointTemp = prompt("Nhập điểm bạn muốn chơi");
const point = +pointTemp;
console.log("point", point);
// biến này dùng để đếm ván hiện tại bạn đang chơi
let pagination_item = 0;

// biến này  lấy element trong html để render title
const pagination = document.querySelector(".pagination");

// xử lý gắn lại tiêu đề khi mỗi ván được hoàn thành
const handleUpdateTitle = () => {
  if (pagination_item <= point) {
    if (point === 0) {
      pagination.textContent = `Ván 0 / ${point}`;
    } else {
      pagination.textContent = `Ván ${pagination_item + 1} / ${point}`;
    }
  }
};
handleUpdateTitle();

// biến này để lấy ra điểm số hiện tại của X
const blue_score = document.querySelector(".blue_score");

// biến này dùng để lấy điểm số hiện tại của O
const red_score = document.querySelector(".red_score");

// biến này dùng để lấy ra nút chơi lại từ đầu
const btn_reset = document.getElementById("btn_reset");

// biến này dùng để lấy ra nút khi hoàn thành ván đấu
const btn_complete = document.querySelector("#btn_complete>span");

// xử lý mở hộp thoại thông báo khi ván đấu kết thúc
const handleOppenDialogBox = (message) => {
  const overlay = document.querySelector(".overlay_wraper");
  overlay.style.display = "flex";
  const messageEl = document.querySelector(".player_message");
  messageEl.textContent = message;
};

// xử lý reset lại ván đấu
const handleResetGame = () => {
  localStorage.setItem("turn", true);
  boxs.forEach((item) => {
    item.classList.remove("blue");
    item.classList.remove("red");
  });

  count = 0;
};

// xử lý xem người chơi đã thắng hay chưa
const handleYouWinOrNot = (player = "", indexChoose) => {
  switch (indexChoose) {
    case 0: {
      // trường hợp win theo đường ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 2].classList.value.search(player) !== -1
      ) {
        return player;

        // win theo chiều dọc
      } else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 6].classList.value.search(player) !== -1
      ) {
        return player;
        // win theo đường chéo
      } else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 4].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 8].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }
    case 1: {
      // win theo hàng ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 1].classList.value.search(player) !== -1
      ) {
        return player;
      }
      //win theo hàng dọc
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 6].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }
    case 2: {
      // win theo hàng ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 2].classList.value.search(player) !== -1
      ) {
        return player;
      }
      //win theo hàng dọc
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 6].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo đường chéo
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 2].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 4].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }
    case 3: {
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 3].classList.value.search(player) !== -1
      ) {
        return player;
      }
      //
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 2].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }
    case 4: {
      // win theo hàng ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 1].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo hàng dọc
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 3].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo đường chéo bên trái
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 4].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 4].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo đường chéo bên phải
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 2].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 2].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }
    case 5: {
      // win theo hàng ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 2].classList.value.search(player) !== -1
      ) {
        return player;
      }
      //win theo hàng dọc
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 3].classList.value.search(player) !== -1
      ) {
        return player;
      }

      break;
    }
    case 6: {
      // win theo hàng ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 2].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo hàng dọc
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 6].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo đường chéo
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 2].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 4].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }
    case 7: {
      // win theo hàng ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 1].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo hàng dọc
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 6].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }
    case 8: {
      // win theo hàng ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 2].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo hàng dọc
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 6].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo đường chéo
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 4].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 8].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }

    default: {
      break;
    }
  }
  return "";
};

// xử lý kiểm tra kết quả chung cuộc

/**
 * Ý tưởng xử lý:
 *    -  Kiểm tra xem là ta đánh đến ván cuối cùng hay chưa:
 *        + Nếu rồi thì ta kiểm tra:
 *          . Kiểm tra xem X nhiều điểm hơn thì thắng
 *          . O cũng tương tự
 *          . Nếu cả 2 bằng điểm thì hòa
 *        + Nếu chưa thì t cũng kiểm tra:
 *          . tương tự như ở trên nhưng không kiểm tra hòa
 */
const handleCheckWin = () => {
  const blue_scoreTemp = +blue_score.textContent;
  const red_scoreTemp = +red_score.textContent;
  const pointWin = Number.parseInt(point / 2 + 1);
  if (pagination_item === point) {
    console.log("Vao");
    if (blue_scoreTemp > red_scoreTemp) {
      alert("X đã chiến thắng chung cuộc");
      window.location.reload();
    } else if (red_scoreTemp > blue_scoreTemp) {
      alert("O đã chiến thắng chung cuộc");
      window.location.reload();
    } else {
      alert("Hai bạn đã hòa nhau");
      window.location.reload();
    }
  } else {
    if (blue_scoreTemp === pointWin) {
      alert("X đã chiến thắng chung cuộc");
      window.location.reload();
    } else if (red_scoreTemp === pointWin) {
      alert("O đã chiến thắng chung cuộc");
      window.location.reload();
    }
  }
  console.log("handleCheckWin", pagination_item);
};

// thiết lập sự kiện click cho tất cả các ô
boxs.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (pagination_item <= point && point !== 0) {
      const checkLength = item.classList.length;
      let x = "";
      if (checkLength === 1) {
        const turn = JSON.parse(localStorage.getItem("turn"));
        if (turn) {
          item.classList.add("blue");
          localStorage.setItem("turn", false);
          x = handleYouWinOrNot("blue", index);
        } else {
          item.classList.add("red");
          localStorage.setItem("turn", true);
          x = handleYouWinOrNot("red", index);
        }
        if (x) {
          handleOppenDialogBox(
            `Người chiến thắng là ${x === "blue" ? "X" : "O"}`
          );
          if (x === "blue") {
            let point_blue = +blue_score.textContent;
            blue_score.textContent = point_blue + 1;
          } else {
            let point_red = +red_score.textContent;
            red_score.textContent = point_red + 1;
          }
        }
        count++;
      } else {
        alert("Vui long cho o khac");
      }
      if (count === boxs.length && !x) {
        handleOppenDialogBox("Hai bạn đã hòa nhau");
      }
    } else {
      alert("Các bạn đã hết lượt đánh. Vui lòng F5 để thực hiện lại từ đầu.");
    }
  });
});

// thêm sự kiện cho nút btn_complete khi hoàn thành ván đấu
btn_complete.addEventListener("click", () => {
  const overlay = document.querySelector(".overlay_wraper");
  overlay.style.display = "none";
  handleResetGame();

  pagination_item++;
  handleCheckWin();
  console.log("pagination_item", pagination_item);
  handleUpdateTitle(point, pagination_item);
});

// thêm sự kiện cho nút btn_reset khi muốn chơi lại ván này
btn_reset.addEventListener("click", () => {
  window.location.reload();
});
