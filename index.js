const express = require('express');
const path = require('path')
// const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname,'./index.html'));
})

// app.get('/game', (req, res) => {
//     res.sendFile(path.join(__dirname,'./index.html'));

// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})