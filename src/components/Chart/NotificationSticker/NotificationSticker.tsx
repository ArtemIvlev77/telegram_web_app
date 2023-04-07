import React, {FC} from 'react';
import newMessageIcon from '../../../assets/newMessage.svg'
import bell from '../../../assets/bell.svg'

interface NotificationStickerProps {
	hasResponses: boolean;
	hasMessages: boolean;
	isHidden: boolean;
}

const NotificationSticker: FC<NotificationStickerProps> = ({hasResponses, hasMessages, isHidden}) => {
	return (
		<div className="flex justify-around gap-4 text-xs text-tg-text">
			{hasMessages &&
        <div className="bg-statuses-success flex justify-center items-center py-1 px-2 rounded-lg font-bold"><img src={newMessageIcon} alt=""/> Новое
          Сообщение</div>}
			{hasResponses &&
        <div className="bg-statuses-inbox flex justify-center items-center gap-2 py-1 px-2 rounded-xl font-bold"><img src={bell} alt=""/> Новый отклик</div>}
		</div>
	);
};

export default NotificationSticker
