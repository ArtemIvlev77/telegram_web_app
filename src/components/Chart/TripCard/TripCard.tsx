import React, {FC} from 'react';
import {orderStates} from '../StatusSticker/StatusSticker';
import arrow from '../../../assets/arrow.svg';
import NotificationSticker from '../NotificationSticker/NotificationSticker';


type ChartCardProps = {
	id: number
	status: orderStates;
	header: string;
	hasMessages: boolean;
	hasResponses: boolean;
	hidden: boolean;
	routeCallBack: () => void;
}

const TripCard: FC<ChartCardProps> = ({id, status, header, hasMessages, hasResponses,hidden, routeCallBack}) => {

	return (
		<div className="rounded-2xl bg-tg-primary-bg p-2">
			<div className="flex gap-2 justify-between items-center p-2" onClick={routeCallBack}>
				<span className="font-bold text-tg-text basis-2/3">#{id} {header}</span>
				<div className="relative flex box-border w-[200px] h-[50px] cursor-pointer">
					<img className={'w-4 h-4 my-2 ml-auto'} src={arrow} alt="context-menu"/>
				</div>
			</div>
				<div className="flex justify-end"><NotificationSticker hidden={hidden} hasMessages={hasMessages} hasResponses={hasResponses}/></div>
		</div>
	);
};

export default TripCard;
