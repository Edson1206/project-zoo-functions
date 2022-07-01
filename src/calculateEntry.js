const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach(({ age }) => {
    if (age < 18) obj.child += 1;
    else if (age < 50 && age >= 18) obj.adult += 1;
    else obj.senior += 1;
  });
  return obj;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) return 0;
  const ages = countEntrants(entrants);
  const { child, adult, senior } = ages;
  const priceChild = data.prices.child;
  const priceAdult = data.prices.adult;
  const priceSenior = data.prices.senior;
  const totalValue = (child * priceChild) + (adult * priceAdult) + (senior * priceSenior);
  return totalValue;
}

module.exports = { calculateEntry, countEntrants };
