import api from '../mainAPI'

export const postData = (userData) => (dispatch) => {
	api.postUserData(userData)
	dispatch(setUserMail(userData.mail))
}

export const setUserMail = (payload) => ({
	type: 'SET_USER_MAIL',
	payload: payload
})
