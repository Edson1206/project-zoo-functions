const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { responsibleFor } = employees.find((employeee) => employeee.id === id);
  const [firstOne] = responsibleFor;
  const findAnimals = data.species.find((specie) => specie.id === firstOne).residents;
  const oldestFirst = findAnimals.sort((a, b) => b.age - a.age);
  const [oldest] = oldestFirst;
  return [oldest.name, oldest.sex, oldest.age];
}

module.exports = getOldestFromFirstSpecies;
