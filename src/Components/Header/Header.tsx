import React from 'react';
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import './Header.css'
import person from '../../assets/person.svg'

const Header = () => {
	const {onClose, user, avatar } = useTelegram()
	const roleChangeHandler = () => {
		console.log('roleChanged')
	}
	return (
		<header className='header'>
			<div className="header__userInfo">
				<img  className="" src={avatar ?? person} alt="avatar"/>
				<span className={'username'}>{user?.username ?? 'Username'}</span>
				<span>ID сервиса</span>
				<span>{JSON.stringify(avatar, null, 2)}</span>
				<span>Грузоперевозчик <Button className={'asd'} onClick={roleChangeHandler}/></span>
			</div>
			<Button onClick={onClose}>Закрыть</Button>
		</header>
	);
};

export default Header;
