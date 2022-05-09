const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});
function myfunction() {
    let x = document.getElementsByid("summ");
    x.style.fontSize = "22px"; 
    x.style.color = "yellow"; 
 }