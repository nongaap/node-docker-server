'use strict';

const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', function(req, res){
  res.send('Hello There\n');
});

app.listen(PORT, function(){
  console.log('Running on http://localhost:' + PORT);
});