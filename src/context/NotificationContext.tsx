import React, { createContext, useContext, useState, useEffect } from 'react';

interface Notification {
  id: number;
  message: string;
  date: string;
  type: 'info' | 'warning' | 'success';
  isRead: boolean;
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: number) => void;
  markAllAsRead: () => void;
  addNotification: (notification: Omit<Notification, 'id' | 'isRead'>) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      message: 'Nuevo fichaje confirmado para la próxima temporada',
      date: 'Hace 2 horas',
      type: 'success',
      isRead: false
    },
    {
      id: 2,
      message: 'Actualización sobre la lesión del capitán',
      date: 'Hace 5 horas',
      type: 'info',
      isRead: false
    },
    {
      id: 3,
      message: 'Recordatorio: Partido de Champions League mañana',
      date: 'Hace 1 día',
      type: 'warning',
      isRead: false
    }
  ]);

  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const count = notifications.filter(n => !n.isRead).length;
    setUnreadCount(count);
  }, [notifications]);

  // Simulate new notifications arriving
  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.3) { // 30% chance of new notification
        addNotification({
          message: 'Nueva actualización del equipo',
          date: 'Ahora',
          type: 'info'
        });
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const addNotification = (notification: Omit<Notification, 'id' | 'isRead'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now(),
      isRead: false
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  return (
    <NotificationContext.Provider value={{
      notifications,
      unreadCount,
      markAsRead,
      markAllAsRead,
      addNotification
    }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};