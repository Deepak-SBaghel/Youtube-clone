function login() {
    Array.from(elms).forEach((x) => {
    let x = document.getElementById("logindata");
  if (x.style.display === "none") {
    console.log("hello");
  } else {
    x.style.display = "none";
  }
})
}

function hello(){
    document.getElementById("search_btn").innerHTML = "hehhe";
}