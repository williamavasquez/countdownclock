// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

var Timeremaining

function startTimer(duration) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    Timeremaining = timer

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

//Cmin is how many minutes to coutdown (should be in minutes)

var Cmin = 60;
var Cseconds = Cmin * 60
startTimer(Cseconds);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/", function(req, res) {
  res.send("Home!")
});

// Routes
// ===========================================================
app.get("/remainingTime", function(req, res) {
  let y = {timeLeft: Timeremaining}
  res.json(y)
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
