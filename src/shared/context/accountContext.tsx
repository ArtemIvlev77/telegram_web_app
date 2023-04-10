import {createContext, FC, PropsWithChildren, useContext, useEffect, useState} from 'react';
import {ROLES, RolesEnum} from '../enums/enums';
import {useTelegram} from '../../hooks/useTelegram';
import {OrganizationType, UserInfoType} from '../../utils/types';
import {changeUserOrganization, getOrganizationById, getOrganizationTrips, getUserData, switchUserRole} from '../../api';

interface AccountContextType extends Object {
	roleChangeHandler: () => void;
	orderHandler: (order: any) => void;
	changeOrgHandler: (tgid: number, orgId: number) => void;
	currentOrder: any;
	role: number;
	userInfo: UserInfoType | undefined;
	orders: any[];
	organizations: OrganizationType[]
	onClose: () => void;
}
export const AccountContext = createContext<AccountContextType>({
	roleChangeHandler: () => {} ,
	orderHandler: () => {},
	currentOrder: {},
	role: 0,
	userInfo: undefined,
	orders: [],
	organizations: [],
	changeOrgHandler: () => {},
	onClose: () => {}
});
export const useAccountContext = () => useContext(AccountContext);

const AccountContextProvider: FC<PropsWithChildren> = ({children}) => {
	let { userId, onClose } = useTelegram()
	const [role, setRole] = useState(RolesEnum.executor)
	const [organizations, setOrganizations] = useState([])
	const [currentOrganization, setCurrentOrganization] = useState()
	const [orders, setOrders] = useState([])
	const [currentOrder, setCurrentOrder] = useState('')
	const [userInfo, setUserInfo] = useState()

	const roleChangeHandler = () => {
		if (role === RolesEnum.executor) {
			setRole(RolesEnum.sender)
			switchUserRole(userId, RolesEnum.sender)
		} else {
			setRole(RolesEnum.executor)
			switchUserRole(userId, RolesEnum.executor)
		}
	}

	const changeOrgHandler = (tgid:number, orgid:number) => {
		changeUserOrganization(userId, orgid)
		getOrganizationById(orgid).then(res => {
			setCurrentOrganization(res?.payload)
		}).then((res) => {
			console.log(role, 'role')
			getOrganizationTrips(orgid, role).then(res => {
				setOrders(res?.payload)
			})
		})
		}

	const orderHandler = (order: any) => {
		setCurrentOrder(order)
	}

	useEffect(() => {
		// userId = 326099968
		userId && getUserData(userId).then(res => {
			setUserInfo(res?.payload)
			setOrganizations(res?.payload.organizations)
			// @ts-ignore
			setRole(ROLES[`${res?.payload.role}`])
			if (res?.payload.role) {
				getOrganizationTrips(res?.payload.organizations[0]?.id, res?.payload.role)
			}
		})
	}, [userId])

	return (
		<AccountContext.Provider value={{roleChangeHandler, role, userInfo, currentOrder, orderHandler, orders, organizations, changeOrgHandler, onClose}}>
			{children}
		</AccountContext.Provider>
	);
}

export default AccountContextProvider;
