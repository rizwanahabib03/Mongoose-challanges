
const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');

var url = "mongodb://localhost:27017/products";
var mongoose = require('mongoose');
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:  true});

var array = [];
var items = [];

var fruitSchema = new mongoose.Schema({
name : String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const apple = new Fruit({
    name : "Apple"
    console.log(name);
});

const mango = new Fruit({
    name: "Mango"
    console.log(name);
});

const orange = new Fruit({
    name : "Orange"
    console.log(name);
})

array.push(apple);
array.push(mango);
array.push(orange);

app.use(parser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){

    Fruit.find({}, function(err, foundfruits){
   res.render('index',{fruitlist: foundfruits});
    });
})

app.post('/', function(req, res){
    var fruitname = req.body.fruits;
  
    const fruit = new Fruit({
        name : fruitname,
  
    })
    fruit.save();
    items.push(fruitname);
    res.redirect('/');
})

app.listen(port, function(req, res){
    console.log("server is up and running on port " + port );
})
