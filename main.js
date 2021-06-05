var controller = new Leap.Controller();
var noteEvent = true;
var lmc = new leapmotioncode(controller, noteEvent);

lmc.record();

var sqrWave = new sound(440, 2000);
var sineWave = new sound(1000, 2000);
var triWave = new sound(220, 2000);
var sawtWave = new sound(59.94, 2000);
