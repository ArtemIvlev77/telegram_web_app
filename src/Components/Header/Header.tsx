import React, {useEffect, useState} from 'react';
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import RadioButton from '../../shared/UI/RadioButton';

const Header = () => {
	const enum ROLES {
		sender = 'Грузоотправитель',
		executor = 'Грузоперевозчик'
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
		{invoiceNumber: 2243, organization: 'OOO Ромашка'},
		{invoiceNumber: 255, organization: 'OOO OGon'},
		{invoiceNumber: 223, organization: 'OOO TOP'},
		{invoiceNumber: 6556, organization: 'OOO SAMLOG'},
		{invoiceNumber: 544, organization: 'OOO Ромашка'},
	]

	const {onClose, user, tg} = useTelegram()
	const [role, setRole] = useState(ROLES.executor)
	const [race, setRace] = useState();
	const [organization, setOrganization] = useState();
	const roleChangeHandler = () => {
		if (role === ROLES.executor) {
			setRole(ROLES.sender)
		} else {
			setRole(ROLES.executor)
		}
	}

	const raceHandler = (e: any) => {
		setRace(e.target.value)
	}

	const organizationChangeHandler = (e: any) => {
		setOrganization(e.target.value)
	}

	return (
		<header className="flex flex-col px-5 py-1 text-sm bg-main">
			<div className="flex flex-col justify-self-start gap-0.5">
				<span>{user?.username ?? 'Username'}</span>
				<span>ID сервиса</span>
				<div className="flex items-center justify-between gap-2">
				</div>
			</div>
			<div className="flex justify-center justify-self-center bg-gray-200 p-1 rounded-xl gap-2">
				<RadioButton id={ROLES.executor}
				             name={'role'}
				             checked={role === ROLES.executor}
				             changeHandler={() => setRole(ROLES.executor)}
				             clickHandler={() => setRole(ROLES.executor)}/>
				<RadioButton id={ROLES.sender}
				             name={'role'}
				             checked={role === ROLES.sender}
				             changeHandler={() => setRole(ROLES.sender)}
				             clickHandler={() => setRole(ROLES.sender)}/>
			</div>
			<div className="flex gap-1 w-full">
				<div className="w-full flex flex-col">
					<span className="text-tg-text font-bold m-1">Мои организации</span>
					<select className='p-2 rounded-lg ' name="organizations" id="organizations" onChange={(e) => organizationChangeHandler(e)}>
						{organizations.map((org) => (
							<option key={org.invoiceNumber} className="text-sm" value={org.invoiceNumber}>{org.organization}</option>
						))}
					</select>
				</div>
				{/*<div className="flex flex-col gap-1">*/}
				{/*	<span className="text-tg-text">Мои рейсы</span>*/}
					{/*<select name="races" id="races" onChange={(e) => raceHandler(e)}>*/}
					{/*	{races.map((race) => (*/}
					{/*		<option key={race.invoiceNumber} className="text-sm" value={race.invoiceNumber}>#{race.invoiceNumber} {race.invoiceTitle}</option>*/}
					{/*	))*/}
					{/*	}*/}
					{/*</select>*/}
				{/*</div>*/}
			</div>
		</header>
	);
};

export default Header;
