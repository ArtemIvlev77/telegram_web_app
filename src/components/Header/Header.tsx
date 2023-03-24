import React, {useContext, useEffect, useState} from 'react';
import {useTelegram} from '../../hooks/useTelegram';
import RadioButton from '../../shared/UI/RadioButton';
import {useAccountContext} from '../../shared/context/accountContext';
import {ROLES} from '../../shared/enums/enums';

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
		{invoiceNumber: 2243, organization: 'OOO Ромашка'},
		{invoiceNumber: 255, organization: 'OOO OGon'},
		{invoiceNumber: 223, organization: 'OOO TOP'},
		{invoiceNumber: 6556, organization: 'OOO SAMLOG'},
		{invoiceNumber: 544, organization: 'OOO Ромашка'},
	]

	const {onClose, user, tg, userId} = useTelegram()
	const [race, setRace] = useState();
	const [organization, setOrganization] = useState();

	const raceHandler = (e: any) => {
		setRace(e.target.value)
	}

	const organizationChangeHandler = (e: any) => {
		setOrganization(e.target.value)
	}
	const {role, roleChangeHandler} = useAccountContext();
	return (
		<header className="flex flex-col px-5 py-1 text-sm bg-tg-primary-bg h-[20%]">
			<div className="flex flex-col justify-self-start gap-0.5">
				<span className='text-tg-text'>{user?.username ?? 'Username'}</span>
				<span className='text-tg-hint'>ID сервиса {userId} </span>
				<div className="flex items-center justify-between gap-2">
				</div>
			</div>
			<div className="flex justify-center justify-self-center bg-tg-secondary-bg p-1 rounded-xl gap-2">
				<RadioButton id={ROLES.sender}
				             name={'role'}
				             checked={role === ROLES.sender}
				             changeHandler={roleChangeHandler}
				             clickHandler={roleChangeHandler}/>
				<RadioButton id={ROLES.executor}
				             name={'role'}
				             checked={role === ROLES.executor}
				             changeHandler={roleChangeHandler}
				             clickHandler={roleChangeHandler}/>
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