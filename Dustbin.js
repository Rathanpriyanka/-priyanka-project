class Dustbin{

    constructor(x,y,width,height) {
    
      this.dustbin1 = Bodies.rectangle(x,y,width,height);
      this.dustbin2 = Bodies.rectangle(x,y,width,height);
      this.dustbin3 = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      
      
    
    }
      display() {
      fill ("white");
      rectMode(CENTER);
      rect(this.dustbin1.position.x,this.dustbin1.position.y,this.width,this.height);
      rect(this.dustbin2.position.x,this.dustbin2.position.y,this.width,this.height);
      rect(this.dustbin3.position.x,this.dustbin3.position.y,this.width,this.height);
      }
    }