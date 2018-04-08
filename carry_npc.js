function carry_npc_interact(event, world, npc, player) {
  if (npc.hasStoredData("carrying")) { 
    npc.removeStoredData("carrying");
    npc.setMount(null);
  } else { 
    npc.setStoredData("carrying", player.getDisplayName());
  }
};


function carry_npc_update(event, world, npc) {
  if (!npc.hasStoredData("carrying")) { return; }

  var username = npc.getStoredData("carrying");
  var player = world.getPlayer(username);
  
  if (!player) { return; }
  
  npc.setMount(player);
  npc.setRotation(player.getRotation());
  npc.setHome(
    player.getX(),
    player.getY(),
    player.getZ()
  ); 
};
