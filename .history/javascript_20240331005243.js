
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
  let value = 0;
  let x = document.getElementsByClassName("img")
  console.log(x[0]);
  x[1].style.display = "block";
  let funcintime = setInterval(() => {
    if(value == 0){
      x[0].style.display = "block";
      x[1].style.display = "none";
      x[2].style.display = "none";
      console.log(x[1].style.display);
      console.log(x[2].style.display);
    } else if(value == 1){
      x[0].style.display = "none";
      x[1].style.display = "block";
      x[2].style.display = "none";
      console.log(x[0].style.display);
      console.log(x[2].style.display);
    } else {
      x[0].style.display = "none";
      x[1].style.display = "none";
      x[2].style.display = "block";
      console.log(x[0].style.display);
      console.log(x[1].style.display);
      value = 0;
    }
    value +=1;
    reload()
  },2000)
}
    // console.log("hello");
function noimgchange() {
  clearInterval(funcintime)
}

// }
// function images(){
//   let x = document.getElementsByClassName("imgcomehere");
//   while true{

//   }
// }


function reload(){
    var container = document.getElementsByClassName("img");
    var content = container.innerHTML;
    container.innerHTML= content; 
    
   //this line is to watch the result in console , you can remove it later	
    console.log("Refreshed"); 
}