import API from './index';

const test = new API('https://beta.demo-kunde.de', 'LSTR', '12345678');

test.checkAuth()
  .then(console.log)
  .catch(console.log);

