/*
In the JavaScript file, write a program to first create a file in the
current directory with the name newFile.txt filled with any content.
Them, using exec, print to the console all the files in the current
directory so that they are in the following format: 
    FILENAME, FILENAME, --..., FILENAME
Example output:
    file.js, helloworld.txt, abc.txt
*/
// Solution:
const fs = require("fs");
const os = require("os");
const { exec } = require("child_process");

// Create a new file with some content
fs.writeFile("newFile.txt", "Hello, World!", (err) => {
  if (err) throw err;
  console.log("newFile.txt has been created.");

  // Check if the operating system is Windows or not
  const command = os.platform() === "win32" ? "dir /b" : "ls";
  // List all files in the current directory
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }

    // Format the output
    let files = stdout.split(os.EOL);
    files = files.filter((file) => file); // remove empty strings
    console.log(files.join(", "));
  });
});
