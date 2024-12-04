import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function useLogUserExit() {
  useEffect(() => {
    let session_id = localStorage.getItem('session_id');
    if (!session_id) {
      session_id = uuidv4();
      localStorage.setItem('session_id', session_id);
    }

    const apiEndpoint = 'https://fxedsn67te.execute-api.us-east-1.amazonaws.com/dev';

    const sendLogDataToAPI = async (logData: Record<string, any>) => {
      try {
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(logData),
        });
        if (!response.ok) {
          console.error('Failed to send log data:', response.statusText);
        }
      } catch (error) {
        console.error('Error sending log data:', error);
      }
    };

    const logExitEvent = () => {
      const logData = {
        event_type: 'page_exit',
        session_id: session_id,
        url: window.location.href,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        
      };
      console.log('User exit event:', JSON.stringify(logData));
      sendLogDataToAPI(logData);
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
