const express = require('express');
const parser = require('body-parser')
const path = require('path')
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors({
  "Access-Control-Allow-Origin": 'http://localhost:3000',
  "Access-Control-Allow-Methods": "POST",
  "Access-Control-Allow-Headers": "Content-Type"
}));

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './static')));

app.listen(PORT, () => console.log(`Connected to PORT: ${PORT}`));