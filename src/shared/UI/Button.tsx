import React, {FC, PropsWithChildren} from 'react';

interface ButtonProps extends PropsWithChildren {
	title?: string;
	img?: string;
	clickHandler: () => void;
	type?: "button" | "submit" | "reset" | undefined;
	className?: string;
}
const Button: FC<ButtonProps> = ({img, title, clickHandler, type='button', className=''}) => {

	return (
		<button className={className + 'text-tg-text-button flex items-center gap-2 bg-tg-button'} onClick={() => clickHandler()} type={type}>
			{img && <img src={img} alt="icon"/>}
			{title}
		</button>
	)
}

export default Button;
