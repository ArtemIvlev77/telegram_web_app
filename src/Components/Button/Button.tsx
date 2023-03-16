import {FC, PropsWithChildren} from 'react';
import './Button.css'
interface ButtonProps extends PropsWithChildren{
	className?: string;
	onClick: () => void;
}
const Button:FC<ButtonProps> = (props) => {
	return (
		<button {...props} className={props.className}>
			{props.children}
		</button>
	);
};

export default Button;
