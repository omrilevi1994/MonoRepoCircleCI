const { ross } = require('../packages/ross');

console.log(ross());

const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => res.send(ross()));

app.listen(port, () => console.log(`Example app listening on port Change ${port}!`));