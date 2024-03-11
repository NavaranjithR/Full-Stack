const backToTop = document.querySelector(".back-to-top");
console.log(backToTop);
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 50;

    if (revealTop < windowheight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

