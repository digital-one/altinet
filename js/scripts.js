$(document).ready(function(){

var $asideHeight = $('#aside').height(),
	$mainHeight = $('#main').height();
if($asideHeight <= $mainHeight){
	$('#aside').height($mainHeight)
} else {
	$('#main').height($asideHeight)
}

$('select').selectBox();
})