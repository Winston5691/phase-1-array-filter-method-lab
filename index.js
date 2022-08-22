// Code your solution here

let findMatching = (listOfDrivers, searchedDriver) => {
    return listOfDrivers.filter((driverName) => {
      return driverName.toLowerCase() === searchedDriver.toLowerCase();
    });
  };
  
  let fuzzyMatch = (listOfDrivers, matchingLetters) => {
    return listOfDrivers.filter((driverName) => {
      return driverName.substring(0, 2) === matchingLetters;
    });
  };
  
  let matchName = (listOfDrivers, searchedDriver) => {
    return listOfDrivers.filter((driverName) => {
      return driverName.name === searchedDriver;
    });
  };
