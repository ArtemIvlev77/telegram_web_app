import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ChartCard from './ChartCard/ChartCard';
import filter from '../../assets/filter.svg';
import {RolesEnum} from '../../shared/enums/enums';
import {useAccountContext} from '../../shared/context/accountContext';

const Chart = () => {
	const navigate = useNavigate()
	const { role, orders } = useAccountContext()

	const {orderHandler} = useAccountContext()

	// const deleteHandler = (id: number) => {
	// 	setInvoiceList(invoiceList.filter((el) => el.id !== id))
	// }
	return (
		<div className="mb-8 mt-4 pt-5 p-1 bg-tg-secondary-bg h-[70%] overflow-scroll">
			<div className="flex justify-between p-3">
				<span className={'text-2xl text-textColors-sub font-semibold'}>{role === RolesEnum.executor ? 'Сделки' : 'Заявки'} - {orders?.length}</span>
				{/*<img src={filter} alt="filter"/>*/}
			</div>
			<div className="flex flex-col gap-2">
				{orders.map((invoice) => (
					<ChartCard
						key={invoice.id}
						companyName={invoice.organization}
						messages={invoice.messages}
						raceInfo={`#${invoice.id} ${invoice.from} - ${invoice.to}`}
						status={invoice.status}
						routeCallBack={() => {
							orderHandler(invoice.id)
							navigate(`/orders/${invoice.id}`)
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Chart;
