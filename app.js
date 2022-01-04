const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {


  var today = new Date();
  var currentDay = today.getDay();
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (currentDay === 0 || currentDay === 6) {
    var actSuggest = "It's the weekend, Chillout!!"

  } else {
    actSuggest = "Get Back to Work You!!"
    console.log("weekendDay")
  }

  res.render('list', {
    currentDay: daysOfWeek[currentDay],
    activitySuggestion: actSuggest
  });
  console.log(currentDay);

});

app.listen(3000, () => {
  console.log('Server is listening on Port 3000');
});