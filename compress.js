const zlib = require('zlib')
const fs = require('fs');
const gzip = zlib.createGzip();
const brotli = zlib.createBrotliCompress();
const input = fs.createReadStream('./dist/agrid.min.css');

const gzipOutput = fs.createWriteStream('./dist/agrid.min.css.gz');
const brotliOutput = fs.createWriteStream('./dist/agrid.min.css.br');

input.pipe(gzip).pipe(gzipOutput);
input.pipe(brotli).pipe(brotliOutput);