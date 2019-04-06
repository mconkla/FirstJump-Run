//let anyname;
//var pipes = [];
var bird;
var obstacle = [];
var enemies = [];
var dead = false;
var count = 0;
let extraC;


function setup() {
  	createCanvas(600,200);
	bird = new Bird();
	//for(var i = 0; i < 10; i++){
		extraC = createGraphics(600,200);
		extraC.clear();
		background(0);
	obstacle.push(new Obst());
	enemies.push(new Enemies());
	//}
}

function draw() {
	background(0);
	
//if (mousePressed){
	extraC.fill(255,150);
	extraC.noStroke();
	let starX = random(width);
	let starY = random(height);
	extraC.ellipse(starX,starY,2,2);
	//extraC.ellipse(mouseX,mouseY,60,60);
//}
image(extraC,0,0);


	if (!dead){

	bird.update();
	
	bird.show();

	for(var i = obstacle.length -1; i >=0 ; i--){
		obstacle[i].show();
		obstacle[i].update();
		if (obstacle[i].hits(bird)){
			dead = true;
		}

		if (obstacle[i].offscreen()){
		obstacle.splice(i, 1);
		count +=1;
		}
		
	}
	
//if (frameCount % 400 == 0){
	//var newenem = true;
//}	
	

//}
		
	var take = false;
	//if (newenem){

	for(var i = enemies.length -1; i >=0 ; i--){
		
		enemies[i].show();
		enemies[i].update();

		if (enemies[i].hits(bird)){
			count += 10;
			enemies.splice(i, 1);
			take = true;
		}

		if(!take){
		if (enemies[i].offscreen()){
		enemies.splice(i, 1);
		}
		}
		
		
	}

	
		
		if (frameCount % 50 == 0){
		obstacle.push(new Obst());
		}

		if (frameCount % 360 == 0){
		enemies.push(new Enemies());
		}
	
	
	if (count % 50 == 0 && bird.x < 100 ){
		bird.x = 100;
	}

	
}
	fill(255);
	text(count, 10, 10, 100, 110);
}
  // put drawing code here

function keyPressed(){
	if (key = " "){
		console.log("SPACE");
		bird.velocity += -40;

	}
}
function mouseClicked(){
	background(0);

}
function mousePressed(){

}
