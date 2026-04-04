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