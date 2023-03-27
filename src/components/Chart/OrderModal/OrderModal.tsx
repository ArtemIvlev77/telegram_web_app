import React, {FC, useEffect, useRef} from 'react';
import chatIcon from '../../../assets/chatIcon.svg'
import completeIcon from '../../../assets/completeIcon.svg';
import archiveIcon from '../../../assets/archive.svg';

interface OrderModalProps {
	isOpen: boolean;
	closeHandler: (isOpen: boolean) => void;
	status: string;
}

const OrderModal: FC<OrderModalProps> = ({isOpen, closeHandler, status}) => {
	const modalRef = useRef<HTMLDivElement | null>(null)
	const outsideClickHandler = (e: any) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			closeHandler(false);
		}
	}

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('click', outsideClickHandler)
		}
		return () => {
			window.removeEventListener('click', outsideClickHandler)
		}
	}, [isOpen])

	return (
		<div ref={modalRef} className={`absolute z-10 top-0 right-0 w-[200px] bg-white shadow rounded-md ${isOpen ? 'fixed' : 'hidden'}`}>
			<div className='w-full flex items-center justify-items-stretch gap-2 py-4 px-6 hover:bg-sky-100 cursor-pointer'>
				<img src={chatIcon} alt="chatIcon"/>
				<span>Перейти в чат</span>
			</div>
			<div className='w-full flex items-center justify-items-stretch gap-2  py-4 px-6 hover:bg-sky-100 cursor-pointer'>
				<img src={completeIcon} alt="completeIcon"/>
				<span>Завершить</span>
			</div>
			<div className='w-full flex items-center justify-items-stretch gap-2  py-4 px-6 hover:bg-sky-100 cursor-pointer'>
				<img src={archiveIcon} alt="completeIcon"/>
				<span className={'text-textColors-red'}>Архив</span>
			</div>




		</div>
	);
};

export default OrderModal;
