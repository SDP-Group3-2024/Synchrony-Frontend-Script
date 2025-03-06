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
  function sendAnalyticsEvent(data) {
    const apiEndpoint =
      "https://kyoh9ri6zj.execute-api.us-east-1.amazonaws.com/dev/analytics";
    console.log(`${data.event_type} event:`, JSON.stringify(data, null, 2));
    fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch((error) => console.error("Error sending log data:", error));
  }
  function createBaseEventData(eventType) {
    return {
      event_type: eventType,
      timestamp: new Date().toISOString(),
      session_id: session_id,
      page_url: window.location.href,
      page_path: window.location.pathname,
      page_title: document.title,
    };
  }
  // Initialize session
  let session_id = sessionStorage.getItem("session_id") || generateUUID();
  sessionStorage.setItem("session_id", session_id);
  // Activity tracking
  let lastActivityTime = Date.now();
  let isIdle = false;
  let totalActiveTime = 0;
  let totalIdleTime = 0;
  let pageLoadTime = Date.now();
  let lastScrollPosition = window.scrollY;
  let idleThreshold = 60000; // 60 seconds
  let activityReportInterval = 60000; // 1 minute
  let scrollThrottle = 500; // ms between scroll events
  // Main setup function
  function setupAnalytics() {
    setupExitLogging();
    setupClickTracking();
    setupScrollTracking();
    setupPerformanceTracking();
    setupErrorTracking();
    setupActivityTracking();
    console.log("Analytics tracking initialized with session ID:", session_id);
  }
  // Exit logging
  function setupExitLogging() {
    const logExitEvent = () => {
      const logData = createBaseEventData("page_exit");
      sendAnalyticsEvent(logData);
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
  }
  // Click tracking
  function setupClickTracking() {
    document.addEventListener("click", (event) => {
      var _a;
      const target = event.target;
      if (!target) return;
      const clickData = Object.assign(
        Object.assign({}, createBaseEventData("click")),
        {
          element_tag: target.tagName.toLowerCase(),
          element_id: target.id || undefined,
          element_class: target.className || undefined,
          element_text:
            ((_a = target.textContent) === null || _a === void 0
              ? void 0
              : _a.substring(0, 50)) || undefined,
          x_position: event.clientX,
          y_position: event.clientY,
        },
      );
      sendAnalyticsEvent(clickData);
    });
  }
  // Scroll tracking
  function setupScrollTracking() {
    let scrollTimeout = null;
    window.addEventListener(
      "scroll",
      () => {
        if (scrollTimeout) return;
        scrollTimeout = window.setTimeout(() => {
          const scrollTop = window.scrollY;
          const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight,
          );
          const windowHeight = window.innerHeight;
          const scrollPercent = Math.round(
            (scrollTop / (documentHeight - windowHeight)) * 100,
          );
          const scrollData = Object.assign(
            Object.assign({}, createBaseEventData("scroll")),
            {
              scroll_depth: scrollPercent,
              scroll_direction: scrollTop > lastScrollPosition ? "down" : "up",
              viewport_height: windowHeight,
              document_height: documentHeight,
            },
          );
          lastScrollPosition = scrollTop;
          sendAnalyticsEvent(scrollData);
          scrollTimeout = null;
        }, scrollThrottle);
      },
      { passive: true },
    );
  }
  // Performance tracking
  function setupPerformanceTracking() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        if (!window.performance) return;
        const perfEntries = window.performance.timing;
        const performanceData = Object.assign(
          Object.assign({}, createBaseEventData("performance")),
          {
            load_time: perfEntries.loadEventEnd - perfEntries.navigationStart,
            dom_interactive_time:
              perfEntries.domInteractive - perfEntries.navigationStart,
            dom_complete_time:
              perfEntries.domComplete - perfEntries.navigationStart,
          },
        );
        // Add web vitals if available via Performance API
        if (window.performance && "getEntriesByType" in window.performance) {
          const paintEntries = window.performance.getEntriesByType("paint");
          const fcpEntry = paintEntries.find(
            (entry) => entry.name === "first-contentful-paint",
          );
          const lcpEntry = paintEntries.find(
            (entry) => entry.name === "largest-contentful-paint",
          );
          if (fcpEntry) {
            performanceData.first_contentful_paint = fcpEntry.startTime;
          }
          if (lcpEntry) {
            performanceData.largest_contentful_paint = lcpEntry.startTime;
          }
        }
        sendAnalyticsEvent(performanceData);
      }, 0);
    });
  }
  // Error tracking
  function setupErrorTracking() {
    window.addEventListener("error", (event) => {
      var _a, _b;
      const errorData = Object.assign(
        Object.assign({}, createBaseEventData("error")),
        {
          error_message: event.message || "Unknown error",
          error_source: event.filename,
          error_line: event.lineno,
          error_column: event.colno,
          error_stack:
            (_a = event.error) === null || _a === void 0 ? void 0 : _a.stack,
          error_type:
            ((_b = event.error) === null || _b === void 0 ? void 0 : _b.name) ||
            "Error",
        },
      );
      sendAnalyticsEvent(errorData);
    });
    window.addEventListener("unhandledrejection", (event) => {
      let errorMessage;
      let errorStack;
      let errorType = "Promise Rejection";
      if (event.reason instanceof Error) {
        errorMessage = event.reason.message;
        errorStack = event.reason.stack;
        errorType = event.reason.name;
      } else if (typeof event.reason === "string") {
        errorMessage = event.reason;
      } else {
        try {
          errorMessage = JSON.stringify(event.reason);
        } catch (_a) {
          errorMessage = "Unhandled Promise Rejection";
        }
      }
      const errorData = Object.assign(
        Object.assign({}, createBaseEventData("error")),
        {
          error_message: errorMessage,
          error_stack: errorStack,
          error_type: errorType,
        },
      );
      sendAnalyticsEvent(errorData);
    });
  }
  // Activity tracking
  function setupActivityTracking() {
    const activityEvents = ["mousedown", "keydown", "touchstart", "scroll"];
    // Reset idle timer on user activity
    activityEvents.forEach((eventName) => {
      document.addEventListener(
        eventName,
        () => {
          if (isIdle) {
            isIdle = false;
            totalIdleTime += Date.now() - lastActivityTime;
          }
          lastActivityTime = Date.now();
        },
        { passive: true },
      );
    });
    // Check idle state
    setInterval(() => {
      const now = Date.now();
      if (!isIdle && now - lastActivityTime > idleThreshold) {
        isIdle = true;
        lastActivityTime = now;
      }
    }, 5000);
    // Report activity periodically
    setInterval(() => {
      const now = Date.now();
      const timeOnPage = now - pageLoadTime;
      if (isIdle) {
        totalIdleTime += now - lastActivityTime;
        lastActivityTime = now;
      } else {
        totalActiveTime = timeOnPage - totalIdleTime;
      }
      const activityData = Object.assign(
        Object.assign({}, createBaseEventData("activity")),
        {
          time_on_page: Math.floor(timeOnPage / 1000),
          idle_time: Math.floor(totalIdleTime / 1000),
          active_time: Math.floor(totalActiveTime / 1000),
        },
      );
      sendAnalyticsEvent(activityData);
    }, activityReportInterval);
  }
  // Expose functions to the front end
  window.analyticsTracker = {
    initAnalytics: setupAnalytics,
    trackEvent: (eventType, customData) => {
      sendAnalyticsEvent(
        Object.assign(
          Object.assign({}, createBaseEventData(eventType)),
          customData,
        ),
      );
    },
  };
  // Run automatically when script loads
  setupAnalytics();
})();
