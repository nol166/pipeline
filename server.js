// dot env
require('dotenv').config();

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  const collection = client.db('test').collection('devices');
  // perform actions on the collection object
  client.close();
});
