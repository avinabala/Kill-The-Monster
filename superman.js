class Superman {
        constructor(x, y, width, height) {
            var options = {
                frictionAir :1,
                density: 1
            }
            this.visiblity = 225;
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            this.image= loadImage("images/Superhero-01.png")
            World.add(world, this.body);
            
          }
         
          display(){
            var pos = this.body.position;
            var angle = this.body.angle
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width+150, this.height);
            pop();
        }
    }