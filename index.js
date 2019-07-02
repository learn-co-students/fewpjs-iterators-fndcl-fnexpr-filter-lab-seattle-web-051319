// Code your solution here

function findMatching(drivers, string) {
  const match = drivers.filter(driver => {
    return driver === string || driver === string.toLowerCase();
  })
  return match
}

function fuzzyMatch(drivers, string) {
  const match = drivers.filter(driver => {
    for (let letter of string) {
      return driver.charAt(0) === letter
    }
  })
  return match
}

function matchName(drivers, string) {
  const match = drivers.filter(driver => {
    return driver.name === string
  })
  return match
}
