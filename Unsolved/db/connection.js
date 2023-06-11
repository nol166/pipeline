require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;

exports.client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// create index on imdb.rating
// create index on awards.wins
// create index on rated
// create index on genres
// create index on year
// create index on boxOffice
// create index on metacritic
// create index on title

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
