import { useState, useEffect } from 'react';
import { restaurantInfo } from '../data/menu.js';

/**
 * Returns the current open/closed status of the restaurant
 * based on the Europe/Zagreb timezone.
 * @returns {{ isOpen: boolean, status: 'open' | 'closed' | 'closingSoon', nextChange: string }}
 */
export function useOpenStatus() {
  const [status, setStatus] = useState({ isOpen: false, status: 'closed', nextChange: '' });

  useEffect(() => {
    function checkStatus() {
      // Get current time in Zagreb timezone
      const now = new Date();
      const zagrebTime = new Date(
        now.toLocaleString('en-US', { timeZone: 'Europe/Zagreb' })
      );
      
      const dayOfWeek = zagrebTime.getDay(); // 0=Sunday
      const hours = zagrebTime.getHours();
      const minutes = zagrebTime.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      const todayHours = restaurantInfo.hours[dayOfWeek];
      if (!todayHours) {
        setStatus({ isOpen: false, status: 'closed', nextChange: '' });
        return;
      }

      const [openH, openM] = todayHours.open.split(':').map(Number);
      const [closeH, closeM] = todayHours.close.split(':').map(Number);
      
      let openMinutes = openH * 60 + openM;
      let closeMinutes = closeH * 60 + closeM;

      // Handle midnight/after-midnight closing (e.g., 00:00 = 1440, 02:00 = 1560)
      if (closeMinutes <= openMinutes) {
        closeMinutes += 24 * 60;
      }

      // Adjust current time for after-midnight check
      let adjustedCurrent = currentMinutes;
      if (currentMinutes < openMinutes && closeMinutes > 24 * 60) {
        adjustedCurrent += 24 * 60;
      }

      const isOpen = adjustedCurrent >= openMinutes && adjustedCurrent < closeMinutes;
      const minutesUntilClose = closeMinutes - adjustedCurrent;
      const closingSoon = isOpen && minutesUntilClose <= 60;

      setStatus({
        isOpen,
        status: closingSoon ? 'closingSoon' : isOpen ? 'open' : 'closed',
        nextChange: isOpen ? todayHours.close : todayHours.open,
      });
    }

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return status;
}

export default useOpenStatus;
