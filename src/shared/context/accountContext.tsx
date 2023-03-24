import {
	createContext, Dispatch,
	FC,
	PropsWithChildren, SetStateAction,
	useContext, useEffect,
	useState
} from 'react';
import {ROLES} from '../enums/enums';
import {useTelegram} from '../../hooks/useTelegram';
import {UserInfoType} from '../../utils/types';
import {getUserData} from '../../api';

interface AccountContextType extends Object {
	roleChangeHandler: () => void ;
	role: string;
}

export const AccountContext = createContext<AccountContextType>({
	roleChangeHandler: () => {} ,
	role: ''
});
export const useAccountContext = () => useContext(AccountContext);

const AccountContextProvider: FC<PropsWithChildren> = ({children}) => {
	const { userId } = useTelegram()
	const [role, setRole] = useState(ROLES.sender)
	const [userInfo, setUserInfo] = useState()
	const roleChangeHandler = () => {
		if (role === ROLES.executor) {
			setRole(ROLES.sender)
		} else {
			setRole(ROLES.executor)
		}
	}

	useEffect(() => {
		setUserInfo(getUserData(userId))
	}, [])

	return (
		<AccountContext.Provider value={{roleChangeHandler, role}}>
			{children}
		</AccountContext.Provider>
	);
}

export default AccountContextProvider;
