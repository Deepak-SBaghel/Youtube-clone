
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

// function imgchange(){
//   document.getElementsById("img1").src ="https://source.unsplash.com/random/900x700/?b";
//   console.log("hello");
  
// }
// function imgchange(){
//   let x = document.getElementsByClassName("imgcomehere");
//   while true{

//   }
// }

const container = document.querySelector('.images');
const hoverImages = document.querySelectorAll('.hover-img');
let currentIndex = 0;
let intervalId;
function showNextImage() {
    hoverImages.forEach((image, index) => {
        if (index === currentIndex) {
            image.style.opacity = '1';
        } else {
            image.style.opacity = '0';
        }
    });
    currentIndex = (currentIndex + 1) % hoverImages.length;
}

container.addEventListener('mouseenter', () => {
    intervalId = setInterval(showNextImage, 2000);
});

container.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
    hoverImages.forEach(image => {
        image.style.opacity = '0';
    });
    currentIndex = 0;
});

// Make the slideshow loop seamlessly
function startSlideshowLoop() {
    intervalId = setInterval(showNextImage, 2000);
}

// Reset the slideshow loop when it reaches the end
function resetSlideshowLoop() {
    clearInterval(intervalId);
    currentIndex = 0;
    startSlideshowLoop();
}

// Start the slideshow loop initially
startSlideshowLoop();

// Listen for the end of slideshow to reset the loop
hoverImages[hoverImages.length - 1].addEventListener('transitionend', resetSlideshowLoop);
