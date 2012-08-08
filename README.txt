---English---
You need also jQuery plugin.
There are 2 classes, text3d and item3d.
in <head> put:

<script>
$(function(){
	text3d(5,'#FFFFFF');
	item3d(5,'#FFFFFF');
});
</script>

5 means depth and #FFFFFF means color.
Chrome & Firefox depth 1,2,3,4,5...
IE depth 1,3,5,7,9...

in <body> put:

<div class="text3d">This text will be on 3D</div>
<div class="item3d">This div box will be on 3D</div>


---Español---
Necesitas el plugin de jQuery.
Hay dos clases, text3d e item3d.
en <head> escribe:

<script>
$(function(){
	text3d(5,'#FFFFFF');
	item3d(5,'#FFFFFF');
});
</script>

5 es la profundidad y #FFFFFF es el color.
Chrome y Firefox cuentan todos los numeros para la profundidad.
IE solo cuenta numeros nones para la profundidad.

en <body> escribe:

<div class="text3d">Este texto se ve en 3D</div>
<div class="item3d">Esta caja de div se ve en 3D</div>