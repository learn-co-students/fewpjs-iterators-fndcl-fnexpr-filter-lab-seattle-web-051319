function findMatching(arr, str) {
    return arr.filter(name => name.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(arr, str) {
    let i = str.length;
    return arr.filter(name => name.slice(0,i) === str);
}

function matchName(arr, str) {
    return arr.filter(person => person.name === str);
}