import React, {FC} from 'react';
import newMessageIcon from '../../../assets/newMessage.svg'
import bell from '../../../assets/bell.svg'

interface NotificationStickerProps {
	newResponse: boolean;
	newMessage: boolean;
}

const NotificationSticker: FC<NotificationStickerProps> = ({newResponse, newMessage}) => {
	return (
		<div className="flex justify-around gap-4 text-xs text-tg-text">
			{newMessage &&
        <div className="bg-statuses-success flex justify-center items-center py-1 px-2 rounded-lg"><img src={newMessageIcon} alt=""/> Новое
          Сообщение</div>}
			{newResponse &&
        <div className="bg-statuses-inbox flex justify-center items-center gap-2 py-1 px-2 rounded-xl"><img src={bell} alt=""/> Новый отклик</div>}
		</div>
	);
};

export default NotificationSticker
