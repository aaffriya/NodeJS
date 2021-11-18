// Create file
var fs = require("fs");

fs.writeFile("8_Nov.txt", "I am working on file system in Node JS",err=>{
    console.log("File Saved!");
});


// Update File
fs.appendFile("8_Nov.txt", " Appended data by appendFile methods",err=>{
        console.log("File Updated");
});

// Rename file
fs.rename('8_NOV.txt', 'Bhupender.txt', err => {
      console.log("Renamed");
})

//  ReadFile
fs.readFile("Bhupender.txt","utf8",(err,data)=>{
    console.log(data);
})

// testing Without Sync

console.log("In the end of File!");


// Testing with Sync
const data = fs.readFileSync("Bhupender.txt") ;
console.log(data.toString());

// Delete File
fs.unlink("Bhupender.txt",err=>{
    console.log("File Deleted")
})



