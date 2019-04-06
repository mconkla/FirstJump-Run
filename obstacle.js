function Obst(){

	this.y = random(20,40);
	this.r = random(0,100);
	this.x = width -40;
	this.w = random(30,120);
	this.h = random(40,120);
	this.speed = - 4 ;

	this.show = function(){
		if (this.r >= 50){
			this.y = height - this.h;
		}
		fill(255,0,0);
		rect(this.x,this.y,this.w,this.h)

	}
	this.update = function(){
		this.x = this.x + this.speed;

	}

	this.offscreen = function(){
		if(this.x < -this.w){
			return true;
	}
}

	this.hits = function(bird){ 

		if ((bird.x  + 15) >= this.x && (bird.x -15) <= this.x + this.w && (bird.y - 15) <= this.y + this.h && (bird.y + 15)>= this.y){
			
			if (bird.x  <= this.x && bird.y +20 > this.y){
				
					bird.x = this.x - 15;

			
				
			}
			
			
			if(bird.y >= this.y - 20 && (bird.y <= this.y + this.h + 20)){
				if(bird.y - this.y < 50){
				bird.y = this.y - 20;
				}
				else {
					bird.y = this.y +this.h + 20;
				}
			
			}
			
			if (bird.x < 0){
				return true;
			}
			

		}
		}




}