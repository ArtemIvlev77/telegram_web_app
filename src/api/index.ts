import axios, {AxiosError} from 'axios';
import {BASE_URL} from '../utils/constats';
import {UserInfoType} from '../utils/types';

export const getUserData = async (userId: number) => {
	try {

		const response = await axios.get(`${BASE_URL}/GetUserData?tgid=${userId}`)
		if (response.data) {
			return response.data
		}
		return null
	} catch (err: unknown | AxiosError) {
		if (axios.isAxiosError(err)) {
			console.log(err)
		} else {
			console.log(err)
		}
	}
}
