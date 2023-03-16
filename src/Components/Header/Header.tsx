import React from 'react';
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import './Header.css'
import person from '../../assets/person.svg'

const Header = () => {
	const {onClose, user, tg } = useTelegram()
	const roleChangeHandler = () => {
		console.log('roleChanged')
	}
	return (
		<header className='header'>
			<div className="header__userInfo">
				<img  className="" src={person} alt="avatar"/>
				<span className={'username'}>{user?.username ?? 'Username'}</span>
				<span>ID сервиса</span>
				<span>Грузоперевозчик <Button className={'asd'} onClick={roleChangeHandler}/></span>
			</div>
			<Button onClick={onClose}>Закрыть</Button>
		</header>
	);
};

export default Header;
