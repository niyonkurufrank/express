const port = 4000

import express from "express"

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello World and neigbour'
  });
});

app.listen(port, () => {
  console.log(`this code is running on ${port}`);
});