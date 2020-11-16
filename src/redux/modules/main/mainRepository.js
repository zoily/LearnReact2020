import axios from 'axios'

let token = null
let axiosAPI = null
/**
 * Initialize or get axios object to request API
 */
const getRepository = () => {
	return new Promise((resolve, reject) => {
		if (axiosAPI) {
			resolve(axiosAPI)
		} else {
			axios
				.get('/config.json')
				.then((res) => {
					axiosAPI = axios.create({
						baseURL: res.data.API_URL,
						headers: {
							token: token
						}
					})
					resolve(axiosAPI)
				})
				.catch((e) => {
					axiosAPI = axios.create({
						baseURL: '/',
						headers: {
							token: token
						}
					})
					reject(axiosAPI)
				})
		}
	})
}
export default {
	setToken: (myToken) => {
		token = myToken
	},
	get: (endpoint) => {
		return new Promise((resolve) => {
			getRepository().then((repo) => resolve(repo.get(endpoint)))
		})
	},
	post: (endpoint, body) => {
		return new Promise((resolve) => {
			getRepository().then((repo) => resolve(repo.post(endpoint, body)))
		})
	}
}
