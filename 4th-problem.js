// // Capitalize check problem $4....

const Capitalize = (string) => {
  const array = string.split("");
  array[0] = array[0].toUpperCase();
  return array.join("");
};

module.exports = Capitalize;
