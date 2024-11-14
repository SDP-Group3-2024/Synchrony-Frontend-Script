import { useEffect } from 'react';

function useLogUserExit() {
  useEffect(() => {
    const logExitEvent = () => {
      const logData = {
        eventType: 'page_exit',
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
      };
      console.log("User exit event:", JSON.stringify(logData));
    };

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      logExitEvent();
      event.preventDefault();
      event.returnValue = '';
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        logExitEvent();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
}

export default useLogUserExit;
