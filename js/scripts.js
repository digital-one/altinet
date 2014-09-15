$(document).ready(function(){

//fix aside and content heights

var $asideHeight = $('#aside').outerHeight(),
	$mainHeight = $('#main').outerHeight();
	console.log('aside='+$asideHeight);
	console.log('main='+$mainHeight);
if($asideHeight <= $mainHeight){
	$('#aside').height($mainHeight)
	$('#main').height($mainHeight);
	console.log('ok');
} else {
	$('#main').height($asideHeight)
	$('#aside').height($asideHeight)
	console.log('ok');
}

//selectbox

$('select').selectBox();


//owl carousel
/*
$('#carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:3
        }
    }
});
*/
var owl = $('#carousel');
	owl.owlCarousel({
		autoplay: true,
		center: true,
		items:1,
		loop:true,
		margin:0,
		nav: false,
		responsive:{
			768:{
				nav: true,
				dotsEach: true,
				items:3
			}
		}
});
	owl.on('changed.owl.carousel', function(event) {
    console.log(event.item.index);
    $('#process footer div').hide().eq(event.item.index-3).fadeIn(200);
})

	$('#process footer div').eq(0).show();
})