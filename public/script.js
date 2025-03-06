"use strict";
(function () {
  function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );
  }
  function setupExitLogging() {
    let session_id = sessionStorage.getItem("session_id") || generateUUID();
    sessionStorage.setItem("session_id", session_id);
    const apiEndpoint =
      "https://kyoh9ri6zj.execute-api.us-east-1.amazonaws.com/dev/analytics";
    const logExitEvent = () => {
      const logData = {
        event_type: "page_exit",
        timestamp: new Date().toISOString(),
        session_id: session_id,
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
    const handleBeforeUnload = (event) => {
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
    console.log("Exit tracking initialized with session ID:", session_id);
  }
  // This is how we will expose function to the front end and make certain
  // functions more accessible for direct integration
  window.initUserExitLogging = setupExitLogging;
  // Run automatically when script loads
  setupExitLogging();
})();
