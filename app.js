

const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');

var url = "mongodb://localhost:27017/products";
var mongoose = require('mongoose');
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:  true});

var personSchema = new mongoose.Schema({
name : String,
age: Number,
});

const People = mongoose.model('People', personSchema);

const Johnman = new People({
    name : "John",
    age: 37
    console.log(Jhonman.age);
});
Johnman.save(function (err, Jhonman) {
    if (err) return console.error(err);
   
  });


app.listen(port, function(req, res){
    console.log("server is up and running on port " + port );
})
