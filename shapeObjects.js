class Circle extends Shapes{
    constructor(center, radius){
        super();
        this.center = center;
        this.radius = radius;
        this.twoRadians = 2*Math.PI;
    }
    getCenter(){
        return this.center;
    }
    draw(color, fill) {
        // Make an closed arc with a complete rotation
        ctx.beginPath();
        ctx.arc(this.center[0], this.center[1], this.radius, 0, this.twoRadians);
        ctx.closePath();
        ctx.lineWidth = 4;
        // Choose whether to fill or outline the circle
        if (fill) {
            ctx.fillStyle = color;
            ctx.fill();
        } else {
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }


    playSound(){
       var s = new sound(this.center[0], this.center[1], this.radius);// (x, y, duration)
       s.playOscillator('sine');
    }
}
class Square extends Shapes{
    constructor(center, radius){
        super();
        this.center = center;
        this.radius = radius;
        this.twoRadians = 2*Math.PI;
    }
    getCenter(){
        return this.center;
    }
    draw(color, fill) {
        // Make an closed circle with a complete rotation
      
        ctx.beginPath();
        ctx.rect(this.center[0], this.center[1], this.radius, this.radius);
        ctx.closePath();
        ctx.lineWidth = 4;
        // Choose whether to fill or outline the circle
        if (fill) {
            ctx.fillStyle = color;
            ctx.fill();
        } else {
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }

    playSound(){
       var s = new sound(this.center[0], this.center[1], this.radius);// (x, y, duration)
       s.playOscillator('square');
    }
}
class Tri extends Shapes{
    constructor(){
        
    }
}