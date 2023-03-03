// checking reverse string

const revString = (stg) => {
  if (stg.length > 0 && stg.length <= 10) {
    return stg.split("").reverse().join("");
  } else {
    throw new Error("string length out of bounds");
  }
};

module.exports = revString;
