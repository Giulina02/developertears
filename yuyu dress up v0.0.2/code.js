
var activeHandL = 0;
const imgHandL = [];
imgHandL[0] = src='img/handL/handL1.png';
imgHandL[1] = src='img/handL/handL2.png';
imgHandL[2] = src='img/handL/handL3.png';
imgHandL[3] = src='img/handL/handL4.png';
imgHandL[4] = src='img/handL/handL5.png';
imgHandL[5] = src='img/handL/handL6.png';

var activeHandR = 0;
const imgHandR = [];
imgHandR[0] = src='img/handR/handR1.png';
imgHandR[1] = src='img/handR/handR2.png';
imgHandR[2] = src='img/handR/handR3.png';

var activeBottom = 0;
const imgBottom = [];
imgBottom[0] = src='';
imgBottom[1] = src='img/bottom/bottom1.png';
imgBottom[2] = src='img/bottom/bottom2.png';
imgBottom[3] = src='img/bottom/bottom3.png';
imgBottom[4] = src='img/bottom/bottom4.png';
imgBottom[5] = src='img/bottom/bottom5.png';

var activeUpAB = 0;
const imgUpAB = [
	{
		type: 'A',
		url: 'img/upA/upA1.png'
	},
	{
		type: 'A',
		url: 'img/upA/upA2.png'
	},
	{
		type: 'A',
		url: 'img/upA/upA3.png'
	},
	{
		type: 'B',
		url: 'img/upB/upB1.png'
	},
	{
		type: 'B',
		url: 'img/upB/upB2.png'
	},
	{
		type: 'B',
		url: 'img/upB/upB3.png'
	},
	{
		type: 'B',
		url: 'img/upB/upB4.png'
	}
];

var activeUpC = 0;
const imgUpC = [];
imgUpC[0] = src='';
imgUpC[1] = src='img/upC/upC1.png';
imgUpC[2] = src='img/upC/upC2.png';

var activeUpD = 0;
const imgUpD = [];
imgUpD[0] = src='';
imgUpD[1] = src='img/upD/upD1.png';
imgUpD[2] = src='img/upD/upD2.png';
imgUpD[3] = src='img/upD/upD3.png';
imgUpD[4] = src='img/upD/upD4.png';

var activeBackHair = 0;
const imgBackHair = [];
imgBackHair[0] = src='';
imgBackHair[1] = src='img/hair/hair2back.png';

var activeHair = 3;
const imgHair = [];
imgHair[0] = src='img/hair/hair1.png';
imgHair[1] = src='img/hair/hair2.png';
imgHair[2] = src='img/hair/hair3.png';
imgHair[3] = src='img/hair/hair4.png';
imgHair[4] = src='img/hair/hair5.png';

var activeHat = 0;
const imgHat = [];
imgHat[0] = src='';
imgHat[1] = src='img/hat/hat1.png';
imgHat[2] = src='img/hat/hat2.png';
imgHat[3] = src='img/hat/hat3.png';
imgHat[4] = src='img/hat/hat4.png';
imgHat[5] = src='img/hat/hat5.png';
imgHat[6] = src='img/hat/hat6.png';

var actualPosition;

function resetAll(){
	activeHandL = 0;
	activeHandR = 0;
	activeBottom = 0;
	activeUpAB = 0;
	activeUpC = 0;
	activeUpD = 0;
	activeHair = 3;
	activeHat = 0;
	
	document.getElementById('handL').src = imgHandL[activeHandL];
	document.getElementById('handR').src = imgHandR[activeHandR];
	document.getElementById('bottom').src = '';
	document.getElementById('upA').src = '';
	document.getElementById('upB').src = '';
	document.getElementById('upC').src = '';
	document.getElementById('upD').src = '';
	document.getElementById('backHair').src = '';
	document.getElementById('hair').src = imgHair[activeHair];
	document.getElementById('hat').src = '';
}

function nextItem(item){
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
	
	if (item == nextUpAB){
		document.getElementById('upD').src = "";
		
		if(activeUpAB == imgUpAB.length - 1){
			activeUpAB = 0;
		}else{
			activeUpAB += 1;
		}
		
		actualPosition = imgUpAB[activeUpAB].type;
		console.log(actualPosition);
		
		if(actualPosition == 'A'){
			document.getElementById('upA').src = imgUpAB[activeUpAB].url;
			document.getElementById('upB').src = "";
		}else{
			document.getElementById('upB').src = imgUpAB[activeUpAB].url;
			document.getElementById('upA').src = "";
		}
	}
	
	if (item == nextUpC){
		document.getElementById('upD').src = "";
		
		if(activeUpC == imgUpC.length - 1){
			activeUpC = 0;
		}else{
			activeUpC += 1;
		}
		document.getElementById('upC').src = imgUpC[activeUpC];
	}
	
	if (item == nextUpD){
		document.getElementById('upA').src = '';
		document.getElementById('upB').src = "";
		document.getElementById('upC').src = "";
		
		if(activeUpD == imgUpD.length - 1){
			activeUpD = 0;
		}else{
			activeUpD += 1;
		}
		document.getElementById('upD').src = imgUpD[activeUpD];
	}
	
	if (item == nextHair){
		document.getElementById('backHair').src = '';
		
		if(activeHair == imgHair.length - 1){
			activeHair = 0;
		}else{
			activeHair += 1;
		}
		
		if(activeHair == 1){
			document.getElementById('backHair').src = 'img/hair/hair2back.png';
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