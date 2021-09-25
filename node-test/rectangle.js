/**
* A simple node module demonstration.
* Rectangle module is used in test_rectangle and is imported as a module
*
*/
module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() => callback(new Error("Rectangle is not valid for the given length l = " +
            x + " and breadth b = " + y),
            null), 2000);
    } else {
        setTimeout(()=> callback(null,{
            perimeter:() => (2*(x+y)),
            area:() => (x*y)
        }),2000);
    }
}