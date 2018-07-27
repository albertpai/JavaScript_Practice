// Return the city names if the population of the city exceeds 10 million people.

cities = [
    {
        name: 'London',
        population: 1000000000000000000
    },
    {
        name: 'Berlin',
        population: 200
    }]

// Use traditional functions
function getMegaCities(cities) {
    var mega = [];
    cities.filter(function (item) {
        return item.population >= 10000000
    })
        .forEach(function (city) {
            return mega.push(city.name)
        })
    return mega
}

console.log(getMegaCities(cities))


// Use arrow functions
function getMegaCities(cities) {
    var mega = [];
    cities.filter(item => item.population >= 10000000)
        .forEach(city => mega.push(city.name));
    return mega
}

console.log(getMegaCities(cities))