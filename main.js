
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		
	}

	function down()
	{
		 
	}

	function left()
	{
		if(ball_x >5){
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			
		}
	}
	
}

