const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } const isManaged = employees.filter((employee) => employee.managers.includes(managerId));
  return isManaged.map((name) => `${name.firstName} ${name.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
