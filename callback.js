var fs = require("fs");

// Receive data with block call
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());

// Receive data with non-block call/async function
fs.readFile('input.txt', function (err, data) {
    if (err) {
        console.error(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log("Program ended");