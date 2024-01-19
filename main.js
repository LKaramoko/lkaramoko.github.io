const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("liens");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    liens.classList.toggle("active");

});

document.querySelectorAll(".nav-link").foreach((link) =>
  link.addEventlistener("click",() => {
    hamburger.classlist.remove("active");
    liens.classList.remove("active");
  })
);
