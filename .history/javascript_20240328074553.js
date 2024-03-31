let x = document.querySelector("#logindata");

let login = function () {

  console.log("hello");
  if (x.style.display === "none") {
    console.log("hello1");
    x.style.display = 'd-flex';
  } else {
    x.style.display = "none";
  }
}

function hello(){
    document.getElementById("search_btn").innerHTML = "hehhe";
}