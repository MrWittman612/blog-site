const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/blog';

module.exports = connectMongoDB => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('mongoDB connected');
    })
    .catch(err => {
      console.log(err);
    });
};

// module.exports = connectMongoDB;
