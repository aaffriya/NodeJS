// URL

var url = require("url");

const my_url = "https://docs.google.com/spreadsheets/d/1dM2GF3iqjxUvr385GXjBYq0U4EFfQQZQ9TpRZz6sA6w/edit#gid=0"
// url in string

const my_parse = url.parse(my_url, true);

console.log(my_parse);
console.log(my_parse.host);
console.log(my_parse.hostname);
console.log(my_parse.auth);
console.log(my_parse.protocol);
console.log(my_parse.search);
console.log(my_parse.slashes);
console.log(my_parse.href);

