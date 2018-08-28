// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter ( driver => driver.revenue > revenue );
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers,revenue).map ( driver => driver.name);
}

function exactMatch (drivers, matchObject) {
  key = Object.keys(matchObject)[0];
  value = matchObject[key];
  returning drivers.filter ( driver => driver[key] === value );
}

