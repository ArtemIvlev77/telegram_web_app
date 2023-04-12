import React, {FC, useState} from 'react';
import dots from '../../../assets/dots.svg';
import DealModal from '../DealModal/DealModal';
import StatusSticker, {orderStates, STATES} from '../StatusSticker/StatusSticker';
import messageIcon from '../../../assets/messages.svg';
import {useParams} from 'react-router-dom';

export type DealType = {
	id: number;
	status: orderStates;
	header: string;
	hasUnreadMessages: boolean;
	messages: number;
	organizName: string;
	routeCallBack: () => void;
}

const DealCard: FC<DealType> = ({id, status,header, routeCallBack, organizName, messages, hasUnreadMessages }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const {tripId} = useParams()
	return (
		<div className="rounded-2xl bg-tg-primary-bg p-2">
			<div className="flex gap-2 justify-between items-center p-2">
				<span className={'font-bold text-tg-text'}>#{id} {header}</span>
				<div className="relative flex box-border w-[200px] h-[50px] cursor-pointer" onClick={(e) => {
					e.stopPropagation()
					setModalIsOpen(true)
				}}>
              <img className={'w-4 h-4 my-2 ml-auto'} src={dots} alt="context-menu"/>
              <DealModal updateHandler={routeCallBack} isOpen={modalIsOpen} closeHandler={setModalIsOpen} status={STATES[status]?.title} dealId={id} tripId={tripId ?? ''}/>
				</div>
			</div>
				<div className="flex justify-between px-2 py-1">
					<span>{organizName}</span>
					<div className="flex gap-2">
						<div className={`flex py-0.5 px-2 font-bold gap-1 justify-center items-center rounded-2xl 
						${hasUnreadMessages ? 'bg-tg-statuses-success' : 'bg-sub-bg'} text-tg-text`}
						>
							<span className="text-tg-text">{messages}</span>
							<img className="fill-tg-text" src={messageIcon} alt="msgs"/>
						</div>
						<StatusSticker status={status}/>
					</div>
				</div>
		</div>
	);
};

export default DealCard;
