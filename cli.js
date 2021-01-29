#!/usr/bin/env node

var dir = require('./App');
(async () => {
var data = await dir(process.argv[2])
data.map(dirs => console.log(dirs))
})();