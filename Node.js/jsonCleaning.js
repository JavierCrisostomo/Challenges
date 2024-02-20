/*
Problem Statement:
I want to remove all keys that have values of N/A, - or an empty string. 
If one of these values appear in the array the I want to remove that single 
item from the array. 
So for instance my example output is this:
  {"name":{"first":"Daniel","middle":"N/A","last":"Smith"},"age":45}
The output I expect is this:
    {"name":{"first":"Daniel","last":"Smith"},"age":45}
*/
// Solution:
const https = require("https");

function del(obj) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === "N/A" || obj[key] === "" || obj[key] === "-") {
      delete obj[key];
    } else if (Array.isArray(obj[key])) {
      let n = obj[key].length;
      let arr = [];
      for (let i = 0; i < n; i++) {
        if (obj[key][i] === "" || obj[key][i] === "-" || obj[key][i] === "N/A")
          continue;
        let p = [obj[key][i]];

        if (typeof p[0] === "object") {
          p[0] = del(p[0]);
        }

        arr = arr.concat(p);
      }
      obj[key] = arr;
    } else if (typeof obj[key] === "object") {
      obj[key] = del(obj[key]);
    }
  });

  return obj;
}

https.get("https://coderbyte.com/api/challenges/json/json-cleaning", (resp) => {
  resp.on("data", (a) => {
    let obj = JSON.parse(a.toString());
    obj = del(obj);
    console.log(JSON.stringify(obj));
  });
});
