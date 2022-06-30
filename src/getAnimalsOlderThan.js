const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const bicho = data.species.filter((specie) => specie.name === animal)[0].residents;
  return bicho.every((idade) => idade.age >= age);
}
console.log(getAnimalsOlderThan('lions'));
module.exports = getAnimalsOlderThan;
