const port = 4000

import express from "express"

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`this code is running on ${port}`);
});