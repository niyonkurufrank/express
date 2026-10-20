import mongoose from "mongoose"
import dotenv from "dotenv"
import express from "express"

dotenv.config()

const app = express()

const db = process.env.DATABASE_URL
const port = process.env.port

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello World and neigbour'
  });
});

app.listen(port, () => {
  console.log(`this code is running on ${port}`);
});

mongoose.connect(db).then(()=>(
  console.log("Database successfuly connected")
)).catch((error)=>(
  console.log(`Fail to connect to database because: ${error}`)
))
