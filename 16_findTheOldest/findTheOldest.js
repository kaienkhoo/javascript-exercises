const findTheOldest = function(arr) {
    return arr.map((person) => {
        let personAge = person.yearOfDeath - person.yearOfBirth 
        if(personAge > age) {
            age = personAge
            name = person.name
        }
    })

};

// Do not edit below this line
module.exports = findTheOldest;
