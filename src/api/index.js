import about from './data/about';
import projects from './data/projects';

const fetch = (mockData, time = 0) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(mockData);
		}, time);
	});
};

export const fetchAbout = () => fetch(about);

export const fetchProjects = () => fetch(projects);
