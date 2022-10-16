const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Db = require('mongodb/lib/db');
app.use(bodyParser.urlencoded({extended: true}));

const MongoClient = require('mongodb').MongoClient;


var db;
MongoClient.connect('mongodb+srv://hannalee:hannalee@cluster0.znocka6.mongodb.net/todoapp?retryWrites=true&w=majority', function(에러, client){
    if (에러) return console.log(에러)
    db = client.db('todoapp');

    db.collection('post').insertOne({이름 : 'John', 나이 : 20}, function(에러, 결과){
      console.log('저장완료');
    });

    app.listen('8080', function(){
      console.log('listening on 8080')
    });
  })




app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/write', function(req, res){
    res.sendFile(__dirname + '/write.html')
});

app.post('/add',function(req, res){
    res.send('전송완료');
    console.log(req.body.title);
    console.log(req.body.date);
    db.collection('post').insertOne({제목 : req.body.title, 날짜: req.body.date}, function(에러, 결과){
      console.log('저장완료');
    });

});
