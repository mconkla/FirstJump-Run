function Bird(){

	this.x = 100;
	this.y = height/2;
	this.gravity = 1;
	this.velocity = 2;
	this.g = 0;

	this.show = function(){
		fill(255,this.g,0);
		ellipse(this.x,this.y,30,30);
		//rect(this.x,this.y,1,15);
		//rect(this.x,this.y,15,1);

	}

	this.update = function(){
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;

		if (this.y > height){
			this.y = height;
			this.velocity = 0;
		}
		if (this.y < 0){
			this.y = 0;
			this.velocity = 0;
		}


	}


}