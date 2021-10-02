const express = require('express');
const bodyParser = require('body-parser');

const dishRoute = express.Router();

dishRoute.use(bodyParser.json());

dishRoute.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
});

dishRoute.route('/:dishId')
.get((req,res,next)=>{
    res.end('Reached GET request: '+req.params.dishId);
})
.post((req,res,next)=>{
    res.end('Reached POST request:' + req.body.name + req.body.description);
})
.put((req,res,next)=>{
    res.end('PUT operation not supported');
    res.statusCode = 403;
})
.delete((req,res,next)=>{
    res.end('Reached DELETE method');
});

module.exports = dishRoute;