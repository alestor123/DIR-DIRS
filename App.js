var fs = require('fs'),
path = require('path'),
read = require('util').promisify(fs.readdir),
dirss = [];
module.exports = async pathname => {
var data = await read(pathname);
data.map(dirs => {if(fs.statSync(dirs).isDirectory()) dirss.push(dirs)})
return dirss
}