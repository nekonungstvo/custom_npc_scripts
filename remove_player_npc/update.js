function remove_player_update(event, world, npc) {
    var players = world.getAllServerPlayers();
    for (var i=0; i<=player.length; i++) {
        npc.say(players[i].getName());
    }
}
