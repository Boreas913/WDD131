import { searchProjects } from './search.js';

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


function projectsTemplate(project) {
    return `
    <article class="project-card">
        <img src="${project.image}" alt="Image of ${project.name}" class="projectPhoto">
        <div class="projectDescriptions">
            <p class="tags">${project.tags[0]}</p>
            <h4>${project.name}</h4>
            <p class="description">${project.description}</p>
            <div class="projectTagList">
                ${tagTemplate(project.tags)}
            </div>
        </div>
        <a href="${project.projectURL}" class="button">View Project</a>
    </article>`;
}



// function init() {
//     let randomNum = Math.floor(Math.random() * recipes.length);
//     renderRecipes(recipes[randomNum]);
// }

// init();