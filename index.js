var express = require('express');
const app = express();
const port = 4000;
const fs = require('fs');
const axios = require('axios').default;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongo = require('mongodb').MongoClient;

app.set('view engine', 'pug');

var seatsArr = [];
var seatPerRow = 10;
var rows = 7;
var currentRow = 1;


/*while (rows-1) {
  rows--

  var seats = seatPerRow
  var currentSeat = 1
  var busy = Boolean(Math.round(Math.random()));
  while(currentSeat <= seats){
    let seat = {
      number: currentSeat,
      row: rows,
      busy: busy
    }
    currentSeat++
    seatsArr.push(seat)
  }
  
}
  

fs.writeFile('seat.json', JSON.stringify(seatsArr.reverse()), (err) => {
  if (err) console.log(err);
  else {
    console.log('successfully write');
  }
});*/

mongoose.connect('mongodb://localhost:27017/seat', {useNewUrlParser: true, useUnifiedTopology: true});



app.get('/', function (req, res) {
      res.render('cinema');
  });


app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})