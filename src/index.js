/* ******************************** */
/*                Variables generales                */
/* ******************************** */
const app = require('./server').app;
const db = require('./database');
require('colors');
/* ******************************** */
/*                server                */
/* ******************************** */

app.listen(app.get('port'), () => {
  console.log('server on port'.bgGreen, app.get('port').bgGreen);
});
