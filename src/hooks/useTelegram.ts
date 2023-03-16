declare global {
	interface Window { Telegram: any; }
}

window.Telegram = window.Telegram || {};

const tg = window.Telegram.WebApp

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
		safeUser: tg.initData
	}
}
