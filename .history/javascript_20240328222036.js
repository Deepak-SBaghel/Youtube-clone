
function login() {
  let x = document.getElementById("logindata");
  let y = document.getElementById("login-signup");
  if (x.style.display == "none") {
    x.style.display = 'flex';
    y.style.display = 'none'
  } else {
    x.style.display = "none";
  }
}

function changesidebar() {
  let x = document.getElementById(sidebar1);
  let y = document.getElementById(sidebar2);
  if(y.style.display == 'none'){
    x.style.display = "none"
    y.style.display = "flex"
  }
  else[
    y.style.display = "none"
    x.style.display = "flex"
  ]
}

// ask which tag to use 
// ask use variable in/out