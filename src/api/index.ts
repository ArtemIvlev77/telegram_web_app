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
		alert(e + 'error getUserData')
	}
}

export const getOrganizationTrips = async (organizationId: number) => {
	try {
		const response = await axios.get(`${BASE_URL}/GetOrganizationTrips?orgId=${organizationId}`)

		if(response.status === 200) {
			return {payload: response.data}
		}

	} catch (e) {
	alert(e + 'error getOrganizationTrips')
	}
}

export const switchUserRole = async(userId: number, role: number) => {
	try {
		const response = await axios.post(`${BASE_URL}/ChangeRole?tgid=${userId}&role=${role}`)

		if(response.status === 200) {
			return {payload: response.data}
		}

	} catch (e) {
		alert(e + 'error switchUserRole')
	}
}

export const changeUserOrganization = async (userId:number, organizationId: number) => {
	try {
		const response = await axios.post(`${BASE_URL}/ChangeOrganization?tgid=${userId}&orgid=${organizationId}`)

		if(response.status === 200) {
			return {payload: response.data}
		}

	} catch (e) {
		alert(e + 'error changeUserOrganization')
	}
}

export const openDeal = async (userId: number, dealId: number) => {
	try {
		const response = await axios.post(`${BASE_URL}/OpenDeal?tgid=${userId}&dealId=${dealId}`)

		if(response.status === 200) {
			return {payload: response.data}
		}

	} catch (e) {
		alert(e + 'error openDeal')
	}
}

export const getTripDeals = async (tripId: number) => {
	try {
		const response = await axios.post(`${BASE_URL}/GetTripDeals?tripId=${tripId}`)

		if(response.status === 200) {
			return {payload: response.data}
		}

	} catch (e) {
		alert(e + 'error getTripDeals')
	}

}


