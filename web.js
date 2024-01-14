document.addEventListener("DOMContentLoaded", function() {
  updateUserInfo();
});

function updateUserInfo() {
  var userInfoDiv = document.getElementById("user-info");

  var loggedInUser = localStorage.getItem("loggedInUser");

  if (isLoggedIn(loggedInUser)) {
      userInfoDiv.innerHTML = "Gmail: " + loggedInUser;
  } else {
      userInfoDiv.innerHTML = "Gmail: Không đăng nhập";
  }
}

function isLoggedIn(email) {
  return email && isValidGmail(email);
}

function isValidGmail(email) {
 
  return email.endsWith("@gmail.com") && !email.includes("x") && email !== "xxxxx@gmail.com";
}

function redirectToGame1() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "flappybird.html";
  } else {
      alert("Vui lòng đăng nhập để chơi game Flappy Bird.");
      redirectToLoginPage();
  }
}

function redirectToGame2() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "chessai.html";
  } else {
      alert("Vui lòng đăng nhập để chơi game cờ vua AI.");
      redirectToLoginPage();
  }
}

function redirectToLoginPage() {
  window.location.href = "dangnhap.html";
}

function redirectToPage1() {
  window.location.href = "dangnhap.html";
}

function redirectToPage2() {
  window.location.href = "dangki.html";
}

function redirectToGame3() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "chess.html";
  } else {
      alert("Vui lòng đăng nhập để chơi Game cờ vua 2 người.");
      redirectToLoginPage();
  }
}

function redirectToGame4() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "tictactoeai.html";
  } else {
      alert("Vui lòng đăng nhập để chơi Game X/O AI.");
      redirectToLoginPage();
  }
}

function redirectToGame5() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "tictactoe.html";
  } else {
      alert("Vui lòng đăng nhập để chơi Game X/O 2 người.");
      redirectToLoginPage();
  }
}

function redirectToGame6() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "ransanmoi.html";
  } else {
      alert("Vui lòng đăng nhập để chơi Game rắn săn mồi.");
      redirectToLoginPage();
  }
}

var modal = document.getElementById("updateModal");

var updateButton = document.getElementById("updateButton");

var closeBtn = document.getElementsByClassName("close")[0];

updateButton.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function closeUpdatePopup() {
    modal.style.display = "none";
}
