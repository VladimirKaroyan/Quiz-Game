const localHostName = 'dell.highattendance.loc';
const localProtocol = 'http:';
const hostname = window.location.hostname;
const protocol = window.location.protocol;
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
