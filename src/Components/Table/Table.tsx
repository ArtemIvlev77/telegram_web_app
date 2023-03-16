import React, {useState} from 'react';

const Table = () => {
	const mockup = [
		{id: 12,invoiceNumber: '223', organization: 'OOO Ромашка', status: 'incoming', messages: 15, action: '', delete: ''},
		{id: 13,invoiceNumber: '255', organization: 'OOO OGon', status: 'awaits', messages: 15, action: '', delete: ''},
		{id: 14,invoiceNumber: '223', organization: 'OOO TOP', status: 'active', messages: 15, action: '', delete: ''},
		{id: 15,invoiceNumber: '6556', organization: 'OOO SAMLOG', status: 'success', messages: 15, action: '', delete: ''},
		{id: 16,invoiceNumber: '544', organization: 'OOO Ромашка', status: 'closed', messages: 15, action: '', delete: ''},
	]
	const [invoiceList, setInvoiceList] = useState(mockup);
	const deleteHandler = (id: number) => {
		setInvoiceList(invoiceList.filter((el) => el.id !== id))
	}
	return (
		<div className="relative mt-5">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" className="px-2 py-1">
						Сделки
					</th>
					<th scope="col" className="px-2 py-1">
						Статус
					</th>
					<th scope="col" className="px-2 py-1">
						📩
					</th>
					<th scope="col" className="px-2 py-1">
						Действие
					</th>
					<th scope="col" className="px-2 py-1">
						Удалить
					</th>
				</tr>
				</thead>
				<tbody>
				{invoiceList.map((invoice) => (
					<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="px-2 py-1 font-medium text-gray-900 break-words dark:text-white">
							#{invoice.invoiceNumber} {'\n '}
							{invoice.organization}
						</th>
						<td className="px-2 py-1">
							{invoice.status}
						</td>
						<td className="px-2 py-1">
						<span className="font-bold">{invoice.messages}</span>
						</td>
						<td className="px-2 py-1">
							<a href="">посмотреть и откликнуться</a>
						</td>
						<td className="px-2 py-1">
							<button onClick={() => deleteHandler(invoice.id)}>X</button>
						</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
