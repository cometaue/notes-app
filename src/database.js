const mongoose = require('mongoose');
require('colors');
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('database connected'.bgYellow);
  })
  .catch((err) => console.log(err));

module.exports = mongoose;
