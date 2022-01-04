const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  var today = new Date();
  var currentDay = today.getDay();

  if (currentDay === 6 || 0) {
    res.write("<h1>Yay it's the weekend</h1>")
  } else {
    res.write("<h1>Boo! cant believe I have to work</h1>")
  }
  if (currentDay === 3) {
    res.write("it's Wednesday My Dudes!!!");
  }
  res.end();
  console.log(today);
  //res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Server is listening on Port 3000');
});