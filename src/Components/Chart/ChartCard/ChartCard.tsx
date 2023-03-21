import React, {FC} from 'react';
import StatusSticker, {orderStates} from '../StatusSticker/StatusSticker';
import dots from '../../../assets/dots.svg';
import messageIcon from '../../../assets/messages.svg'


type ChartCardProps = {
	status: orderStates
	raceInfo: string;
	messages: number;
	companyName: string;
}

const ChartCard: FC<ChartCardProps> = ({status, raceInfo, messages, companyName}) => {
	return (
		<div className="rounded-2xl bg-tg-secondary-bg p-2">
			<div className='flex gap-2 justify-between items-center p-2'>
				<span className={'font-bold text-tg-text'}>{raceInfo}</span>
				<img src={dots} alt='context-menu'/>
			</div>
			<div className='flex justify-between px-2 py-1'>
				<span className='text-grey-comment'>{companyName}</span>
				<div className='flex gap-2'>
					<div className='flex py-0.5 px-2 font-bold gap-1 justify-center items-center rounded-2xl bg-sub-bg'>
						<img src={messageIcon} alt='msgs'/>
						{messages}
					</div>
					<StatusSticker status={status}/>
				</div>
			</div>
		</div>
	);
};

export default ChartCard;
