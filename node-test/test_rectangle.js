var rect = require('./rectangle');

function solveRectangle(l,b){
    rect(l,b, (err,rectangle)=>{
        if(err){
            console.log("ERROR:",err.message);
        }
        else{
            console.log("Area and perimeter is:"+rectangle.area() + " and "+rectangle.perimeter());
        }
    });
}

solveRectangle(3,4);
solveRectangle(7,5);
solveRectangle(-1,5);
solveRectangle(0,9);