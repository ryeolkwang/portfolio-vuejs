import about from './data/about';

const fetch = (mockData, time = 0) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(mockData);
		}, time);
	});
};

export default () => fetch(about);
