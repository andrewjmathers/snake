

	console.log("script is running");


  var canvas = document.getElementById('canvas');

 


  var ctx = document.getElementById('canvas').getContext('2d');

	ctx.canvas.width = document.getElementById('PG').offsetWidth;

	ctx.canvas.height = document.getElementById('PG').offsetHeight;

      var snake = [];

      var snakeLength = 5;

      var dirX, dirY;

      let directionY = 1;

      let directionX = 0;


      let remX, remY;

      var multiply; 

      var multTwo;


      var dirX,
      	  dirY;


      var i;

      for ( i=0; i<snakeLength; i++ ){

      	var z = 0;

      	var l = 0+i*11;

      	ctx.fillRect( z, l, 8, 9 );

      	snake[i] = [ z, l ];





      }

      ctx.fillStyle = 'rgb(0, 0, 0)';


      function createYummy(){

      	var test;

      	multiply = 10 * ( Math.floor ( Math.random() * Math.floor (40)));

      	multTwo = 10 * ( Math.floor ( Math.random() * Math.floor (40)));

      	


      	for ( test = snake.length-1; test >= 0 ; test--){


      		if ( snake[test][0] != multiply && snake[test][1] != multTwo ){


      			ctx.fillRect( multiply, multTwo, 5, 5 );
      			

      		} 
      	}

      }

      


      function moveIt(){


      	if( remX + directionX == 0 && remX - directionX != 0 || remY + directionY == 0 && remY - directionY != 0 ){

      		
      		directionX = remX;
      		directionY = remY;
      	
      	}else{


      		remX = directionX;
      		remY = directionY;
      	}


      	


      	 if ( dirX > 390 ) { dirX = 0} else if ( dirX < 0 ) { dirX = 390} else {

      	dirX = snake[snake.length-1][0]+directionX*10;

      }

      if ( dirY > 390 ) { dirY = 0} else if ( dirY < 0 ) { dirY = 390} else {

      	dirY = snake[snake.length-1][1]+directionY*10;

      }
 	


      	var test;

      	

      		if ( dirX == multiply && dirY == multTwo ){

      			console.log("Yummy eaten");

      			ctx.fillRect( multiply, multTwo, 8, 9 );

      			snake.push([multiply, multTwo]);

      			createYummy();

      			return;

      		}

      		for ( test = snake.length-1; test >= 0 ; test--){


      		if ( snake[test][0] == dirX && snake[test][1] == dirY ){

      			alert("GAME OVER");

      			location.reload();

      		} 

      	}

      	ctx.clearRect( snake[0][0], snake[0][1], 8, 9 );

      	ctx.fillRect( dirX, dirY, 8, 9  );

      	snake[snake.length] = [ dirX, dirY ];
      	
      	snake.shift();


      	


      }



   setInterval (moveIt, 50);



     function keyDown(e){

     	if( e.key  !=  "ArrowDown" && e.key  != "ArrowUp" && e.key  != "ArrowLeft" && e.key  != "ArrowRight" ){

     		return;
     	}

     	if ( e.key == "ArrowDown" || e.key == "ArrowUp"){

     		if( directionY != 0 ){

     			return;
     		}

     		e.key == "ArrowUp"? directionY = -1 : directionY = 1;


     	}else{

     		directionY = 0


     	}

     	if( e.key == "ArrowLeft" || e.key == "ArrowRight"){

     		if( directionX != 0 ){

     			return;
     		}

     		e.key == "ArrowLeft"? directionX = -1 : directionX = 1;


     	}else{

     		directionX = 0;


     	}

     	console.log(directionX + " _ " + directionY);

     }

     function checkIt(){

     	console.log( "direX is "+directionX + "    "+ "direY is "+directionY ); 

     }

     createYummy();
    
    
     window.addEventListener("keydown", keyDown );
      		






