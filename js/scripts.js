var isTouchDevice = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isTouchDevice.Android() || isTouchDevice.BlackBerry() || isTouchDevice.iOS() || isTouchDevice.Opera() || isTouchDevice.Windows());
    }
};



$(document).ready(function(){

//fix aside and content heights

var $asideHeight = $('#aside').innerHeight(),
	$mainHeight = $('#main').innerHeight();
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

//sticky nav

if(!isTouchDevice.any()){

	var stickyHeaderTop = $('#nav').offset().top;

    $(window).scroll(function(){
     if( $(window).scrollTop() > stickyHeaderTop ) {
	$('body').addClass('fixed');
} else {
	$('body').removeClass('fixed');
}
});

}

//mobile menu

$('#mobile').on('click',function(e){
	e.preventDefault();
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$('#nav ul').slideUp(100);
	} else {
		$(this).addClass('active');
		$('#nav ul').slideDown(200);
	}
})

//selectbox

$('select').selectBox();

//homepage slider

$('#slides').cycle({
		debug   : false,
		fx      : 'scrollHorz',
		easing  : 'easeInOutExpo',
		speed   : 600,
		timeout : 4000,
		pause   : 0,
		pager   :  '#slider-nav',
		next:   '.control.right', 
    	prev:   '.control.left' 
	});

/*
 $("#slider").owlCarousel({
 	items:1,
 	loop:true,
 	autoplay:true,
 	autoplaySpeed:400,
	navigation : true, // Show next and prev buttons
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true

});
*/

//process carousel

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



$(".play-video").click(function() {
	$.fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'width'			: 680,
			'height'		: 495,
			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			'type'			: 'swf',
			'swf'			: {
			   	'wmode'				: 'transparent',
				'allowfullscreen'	: 'true'
			}
		});

	return false;
});


