const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return employeeName === undefined ? {} : employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
}

module.exports = getEmployeeByName;
