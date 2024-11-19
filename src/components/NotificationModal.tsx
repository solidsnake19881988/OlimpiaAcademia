import React from 'react';
import { X, ChevronDown, Check } from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ isOpen, onClose }) => {
  const { notifications, markAsRead, markAllAsRead } = useNotifications();

  if (!isOpen) return null;

  const getTypeStyles = (type: 'info' | 'warning' | 'success') => {
    switch (type) {
      case 'info':
        return 'bg-blue-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'success':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-end z-50">
      <div className="bg-gray-900 w-full max-w-md h-screen animate-slide-left">
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Notificaciones</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={markAllAsRead}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-sm flex items-center gap-1"
            >
              <Check className="w-4 h-4" />
              Marcar todo como leído
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-64px)]">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-gray-400">
              No hay notificaciones
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b border-gray-800 hover:bg-gray-800 transition-colors ${
                  notification.isRead ? 'opacity-60' : ''
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${getTypeStyles(notification.type)}`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-300">{notification.message}</p>
                    <span className="text-xs text-gray-500 mt-1 block">
                      {notification.date}
                    </span>
                  </div>
                  {!notification.isRead && (
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;