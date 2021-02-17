const images = document.querySelectorAll(".content");
const uls = document.querySelectorAll("li");

uls.forEach((lis, idx) => {
  lis.addEventListener("click", () => {

      desactiveIcons();
      hideContents();

      uls[idx].classList.add("active")
      images[idx].classList.add("show");
    })
})

function desactiveIcons() {
  uls.forEach(lis => {
    lis.classList.remove("active");
  });
}

function hideContents() {
  images.forEach(img => {
    img.classList.remove("show");
  });
}