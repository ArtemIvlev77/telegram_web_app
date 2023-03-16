declare global {
	interface Window { Telegram: any; }
}

window.Telegram = window.Telegram || {};

const tg = window.Telegram.WebApp
// "id": 326099968,
// 	"first_name": "<Artemius />",
// 	"last_name": "",
// 	"username": "ArtemIvlev77",
// 	"language_code": "ru"

type User = {
	id: number;
	first_name: string;
	last_name?: string;
	username: string;
	language_code: string;
}
export function useTelegram() {

	const onToggleButton = () => {
		if(tg.MainButton.isVisible) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}

	const onClose = () => {
		tg.close()
	}

	return {
		onClose,
		onToggleButton,
		tg,
		user: tg.initDataUnsafe?.user,
		avatar: tg.avatar,
	}
}
