function farm_iteract(npc, player) {
  var m = 192;

  var now = new Date();
  var last = null;

  if (npc.hasStoredData("farm")) {
    last = new Date(npc.getStoredData("farm"));
  }

  var left = m - ((now-last) / 3600000).toFixed(2);
  if (left > 0) {
    npc.say(player, "Последний сбор: " + last);
    npc.say(player, "Следующий сбор через " + left + " часов")
    return;
  }

  var item = npc.getProjectileItem();
  player.giveItem(item, item.getStackSize());
  npc.setStoredData("farm", now.toString())
}
