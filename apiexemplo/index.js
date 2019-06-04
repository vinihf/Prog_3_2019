var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/par/:n', function (req, res) {
    var result = false;
    if (parseInt(req.params.n)%2==0){
        var result = true;
    }
    obj = {'number':req.params.n,"par":result};
    myObj = JSON.stringify(obj);
    res.type("json").send(myObj);
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port 8080!');
});