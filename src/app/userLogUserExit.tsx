import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function userLogUserExit() {
  useEffect(() => {
    let session_id = sessionStorage.getItem("session_id") || uuidv4();
    sessionStorage.setItem("session_id", session_id);

    const apiEndpoint =
      "https://kyoh9ri6zj.execute-api.us-east-1.amazonaws.com/dev/analytics";

    const logExitEvent = () => {
      const logData = {
        event: {
          type: "page_exit",
          timestamp: new Date().toISOString(),
        },
        session: {
          id: session_id,
        },
        page_info: {
          url: window.location.href,
          path: window.location.pathname,
        },
        metadata: {
          version: "1.0",
        },
      };

      console.log("User exit event:", JSON.stringify(logData, null, 2));

      fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logData),
      }).catch((error) => console.error("Error sending log data:", error));
    };

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      logExitEvent();
      event.preventDefault();
      event.returnValue = "";
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        logExitEvent();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
}

export default userLogUserExit;
