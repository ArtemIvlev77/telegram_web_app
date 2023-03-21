import React, {useState} from 'react';
import ChartCard from './ChartCard/ChartCard';
import filter from '../../assets/filter.svg';

const Chart = () => {
	const mockup = [
		{id: 12,invoiceNumber: '223', organization: 'OOO Ромашка', raceInfo: 'Алмалык, Узбекистан - Избербаш, Респ. Дагестан, Россия', status: 0, messages:20, action: '', delete: ''},
		{id: 13,invoiceNumber: '255', organization: 'OOO OGon', raceInfo: 'Алмалык, Узбекистан - Избербаш, Респ. Дагестан, Россия', status: 1,  messages:20, delete: ''},
		{id: 14,invoiceNumber: '223', organization: 'OOO TOP', raceInfo: 'Алмалык, Узбекистан - Избербаш, Респ. Дагестан, Россия', status: 2,  messages:20, delete: ''},
		{id: 15,invoiceNumber: '6556', organization: 'OOO SAMLOG', raceInfo: 'Алмалык, Узбекистан - Избербаш, Респ. Дагестан, Россия', status: 3,  messages:20, delete: ''},
		{id: 16,invoiceNumber: '544', organization: 'OOO Ромашка', raceInfo: 'Алмалык, Узбекистан - Избербаш, Респ. Дагестан, Россия', status: 4,  messages:20, delete: ''},
	]
	const [invoiceList, setInvoiceList] = useState(mockup);
	const deleteHandler = (id: number) => {
		setInvoiceList(invoiceList.filter((el) => el.id !== id))
	}
	return (
		<div className="relative pt-5 p-1 bg-grey-body min-h-full">
			<div className='flex justify-between p-3'>
				<span className={'text-2xl text-textColors-sub font-semibold'}>Сделки - {invoiceList?.length}</span>
				<img src={filter} alt='filter'/>
			</div>
			<div className="flex flex-col gap-2">
				{invoiceList.map((invoice) => (
				<ChartCard
					key={invoice.id}
					companyName={invoice.organization}
				  messages={invoice.messages}
					raceInfo={`#${invoice.invoiceNumber} ${invoice.raceInfo}`}
					status={invoice.status}/>
				))}
			</div>
		</div>
	);
};

export default Chart;
