function on_remove(npc, player) {
    player.setPosition(npc.getX(), npc.getY(), npc.getZ());
    npc.despawn();
}

function remove_player_update(event, world, npc) {
  var player = world.getPlayer(npc.getName());
  if (player) on_remove(npc, player);
}
