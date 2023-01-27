const { body } = document;
const icon = document.querySelector(".icon");
const workCards = document.querySelector(".workCards");
const x = document.getElementById("myTopnav");

// navbar
icon.addEventListener("click", () => {
  x.classList.toggle("responsive");
  body.classList.toggle("responsive");
  // document.body.style.overflow = "hidden";
});
document.querySelectorAll(".rightNav").forEach((n) =>
  n.addEventListener("click", () => {
    x.classList.remove("responsive");
  })
);
// data
const projects = [
  {
    id: "0",
    imgSouce: "./images/work/work1.png",
    title: "To Do list",
    tags: ["html", "webpack", "css", "js"],
    text: "This is a To Do list: build with a simple HTML list of To Do tasks. This simple web page will be built using webpack and served by a webpack dev server, with testing.",
  },
  {
    id: "1",
    imgSouce: "./images/work/work2.png",
    title: "Multi-Post Stories",
    tags: ["html", "Ruby on rails", "css", "js"],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    id: "2",
    imgSouce: "./images/work/work3.png",
    title: "Facebook 360",
    tags: ["html", "Ruby on rails", "css", "js"],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    id: "3",
    imgSouce: "./images/work/work4.png",
    title: "Uber Navigation",
    tags: ["html", "Ruby on rails", "css", "js"],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    id: "4",
    imgSouce: "./images/work/work5.png",
    title: "Profesional Art Printing Data",
    tags: ["html", "Ruby on rails", "css", "js"],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    id: "5",
    imgSouce: "./images/work/work6.png",
    title: "Multi-Post Stories Gain+Glory",
    tags: ["html", "Ruby on rails", "css", "js"],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
];
projects.forEach((project) => {
  // for (const i in projects) {
  const workListCard = document.createElement("div");
  workListCard.classList.add("card");
  workListCard.innerHTML = `
<div class="card_container">
<img src="${project.imgSouce}" alt="">
            <h4>${project.title}</h4>
            <div class="tags">
              <ul class="listContainerModal">
                <li><span>${project.tags[0]}</span></li>
                <li><span>${project.tags[1]}</span></li>
                <li><span>${project.tags[2]}</span></li>
                <li><span>${project.tags[3]}</span></li>
              </ul>
            </div>
            <button id=${project.id} class="btnModal">See Project</button>
          </div>

        `;

  workCards.appendChild(workListCard);
});

// Get the modal
const modal = document.getElementById("myModal");

document.querySelectorAll(".btnModal").forEach((n) =>
  n.addEventListener("click", (e) => {
    const idname = e.target.id;

    modal.style.display = "block";

    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal-content");
    modalDiv.innerHTML = `
  <span class="closeModal">&times;</span>
  <img src=${projects[idname].imgSouce} alt=${projects[idname].title}/>
  <div class="hdrModal ">
  <h1  >${projects[idname].title}</h1>
  <div class="btnModal " >
  <button>See live <img src="./images/popup/Icon.png" class="btnimg" alt="See live"/></button>
  <button>See Source <img src="./images/popup/Vector.png" class="btnimg" alt="See Source"/></button>
  </div>
  </div>
  <div class="tags">
    <ul>
      <li><span>${projects[idname].tags[0]}</span></li>
      <li><span>${projects[idname].tags[1]}</span></li>
      <li><span>${projects[idname].tags[2]}</span></li>
      <li><span>${projects[idname].tags[3]}</span></li>
    </ul>
  </div>
  <p>${projects[idname].text}</p>
  <div class="btnModalmobile ">
  <button>See live <img src="./images/popup/Icon.png" class="btnimg" alt="See live"/></button>
  <button>See Source <img src="./images/popup/Vector.png" class="btnimg" alt="See Source"/></button>
  </div>
  

        `;
    modal.appendChild(modalDiv);
    document.querySelector(".closeModal").onclick = function () {
      modal.style.display = "none";
      modal.innerHTML = "";
      body.classList.remove("responsive");
    };
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        modal.innerHTML = "";
        body.classList.remove("responsive");
      }
    };
    body.classList.add("responsive");
  })
);

// =============validtion form=============

const gontactForm = document.getElementById("contact-form");
const messageform = document.querySelector(".messageform");
const email = document.getElementById("emailForm");
const name = document.getElementById("name");
const msg = document.getElementById("msg");

gontactForm.addEventListener("change", (e) => {
  e.preventDefault();
  email.classList.remove("invalide");
  messageform.classList.remove("invalide");
  messageform.style.display = "none";
});

gontactForm.addEventListener("change", (e) => {
  e.preventDefault();
  email.classList.remove("invalide");
  messageform.classList.remove("invalide");
  messageform.style.display = "none";
});

gontactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    email.classList.add("invalide");
    messageform.innerHTML = "Your Email must be in lowercase Please change it";
    messageform.style.display = "block";
    messageform.classList.add("invalide");
  } else {
    messageform.style.display = "block";
    gontactForm.submit();
  }
});
// =============local storage=============
function formDatas() {
  const formData = {
    namef: name.value,
    emailf: email.value,
    msgf: msg.value,
  };
  localStorage.setItem("info", JSON.stringify(formData));
}

name.addEventListener("focusout", formDatas);
email.addEventListener("focusout", formDatas);
msg.addEventListener("focusout", formDatas);

const obtainedData = JSON.parse(localStorage.getItem("info"));
if (obtainedData) {
  name.value = obtainedData.namef;
  email.value = obtainedData.emailf;
  msg.value = obtainedData.msgf;
} else {
  name.value = "";
  email.value = "";
  msg.value = "";
}
