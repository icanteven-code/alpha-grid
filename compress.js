const zlib = require('zlib')
const fs = require('fs');
const gzip = zlib.createGzip();
const brotli = zlib.createBrotliCompress();
const input = fs.createReadStream('./dist/agrid.css');

const gzipOutput = fs.createWriteStream('./dist/agrid.css.gz');
const brotliOutput = fs.createWriteStream('./dist/agrid.css.br');

input.pipe(gzip).pipe(gzipOutput);
input.pipe(brotli).pipe(brotliOutput);

const sassPath = './src/agrid/agrid.scss';
const sassPathBuild = './dist/agrid.scss';
fs.copyFile(sassPath, sassPathBuild, (err) => {if (err) throw err;});