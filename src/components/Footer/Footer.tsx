import documentIcon from '../../assets/document.svg'
import {useLocation, useNavigate} from 'react-router-dom';
import {useAccountContext} from '../../shared/context/accountContext';
import {ROLES} from '../../shared/enums/enums';
const Footer = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const {role} = useAccountContext()

	return (
		<footer className='fixed bottom-0 bg-tg-secondary-bg left-0 w-full h-[10%] p-2'>
			{role === ROLES.sender && (
				<button className='p-4 rounded-2xl bg-tg-button w-full text-tg-text-button' onClick={() => navigate('/')}>
					{location.pathname !== '/'
						? <span className='text-tg-text'>Назад</span>
						: (<div className='text-tg-text-button flex items-center justify-center gap-2'><img src={documentIcon} alt=""/>Создать заявку</div>)}
				</button>
			)}
			{role === ROLES.executor && (
				<button className='p-4 rounded-2xl bg-tg-button w-full text-tg-text-button' onClick={() => navigate('/')}>
					{location.pathname !== '/'
						? <span className='text-tg-text-button'>Назад</span>
						: (<div className='text-tg-text-button flex items-center justify-center gap-2'><img src={documentIcon} alt=""/>Создать рейс</div>)}
				</button>
			)}
		</footer>
	);
};

export default Footer;
