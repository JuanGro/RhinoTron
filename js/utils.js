/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function buildTailStringPos(
    motorcycle_position_x,
    motorcycle_position_y,
    motorcycle_position_z
) {
    decimals_to_check = 0;
    return motorcycle_position_x.toFixed(decimals_to_check).toString().concat(
        "x",
        motorcycle_position_y.toFixed(decimals_to_check).toString(),
        "y"
    );
}

function changeColorMarker(scoreboard, lifes) {
    if (lifes == 2) scoreboard.style.color = "yellow";
    else if (lifes == 1) scoreboard.style.color = "red";
    else if (lifes == 0) scoreboard.style.color = "Maroon";
}

function removeTailObjects(scene, tail_objects) {
  while (tail_objects.length > 0) scene.remove(tail_objects.pop());
}

function removeTailStrings(tail_strings) {
  while (tail_strings.length > 0) tail_strings.pop();
}