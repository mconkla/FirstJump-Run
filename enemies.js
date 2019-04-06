function Enemies(){

	this.y = random(0,200);
	this.x = width + 50;
	this.w = 30
	this.h = 30
	this.speed = - 4 ;

	this.createenemy = function(){
		
			this.y = 150;
			//this.x = 300;
	}

	this.show = function(){
		fill(0,0,255);
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
			
			/*if (bird.x  <= this.x && bird.y +20 > this.y){
				
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
				*/
				return true;
			//}
			

		}
		}
	




}