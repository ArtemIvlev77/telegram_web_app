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
import {fetchOrders, getUserData} from '../../api';

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
	const userId = 326099968
	const roleChangeHandler = () => {
		if (role === ROLES.executor) {
			setRole(ROLES.sender)
		} else {
			setRole(ROLES.executor)
		}
	}

	const orderHandler = (order: any) => {
		setCurrentOrder(order)
	}

	useEffect(() => {
		// userId = 326099968
		// @ts-ignore
		getUserData(userId).then(res => {
			setUserInfo(res?.payload)
			fetchOrders(res?.payload.currentOrganizationId).then(res => {
				setUserData(res?.payload)
			})
		})
	}, [])

	useEffect(() => {
		// @ts-ignore
		userInfo && setUserData(fetchOrders(userInfo?.currentOrganizationId).payload)
		return () => {
		};
	}, [userInfo]);

	useEffect(() => {
		userInfo &&	console.log(userInfo)

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
