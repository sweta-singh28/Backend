//file system module

const fs = require("fs");

//creating a file
//fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
  //  if(err)throw err;
    //console.log("The file has been saved!");
//});

//reading message from a file
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});