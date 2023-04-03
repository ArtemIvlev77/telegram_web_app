export type UserInfoType = {
	userName: string,
	id: number,
	language: number,
	role: number,
	tgid: number,
	organizations?: OrganizationType[],
}


export type OrganizationType = {
	id: number,
	name: string,
	isActive: boolean,
}

