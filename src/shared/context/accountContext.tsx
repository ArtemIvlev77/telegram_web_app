import {
	createContext,
	FC,
	PropsWithChildren,
	useContext, useEffect,
	useState
} from 'react';
import {ROLES} from '../enums/enums';
import {useTelegram} from '../../hooks/useTelegram';
import {OrganizationType, UserInfoType} from '../../utils/types';
import {getOrganizationTrips, getUserData, switchUserRole} from '../../api';

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
	let { userId } = useTelegram()
	const [role, setRole] = useState(ROLES.sender)
	const [organizations, setOrganizations] = useState([])
	const [currentOrganization, setCurrentOrganization] = useState<OrganizationType>()
	const [orders, setOrders] = useState([])
	const [currentOrder, setCurrentOrder] = useState('')
	const [userInfo, setUserInfo] = useState()
	// const userId = 326099968;

	const roleChangeHandler = () => {
		if (role === ROLES.executor) {
			setRole(ROLES.sender)
			switchUserRole(userId, 1)
		} else {
			setRole(ROLES.executor)
			switchUserRole(userId, 2)
		}
	}

	const changeOrganizationHandler = (org: OrganizationType) => {
		setCurrentOrganization(org)
	}

	const orderHandler = (order: any) => {
		setCurrentOrder(order)
	}

	useEffect(() => {
		userId = 326099968
		// @ts-ignore
		userId && getUserData(userId).then(res => {
			setUserInfo(res?.payload)
			setOrganizations(res?.payload.organizations)
			setCurrentOrganization(res?.payload.organizations[0])
			getOrganizationTrips(res?.payload.organizations[0]?.id).then(res => {
				setOrders(res?.payload)
			})
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
