export const trackEvent = (eventName, payload = {}) => {
  const timestamp = new Date().toISOString();
  console.log(`%c[ANALYTICS] %c${eventName}`, 'color: #ff3f6c; font-weight: bold;', 'color: #10b981; font-weight: bold;', {
    ...payload,
    timestamp,
    sessionId: 'mock-session-123'
  });
};
