import {
	createContext,
	FC,
	PropsWithChildren, useCallback,
	useContext, useEffect,
	useState
} from 'react';
import {ROLES} from '../enums/enums';
import {useTelegram} from '../../hooks/useTelegram';
import {OrganizationType, UserInfoType} from '../../utils/types';
import {changeUserOrganization, getOrganizationTrips, getUserData, switchUserRole} from '../../api';

interface AccountContextType extends Object {
	roleChangeHandler: () => void;
	orderHandler: (order: any) => void;
	currentOrder: any;
	role: string;
	userInfo: UserInfoType | undefined;
	orders: any[];
	organizations: OrganizationType[],
	currentOrganization: OrganizationType | undefined,
	changeOrganizationHandler: (org: OrganizationType) => void
}
export const AccountContext = createContext<AccountContextType>({
	roleChangeHandler: () => {} ,
	orderHandler: () => {},
	currentOrder: {},
	role: '',
	userInfo: undefined,
	orders: [],
	organizations: [],
	currentOrganization: {id: 0, name: '', isActive: false},
	changeOrganizationHandler: () => {}
});
export const useAccountContext = () => useContext(AccountContext);

const AccountContextProvider: FC<PropsWithChildren> = ({children}) => {
	// let { userId } = useTelegram()
	let userId = 326099968

	const [role, setRole] = useState(ROLES.sender)
	const [organizations, setOrganizations] = useState([])
	const [currentOrganization, setCurrentOrganization] = useState<OrganizationType>()
	const [orders, setOrders] = useState([])
	const [currentOrder, setCurrentOrder] = useState('')
	const [userInfo, setUserInfo] = useState<UserInfoType>()

	const roleChangeHandler = () => {

		if (role === ROLES.executor) {
			setRole(ROLES.sender)
			if (currentOrganization?.id) {
				switchUserRole(userId, 1)
					.then(() => getOrganizationTrips(currentOrganization?.id, 1))
					.then((res) => setOrders(res?.payload))
			}
		} else {
			setRole(ROLES.executor)
			if (currentOrganization?.id) {
				switchUserRole(userId, 2)
					.then(() => getOrganizationTrips(currentOrganization?.id, 2))
					.then((res) => setOrders(res?.payload))
			}
		}
	}

	const changeOrganizationHandler = (org: OrganizationType) => {
		if (userId) {
			changeUserOrganization(userId, org.id)
				.then(() => getUserData(userId))
				.then((res) => setCurrentOrganization(res?.payload.organizations.filter((org: OrganizationType) => org.isActive)[0]))
			if (org?.id && userInfo?.role)
				getOrganizationTrips(org.id, userInfo.role)
					.then((res) => setOrders(res?.payload))
		}
	}

	const orderHandler = (order: any) => {
		setCurrentOrder(order)
	}

	useEffect(() => {
		userId && getUserData(userId).then(res => {
			setUserInfo(res?.payload)
			setOrganizations(res?.payload.organizations)
			setCurrentOrganization(res?.payload.organizations.filter((org: OrganizationType) => org.isActive)[0])
		})
	}, [userId])



	return (
		<AccountContext.Provider
			value={{roleChangeHandler, role, userInfo, currentOrder, orderHandler, orders, organizations, currentOrganization, changeOrganizationHandler}}>
			{children}
		</AccountContext.Provider>
	);
}

export default AccountContextProvider;
