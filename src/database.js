const mongoose = require('mongoose');
require('colors');
mongoose
  .connect(
    'mongodb+srv://cometa:leyrealeya@cometa-awd1l.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log('database connected');
  })
  .catch((err) => console.log(err));

module.exports = mongoose;
