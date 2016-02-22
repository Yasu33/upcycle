window.onload = function(){
	var button = document.getElementById('button');
 	button.addEventListener('click', click);
  	var width = 640,
		height = 480,
  		draw = SVG('shirt').size(width, height),
  		image = draw.image('gara2.png', 640, 480);

 	shirt = draw.path('M 41.5 35.6 L 41.5 101.5 L 107.5 101.5 L 107.5 35.6 L 131.5, 57.3 L 151.9, 40.9 L 107.8 0.5 L 97.4, 0.5 C 97.4 0.5 75.9 30.5 53.8 0.5 L 41.4 0.5 L 0.7 39.0 L 20.0 58.3 L 41.5 35.6').fill({color: '#fff', opacity: 0.0}).stroke({ width: 3 }).draggable();
 	function click(){
	 	var shirt = document.getElementById('SvgjsPath1008');
		var paths = shirt.getAttribute('d');
		shirt.remove();
		shirt = draw.path(paths).fill(draw.image('gara2.png', 640, 480)).draggable(false);
		image.remove();
	}
}