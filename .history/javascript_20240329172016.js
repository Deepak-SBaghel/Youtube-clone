
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
    y.style.display = "inline";
    y.style.flexDirection = "column"
  }
  else{
    y.style.display = "none";
    x.style.display = "inbline";
    y.style.flexDirection = "column"
  }
  console.log(x.style.display);
  console.log(y.style.display);
}

// ask which tag to use 
// ask use variable in/out