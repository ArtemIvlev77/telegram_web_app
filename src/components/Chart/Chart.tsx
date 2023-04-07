import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ChartCard from './ChartCard/ChartCard';

import {ROLES} from '../../shared/enums/enums';
import {useAccountContext} from '../../shared/context/accountContext';

const Chart = () => {
	const navigate = useNavigate()
	const { role, orders } = useAccountContext()
	console.log(orders)

	const {orderHandler} = useAccountContext()

	// const deleteHandler = (id: number) => {
	// 	setInvoiceList(invoiceList.filter((el) => el.id !== id))
	// }
	return (
		<div className="mb-8 mt-5 pt-5 p-1 bg-tg-secondary-bg h-[70%] scroll-auto z-0">
			<div className="flex justify-between p-3">
				<span className='text-2xl text-textColors-sub font-semibold'>{role === ROLES.executor ? 'Сделки' : 'Заявки'} - {orders?.length}</span>
				{/*<img src={filter} alt="filter"/>*/}
			</div>
			<div className="flex flex-col gap-2">
				{orders.map((trip) => (
					<ChartCard
						key={trip.id}
						hasResponses={true}
						hasMessages={true}
						header={trip.header}
						status={trip.status}
						isHidden={trip.isHidden}
						routeCallBack={() => {
							orderHandler(trip.id)
							navigate(`/orders/${trip.id}`)
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Chart;
