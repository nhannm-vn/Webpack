// import "core-js/modules/es.object.values";
import sum from "./utils";
import "./styles/style.css";
import domHandler from "./dom";
import "./styles/style.scss";
console.log(sum(90, 10));

domHandler();

// ES6 Spread Operator
const person = { name: "Duoc" };
const personClone = { ...person };
console.log("personClone", personClone);

// ES7 Object.values
console.log("Object.values", Object.values(personClone));

// Promise Async Await
const handle = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });

const main = async () => {
  const value = await handle();
  console.log("Value", value);
};

main();
