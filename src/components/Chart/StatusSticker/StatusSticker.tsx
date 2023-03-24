import {FC} from 'react';


export enum orderStates  {
	active,
	idle,
	success,
	refuse,
	inbox
}

export type Status<Record extends orderStates> = {
	status: 0 | 1 | 2 | 3 | 4;
}



const StatusSticker: FC<Status<orderStates>> = ({status}) => {
	const STATES = {
		[orderStates.active]: {title:'Активная', bgColor: 'bg-statuses-active'},
		[orderStates.idle]: {title: 'Ожидание', bgColor: 'bg-statuses-idle'},
		[orderStates.success]: {title: 'Успех', bgColor: 'bg-statuses-success'},
		[orderStates.refuse]: {title: 'Архив', bgColor: 'bg-statuses-refuse'},
		[orderStates.inbox]: {title: 'Не откликнулся', bgColor: 'bg-statuses-inbox'},
	}

	return (
		<div className={`rounded-md p-1 text-tg-text font-semibold ` + STATES[status].bgColor}>
			<span className="text-white">{STATES[status].title}</span>
		</div>
	);
};

export default StatusSticker;
