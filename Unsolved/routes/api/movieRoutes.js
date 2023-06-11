const router = require('express').Router();
const { client } = require('../../db/connection');

const movies = client.db('sample_mflix').collection('movies');

router.get('/best/:page', async (req, res) => {
  const { page } = req.params;

  const pipeline = [
    {
      $match: {
        'imdb.rating': { $gte: 7, $lte: 10 },
        'awards.wins': { $gte: 10 },
        rated: { $nin: ['G', 'PG'] },
        // TODO: Match movies that have a release year within the last decade
      },
    },
    {
      $project: {
        // TODO: Exclude _id field, but include the title, year, rated, poster, fullplot, imdb, and metacritic fields
      },
    },
    {
      $sort: {
        // TODO: Sort by metacritic score in descending order
      },
    },
    {
      $skip: page * 20,
    },
    {
      $limit: 20,
    },
  ];

  const result = await movies.aggregate(pipeline).toArray();
  // if response is okay, send the results
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(500).send('Error');
  }
});

module.exports = router;
