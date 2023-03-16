import React from 'react';

const Table = () => {

	const mockup = [
		{invoiceNumber: '223', organization: 'OOO Ромашка', status: 'incoming', messages: 15, action: '', delete: ''}
	]
	return (
		<div className="relative overflow-x-auto">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" className="px-6 py-3">
						Сделки
					</th>
					<th scope="col" className="px-6 py-3">
						Статус
					</th>
					<th scope="col" className="px-6 py-3">
						📩
					</th>
					<th scope="col" className="px-6 py-3">
						Действие
					</th>
					<th scope="col" className="px-6 py-3">
						Удалить
					</th>
				</tr>
				</thead>
				<tbody>
				{mockup.map((invoice) => (
					<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							{invoice.invoiceNumber}
							{invoice.organization}
						</th>
						<td className="px-6 py-4">
							{invoice.status}
						</td>
						<td className="px-6 py-4">
							{invoice.messages}
						</td>
						<td className="px-6 py-4">
							посмотреть и откликнуться
						</td>
						<td className="px-6 py-4">
							<button>X</button>
						</td>
					</tr>
				))}
				{/*<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">*/}
				{/*	<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">*/}
				{/*		Apple MacBook Pro 17"*/}
				{/*	</th>*/}
					<td className="px-6 py-4">
						Silver
					</td>
					<td className="px-6 py-4">
						Laptop
					</td>
					<td className="px-6 py-4">
						$2999
					</td>
				{/*</tr>*/}
				<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
						Microsoft Surface Pro
					</th>
					<td className="px-6 py-4">
						White
					</td>
					<td className="px-6 py-4">
						Laptop PC
					</td>
					<td className="px-6 py-4">
						$1999
					</td>
				</tr>
				<tr className="bg-white dark:bg-gray-800">
					<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
						Magic Mouse 2
					</th>
					<td className="px-6 py-4">
						Black
					</td>
					<td className="px-6 py-4">
						Accessories
					</td>
					<td className="px-6 py-4">
						$99
					</td>
				</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
