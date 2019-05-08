// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

//Setup Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));


//arrays reservations get pushed too//
var tableList = [];

var waitList = [];

// GET =============================================================
app.get("/", function(req, res) {
    // res.send("Welcome to our  home page!")
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/tables", function(req, res) {
    // res.send("See we only have 5 tables")
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
  app.get("/reservation", function(req, res) {
    // res.send("Make a reservation")
    res.sendFile(path.join(__dirname, "reservation.html"));
  });

app.get("/api/tablelist", function(req, res){

return res.json(tableList);

});

app.get("/api/waitlist", function(req, res){

return res.json(waitList);

});
  
// POST =============================================================
app.post("/api/tables", function(req, res){

    var newTable = req.body;

    console.log(tableList);

    console.log(waitList);

    tableList.push(newTable);
    if (tableList.length > 5){
        waitList.push(newTable);


    }

    
});

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});