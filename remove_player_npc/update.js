function remove_player_update(event, world, npc) {
    var npc_name = npc.getName();
    
    var ticks = 0
    var ticks_key = "ticks_" + npc_name;
    if (world.hasTempData(ticks_key)) {
        ticks = world.getTempData(ticks_key);
    }
    
    ticks++;
    world.setTempData(ticks_key, ticks);
    
    if (ticks < 4) return;
    
    var players = world.getAllServerPlayers();
    for (var i=0; i<players.length; i++) {
        if (npc_name == players[i].getName()) npc.despawn();
    }
}
