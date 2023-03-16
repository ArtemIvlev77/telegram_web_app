import {FC, PropsWithChildren} from 'react';

interface ButtonProps extends PropsWithChildren{
	className?: string;
	onClick: () => void;
}
const Button:FC<ButtonProps> = (props, {children}) => {
	return (
		<button {...props} className={'button ' + props.className}>
			{children}
		</button>
	);
};

export default Button;
