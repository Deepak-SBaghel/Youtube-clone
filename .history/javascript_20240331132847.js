
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

// function imgchange(index){
//   if(index > 0){
//     let x = document.getElementsByClassName("img");
//     x[0].src = x[index].src;
//     console.log(x[0].src);
//     let nextindex ;
//     if(index == 3){
//       nextindex = 1
//     }
//     else{
//       nextindex = index +1;
//     }
//     a  = setTimeout(imgchange,2000,nextindex);
//   }
// }
// function noimgchange() {
//   document.getElementsByClassName("img")[0].src = document.getElementsByClassName("img")[1].src;
//   clearTimeout(a);
// }


function preloadImage(url)
{
    var img=new Image();
    img.src=url;
    // return img;
}
function imgchange(index,y){
    // var z = y;

    let arr = ["https://source.unsplash.com/random/900x700/?a","https://source.unsplash.com/random/900x700/?b","https://source.unsplash.com/random/900x700/?c"];
    preloadImage(arr);
    // console.log(y.getElementsByClassName('img')[0]);
    let x = y.getElementsByClassName("img");
    x[0].src = arr[index].src;
    console.log(x[0].src);
    let nextindex ;
    if(index == 3){
      nextindex = 1
    }
    else{
      nextindex = index +1;
    }
    a  = setTimeout(imgchange,2000,nextindex,y);
  
}
function noimgchange() {
  document.getElementsByClassName("img")[0].src = document.getElementsByClassName("img")[1].src;
  clearTimeout(a);
}