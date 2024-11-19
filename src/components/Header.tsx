import React, { useState } from 'react';
import { User, Bell } from 'lucide-react';
import NotificationModal from './NotificationModal';
import UserProfileModal from './UserProfileModal';
import { useNotifications } from '../context/NotificationContext';

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { unreadCount } = useNotifications();

  return (
    <>
      <header className="fixed top-0 right-0 w-full lg:w-[calc(100%-16rem)] bg-black text-white h-16 flex items-center justify-end px-6 z-30">
        <div className="flex items-center gap-4">
          <button 
            className="p-2 hover:bg-gray-900 rounded-lg transition-colors relative"
            onClick={() => setIsNotificationOpen(true)}
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {unreadCount}
              </span>
            )}
          </button>
          <button 
            className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
            onClick={() => setIsProfileOpen(true)}
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </header>

      <NotificationModal 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)} 
      />

      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
};

export default Header;