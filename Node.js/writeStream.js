/*
Problem Statement:
In the JavaScript file, write a program to perform a GET request on the route 
https://coderbyte.com/api/challenges/json/age-counting which contains a data key 
and the value is a string which contains items in the format: 
key=STRING, age=INTEGER. Your goal is to count how many items exist that have an
age equal to 32. Then you should create a write stream to a file called output.txt
and the contents should be the key values (from the json) each on a separate line 
in the order they appeared in the json file (the file should end with a newline 
character on its own line). Finally, then output the SHA1 hash of the file.

Example Input
 {
  "data": "key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"
 }

File Contents (output.txt)
    IAfpK
    9snd2
Example Output
    7caa78c7180ea52e5193d2b4c22e5e8a9e03b486
*/
// Solution:
const https = require("https");
const fs = require("fs");
const crypto = require("crypto");

https
  .get("https://coderbyte.com/api/challenges/json/age-counting", (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      const jsonData = JSON.parse(data);
      const items = jsonData.data.split(", ");
      const keys = [];

      for (let i = 0; i < items.length; i += 2) {
        const key = items[i].split("=")[1];
        const age = parseInt(items[i + 1].split("=")[1], 10);

        if (!isNaN(age) && age === 32) {
          keys.push(key);
        }
      }

      fs.writeFile("output.txt", keys.join("\n") + "\n", (err) => {
        if (err) throw err;

        const fileBuffer = fs.readFileSync("output.txt");
        const hashSum = crypto.createHash("sha1");
        hashSum.update(fileBuffer);

        const hex = hashSum.digest("hex");
        console.log(hex);
      });
    });
  })
  .on("error", (err) => {
    console.error(`GET request error: ${err.message}`);
  });
