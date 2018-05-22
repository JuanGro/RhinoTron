function changeColor(color) {
    if (color == 'red') {
        path = '../../models/classic-1982-tron-light-cycle-red.json';
        color_hex = 0xff0000;
        color_rgb = 'rgb(255, 0, 0)';
    } else if (color == 'green') {
        path = '../../models/classic-1982-tron-light-cycle-green.json';
        color_hex = 0x7CFC00;
        color_rgb = 'rgb(49, 233, 12)';
    } else if (color == 'blue') {
        path = '../../models/classic-1982-tron-light-cycle-blue.json';
        color_hex = 0x00B2FF;
        color_rgb = 'rgb(22, 178, 236)';
    } else if (color == 'pink') {
        path = '../../models/classic-1982-tron-light-cycle-pink.json';
        color_hex = 0xFF6EC7;
        color_rgb = 'rgb(226, 41, 196)';
    }
    return [path, color_hex, color_rgb];
}

function getNewColors(player, color) {
    results = changeColor(color);
    if (player == 1) {
        motorcycle_1_json_path = results[0];
        saveInLocalStorage("motorcycle_1_json_path", results[0]);
        player_1_color_hex = results[1];
        saveInLocalStorage("player_1_color_hex", results[1]);
        player_1_color_rgb = results[2];
        saveInLocalStorage("player_1_color_rgb", results[2]);
    } else {
        motorcycle_2_json_path = results[0];
        saveInLocalStorage("motorcycle_2_json_path", results[0]);
        player_2_color_hex = results[1];
        saveInLocalStorage("player_2_color_hex", results[1]);
        player_2_color_rgb = results[2];
        saveInLocalStorage("player_2_color_rgb", results[2]);
    }
    // Remove current motos
    removeMotorcycleObjects(scene, motorcycle_list);
    // Build motos
    buildMoto(motorcycle_1_json_path, "motorcycle_1", scene, motorcycle_1_loader, 1);
    buildMoto(motorcycle_2_json_path, "motorcycle_2", scene, motorcycle_2_loader, 2);
}