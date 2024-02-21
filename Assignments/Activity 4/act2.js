//compress a file, decompress it and compare there sizes

const fs = require("fs");
const zlib = require("zlib");

// Compress the file
const readStream = fs.createReadStream("original.txt");
const writeStream = fs.createWriteStream("compressed.gz");
const gzip = zlib.createGzip();
readStream.pipe(gzip).pipe(writeStream);

writeStream.on("finish", () => {
  // Decompress the file
  const readStream2 = fs.createReadStream("compressed.gz");
  const writeStream2 = fs.createWriteStream("decompressed.txt");
  const gunzip = zlib.createGunzip();
  readStream2.pipe(gunzip).pipe(writeStream2);

  writeStream2.on("finish", () => {
    // Compare the sizes
    const originalSize = fs.statSync("original.txt").size;
    const compressedSize = fs.statSync("compressed.gz").size;
    const decompressedSize = fs.statSync("decompressed.txt").size;

    console.log(`Compressed size: ${originalSize}`);
    console.log(`Original size: ${compressedSize}`);
    console.log(`Decompressed size: ${decompressedSize}`);
  });
});