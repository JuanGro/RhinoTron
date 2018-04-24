/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function buildTailStringPos(motorcycle_position_x, motorcycle_position_y, motorcycle_position_z) {
    return Math.floor(motorcycle_position_x).toString().concat(
        "x",
        Math.floor(motorcycle_position_y).toString(),
        "y"
    );
}