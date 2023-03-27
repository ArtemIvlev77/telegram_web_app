import chevronDown from '../../assets/chevronDown.svg'
import {FC, HTMLAttributes, useEffect, useRef, useState} from 'react';

type SelectProps = {
	data: any;
}
const Select: FC<SelectProps> = ({data}) => {
	const [organizations, setOrganizations] = useState()
	const [selected, setSelected] = useState(data[0]);
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	const outsideClickHandler = (e: any) => {
		if (ref.current && !ref.current.contains(e.target)) {
			setOpen(false);
		}
}
	useEffect(() => {
		if (open) {
		window.addEventListener('click', outsideClickHandler)
		}
		return () => {
		window.removeEventListener('click', outsideClickHandler)
		}
	}, [open])
	return (
		<div className="w-full font-medium min-h-full">
			<div ref={ref} className="bg-tg-secondary-bg w-full p-2 items-center justify-between rounded-lg flex"
			     onClick={() => setOpen(true)}>
				<span className="w-full"> {selected.organization}</span>
				<img className={'text-black'} src={chevronDown} alt="chevron Down"/>
			</div>
			{open &&
        <ul className="bg-tg-secondary-bg mt-2 overflow-auto min-h-full max-h-40 rounded z-10">
					{
						data?.map((item: any) => (
								<li key={item.invoiceNumber} onClick={() => {
									setSelected(item)
									setOpen(false)
								}} className="p-1 cursor-pointer hover:bg-statuses-success z-10">{item.organization}</li>
							)
						)
					}
        </ul>
			}
		</div>
	);
};

export default Select;
