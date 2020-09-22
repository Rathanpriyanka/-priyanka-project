class Paper {

constructor() {
var options_paper = {
isStatic : true,
restitution: 0.3,
friction:0.5,
density:1.2
}
this.paper = Matter.Bodies.circle(200,350,10,options_paper);



}
display() {

ellipseMode(RADIUS)
fill("pink");
ellipse(200,350,10,10);

}


}