const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animalUndefined = species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return (acc);
    }, {});
    return animalUndefined;
  }
  const animals = species.find((element) => element.name === animal.specie).residents;
  if (animal.sex) {
    return animals.filter((specie) => specie.sex === animal.sex).length;
  }
  return animals.length;
}

module.exports = countAnimals;
