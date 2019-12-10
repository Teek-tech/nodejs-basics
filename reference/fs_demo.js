const fs = require('fs');
const path = require('path');

//create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
//   if(err) throw err;
//   console.log("New folder created");
// });

//create and write file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "This is a new beginning", err =>{
//   if(err) throw err;
//   console.log("New file created and stuff written on it...");
//
//   fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " NodeJs is the best!", err =>{
//     if(err) throw err;
//     console.log("New file created and stuff written on it...");
//   });
// });

// //read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) =>{
//   if(err) throw err;
//   console.log(data);
// });

//rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
 (err, data) =>{
  if(err) throw err;
  console.log('File renamed');
});
