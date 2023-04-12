import React, {FC} from 'react';
import newMessageIcon from '../../../assets/newMessage.svg'
import bell from '../../../assets/bell.svg'
import hiddenIcon from '../../../assets/iconEyeSlash.svg'

interface NotificationStickerProps {
	hasResponses: boolean;
	hasMessages: boolean;
	hidden: boolean;
}

const NotificationSticker: FC<NotificationStickerProps> = ({hasResponses, hasMessages, hidden}) => {
	return (
		<div className="flex w-full justify-start gap-1 text-xs text-tg-text pl-2">
			{hidden && <img src={hiddenIcon} alt="hiddenIcon"/>}
			{hasMessages &&
        <div className="bg-statuses-success flex justify-center items-center py-1 px-2 rounded-lg font-bold"><img src={newMessageIcon} alt=""/> Новое
          Сообщение</div>}
			{hasResponses &&
        <div className="bg-statuses-inbox flex justify-center items-center gap-2 py-1 px-2 rounded-xl font-bold"><img src={bell} alt=""/> Новый отклик</div>}
		</div>
	);
};

export default NotificationSticker
