function login() {
    let x = document.getElementById("logindata").value;
    Array.from(x).forEach((x) => {
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