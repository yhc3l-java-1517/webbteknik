/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
window.addEventListener('DOMContentLoaded', function () {
	'use strict';
	var blob = document.querySelector('#blob');
	blob.style.top = '0px';
	blob.style.left = '0px';
	console.dir(blob);
	document.addEventListener('keydown',function(ev){
		switch (ev.key){
			case 'ArrowDown':
				blob.style.top = (parseInt(blob.style.top) + 5) + 'px';
			break;
			case 'ArrowUp':
				blob.style.top = (parseInt(blob.style.top) - 5) + 'px';
			break;
			case 'ArrowLeft':
				blob.style.left = (parseInt(blob.style.left) - 5) + 'px';
			break;
			case 'ArrowRight':
				blob.style.left = (parseInt(blob.style.left) + 5) + 'px';
			break;
			}
	});
});
