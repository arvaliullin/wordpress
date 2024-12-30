import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/login/', (req, res) => {
  res.send('itmo282614');
});

app.post('/render/', (req, res) => {
  const { random2, random3 } = req.body;
  const templateAddr = req.query.addr;

  http.get(templateAddr, (response) => {
    let data = '';
    response.on('data', chunk => {
      data += chunk;
    });
    response.on('end', () => {
      const compiledHTML = data.replace('#{random2}', random2).replace('#{random3}', random3);
      res.send(compiledHTML);
    });
  }).on('error', (err) => {
    res.status(500).send(`Error: ${err.message}`);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
