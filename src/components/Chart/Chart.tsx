import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import TripCard from './TripCard/TripCard';

import {ROLES} from '../../shared/enums/enums';
import {useAccountContext} from '../../shared/context/accountContext';
import DealCard, {DealType} from './DealCard';

const Chart = () => {
	const navigate = useNavigate()
	const {role,orders , deals } = useAccountContext()
	const {orderHandler} = useAccountContext()

	// const deleteHandler = (id: number) => {
	// 	setInvoiceList(invoiceList.filter((el) => el.id !== id))
	// }
	return (
		<div className="mb-8 mt-5 pt-5 px-5 p-1 bg-tg-secondary-bg h-[70%] scroll-auto z-0">
			<div className="flex justify-between p-3">
				<span className='text-2xl text-textColors-sub font-semibold'>{role === ROLES.executor ? 'Рейсы' : 'Заявки'} - {orders?.length}</span>
				{/*<img src={filter} alt="filter"/>*/}
			</div>
			<div className="flex flex-col gap-2">
				{location.pathname !== '/' ?
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
					navigate(`/orders/${trip.id}`)
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
