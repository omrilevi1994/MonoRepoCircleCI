const { joe } = require('../packages/joe');

const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => res.send(joe()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));