function passCheck() {
  var checkBox = document.getElementById("checkBox");
  var pass = document.getElementById("floatingPassword");
  if (checkBox.checked == true) {
    pass.setAttribute("type", "text");
  } else {
    pass.setAttribute("type", "password");
  }
}
