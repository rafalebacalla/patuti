import k from "./kaboom";
import mainScene from "./scenes/main.scene";
import patutiScene from "./scenes/patuti.scene";




// k.loadRoot("https://imgur.com/");
// k.loadSprite("area", "PLsvqPC.png");
// k.loadSprite("idle", "Fmgkm0j.png");

k.scene("main", patutiScene);
k.start('main');
