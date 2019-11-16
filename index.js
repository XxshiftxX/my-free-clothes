const express = require('express');

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => res.end('<h1>2019 11 16</h1><img src="./clothes.png">'));

app.listen(80, () => console.log('서버시작'));