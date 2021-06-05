class leapmotioncode {
    constructor(controller , noteEvent) {
      this.controller = new Leap.Controller();
        this.handData = controller.frame.hands;
        this.noteEvent = noteEvent;
        this.shapes = new Shapes();
    }
    record(){
    //looped
    var _shapes = this.shapes;
    this.controller = Leap.loop({enableGestures: true}, function(frame){
      var counter = 0;
      
      _shapes.clear();

      function leapPos(position) {
        var x = position[0];
        var y = position[1];
          // Shift the Leap origin to the canvas's bottom center and invert the y-axis
        return [width/2 + x, height - y];
      }
      if(frame.valid && frame.gestures.length > 0)
      {
        frame.gestures.forEach(function(gesture){
            switch (gesture.type){
              case "circle":
                var circleCenter = gesture.center;
                var circle = new Circle(leapPos(circleCenter) ,gesture.radius);
                circle.draw('#A0F', fill); //once  
                counter=counter+1;
                _shapes.addCircle(circle);
                break;
                // case "keyTap":
                //     console.log("Key Tap Gesture");
                //     break;
                // case "screenTap":
                //     console.log("Screen Tap Gesture");
                //     break;
              case "swipe":
                console.log("Swipe Gesture");
                var squareCenter = gesture.position;
                console.log(squareCenter);
                var square = new Square(leapPos(squareCenter) ,gesture.duration); //swipe gesture has no center, therefore the duration was used to determine the end point of the gesture.
                counter=counter+1;
                square.draw('#008000', fill); //+
                _shapes.addSquare(square);
                break;
            }  
        });
      }
    
    // Draw finger tips as colored circles
    for (var f = 0; f < frame.fingers.length; f = f+1) {
      var finger = frame.fingers[1]; //index finger
      // Calculate the circle center and radius
      var center = leapPos(finger.tipPosition);
      var radius = Math.abs(finger.touchDistance) * 30;
      // Determine if the finger is touching or not
      var touching = finger.touchZone == 'touching';
      // Decide the circle color and whether to fill it
      var color;
      var fill;
      btnOpen;enableGestures: true;
      noteEvent = true;
      if (touching) {
        // Save the circle properties to redraw it later
          var circle = new Circle(center, radius);
          color = '#F00';
          circle.draw(color, fill);
      }
      else {
        color = '#00F';
        fill = false;
      }
      // Finally, draw the circle
    }
          console.log("Note Off");
          noteEvent = false;
  });
  this.shapes = _shapes;
}//func record

  playRecorded(){
    this.shapes.playAllSounds();//play sound for each shape
  }

}

