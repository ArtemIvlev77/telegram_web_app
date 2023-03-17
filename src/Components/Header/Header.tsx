import React, {useState} from 'react';
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';

const Header = () => {
	const enum ROLES {
		sender = 'Грузоотправитель',
		executor= 'Грузоперевозчик'
	}
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
	const [role, setRole] = useState(ROLES.executor)
	const [race, setRace] = useState();
	const [organization, setOrganization] = useState();
	const roleChangeHandler = () => {
		if (role === ROLES.executor) {
			setRole(ROLES.sender)
		} else {
			setRole( ROLES.executor)
		}
	}

	const raceHandler  = (e: any) => {
		setRace(e.target.value)
	}

	const organizationChangeHandler = (e:any) => {
		setOrganization(e.target.value)
	}

	return (
		<header className='bg-secondary h-28 flex flex-col px-5 py-1 justify-evenly items-center text-sm'>
			<div className="flex justify-start gap-1">
				<span>{user?.username ?? 'Username'}</span>
				<span>ID сервиса</span>
				<div className="flex items-center justify-between gap-2">
				<span className="text-center">{role}</span>
				</div>
			</div>
			<div className='flex bg-secondary p-1 rounded gap-2'>
				<Button className="bg-tg-button" onClick={() => setRole(ROLES.executor)}>{ROLES.executor}</Button>
				<Button className="bg-tg-button" onClick={() => setRole(ROLES.sender)}>{ROLES.sender}</Button>
			</div>
			<div className="flex  gap-1">
				<div className='flex flex-col gap-1'>
					<span className="text-tg-text">Мои организации</span>
				<select name="organizations" id="organizations" onChange={(e) => organizationChangeHandler(e)}>
					{organizations.map((org) => (
						<option className='text-sm' value={ org.invoiceNumber}>{org.organization}</option>
					))}
				</select>
				</div>
				<div className='flex flex-col gap-1'>
					<span className="text-tg-text">Мои рейсы</span>
				<select name="races" id="races" onChange={(e) => raceHandler(e)}>
					{races.map((race) => (
						<option className='text-sm' value={race.invoiceNumber}>#{race.invoiceNumber} {race.invoiceTitle}</option>
					))
					}

				</select>
				</div>
			</div>
		</header>
	);
};

export default Header;
