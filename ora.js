var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var img=document.getElementById("ora");
var meret = 100;
var sec = 0;
var min = 0;
var hour = 0;
var ido = document.getElementById('ido');

function x(a)
{
	return a + meret;
}
function y(a)
{
	return a*-1 + meret;
}
function deg (a) {
  return a * (Math.PI/180);
}
function nulla(a) {
	if(a < 10)
	{
		return '0' + a;
	}
	else
	{
		return a;
	}
}
	

function rajzol() {

	var d = new Date()
	ido.innerHTML = nulla(d.getHours()) + ':' + nulla(d.getMinutes()) + ':' + nulla(d.getSeconds());
	var mperc = d.getSeconds() * 6;
	var perc = d.getMinutes() * 6;
	var orak = d.getHours();
	var ora = 0;
	if(orak > 12)
	{
		ora = (orak -12)*30;
	}
	else
	{
		ora = orak*30;
	}
	
	ctx.beginPath();
		ctx.moveTo(meret,meret);
		ctx.lineTo(x(Math.cos( deg(90-mperc) ) *80),y(Math.sin( deg(90-mperc) )*80));
		ctx.lineWidth = 2;
		ctx.strokeStyle = '#000000';

		ctx.moveTo(meret,meret);
		ctx.lineTo(x(Math.cos( deg(90-perc) ) *70),y(Math.sin( deg(90-perc) )*70));
		ctx.lineWidth = 2;
	
		ctx.moveTo(meret,meret);
		ctx.lineTo(x(Math.cos( deg(90-ora) ) *50),y(Math.sin( deg(90-ora) )*50));
		ctx.lineWidth = 2;
		
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(img,0,0);	
	ctx.stroke();

};
setInterval(rajzol, 1000);
