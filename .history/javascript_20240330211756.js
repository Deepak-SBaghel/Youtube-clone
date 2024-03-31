
function login() {
  let x = document.getElementById("logindata");
  let y = document.getElementById("login-signup");
  if (x.style.display == "none") {
    x.style.display = 'flex';
    y.style.display = 'none';
  } else {
    x.style.display = "none";
  }
}

function changesidebar() {
  console.log("hello");
  let x = document.getElementById("sidebar1");
  let y = document.getElementById("sidebar2");
  
  if(x.style.display != 'none'){
    x.style.display = "none";
    y.style.display = "flex";
    y.style.flexDirection = "column";
    y.style.position = "fixed-top";
    document.getElementById("sidebar2div").style.top = "60px";
    document.getElementById("cardsandnavbar2").style.width = "87.3%";
  }
  else{
    y.style.display = "none";
    x.style.display = "flex";
    x.style.flexDirection = "column";
    x.style.position = "fixed-top"
    document.getElementById("cardsandnavbar2").style.width = "95.4%";
  }
  console.log(x.style.display);
  console.log(y.style.display);
}


function arrowprev() {
  document.getElementById("options").scrollLeft -= 60;
  document.getElementById("options").style.scrollBehavior = "smooth";  
}
function arrownext(){
  document.getElementById("options").style.scrollBehavior = "smooth";
  document.getElementById("options").scrollLeft += 60;
  console.log("click");
}

function imgchange(){
  document.getElementsByClassName("img1").src ="https://source.unsplash.com/random/900x700/?b";
  console.log(x)
  
}