const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.all('/dishes',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
});

app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('Reached GET request: '+req.params.dishId);
});

app.post('/dishes/:dishId',(req,res,next)=>{
    res.end('Reached POST request:' + req.body.name + req.body.description);
});

app.put('/dishes/:dishId',(req,res,next)=>{
    res.end('PUT operation not supported');
    res.statusCode = 403;
});

app.delete('/dishes',(req,res,next)=>{
    res.end('Reached DELETE method');
});

app.use((req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () =>{
    console.log(`Started server at http://${hostname}:${port}`);
});