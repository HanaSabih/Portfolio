const body = document.body;
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
    title: "Tonic",
    tags: ["html", "Ruby on rails", "css", "js"],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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

for (let i in projects) {
  let workListCard = document.createElement("div");
  let workListag = document.createElement("li");
  workListCard.classList.add("card");
  workListCard.innerHTML = `
<div class="card_container">
            <h4>${projects[i].title}</h4>
            <div class="tags">
              <ul class="listContainerModal">
                <li><span>${projects[i].tags[0]}</span></li>
                <li><span>${projects[i].tags[1]}</span></li>
                <li><span>${projects[i].tags[2]}</span></li>
                <li><span>${projects[i].tags[3]}</span></li>
              </ul>
            </div>
            <button id=${projects[i].id} class="btnModal">See Project</button>
          </div>

        `;

  workCards.appendChild(workListCard);
}

// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
const btnModal = document.querySelector(".btnModal");

document.querySelectorAll(".btnModal").forEach((n) =>
  n.addEventListener("click", (e) => {
    let idname = e.target.id;

    modal.style.display = "block";

    let modalDiv = document.createElement("div");
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
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        modal.innerHTML = "";
      }
    };
  })
);
