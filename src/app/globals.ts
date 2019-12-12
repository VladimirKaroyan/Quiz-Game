const localHostName = 'dell.eyeframe.test';
const localProtocol = 'http:';
const hostname = window.location.hostname;
const protocol = window.location.hostname;
const getHostName = () => {
  return (window.location.hostname === 'localhost') ? localHostName : hostname;
};
const getProtocol = () => {
  return (window.location.hostname === 'localhost') ? localProtocol : protocol;
};

export const globals = {
  getHostName,
  getProtocol
};
