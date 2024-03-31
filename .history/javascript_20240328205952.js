let x = document.getElementById("logindata");

function login() {
  console.log("hello");
  if (x.style.display == "none") {
    console.log("hello1");
    x.style.display = 'flex';
  } else {
    x.style.display = "none";
  }
}

function hello(){
    document.getElementById("search_btn").innerHTML = "hehhe";
}