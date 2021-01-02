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

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

(() =>{

  if ('indexDb' in window){
    console.log("browser is supporting indexDb");
    return;
  }

  let button = document.querySelector(".btn");
  button.addEventListener("click", AddData);

})();

function AddData(){

  const dbname = "MyDB";
 const requestDB= window.indexedDB.open(dbname);

 requestDB.onupgradeneeded=()=>{
   
  let db=requestDB.result;
   let store = db.createObjectStore("iframe",{autoIncreament:true});
 
store.put({iframe:"Welcome to text editor"});


  }

   requestDB.onsuccess =()=>{
     if(requestDB.readyState=="done"){
       console.log("Data is insterted");
     
     }
   }


 }
