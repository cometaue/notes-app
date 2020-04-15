/* ******************************** */
/*                Variables generales                */
/* ******************************** */
const app = require('./server').app;
const db = require('./database');
/* ******************************** */
/*                server                */
/* ******************************** */

app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
