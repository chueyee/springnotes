import { apiClient } from './ApiClient';

// export function retrieveHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world-bean');
// }

// export const retrieveHelloWorldBean = () => axios.get('http://localhost:8080/hello-world-bean');

export const retrieveHelloWorldVariable = (username, token) =>
	apiClient.get(`/hello-world/path-variable/${username}`, {
		// headers: {
		// 	Authorization: token,
		// },
	});
