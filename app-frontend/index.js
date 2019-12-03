const { ross } = require('../packages/ross');
const { monica } = require('../packages/monica');
const { chandler } = require('../packages/chandler');
const { rachel } = require('../packages/rachel');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send(`${ross()} ${monica()} ${rachel()} ${chandler()} `));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));