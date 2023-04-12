import axios from 'axios';
import {BASE_URL} from '../utils/constats';

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

export const getOrganizationTrips = async (organizationId: number, userRole: number) => {
	try {
		const response = await axios.get(`${BASE_URL}/GetOrganizationTrips?orgId=${organizationId}&userRole=${userRole}`)

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


export const openCreateTripAction = async (tgid: number) => {
	try {
		const response = await axios.get(`${BASE_URL}/OpenCreateTripAction?tgid=${tgid}`)
		if(response.status === 200) {
			return {payload: response.data}
		}
	} catch (e) {
		alert(e + 'error openCreateTripAction')
	}
}

export const getTripDeals = async(tgid: number, tripId: string) => {
	try {
		const response = await axios.get(`${BASE_URL}/GetTripDeals?tgid=${tgid}&tripId=${tripId}`)
		if(response.status === 200) {
			return {payload: response.data}
		}
	} catch (e) {
		alert(e + 'error getTripDeals')
	}
}

export const openDealWithChat = async (tgid: number, dealId: number) => {
	try {
		const response = await axios.get(`${BASE_URL}/OpenDeal?tgid=${tgid}&tripId=${dealId}`)
		if(response.status === 200) {
			return {payload: response.data}
		}
	} catch (e) {
		alert(e + 'error openDealWithChat')
	}
}

export const closeDeal = async (tgid: number, dealId: number, tripId:string) => {
	try {
		const response = await axios.post(`${BASE_URL}/CloseDeal?tgid=${tgid}&tripId=${tripId}&dealId=${dealId}`)
		if(response.status === 200) {
			return {payload: response.data}
		}
	} catch (e) {
		alert(e + 'error closeDeal')
	}
}

export const archiveDeal = async (tgid: number, dealId: number, tripId: string) => {
	try {
		const response = await axios.post(`${BASE_URL}/ArchiveDeal?tgid=${tgid}&tripId=${tripId}&dealId=${dealId}`)
		if(response.status === 200) {
			return {payload: response.data}
		}
	} catch (e) {
		alert(e + 'error archiveDeal')
	}
}

export const unArchiveDeal = async (tgid: number, dealId: number, tripId: string) => {
	try {
		const response = await axios.post(`${BASE_URL}/UnarchiveDeal?tgid=${tgid}&tripId=${tripId}&dealId=${dealId}`)
	} catch (e) {
		alert(e + 'error unArchiveDeal')
	}
}

export const getTripsByTrips = async (tgid: number, tripId: number) => {
	try{
		const response = await axios.post(`${BASE_URL}/TakeTripsByTrip?tgid=${tgid}&tripId=${tripId}`)
	} catch (e) {
		alert(e + 'error getTripsByTrips')
	}
}

export const showOrHideTrip = async (tripId: number) => {
	try{
		const response = await axios.post(`${BASE_URL}/ShowOrHideTrip?tripId=${tripId}`)
	} catch (e) {
		alert(e + 'error showOrHideTrip')
	}
}
