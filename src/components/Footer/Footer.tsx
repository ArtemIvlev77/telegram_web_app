import documentIcon from '../../assets/document.svg'
import {useLocation, useNavigate} from 'react-router-dom';
import {useAccountContext} from '../../shared/context/accountContext';
import {RolesEnum} from '../../shared/enums/enums';
import {useEffect, useState} from 'react';
import {openCreateTripAction} from '../../api';
const Footer = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const {role, userInfo, onClose} = useAccountContext()

	return (
		<footer className='fixed bottom-0 bg-tg-secondary-bg left-0 w-full h-[10%] p-2'>
			{role === RolesEnum.sender && (
				<button className='p-4 rounded-2xl bg-tg-button w-full text-tg-text-button' onClick={() => navigate('/')}>
					{location.pathname !== '/'
						? <span className='text-tg-text'>Назад</span>
						: (
							<div className='text-tg-text flex items-center justify-center gap-2'
						        onClick={() => {
							        userInfo?.tgid && openCreateTripAction(userInfo.tgid)
							        onClose()
						        }}>
							<img src={documentIcon} alt=""/>Создать заявку
							</div>)
					}
				</button>
			)}
			{role === RolesEnum.executor && (
				<button className='p-4 rounded-2xl bg-tg-button w-full text-tg-text-button' onClick={() => navigate('/')}>
					{location.pathname !== '/'
						? <span className='text-tg-text'>Назад</span>
						: (
							<div className='text-tg-text flex items-center justify-center gap-2'
						        onClick={() => {
							        onClose()
							        userInfo?.tgid && openCreateTripAction(userInfo.tgid)
						        }}>
							<img src={documentIcon} alt=""/>
							Создать рейс
						</div>)
					}
				</button>
			)}
		</footer>
	);
};

export default Footer;
