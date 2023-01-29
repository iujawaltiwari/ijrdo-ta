const DB = require("./journal.json");

async function checkjournal(data, country, time) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = data.find((ele) => ele.country === country);
      if (found) {
        resolve(`Auther name ${found.name}`);
      } else {
        reject("not found");
      }
    }, time);
  });
}

const countries = ["America", "Rome", "Norway", "Paris"];

Promise.all(countries.map((country, i) => checkjournal(DB, country, (i + 1) * 1000)))
  .then((values) => {
    values.forEach((value) => console.log(value));
  })
  .catch((error) => {
    console.log(error);
  });