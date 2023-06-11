const express = require('express');
const app = express();
const routes = require('./routes');
const { client } = require('./db/connection');
const port = process.env.PORT || 3000;

client.on('open', () => {
  console.log('Connected to MongoDB Atlas 🚀');
  app.use(express.json());
  app.use(routes);
  app.listen(port, () =>
    console.log('Server running on port http://localhost:3000 🚀')
  );
});
