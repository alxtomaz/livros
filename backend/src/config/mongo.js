const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/local');

mongoose.connection.on('connected', () => {
    console.log('Mongoose está conectado ao MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Erro na conexão com o MongoDB:', err);
  });

module.exports = mongoose;