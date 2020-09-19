class Paper {

constructor() {
var options_paper = {
isStatic : true,
restitution: 0.3,
friction:0.5,
density:1.2
}
this.Paper = Matter.Bodies.circle(200,200,2,options_paper);



}
display() {

//rectMode(CENTER)
fill("pink");
ellipse(200,200,2,2);

}


}