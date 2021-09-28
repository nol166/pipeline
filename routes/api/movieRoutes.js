const router = require('express').Router();
const { client } = require('../../client/client');

const movies = client.db('sample_mflix').collection('movies');

// Find all movies from mongodb
router.get('/', (req, res) => {
  movies
    .find({})
    .toArray((err, docs) =>
      err ? res.status(500).send(err) : res.status(200).send(docs)
    );
});

// Find all movies using the query parameter
router.get('/year/:year'),
  (req, res) => {
    const { year } = req.params;
    movies
      .find({ year: parseInt(year, 10) })
      .toArray((err, results) =>
        err ? res.status(500).send(err) : res.status(200).send(results)
      );
  };

// Route that will accept an aggregation query as the body and return the results sorted by box office
router.get('/best', (req, res) => {
  const pipeline = [
    {
      $match: {
        // between 7 and 10
        'imdb.rating': { $gte: 7, $lte: 10 },
        'awards.wins': { $gte: 10 },
        rated: { $nin: ['G', 'PG'] },
        genres: { $in: ['Action', 'Comedy'] },
        year: { $gte: new Date().getFullYear() - 10 },
        boxOffice: { $ne: parseFloat(100) },
      },
    },
  ];

  movies
    .aggregate(pipeline)
    .toArray((err, results) =>
      err ? res.status(500).send(err) : res.status(200).send(results)
    );
});

module.exports = router;
