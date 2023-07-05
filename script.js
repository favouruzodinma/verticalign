let colorBtn = document.getElementById("btn2")
let input = document.getElementById("input");
let button = document.getElementById("btn");
let iconsearch = document.getElementById("iconsearch");
let cancel = document.getElementById("cancel");
let form_div = document.getElementById("form_div");
let cancel_modal = document.getElementById("cancel_modal");
let inp_div = document.getElementById("inp_div");
let error = document.getElementById("error")
  //............... How to generate random color code ...................//
   function generateColorCode() {
    let colorFormer = 'abcdef0123456789';
    let newColor = '';
  
    for (let i = 0; i < 6; i++) {
      let randomColor = Math.floor(Math.random() * colorFormer.length);
      newColor += colorFormer.charAt(randomColor);
    }
  
    return `#${newColor}`;
  }

  
  
colorBtn.onclick = function(){
    let randomColor = generateColorCode();
    console.log(randomColor);
   colorBtn.style.backgroundColor = randomColor;
    
}
//...................................ended.........................................//
function showInput() {
    form_div.style.display = "flex";

  }
  cancel_modal.onclick = function (){
    form_div.style.display = "none";
    location.reload();
  }

  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (input.value !== ""){
      inp_div.innerHTML=`Searching... ${input.value}`
      input.value="";

      setTimeout(()=>{
        form_div.style.display = "none";
        location.reload();
      }, 5000);
    }else{
      input.style.border =" 1px solid red";
      error.innerHTML ="Input Must Not Be Empty"
      error.style.color = "red"
      setTimeout(()=>{
        input.style.border ="";
        error.innerHTML =""
        error.style.color = ""
      }, 5000);
    }
   
  });

window.addEventListener("scroll", function(){
  let nav = document.querySelector("nav");
  let head = this.document.querySelector("header")
  let winPix = window.scrollY;
  console.log(winPix);
  if(winPix > 150){
    nav.classList.add("fixed");
    head.classList.add("header2")
  }else{
    nav.classList.remove("fixed");
    head.classList.remove("header2")
  }
 
});

function enter() {
  menu.innerText = "☰ ";
}

// function out() {
//   menu.innerText = "|||";
// }

function opened() {
  sidebar.style.width = "400px";
}

function cancelled() {
  sidebar.style.width = "0px";
}