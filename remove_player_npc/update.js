TICKS = 0;

function remove_player_update(event, world, npc) {
    TICKS++;
    
    if (TICKS < 30) return;
    TICKS = 0;

    var players = world.getAllServerPlayers();
    for (var i=0; i<players.length; i++) {
        if (npc.getName() == players[i].getName()) {
            npc.despawn();
        }
    }
}
