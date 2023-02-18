const express = require('express');
const cors = require('cors');
const fetch = import('node-fetch');

const app = express();

app.use(cors());

app.get('/proxy', async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send({ error: 'url parameter is missing' });
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3005, () => {
  console.log('CORS proxy server is running');
});
