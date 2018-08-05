function getDraculaCasualties(...points) {
    return points.reduce((total, value) => (total + value));
}

console.log(getDraculaCasualties(32,17,21));