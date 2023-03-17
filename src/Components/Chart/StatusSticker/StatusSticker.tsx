import {FC} from 'react';


interface StatusStickerProps {
	status: 'Активная' | 'Ожидание' | 'Успех' | 'Отказ' |  'Не откликнулся'
}
const StatusSticker:FC<StatusStickerProps> = ({status}) => {
	enum STATES {
		'Активная',
		'Ожидание',
		'Успех',
		'Отказ',
		'Не откликнулся',
	}


	return (
		<div className={`rounded bg-[${status}]`}>
			<span className="text-tg-text">{STATES[status]}</span>
		</div>
	);
};

export default StatusSticker;
