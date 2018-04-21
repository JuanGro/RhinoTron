/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function buildTailStringPos(motorcycle_position_x, motorcycle_position_y, motorcycle_position_z) {
    string =
    motorcycle_position_x.toFixed(decimals_to_check).toString().concat(
    "x",
    motorcycle_position_y.toFixed(decimals_to_check).toString(),
    "y",
    motorcycle_position_z.toFixed(decimals_to_check).toString(),
    "z");
    return string;
}