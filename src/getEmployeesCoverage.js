const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAllEmployees() {
  return employees
    .map((item) => ({
      id: item.id,
      fullName: `${item.firstName} ${item.lastName}`,
      species: item.responsibleFor.map((element) =>
        species.find(({ id }) => id === element).name),
      locations: item.responsibleFor.map((animalId) =>
        species.find(({ id }) => id === animalId).location),
    }));
}

function getEmployee(employee) {
  const allEmployees = getAllEmployees();
  const employeeData = allEmployees
    .find((item) => item.fullName.includes(employee.name) || item.id === employee.id);
  if (!employeeData) {
    throw new Error('Informações inválidas');
  }
  return employeeData;
}

function getEmployeesCoverage(employee) {
  if (employee && (employee.name || employee.id)) {
    return getEmployee(employee);
  }
  return getAllEmployees();
}

module.exports = getEmployeesCoverage;
