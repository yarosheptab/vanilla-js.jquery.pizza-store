// var livereload = require('livereload');

const express = require('express');
const app = express();

app.use(express.static('./'));
app.listen(3005, () => console.log("good"));


