// Code your solution here
function findMatching(drivers, string){
    let match = drivers.filter(driver => {
        return driver === string || driver === string.toLowerCase()
    })
    return match
}

function fuzzyMatch(drivers, string){
    let match = drivers.filter(drivers => {
        for(let letter of string)
        return drivers.charAt(0) === letter
    })
    return match
}

function matchName(drivers, string){
    let match = drivers.filter(drivers => {
        return drivers.name === string
    })
    return match
}