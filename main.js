// built in modules
import os from "node:os";
console.log(os.platform());

import fs from "node:fs";
const mdFileContent = fs.readFileSync("./test.txt", "utf-8");
console.log(mdFileContent);

// in ES Mosules (ESM) we use import
// if we want use require like => const fs = require("node:fs") we name file.cjs
// which means common JS module, and if it wasnt ES module we name file.mjs

// local modules
import logger from "./logger.js";
logger("testing the logger function");

// modules are something like utilites

console.log(require.cache);
// This ONLY works in Node.js (CommonJS)
// require.cache is an object that stores already-loaded modules.
// When you require('./logger.js'), Node checks this cache first — if the file was already imported,
// it returns the cached version instead of re-executing the file.
