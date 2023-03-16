import React from 'react';
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import './Header.css'

const Header = () => {
	const {onClose, user } = useTelegram()
	return (
		<header className='header'>
			<div className="header__userInfo">
				<img src={user?.photo_url} alt="avatar"/>
				<span className={'username'}>{user?.username ?? 'Username'}</span>
			</div>
			<div>{user}</div>
			<Button onClick={onClose}>Закрыть</Button>
		</header>
	);
};

export default Header;
