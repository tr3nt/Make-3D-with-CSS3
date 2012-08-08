function text3d(levels,color){
	var colR = colorR(color);
	var colG = colorG(color);
	var colB = colorB(color);
	var x = 1;
	var y = 1;
	var	texto2 =  'text-shadow: ';
	var	texto4 = 'filter:';
		for(var i=1; i<=levels; i++){
			texto2 += i+'px '+i+'px 0 rgb('+colR+','+colG+','+colB+')';
			if(x == 1){
				texto4 += 'progid:DXImageTransform.Microsoft.DropShadow(OffX='+y+', OffY='+y+', Color=#'+toHex(colR)+toHex(colG)+toHex(colB)+')';
				x++;
				y++;
			}else{ x = 1; }
			if(i == levels){ texto2 += ';'; texto4 += ';zoom: 1;'; }else{ texto2 += ', '; }
			colR -= 8;
			if(colR < 0){ colR = 0; }
			colG -= 8;
			if(colG < 0){ colG = 0; }
			colB -= 8;
			if(colB < 0){ colB = 0; }
		}
	$('div.text3d').attr('style',texto2+texto4);
}
function item3d(levels,color){
	var colR = colorR(color);
	var colG = colorG(color);
	var colB = colorB(color);
	var x = 1;
	var y = 1;
	var	texto2 =  'box-shadow: ';
	var	texto4 = 'filter:';
		for(var i=1; i<=levels; i++){
			texto2 += i+'px '+i+'px 0 rgb('+colR+','+colG+','+colB+')';
			if(x == 1){
				texto4 += 'progid:DXImageTransform.Microsoft.DropShadow(OffX='+y+', OffY='+y+', Color=#'+toHex(colR)+toHex(colG)+toHex(colB)+')';
				x++;
				y++;
			}else{ x = 1; }
			if(i == levels){ texto2 += ';'; texto4 += ';zoom: 1;'; }else{ texto2 += ', '; }
			colR -= 8;
			if(colR < 0){ colR = 0; }
			colG -= 8;
			if(colG < 0){ colG = 0; }
			colB -= 8;
			if(colB < 0){ colB = 0; }
		}
	$('div.item3d').attr('style',texto2+texto4);
}
function colorR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function colorG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function colorB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
function toHex(N) {
 if (N==null) return "00";
 N=parseInt(N); if (N==0 || isNaN(N)) return "00";
 N=Math.max(0,N); N=Math.min(N,255); N=Math.round(N);
 return "0123456789ABCDEF".charAt((N-N%16)/16)
      + "0123456789ABCDEF".charAt(N%16);
}