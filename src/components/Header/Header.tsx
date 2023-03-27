import React, {useState} from 'react';
import {useTelegram} from '../../hooks/useTelegram';
import RadioButton from '../../shared/UI/RadioButton';
import {useAccountContext} from '../../shared/context/accountContext';
import {ROLES} from '../../shared/enums/enums';
import Select from '../../shared/UI/Select';
import {useLocation} from 'react-router-dom';
import Button from '../../shared/UI/Button';
import list from '../../assets/list.svg';
import flightSearch from '../../assets/flightSearch.svg'
import eye from '../../assets/iconEye.svg';

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
		{invoiceNumber: 2551, organization: 'OOO OGon'},
		{invoiceNumber: 2232, organization: 'OOO TOP'},
		{invoiceNumber: 65563, organization: 'OOO SAMLOG'},
		{invoiceNumber: 5444, organization: 'OOO Ромашка'},
		{invoiceNumber: 22435, organization: 'OOO Ромашка'},
		{invoiceNumber: 2565, organization: 'OOO OGon'},
		{invoiceNumber: 2283, organization: 'OOO TOP'},
		{invoiceNumber: 65756, organization: 'OOO SAMLOG'},
		{invoiceNumber: 544, organization: 'OOO Ромашка'},
		{invoiceNumber: 22543, organization: 'OOO Ромашка'},
		{invoiceNumber: 2535, organization: 'OOO OGon'},
		{invoiceNumber: 2223, organization: 'OOO TOP'},
		{invoiceNumber: 65456, organization: 'OOO SAMLOG'},
		{invoiceNumber: 5464, organization: 'OOO Ромашка'},
		{invoiceNumber: 22743, organization: 'OOO Ромашка'},
		{invoiceNumber: 2585, organization: 'OOO OGon'},
		{invoiceNumber: 2423, organization: 'OOO TOP'},
		{invoiceNumber: 65256, organization: 'OOO SAMLOG'},
		{invoiceNumber: 5443, organization: 'OOO Ромашка'},
	]


	const location = useLocation();
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
			{location.pathname === '/' ? (
				<>
					<div className="flex flex-col justify-self-start gap-0.5">
						<span className="text-tg-text">{user?.username ?? 'Username'}</span>
						<span className="text-tg-hint">ID сервиса {userId} </span>
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
							<div className="flex justify-center">
								<div className="mb-3 xl:w-96 w-full">
									<span className="text-tg-text">Мои организации</span>
									<Select data={role === ROLES.sender ? organizations : races}/>
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="flex items-center justify-start gap-2 p-2">
						<img src={list} alt="list"/>
						<h1 className="text-tg-text text-2xl">{'TITLE'}</h1>
					</div>
					<div className="flex justify-between w-full mt-2 p-2">
						<Button img={flightSearch} clickHandler={() => console.log('asdas')} title={'Подобрать рейс'} className={'font-semibold'}/>
						<Button img={eye} clickHandler={() => console.log('asdasd')} className={'p-2 bg-black'}/>
					</div>
				</>
			)}
		</header>
	)
		;
};

export default Header;
