const icon = document.querySelector(".icon");
const x = document.getElementById("myTopnav");

icon.addEventListener("click", () => {
  x.classList.toggle("responsive");
});

document.querySelectorAll(".rightNav").forEach((n) =>
  n.addEventListener("click", () => {
    x.classList.remove("responsive");
  })
);
