const icon = document.querySelector(".icon");
const x = document.getElementById("myTopnav");

document.querySelectorAll(".rightNav").forEach((n) =>
  n.addEventListener("click", () => {
    x.classList.remove("responsive");
  })
);
