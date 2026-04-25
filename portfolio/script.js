let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('themeSwitch')
const girlImage = document.querySelector('.girlLookingUp');
const angelImage = document.querySelector('.angelOnCloud');
const myImage = document.querySelector('.pictureOfMe');
const boyImage = document.querySelector('.boyOnPillar');
const containerImage = document.querySelector('.container_image');
const containerImage2 = document.querySelector('.container_solid');


const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
    if(girlImage) girlImage.src = 'devilPeekingOverWall.png';
    if(angelImage) angelImage.src = 'devilPlayingViolin.png';
    if(myImage) myImage.src = 'FaceWblueBackground.jpg';
    if(boyImage) boyImage.src = 'devilPlayingViolin.png';
    if(containerImage) containerImage.src = '2970447842_2615c09472_k.jpg';
    if(containerImage2) containerImage2.src = '2970447842_2615c09472_k.jpg';
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');
    if(girlImage) girlImage.src = 'GirlLookingUp.png';
    if(angelImage) angelImage.src = 'AngelOnCloud.png';
    if(myImage) myImage.src = 'FaceWorangeBackground.jpg';
    if(boyImage) boyImage.src = 'angelBoyOnPillar.png';
    if(containerImage) containerImage.src = 'https://images.pexels.com/photos/6479557/pexels-photo-6479557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    if(containerImage2) containerImage2.src = 'https://images.pexels.com/photos/6479557/pexels-photo-6479557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

import { searchProjects } from './search.js';
import { projects } from './projects.js';

const ProjectContainer = document.querySelector('#projectCards');
const input = document.querySelector('#search');
const button = document.querySelector('#searchBtn');

function renderProjects(projects) {
    ProjectContainer.innerHTML = '';
    projects.forEach(project => {
        ProjectContainer.innerHTML += projectsTemplate(project);
    });
}

button.addEventListener('click', () => {
    const results = searchProjects(input.value);
    renderProjects(results);
});

input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const results = searchProjects(input.value);
        renderProjects(results);
    }
});

function tagTemplate(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');
}

function projectsTemplate(project) {
    return `
    <article class="projectCard">
        <div>
            <h2>${project.name}</h2>
            <img src="${project.image}" alt="Image of ${project.name}" class="projectPhoto">
        </div>
        <div class="projectDescriptions">
            <p class="description">${project.description}</p>
            <div class="projectTagList">
                ${tagTemplate(project.tags)}
            </div>
        </div>
        <a href="${project.projectURL}" class="button">View</a>
    </article>`;
}

renderProjects(projects);




//Make sure all Javascript works
//implement this portfolio to be sent out to job applications