const router = require('express').Router();
const { client } = require('../../db/connection');

const movies = client.db('sample_mflix').collection('movies');

// Find all movies from mongodb
router.get('/:page?', (req, res) => {
  let pageNumber = req.params.page || 1;
  movies
    .find({})
    .limit(20)
    .skip(pageNumber * 20)
    .toArray((err, results) =>
      err ? res.status(500).send(err) : res.status(200).send(results)
    );
});

// Find all movies using the query parameter
router.get('/year/:year'),
  (req, res) => {
    const { year } = req.params;
    movies
      .find({ year: parseInt(year, 10) })
      .limit(20)
      .toArray((err, results) =>
        err ? res.status(500).send(err) : res.status(200).send(results)
      );
  };

// Route that will accept an aggregation query as the body and return the results sorted by box office
router.get('/best/:page', (req, res) => {
  const { page } = req.params;
  console.log(
    '🚀 - file: movieRoutes.js - line 31 - router.get - pageNumber',
    page
  );

  const pipeline = [
    {
      $match: {
        'imdb.rating': { $gte: 7, $lte: 10 },
        'awards.wins': { $gte: 10 },
        rated: { $nin: ['G', 'PG'] },
        genres: { $in: ['Action', 'Comedy'] },
        year: { $gte: new Date().getFullYear() - 10 },
        boxOffice: { $ne: parseFloat(100) },
      },
    },
    {
      $skip: page * 10,
    },
    {
      $limit: 10,
    },
  ];

  movies
    .aggregate(pipeline)
    .toArray((err, results) =>
      err ? res.status(500).send(err) : res.status(200).send(results)
    );
});

module.exports = router;
