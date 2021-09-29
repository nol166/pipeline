const express = require('express');
const app = express();
const routes = require('./routes');
const { client } = require('./db/connection');

client.connect((err) =>
  err ? console.log(err) : console.log('Connected to MongoDB Atlas 🚀')
);

client.on('open', () => {
  app.use(express.json());
  app.use(routes);
  app.listen(3000, () => console.log('Server running on port 3000 🚀'));
});
