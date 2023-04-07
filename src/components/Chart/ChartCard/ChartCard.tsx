import React, {FC, useEffect, useRef, useState} from 'react';
import StatusSticker, {orderStates, STATES} from '../StatusSticker/StatusSticker';
import dots from '../../../assets/dots.svg';
import messageIcon from '../../../assets/messages.svg'
import NotificationSticker from '../NotificationSticker/NotificationSticker';
import OrderModal from '../OrderModal/OrderModal';
import {useLocation} from 'react-router-dom';
import {useAccountContext} from '../../../shared/context/accountContext';


type ChartCardProps = {
	status: orderStates;
	header: string;
	hasMessages: boolean;
	hasResponses: boolean;
	isHidden: boolean
	routeCallBack: () => void;
}

const ChartCard: FC<ChartCardProps> = ({status, header, hasMessages, hasResponses,isHidden, routeCallBack}) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const location = useLocation().pathname

	return (
		<div className="rounded-2xl bg-tg-primary-bg p-2">
			<div className="flex gap-2 justify-between items-center p-2">
				<span className={'font-bold text-tg-text'} onClick={routeCallBack}>{header}</span>
				<div className="relative flex box-border w-[200px] h-[50px] cursor-pointer" onClick={(e) => {
					e.stopPropagation()
					setModalIsOpen(true)
				}}>
					{location === '/' &&
						<>
					<img className={'w-4 h-4 my-2 ml-auto'} src={dots} alt="context-menu"/>
					 <OrderModal isOpen={modalIsOpen} closeHandler={setModalIsOpen} status={STATES[status]?.title}/>
            </>
					}
				</div>
			</div>

			{location === '/'
				?
				<div className="flex justify-end"><NotificationSticker isHidden={isHidden} hasMessages={hasMessages} hasResponses={hasResponses}/></div>
				:
				<div className="flex justify-between px-2 py-1">
					<span className="text-grey-comment">{hasResponses}</span>
					<div className="flex gap-2">
						<div className="flex py-0.5 px-2 font-bold gap-1 justify-center items-center rounded-2xl bg-sub-bg text-tg-text">
							<img src={messageIcon} alt="msgs"/>
							{hasMessages ? hasMessages :null}
						</div>
						<StatusSticker status={status}/>
					</div>
				</div>
			}
		</div>
	);
};

export default ChartCard;
