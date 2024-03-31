
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

function hello(){
    document.getElementById("search_btn").innerHTML = "hehhe";
}