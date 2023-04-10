import chevronDown from '../../assets/chevronDown.svg'
import {FC, HTMLAttributes, useEffect, useRef, useState} from 'react';
import {useAccountContext} from '../context/accountContext';
import {changeUserOrganization} from '../../api';

type SelectProps = {
	data: any;
}
const Select: FC<SelectProps> = ({data}) => {
	const [selected, setSelected] = useState(data[0]);
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);
	const {organizations, userInfo, changeOrgHandler} = useAccountContext();

	useEffect(() => {
		organizations && setSelected(organizations[0]);
	}, [organizations]);

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
			<div ref={ref} className="bg-tg-primary-bg w-full p-2 items-center justify-between rounded-lg flex"
			     onClick={() => setOpen(true)}>
				<span className="w-full"> {selected?.name}</span>
				<img className={'text-black'} src={chevronDown} alt="chevron Down"/>
			</div>
			{open &&
        <ul className="bg-tg-primary-bg mt-2 overflow-auto min-h-full max-h-40 rounded z-10">
					{
						data?.map((item: any) => (
								<li key={item.id} onClick={() => {
									setSelected(item)
									if (userInfo?.tgid) {
										changeOrgHandler(userInfo.tgid, item.id)
									}
									setOpen(false)
								}} className="p-1 cursor-pointer z-10 hover:bg-blue-300 hover:bg-opacity-10">{item.name}</li>
							)
						)
					}
        </ul>
			}
		</div>
	);
};

export default Select;
