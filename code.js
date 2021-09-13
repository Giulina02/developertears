
var activeHandL = 0;
var imgHandL = [];
imgHandL[0] = src='img/handL1.png';
imgHandL[1] = src='img/handL2.png';
imgHandL[2] = src='img/handL3.png';
imgHandL[3] = src='img/handL4.png';

var activeHandR = 0;
var imgHandR = [];
imgHandR[0] = src='img/handR1.png';
imgHandR[1] = src='img/handR2.png';

var activeBottom = 0;
var imgBottom = [];
imgBottom[0] = src='';
imgBottom[1] = src='img/bottom1.png';

var activeUp = 0;
var imgUp = [];
imgUp[0] = src='';
imgUp[1] = src='img/up1.png';
imgUp[2] = src='img/up2.png';

var activeUp2 = 0;
var imgUp2 = [];
imgUp2[0] = src='';
imgUp2[1] = src='img/upB1.png';
imgUp2[2] = src='img/upB2.png';
imgUp2[3] = src='img/upB3.png';

var activeHair = 0;
var imgHair = [];
imgHair[0] = src='img/hair1.png';
imgHair[1] = src='img/hair2.png';

var activeHat = 0;
var imgHat = [];
imgHat[0] = src='';
imgHat[1] = src='img/hat1.png';
imgHat[2] = src='img/hat2.png';
imgHat[3] = src='img/hat3.png';


function resetAll(){
	activeHandL = 0;
	activeHandR = 0;
	activeBottom = 0;
	activeUp = 0;
	activeUp2 = 0;
	activeHair = 0;
	activeHat = 0;
	
	document.getElementById('handL').src = imgHandL[activeHandL];
	document.getElementById('handR').src = imgHandR[activeHandR];
	document.getElementById('bottom').src = imgBottom[activeBottom];
	document.getElementById('up').src = imgUp[activeUp];
	document.getElementById('up2').src = imgUp2[activeUp2];
	document.getElementById('hair').src = imgHair[activeHair];
	document.getElementById('hat').src = imgHat[activeHat];
}

function nextItem(item){
	console.log("Function Next");
	
	if (item == nextHandL){
		if(activeHandL == imgHandL.length - 1){
			activeHandL = 0;
		}else{
			activeHandL += 1;
		}
		document.getElementById('handL').src = imgHandL[activeHandL];
	}
	
	if (item == nextHandR){
		if(activeHandR == imgHandR.length - 1){
			activeHandR = 0;
		}else{
			activeHandR += 1;
		}
		document.getElementById('handR').src = imgHandR[activeHandR];
	}
	
	if (item == nextBottom){
		if(activeBottom == imgBottom.length - 1){
			activeBottom = 0;
		}else{
			activeBottom += 1;
		}
		document.getElementById('bottom').src = imgBottom[activeBottom];
	}
	
	if (item == nextUp){
		if(activeUp == imgUp.length - 1){
			activeUp = 0;
		}else{
			activeUp += 1;
		}
		document.getElementById('up').src = imgUp[activeUp];
	}
	
	if (item == nextUp2){
		if(activeUp2 == imgUp2.length - 1){
			activeUp2 = 0;
		}else{
			activeUp2 += 1;
		}
		document.getElementById('up2').src = imgUp2[activeUp2];
	}
	
	if (item == nextHair){
		if(activeHair == imgHair.length - 1){
			activeHair = 0;
		}else{
			activeHair += 1;
		}
		document.getElementById('hair').src = imgHair[activeHair];
	}
	
	if (item == nextHat){
		if(activeHat == imgHat.length - 1){
			activeHat = 0;
		}else{
			activeHat += 1;
		}
		document.getElementById('hat').src = imgHat[activeHat];
	}
	
	/* BASE-------------------------
	
 	if (item == next){
		if(active == img.length - 1){
			active = 0;
		}else{
			active += 1;
		}
		document.getElementById('').src = img[active];
	}
	
	*/
	
}