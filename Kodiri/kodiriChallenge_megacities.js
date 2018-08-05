// Return the city names if the population of the city exceeds 10 million people.

cities = [
    {
        name: 'London',
        population: '13842667'
    },
    {
        name: 'Berlin',
        population: '3567934'
    },
    {
        name: 'Paris',
        population: '12405426'
    }
    ]

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


// Use filter and map
cities = [
    {
        name: 'London',
        population: '13842667'
    },
    {
        name: 'Berlin',
        population: '3567934'
    },
    {
        name: 'Paris',
        population: '12405426'
    }
    ]

function getMegaCities () {
    return cities.filter(v => v.population >= 10000000)
                 .map(v => v.name)
}
console.log(getMegaCities(cities))


// Use reduce
cities = [
    {
        name: 'London',
        population: '13842667'
    },
    {
        name: 'Berlin',
        population: '3567934'
    },
    {
        name: 'Paris',
        population: '12405426'
    }
    ]

function getMegaCities () {
    return cities.reduce((total, item)=>{
        if (item.population >= 10000000){
            total.push(item.name)
        }
        return total
    }, [])
}
console.log(getMegaCities(cities))

//
function getMegaCities(cities) {
	return cities.reduce(
		(acc, cur)=>{
			if (cur.population >= 10000000){
				acc.push(cur.name)
			}
			return acc
		},[])
}