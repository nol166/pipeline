const express = require('express');
const app = express();
const routes = require('./routes');
const { client } = require('./db/connection');
const port = process.env.PORT || 3000;

client.on('open', () => {
  app.use(express.json());
  app.use(routes);
  app.listen(port, () => console.log('Server running on port 3000 🚀'));
});
