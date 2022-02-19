const zlib = require('zlib')
const fs = require('fs');
const gzip = zlib.createGzip();
const brotli = zlib.createBrotliCompress();
const input = fs.createReadStream('./build/agrid.css');

const gzipOutput = fs.createWriteStream('./build/agrid.css.gz');
const brotliOutput = fs.createWriteStream('./build/agrid.css.br');

input.pipe(gzip).pipe(gzipOutput);
input.pipe(brotli).pipe(brotliOutput);