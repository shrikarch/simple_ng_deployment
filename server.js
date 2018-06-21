//other deps
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//Importing Mongoose library
const app = express();
const router = express.Router();

var port = process.env.PORT || 4000;
// var uri=process.env.URI;
//var uri = "mongodb://localhost/botInsights";
console.log("Application Environment : " + app.settings.env);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));
//Enabling CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Connecting to the MongoDB database 'test_for_db' running on 27017
// mongoose.connect("mongodb://shrikar:63916@ds131258.mlab.com:31258/minsights");
//enable the mongoose database uri for both testing and development
//import routes
app.use('/', function(req, res){
  res.sendFile(
    path.join(__dirname, 'dist/index.html')
  );
})

app.listen(port, ()=>{
  console.log("Server started on port: " + port);
});
