function remove_player_update(event, world, npc) {
    var players = world.getAllServerPlayers();
    for (var i=0; i<players.length; i++) {
        if (npc.getName() == players[i].getName()) {
            npc.despawn();
        }
    }
}
