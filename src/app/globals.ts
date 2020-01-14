const localHostName = 'dell.eyeframe.test';
const localProtocol = 'http:';
const hostname = 'hacktech.devfra.com';
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
