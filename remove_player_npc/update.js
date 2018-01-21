function remove_player_update(event, world, npc) {
    npc.say(world.getAllServerPlayers());
}
