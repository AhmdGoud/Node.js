// modules are something like utilites

// -- built in modules -- //
import os from "node:os";
console.log(os.platform());
console.log(os.arch());

import fs from "node:fs";
const mdFileContent = fs.readFileSync("./README.md", "utf-8");
console.log(mdFileContent);

// in ES Mosules (ESM) we use import
// if we want use require like => const fs = require("node:fs") we name file.cjs
// which means common JS module, and if it wasnt ES module we name file.mjs

// -- local or user-defined modules -- //
import logger from "./logger.js";
logger("testing the logger function");

// console.log(require.cache);
// This ONLY works in Node.js (CommonJS)
// require.cache is an object that stores already-loaded modules.
// When you require('./logger.js'), Node checks this cache first
// if the file was already imported, it returns the cached version instead of re-executing the file.

// -- fileSystem -- //
// there is Synchronous (Sync) and Asynchronous (Async) in fileSystem which means
// blocking and non-blocking

// read and write streams
const readStream = fs.createReadStream("./stream.txt", "utf8");
const writeSream = fs.createWriteStream("./sreamed.txt", "utf8");

readStream.on("data", (chunk) => {
  // chunk is a piece of data its default size 64B and can be edited
  console.log("the data from read stream is", chunk);
  writeSream.write("the data streamed from read is ");
  writeSream.write(chunk);
  // writeSream.write(`${("the data streamed from read is", chunk)}`); => this wont work
  // it will ONLY write the last option which is chunk
});

// -- npm -- //
// npm install => downloads all the project dependencies in the package.json
// npm init --yes => initialize the package.json file with yes to all Qs
// i --save-dev => to save it to devDependencies which is not in the project core

// to create a command we write it in scripts in package.json as key-value
// then we use it as npm run "the command key we created"
