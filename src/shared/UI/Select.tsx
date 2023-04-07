import chevronDown from '../../assets/chevronDown.svg'
import {FC, useEffect, useRef, useState} from 'react';
import {OrganizationType} from "../../utils/types";

type SelectProps = {
	organizations: OrganizationType[];
	selected?: OrganizationType;
	selectHandler: any;
}
const Select: FC<SelectProps> = ({organizations, selectHandler, selected}) => {
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
		<div className="w-full font-medium min-h-full z-10">
			<div ref={ref} className="bg-tg-primary-bg w-full p-2 items-center justify-between rounded-lg flex"
			     onClick={(e) => setOpen(true)}>
				<span className="w-full"> {selected?.name}</span>
				<img className={'text-black'} src={chevronDown} alt="chevron Down"/>
			</div>
			{open &&
        <ul className="bg-tg-primary-bg mt-2 overflow-auto min-h-full max-h-40 rounded z-10">
					{
						organizations?.map((item: any) => (
								<li key={item.id} onClick={async () => {
									await selectHandler(item)
									setOpen(false)
								}} className="p-1 cursor-pointer z-10 bg-tg-primary-bg hover:bg-blue-300 hover:bg-opacity-10">{item.name}</li>
							)
						)
					}
        </ul>
			}
		</div>
	);
};

export default Select;
