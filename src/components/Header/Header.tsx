import React from 'react';
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
import {getTripsByTrips, showOrHideTrip} from '../../api';

const Header = () => {
	const {onClose,  tg} = useTelegram()
	const {
		role,
		roleChangeHandler,
		userInfo,
		currentOrder,
		organizations,
		currentOrganization,
		changeOrganizationHandler,
	} = useAccountContext();
	const {state} = useLocation();
	alert(userInfo?.role + '    userinfo')

	return (
		<header className="flex flex-col px-5 py-1 text-sm bg-tg-secondary-bg h-[20%] z-10">
			{location.pathname === '/' ? (
				<>
					<div className="flex flex-col justify-self-start gap-0.5">
						<span className="text-tg-text">{userInfo?.userName ?? 'Username'}</span>
						<span className="text-tg-hint">id: {userInfo?.id ?? '---'} </span>
						<div className="flex items-center justify-between gap-2">
						</div>
					</div>
					<div className="flex justify-center justify-self-center bg-tg-primary-bg p-1 rounded-xl gap-2">
						<RadioButton id={ROLES.sender}
						             name={'role'}
						             checked={userInfo?.role === 1}
						             changeHandler={roleChangeHandler}
						             clickHandler={roleChangeHandler}/>
						<RadioButton id={ROLES.executor}
						             name={'role'}
						             checked={userInfo?.role === 2}
						             changeHandler={roleChangeHandler}
						             clickHandler={roleChangeHandler}/>
					</div>
					<div className="flex gap-1 w-full z-10">
						<div className="w-full flex flex-col">
							<div className="flex justify-center">
								<div className="mb-3 xl:w-96 w-full">
									<span className="text-tg-text">Мои организации</span>
									<Select organizations={organizations}
											selected={currentOrganization}
											selectHandler={changeOrganizationHandler}/>
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="flex justify-start items-start gap-4 p-2">
						<img src={list} alt="list"/>
						<h1 className="text-tg-text text-2xl">#{currentOrder} {state?.tripHeader}</h1>
					</div>
					<div className="flex justify-between w-full mt-2 p-2">
						<Button img={flightSearch} clickHandler={() => {
							userInfo && getTripsByTrips(userInfo.tgid, currentOrder)
							onClose()
						}} title={'Подобрать рейс'} className={'font-semibold tg-button'}/>
						<Button img={eye} clickHandler={() => showOrHideTrip(currentOrder)} className={'p-2 bg-tg-primary-bg'}/>
					</div>
				</>
			)}
		</header>
	)
		;
};

export default Header;
