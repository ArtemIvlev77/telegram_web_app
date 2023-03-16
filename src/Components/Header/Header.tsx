import React, {useState} from 'react';
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import './Header.css'

const Header = () => {
	const races = [
		{invoiceNumber: 233, invoiceTitle: 'Ташкент-махачкала'},
		{invoiceNumber: 211, invoiceTitle: 'Ташкент-махачкала'},
		{invoiceNumber: 21133, invoiceTitle: 'Ташкент-махачкала'},
		{invoiceNumber: 2433, invoiceTitle: 'Ташкент-махачкала'},
		{invoiceNumber: 2533, invoiceTitle: 'Ташкент-махачкала'},
		{invoiceNumber: 733, invoiceTitle: 'Ташкент-махачкала'},
	]

	const organizations = [
		{invoiceNumber: 223, organization: 'OOO Ромашка'},
		{invoiceNumber: 255, organization: 'OOO OGon'},
		{invoiceNumber: 223, organization: 'OOO TOP'},
		{invoiceNumber: 6556, organization: 'OOO SAMLOG'},
		{invoiceNumber: 544, organization: 'OOO Ромашка'},
	]

	const {onClose, user, tg } = useTelegram()
	const [role, setRole] = useState('Грузоперевозчик')
	const [race, setRace] = useState();
	const [organization, setOrganization] = useState();
	const roleChangeHandler = () => {
		if (role === 'Грузоперевозчик') {
			setRole('Заказчик')
		} else {
			setRole( 'Грузоперевозчик')
		}
	}

	const raceHandler  = (e: any) => {
		setRace(e.target.value)
	}

	const organizationChangeHandler = (e:any) => {
		setOrganization(e.target.value)
	}

	return (
		<header className='bg-secondary h-1/3 flex px-5 justify-evenly items-center'>
			<div className="flex flex-col gap-1 justify-center basis-0.5">
				<span>{user?.username ?? 'Username'}</span>
				<span>ID сервиса</span>
				<div className="flex items-center justify-between gap-2">
				<span className="text-center">{role}</span>
					<Button className="bg-[url('/src/assets/refresh.svg')] bg-no-repeat bg-center" onClick={roleChangeHandler}></Button>
				</div>
			</div>
			<div className="flex flex-col gap-1  basis-0.5">
				Мои организации
				<select name="organizations" id="organizations" value={organization} onChange={(e) => organizationChangeHandler(e)}>
					{organizations.map((org) => (
						<option className='text-sm' value={org.invoiceNumber}>{org.organization}</option>
					))}
				</select>
				Мои рейсы
				<select name="races" id="races" value={race} onChange={(e) => raceHandler(e)}>
					{races.map((race) => (
						<option className='text-sm' value={race.invoiceNumber}>#{race.invoiceNumber} {race.invoiceTitle}</option>
					))
					}

				</select>
			</div>
		</header>
	);
};

export default Header;
