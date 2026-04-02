import { projects } from './projects.js';

export function searchProjects(query) {
    query = query.toLowerCase();

    return projects
        .filter(projects =>
            projects.name.toLowerCase().includes(query) ||
            projects.description.toLowerCase().includes(query) ||
            projects.tags.some(tag => tag.toLowerCase().includes(query))
        )
        .sort((a, b) => a.name.localeCompare(b.name));
}
