#!/usr/bin/env node
/*****************************************************************
 * Typescript Express Starter
 * 2022.04.24~ 🎮
 * Made By Ritesh Singh
 * https://github.com/riteshsingh1/ts-express-starter
 *****************************************************************/

const path = require("path");
const starter = require("../lib/starter");
const destination = getDest(process.argv[2]);

function getDest(destFolder = "typescript-express-starter") {
  return path.join(process.cwd(), destFolder);
}

starter(destination);
