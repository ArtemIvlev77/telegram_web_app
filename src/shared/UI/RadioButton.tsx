import React, {FC} from 'react';
import {Simulate} from 'react-dom/test-utils';
import click = Simulate.click;

interface RadioButtonProps {
	id: string;
	name: string;
	checked: boolean;
	changeHandler: () => void;
	clickHandler: () => void;

}
const RadioButton:FC<RadioButtonProps> = ({id, name, checked, changeHandler, clickHandler}) => {
	return (
		<div className="w-full" onClick={clickHandler}>
			<input id={id} name={name} type='radio' className='peer hidden' checked={checked} onChange={changeHandler}/>
			<label htmlFor={name} className="w-full text-textColors-inactive block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">{id}</label>
		</div>
	);
};

export default RadioButton;
