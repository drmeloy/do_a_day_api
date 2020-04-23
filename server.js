
const app = require('./lib/app');

app.listen(7891, () => {
  console.log('Server running on port 7891');
});

/*
  Routes:
  / --> res = this is working
    Auth:
      /signup --> POST = user
      /login --> POST = success/fail
      /logout --> POST = success/fail
  /profile/:userId --> GET = user
*/