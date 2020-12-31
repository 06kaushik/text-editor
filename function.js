function enableEditMode() {
    richTextField.document.designMode = "on";
  }
  function Edit(command) {
    richTextField.document.execCommand(command, false, null);
  }
  function execVal(command, value) {
    richTextField.document.execCommand(command, false, value);
  }
  window.onscroll = function() {myFunction()};

var toolbar = document.getElementById("toolbar");
var sticky = toolbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    toolbar.classList.add("sticky")
  } else {
    toolbar.classList.remove("sticky");
  }
}