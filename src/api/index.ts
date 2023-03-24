import axios, {AxiosError} from 'axios';
import {BASE_URL} from '../utils/constats';
import {UserInfoType} from '../utils/types';

export const getUserData = (userId: number) => {
		async function fetchData(): Promise<UserInfoType> {
			try {
		const response = await axios.get(`${BASE_URL}/GetUserData?tgid=${userId}`)
		if (response.data) {
			return response.data
		} else {
			throw new Error('Ошибка при получении данных пользователя')}
		} catch (err: unknown | AxiosError) {
			if (axios.isAxiosError(err)) {
				console.log(err)
			} else {
				console.log(err)
			}
		return fetchData()

	}
}
