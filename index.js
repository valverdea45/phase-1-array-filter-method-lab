// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(function (element){
        return element.toLowerCase() === name.toLowerCase()
    })
};

function fuzzyMatch(drivers, nameLetters) {
    return drivers.filter(function (element){
        return element.slice(0,2) == nameLetters
    })
};

function matchName(drivers, property){
    return drivers.filter(function (element){
        return element.name === property
    })
}