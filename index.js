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
  console.log("drivers",JSON.stringify(drivers));
  console.log("Matching",key, value);
  let result = drivers.filter ( function (driver) {
    console.log("cb driver",driver,"key",driver[key]);
    console.log("cb result",(driver[key] === value));
    return driver[key] === value
  });
  console.log("result",result);
  return result;
}
