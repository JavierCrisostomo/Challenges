/*
Problem Statement:
In the JavaScript file, write a program to perform a GET request on the route 
https://coderbyte.com/api/challenges/json/age-counting which contains a data key
 and the value is a string which contains items in the format: key=STRING, age=INTEGER. 
Your goal is to count how many items exist that have an age equal to or greater than 50,
and print this final value.

Example Input
  { "data": "key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47" }

Example Output
  2
*/
// Solution:
const https = require("https");

https.get("https://coderbyte.com/api/challenges/json/age-counting", (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    const jsonData = JSON.parse(data);
    const items = jsonData.data.split(", ");

    const count = items
      .filter((item) => item.includes("age="))
      .map((item) => item.split("=")[1])
      .filter((age) => age >= 50).length;

    console.log(count);
  });
});
