var express = require('express');
var app = express();
var fs = require('fs');
//-----------Create data-----------------
let data = { "name": "Aaron", "job": "professor" };

//respond when a GET request is made to the homepage (index) 
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function (req, res) {
    res.send('This is from the root directory')
});


app.listen(3000);
//----------WriteFile--------------------

fs.writeFile("data.txt", JSON.stringify(data), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
//----------ReadFile--------------------
app.get('/file', function (req, res) {
    fs.readFile('data.txt', 'utf8', function (err, data) {
        if (err) throw err;
        console.log("Data", data);
        let new_data = JSON.parse(data);
        console.log(new_data.job)
        res.send(new_data);
    });
    //-----------------
});