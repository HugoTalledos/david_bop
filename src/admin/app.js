
const urlParams = new URLSearchParams(window.location.search);
const user = urlParams.get('user');
const token = urlParams.get('token');
if (user && token ) {
  urlParams.delete('user');
  window.history.replaceState(null, '', '?' + urlParams.toString());
  urlParams.delete('token');
  window.history.replaceState(null, '', '?' + urlParams.toString());
  window.location.reload;
}
const config = {
  
};

const bootstrap = (app) => {

};

export default {
  config,
  bootstrap,
};
