require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;

exports.client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.log(err);
  }

  console.log('Connected successfully to server');
  const db = client.db('sample_mflix');
  const movies = db.collection('movies');
  db.getCollection('movies').createIndex({ 'imdb.rating': 1 });
  db.getCollection('movies').createIndex({ 'awards.wins': 1 });
  // perform actions on the collection object
  client.close();
});
