import {Context, createContext, FC, PropsWithChildren, Provider, useCallback, useContext, useEffect, useState} from 'react';

interface AccountContextType extends PropsWithChildren {
	username: string;
}

const AccountContext = createContext<AccountContextType | null>(null);
export const useAccountContext = () => useContext(AccountContext);

const AccountContextProvider: FC<AccountContextType> = ({ children }) => {


	return (
		<AccountContext.Provider value={null}>
			{children}
		</AccountContext.Provider>
	);
};

export default AccountContextProvider;
