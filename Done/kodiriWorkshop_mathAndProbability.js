    
    let iterations = 1000000;

    function calculateProbability(names) {
        let totals = calculateTotals(names);
        return getProbabilitiesFromTotals(names, totals);    
    }

    function calculateTotals(names) {
        let totals = {};
        for(let i = 0; i < iterations; i++) {
            let randomName = getRandomName(names);
            if(totals[randomName] === undefined) {
                totals[randomName] = 0;
            }
            totals[randomName]++;
        }
        return totals;
    }

    function getProbabilitiesFromTotals(names, totals) {
        return Object.keys(totals).reduce((acc, name) => {
            let probability = (totals[name] / iterations) * 100;
            acc[name] = Number(probability.toFixed(2));
            return acc;
        }, {});
    }

    function getRandomName(names) {
        let randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }

    calculateProbability(['Donald', 'Kim', 'Boris', 'Theresa']);
