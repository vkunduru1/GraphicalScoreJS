class Shapes {
    constructor(){
        this.shapes = [ ];
    }
    clear(){
        ctx.clearRect(0, 0, width, height);
        this.showShapes();
       
    }
    playAllSounds(pitch){
        for (var i = 0; i < this.shapes.length; i++){
            var start = this.shapes[i].getCenter(); // 
           //looop into this.shapes and draw them 
           if(i == 0 || i % 50 == 0 || start - this.shapes[i+1] == 20){ // only draws one circle per gesture           
               this.shapes[i].playSound(); 
            
           }
        }
    }
    showShapes(){
        for (var i = 0; i < this.shapes.length; i++){
            var start = this.shapes[i].getCenter(); // 
           //looop into this.shapes and draw them 
           if(i == 0 || i % 50 == 0 || start - this.shapes[i+1] == 20){ // only draws one circle per gesture
                                         //how close is one gesture to another px
                                         // mod 50  - sensitivity function (more sensitivity = lower num) 
               this.shapes[i].draw(); 
           }
        }
    }
    addCircle(circle){
        this.shapes.push(circle)
    }
    addSquare(square){
        this.shapes.push(square)
    }
}
