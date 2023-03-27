import axios, {AxiosError} from 'axios';
import {BASE_URL} from '../utils/constats';
import {UserInfoType} from '../utils/types';

export const getUserData = async (userId: number) => {
	try {
	const response = await axios.get(`${BASE_URL}/GetUserData?tgid=${userId}`)
		if(response.status === 200) {
			return {payload: response.data}
		}

	} catch (e) {
		console.log(e, 'error getUserData')
	}
	// return response.data
	// async function fetchData(): Promise<UserInfoType> {
	// 	try {
	// 		const response =
	// 		if (response.data) {
	// 			return response.data
	// 		} else {
	// 			throw new Error('Ошибка при получении данных пользователя')
	// 		}
	// 	} catch (err: unknown | AxiosError) {
	// 		if (axios.isAxiosError(err)) {
	// 			console.log(err)
	// 		} else {
	// 			console.log(err)
	// 		}
	// 		return fetchData()
	// 	}
	// }
}

export const fetchOrders = async (organizationId: number) => {
	try {
		const response = await axios.get(`${BASE_URL}/GetOrganizationTrips?orgId=${organizationId}`)

		if(response.status === 200) {
			return {payload: response.data}
		}

	} catch (e) {
		console.log(e, 'error getUserData')
	}
}
