const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

// Serve static files....
app.use(express.static(__dirname + '/dist/QuizGame'));
app.use(cors);
// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/QuizGame/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
