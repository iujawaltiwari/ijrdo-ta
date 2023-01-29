const DB = require("./journal.json");
async function checkjournal(data, country, time) {
  return await new Promise((resolve, reject) => {
    data.map((ele) => {
      setTimeout(() => {
        if (ele.country === country) {
          resolve(`Auther name ${ele.name}`);
        }
      }, time);
    });
    data.map((ele) => {
      setTimeout(() => {
        if (ele.country !== country) {
          reject("not found");
        }
      }, time);
    });
  });
}
let a = checkjournal(DB, "Americ", 1000);
a.then((value) => console.log(value)).catch((error) => {
  console.log(error);
});
let b = checkjournal(DB, "Rome", 3000);
b.then((value) => console.log(value)).catch((error) => {
  console.log(error);
});
let c = checkjournal(DB, "Norway", 5000);
c.then((value) => console.log(value)).catch((error) => {
  console.log(error);
});
let d = checkjournal(DB, "Paris", 7000);
d.then((value) => console.log(value)).catch((error) => {
  console.log(error);
});

