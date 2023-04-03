import {
	createContext,
	FC,
	PropsWithChildren,
	useContext, useEffect,
	useState
} from 'react';
import {ROLES} from '../enums/enums';
import {useTelegram} from '../../hooks/useTelegram';
import {UserInfoType} from '../../utils/types';
import {fetchOrders, getUserData, switchUserRole} from '../../api';

interface AccountContextType extends Object {
	roleChangeHandler: () => void;
	orderHandler: (order: any) => void;
	currentOrder: any;
	role: string;
	userInfo: UserInfoType | undefined;

}

export const AccountContext = createContext<AccountContextType>({
	roleChangeHandler: () => {} ,
	orderHandler: () => {},
	currentOrder: {},
	role: '',
	userInfo: undefined,
});
export const useAccountContext = () => useContext(AccountContext);

const AccountContextProvider: FC<PropsWithChildren> = ({children}) => {
	// let { userId } = useTelegram()
	const [role, setRole] = useState(ROLES.sender)
	const [currentOrder, setCurrentOrder] = useState('')
	const [userInfo, setUserInfo] = useState()
	const [userData, setUserData] = useState()
	const userId = 326099968;

	const roleChangeHandler = () => {
		if (role === ROLES.executor) {
			setRole(ROLES.sender)
			switchUserRole(userId, 1)
		} else {
			setRole(ROLES.executor)
			switchUserRole(userId, 2)
		}
	}

	const orderHandler = (order: any) => {
		setCurrentOrder(order)
	}

	useEffect(() => {
		// userId = 326099968
		// @ts-ignore
		userId && getUserData(userId).then(res => {
			setUserInfo(res?.payload)
			fetchOrders(res?.payload.currentOrganizationId).then(res => {
				setUserData(res?.payload)
			})
		})
	}, [userId])

	useEffect(() => {
		// @ts-ignore
		userInfo && setUserData(fetchOrders(userInfo?.currentOrganizationId).payload)
		return () => {
		};
	}, [userInfo]);

	return (
		<AccountContext.Provider value={{roleChangeHandler, role, userInfo, currentOrder, orderHandler}}>
			{children}
		</AccountContext.Provider>
	);
}

export default AccountContextProvider;
