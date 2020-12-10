import API from './index';

const test = new API('https://tickets.visoma.de', 'LSTR', ']Y2Q5rHzWk3R1HU6PFiB65ku8Gt&FeZfG6\\A:~%]N9(\\XPpRW(c@oc%y]1XI');

test.checkAuth()
  .then(console.log)
  .catch(console.log);

