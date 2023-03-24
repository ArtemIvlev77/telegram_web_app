import  {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useState
} from 'react';
import {ROLES} from '../enums/enums';

interface AccountContextType extends Object{
	roleChangeHandler?: () => void;
	role?: string;
}

export const AccountContext = createContext<AccountContextType>({});
export const useAccountContext = () => useContext(AccountContext);

const AccountContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [role, setRole] = useState(ROLES.executor)
	const roleChangeHandler = () => {
		if (role === ROLES.executor) {
			setRole(ROLES.sender)
		} else {
			setRole(ROLES.executor)
		}
	}

	return (
		<AccountContext.Provider value={{roleChangeHandler, role}}>
			{children}
		</AccountContext.Provider>
	);
};

export default AccountContextProvider;
