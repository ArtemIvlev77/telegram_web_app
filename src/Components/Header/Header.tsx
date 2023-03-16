import React from 'react';
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import './Header.css'

const Header = () => {
	const {onClose, user } = useTelegram()
	return (
		<header className='header'>
			<Button onClick={onClose}>Закрыть</Button>
			<span className={'username'}>{user?.username ?? 'Username'}</span>
		</header>
	);
};

export default Header;
