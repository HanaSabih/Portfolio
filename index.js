const { body } = document;
const icon = document.querySelector('.icon');
const workCards = document.querySelector('.workCards');
const x = document.getElementById('myTopnav');

// navbar
icon.addEventListener('click', () => {
  x.classList.toggle('responsive');
  body.classList.toggle('responsive');
  // document.body.style.overflow = "hidden";
});
document.querySelectorAll('.rightNav').forEach((n) => n.addEventListener('click', () => {
  x.classList.remove('responsive');
}));
// data
const projects = [
  {
    id: '0',
    imgSouce: './images/work/w-1.png',
    title: 'Cryptocurrency',
    tags: ['React', 'Redux', 'Testing', 'Bootstrap'],
    seeLive: 'https://cryptocurrency-jdo1.onrender.com/',
    sourceView: 'https://github.com/HanaSabih/cryptocurrency',
    text: 'A Single Page Application that allows users to track the Cryptocurrency Market. Users can search for country and click on a coin to view their current data of coin stat.',
  },
  {
    id: '1',
    imgSouce: './images/work/w-2.png',
    title: 'Bookstore',
    tags: ['React', 'Redux', 'API', 'Bootstrap'],
    seeLive: 'https://hana-sabih-bookstore.netlify.app/',
    sourceView: 'https://github.com/HanaSabih/bookstore',
    text: 'The Bookstore is a website similar to Awesome Books website. This version simple website that displays a list of books and allows you to: Display a list of books, Add a book, Remove a selected book, and Discus about a book by making comments. The project is built using ReactJS, CSS3, and HTML5, bootstrap.',
  },
  {
    id: '2',
    imgSouce: './images/work/w-3.png',
    title: 'Space Travelers Hub',
    tags: ['React', 'Redux', 'API', 'Testing'],
    seeLive: 'https://hana-sabih-space-travelers-hub.netlify.app/',
    sourceView: 'https://github.com/HanaSabih/space-travelers-hub',
    text: 'Single Page Application which displays lists of Rockets and Missions with information from the SpaceX API. It allows a user to make reservations for rockets or join missions. Said rockets and missions are then displayed in the MyProfile page.',
  },
  {
    id: '3',
    imgSouce: './images/work/w-4.png',
    title: 'The Meal',
    tags: ['Js6', 'API', 'Testing', 'webpack'],
    seeLive: 'https://hanasabih.github.io/the-meal/dist/',
    sourceView: 'https://github.com/HanaSabih/the-meal',
    text: 'the-meal is a group capstone project to dynamically build a restaurant website using Javascript, Webpack, a couple of APIs and Jest for testing.',
  },
  {
    id: '4',
    imgSouce: './images/work/w-5.png',
    title: 'Accountant Website',
    tags: ['html', 'Bootstrap', 'css', 'js'],
    seeLive:
      'https://hanasabih.github.io/capstone-project1-accountant-website/',
    sourceView:
      'https://github.com/HanaSabih/capstone-project1-accountant-website',
    text: 'the-meal is a group capstone project to dynamically build a restaurant website using Javascript, Webpack, a couple of APIs and Jest for testing.',
  },
  {
    id: '5',
    imgSouce: './images/work/w-6.png',
    title: 'Awesome Books',
    tags: ['html', 'Bootstrap', 'css', 'js'],
    seeLive: 'https://hanasabih.github.io/awesome-books/',
    sourceView: 'https://github.com/HanaSabih/awesome-books',
    text: 'This is a Awesome books: plain JavaScript with objects project in the Microverse program to test my understanding in different ways to create objects in JavaScript, and Create and access properties and methods of JavaScript objects.',
  },
];
projects.forEach((project) => {
  // for (const i in projects) {
  const workListCard = document.createElement('div');
  workListCard.classList.add('card');
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
const modal = document.getElementById('myModal');

document.querySelectorAll('.btnModal').forEach((n) => n.addEventListener('click', (e) => {
  const idname = e.target.id;

  modal.style.display = 'block';

  const modalDiv = document.createElement('div');
  modalDiv.classList.add('modal-content');
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
  <div class= "seeSource">
  <a href=${projects[idname].seeLive} target="_blank" ><button>See live <img src="./images/popup/Icon.png" class="btnimg" alt="See live"/></button></button></a>
  <a href=${projects[idname].sourceView} target="_blank" ><button>See Source <img src="./images/popup/Vector.png" class="btnimg" alt="See Source"/></button></a>
  </div>
  
  
  

        `;
  modal.appendChild(modalDiv);
  document.querySelector('.closeModal').onclick = function () {
    modal.style.display = 'none';
    modal.innerHTML = '';
    body.classList.remove('responsive');
  };
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      modal.innerHTML = '';
      body.classList.remove('responsive');
    }
  };
  body.classList.add('responsive');
}));

// =============validtion form=============

const gontactForm = document.getElementById('contact-form');
const messageform = document.querySelector('.messageform');
const email = document.getElementById('emailForm');
const name = document.getElementById('name');
const msg = document.getElementById('msg');

gontactForm.addEventListener('change', (e) => {
  e.preventDefault();
  email.classList.remove('invalide');
  messageform.classList.remove('invalide');
  messageform.style.display = 'none';
});

gontactForm.addEventListener('change', (e) => {
  e.preventDefault();
  email.classList.remove('invalide');
  messageform.classList.remove('invalide');
  messageform.style.display = 'none';
});

gontactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    email.classList.add('invalide');
    messageform.innerHTML = 'Your Email must be in lowercase Please change it';
    messageform.style.display = 'block';
    messageform.classList.add('invalide');
  } else {
    messageform.style.display = 'block';
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
  localStorage.setItem('info', JSON.stringify(formData));
}

name.addEventListener('focusout', formDatas);
email.addEventListener('focusout', formDatas);
msg.addEventListener('focusout', formDatas);

const obtainedData = JSON.parse(localStorage.getItem('info'));
if (obtainedData) {
  name.value = obtainedData.namef;
  email.value = obtainedData.emailf;
  msg.value = obtainedData.msgf;
} else {
  name.value = '';
  email.value = '';
  msg.value = '';
}
