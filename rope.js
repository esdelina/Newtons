class rope{
	constructor(body1,body2, PointA, PointB)
	{

	//create rope constraint here
	this.PointA=PointA
	this.PointB=PointB

    var options={
		bodyA:body1,
		bodyB:body2,  
		PointB:{x:this.PointA, y:this.PointB}
	}
	this.rope=Constraint.create(options)
	World.add(world,this.rope)
	}

    //create display() here 
 
display()
{

	var PointA=this.rope.bodyA.position;
	var PointB=this.rope.bodyB.position;

	strokeWeight(2);
	line(PointA.x,PointA.y,PointB.x+this.PointA,PointB.y+this.PointB);
}


}

