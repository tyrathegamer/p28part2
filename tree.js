class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true

        }
        this.tree = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("Plucking mangoes/tree.png");
    }
display(){
    var pos1 = this.tree.position.x;
    var pos2 = this.tree.position.y;
    imageMode(CENTER);
    image(this.image,pos1,pos2,600,600);
}
}