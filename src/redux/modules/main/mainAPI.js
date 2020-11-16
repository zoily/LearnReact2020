import Repository from './mainRepository'
/**
 * Group of methods and properties to run web request
 */
export default {
	/**
	 * Set auth token
	 */
	setAuth: (token) => {
		Repository.setToken(token)
		return Repository.get('/info').then((res) => res.data)
	},
	/**
	 * Mock API datas
	 */
	getMock: () => {
		return new Promise((resolve) => {
			import('../../../utils/test/test.json').then(({ default: content }) =>
				resolve(content)
			)
		})
	},
	/**
	 * Send datas
	 * @param  {mail: 'monmail@test.com'}
	 */
	postUserData: (userData) => {
		return Repository.post('/user/data', {
			email: userData.mail
		})
	}
}
