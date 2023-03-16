import React from 'react';
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import './Header.css'
import refresh from '../../assets/refresh.svg'

const Header = () => {
	const {onClose, user, tg } = useTelegram()
	const roleChangeHandler = () => {
		console.log('roleChanged')
	}
	return (
		<header className='bg-secondary h-1/4 flex px-5 justify-between items-center'>
			<div className="flex flex-col gap-1 justify-center">
				<span>{user?.username ?? 'Username'}</span>
				<span>ID сервиса</span>
				<div className="flex items-center">
				<span className="text-center">Грузоперевозчик	</span>
					<Button className="bg-[url('/src/assets/refresh.svg')] bg-no-repeat bg-center" onClick={roleChangeHandler}></Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
