import { useState, useEffect } from 'react';

const useInternetStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // If was offline, show a brief success message
      if (wasOffline) {
        setWasOffline(false);
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      setWasOffline(true);
    };

    // Add event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Additional check with fetch to ensure real connectivity
    const checkConnectivity = async () => {
      try {
        const response = await fetch('https://www.google.com/favicon.ico', {
          method: 'HEAD',
          mode: 'no-cors',
          cache: 'no-cache'
        });
        setIsOnline(true);
      } catch (error) {
        setIsOnline(false);
        setWasOffline(true);
      }
    };

    // Check connectivity every 30 seconds
    const interval = setInterval(checkConnectivity, 30000);

    // Initial check
    checkConnectivity();

    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  }, [wasOffline]);

  return { isOnline, wasOffline };
};

export default useInternetStatus;
