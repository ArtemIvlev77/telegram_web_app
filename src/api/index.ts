import axios, {AxiosError} from 'axios';
import {BASE_URL} from '../utils/constats';
import {UserInfoType} from '../utils/types';

export const getUserData = async (userId: number) => {
	try {
		const response = await axios.get(`${BASE_URL}/GetUserData?tgid=${userId}`)
		if (response.status === 200) {
			return {payload: response.data}
		}

	} catch (e) {
		console.log(e, 'error getUserData')
	}
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

export const switchUserRole = async(userId: number, role: number) => {
	try {
		const response = await axios.get(`${BASE_URL}/ChangeRole?tgid=${userId}&role=${role}`)

		if(response.status === 200) {
			return {payload: response.data}
		}

	} catch (e) {
		console.log(e, 'error getUserData')
	}
}
