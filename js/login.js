document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("login button clicked");

  const phoneNumber = document.getElementById("phone-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  console.log(phoneNumber, pinNumber);

  if (phoneNumber === "01324013771" && pinNumber === "1234") {
    console.log("you are logged in");
    window.location.href = "home.html";
  } else {
    alert("wrong phone number or pin ");
  }
});
