require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
console.log('🚀 - file: connection.js:4 - uri:', uri);

exports.client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
