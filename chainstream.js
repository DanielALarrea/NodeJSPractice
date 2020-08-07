var fs = require("fs");
var zlib = require("zlib");

// Compress file
// fs.createReadStream('input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));

// console.log('File compressed');

// Decompress file
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log('File decompressed');