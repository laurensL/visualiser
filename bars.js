(function() {
void drawBars(){
		numberOfBands = 12;
		fill(255);
		rect(0, 0, width, height);
		noFill();
		fill(0);
		text(frameRate,20,20);
		for (var i = 0; i < numberOfBands; i++) {
			text(fft[i],20,35 + (i*10));
		}
		boxWidth = (numberOfBands-1) * 25;
		boxHeight = 200;
		// Put the bars in the middle of the COMPUTERSCREEN!!
		// Not the spotify area
		translate(width/2, 300);
		//Draw a black box around the bars
		//fill(0);
		//rect(-boxWidth,0,(boxWidth*2)+20, boxHeight);		
		//fill(41, 137, 216);
		for (var i = 0; i < numberOfBands; i++) {
		    //calculate the color
		    //var c = map(fft[i], min(fft), max(fft), 0, 255);
		    //var c = random(20, 220);
		    fill(41, 137, 216);
		    //calculate the height of the bar
		    //var h = map(fft[i], 0, 96, 0, 96);
		    //var h = random(50, fft[i]);
		    rect(i * 25, 0, 20, -fft[i]);
		    rect(-(i * 25), 0, 20, -fft[i]);
		    rect(i * 25, 200, 20, fft[i]);
		    rect(-(i * 25), 200, 20, fft[i]);
  		}
  		fill(255);
} });