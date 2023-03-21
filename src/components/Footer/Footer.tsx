import documentIcon from '../../assets/document.svg'
const Footer = () => {
	return (
		<footer className='fixed bottom-0 bg-tg-secondary-bg left-0 w-full h-[10%] p-2'>
			<button className='p-4 rounded-2xl bg-tg-button w-full text-tg-text-button'>
				<img src={documentIcon} alt=""/>	Создать Рейс
			</button>
		</footer>
	);
};

export default Footer;
