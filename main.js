// built in modules
import os from "node:os";
console.log(os.platform());

import fs from "node:fs";
const mdFileContent = fs.readFileSync("./test.txt", "utf-8");
console.log(mdFileContent);

// in ES Mosules (ESM) we use import
// if we want use require like => const fs = require("node:fs") we name file.cjs
// which mean common JS module
