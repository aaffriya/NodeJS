// PATH

var path = require("path");

var my_path = "D:\Bhupender\OneDrive\Code\Agami\path.js" // path of file or folder

console.log(path.parse(my_path)); //show file info

//and all function
console.log(path.dirname(my_path));
console.log(path.basename(my_path));
console.log(path.extname(my_path));
