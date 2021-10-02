const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRoute = require('./routes/router');

const dishRouter = require('./routes/router');

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/dishes',dishRoute);

app.use((req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () =>{
    console.log(`Started server at http://${hostname}:${port}`);
});