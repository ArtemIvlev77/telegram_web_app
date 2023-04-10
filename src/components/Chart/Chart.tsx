import React, {FC, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import TripCard from './TripCard/TripCard';

import {ROLES} from '../../shared/enums/enums';
import {useAccountContext} from '../../shared/context/accountContext';
import DealCard, {DealType} from './DealCard/DealCard';
import {getTripDeals} from '../../api';

type ChartOptionsType = {
	tripsPage?: boolean;
	dealsPage?: boolean;
}

const Chart: FC<ChartOptionsType> = ({tripsPage, dealsPage}) => {
	const navigate = useNavigate()
	const {role,orders  } = useAccountContext()
	const {orderHandler, userInfo} = useAccountContext()
	const {tripId} = useParams();
	const [deals, setDeals] = useState<DealType[]>([]);

	useEffect(() => {
		// tripId && userInfo?.tgid && getTripDeals(userInfo?.tgid, tripId).then((res) => setDeals(res?.payload))
		tripId && userInfo?.tgid && getTripDeals(userInfo?.tgid, tripId).then((res) => setDeals([
			{
				id: 1,
				header: 'Заявка №1',
				status: 3,
				organizName: 'TashkentAuto',
				hasUnreadMessages: true,
				messages: 45,
			}
		]))

	}, [tripId])
	return (
		<div className="mb-8 mt-5 pt-5 px-5 p-1 bg-tg-secondary-bg h-[70%] scroll-auto z-0">
			<div className="flex justify-between p-3">

				{tripsPage && <span
          className="text-2xl text-textColors-sub font-semibold">{role === ROLES.executor ? 'Рейсы' :'Заявки'} - {orders?.length}</span>}
				{dealsPage && <span className="text-2xl text-textColors-sub font-semibold">Сделки- {deals.length}</span>}
				{/*<img src={filter} alt="filter"/>*/}
			</div>
			<div className="flex flex-col gap-2">
				{tripsPage ?
				orders.map((trip) => (
					<TripCard
					key={trip.id}
				id={trip.id}
				hasResponses={trip.hasResponses}
				hasMessages={trip.hasMessages}
				header={trip.header}
				status={trip.status}
				hidden={trip.hidden}
				routeCallBack={() => {
					orderHandler(trip.id)
					navigate(`/orders/${trip.id}`, {state: {tripHeader: trip.header}})
				}}
			/>
			)) : deals.map((deal: DealType) => (
				<DealCard key={deal.id}
				          id={deal.id}
				          header={deal.header}
				          status={deal.status}
				          organizName={deal.organizName}
				          hasUnreadMessages={deal.hasUnreadMessages}
				          messages={deal.messages}
				          routeCallBack={() => navigate(`/deals/${deal.id}`)}/>
			))}
			</div>
		</div>
	);
};

export default Chart;
