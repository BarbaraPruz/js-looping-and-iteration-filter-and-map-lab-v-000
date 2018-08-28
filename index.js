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
  console.log("drivers",drivers);
  console.log("matchobj",matchObject);
  console.log("Matching",key, value);
  return drivers.map ( function (driver) {
    console.log("cb driver",driver,"key",driver[key]);
    driver[key] === value
  });
}
