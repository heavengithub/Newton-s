class Bob{
    constructor(x, y,width,height){
        
        
        stroke(48,22,8);
        World.add(world, this.bob);

        this.body = Bodies.circle(x, y, width, height, options);
        this.width = width;
        this.height = height;
    }

    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
       
    }
    
}