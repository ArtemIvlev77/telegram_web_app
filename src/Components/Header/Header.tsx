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
		<header className='bg-secondary h-1/4 flex px-5 justify-between items-center'>
			<div className="flex flex-col gap-1">
				<span className={'username'}>{user?.username ?? 'Username'}</span>
				<span>ID сервиса</span>
				<span>Грузоперевозчик <Button className={'asd'} onClick={roleChangeHandler}/></span>
			</div>
			<Button onClick={onClose}>Закрыть</Button>
		</header>
	);
};

export default Header;
