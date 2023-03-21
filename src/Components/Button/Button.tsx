import {FC, PropsWithChildren} from 'react';
import './Button.css'
interface ButtonProps extends PropsWithChildren{
	className?: string;
	type?: "button" | "submit" | "reset" | undefined,
	onClick: () => void;
	name?: string
}
const Button:FC<ButtonProps> = (props) => {
	return (
		<button name={props.name ?? undefined} type={props.type ?? 'button'} {...props} className={ 'bg-tg-button text-tg-text-button' + props.className}>
			{props.children}
		</button>
	);
};

export default Button;
