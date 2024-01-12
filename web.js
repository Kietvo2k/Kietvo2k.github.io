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

function redirectToGame() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "gameflappybird.html";
  } else {
      alert("Vui lòng đăng nhập để chơi Flappy Bird.");
      redirectToLoginPage();
  }
}

function redirectToChess() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "chess.html";
  } else {
      alert("Vui lòng đăng nhập để chơi Chess.");
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
