const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click",(evt)=>{
hamburger.classList.toggle("active");
sidebar.classList.toggle("active");
})

// document.querySelectorAll(".sidenav ul").forEach(n => n.
//   addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     sidebar.classList.remove("active");
//   }))

// let slidePosition = 1;
// SlideShow(slidePosition);

// // forward/Back controls
// function plusSlides(n) {
//   SlideShow(slidePosition += n);
// }

// //  images controls
// function currentSlide(n) {
//   SlideShow(slidePosition = n);
// }

// function SlideShow(n) {
//   let i;
//   let slides = document.getElementsByClassName("arrow");
//   if (n > slides.length) {slidePosition = 1}
//   if (n < 1) {slidePosition = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   slides[slidePosition-1].style.display = "block";
// }