$('#fullpage').fullpage({
	anchors: ['firstSlide', 'secondSlide', '3rdSlide', '4thSlide'],
	sectionsColor: ['#fff', '#fff', '#fff', '#fff'],
	navigation: true,
	navigationPosition: 'right',
	// navigationTooltips: ['First page', 'Second page', 'Third and last page'],
	responsiveWidth: 900,
	afterResponsive: function(isResponsive){

	},
	afterLoad: function(anchorLink, index){
		if(index >= 2){
			$('.footer').addClass('slideToRight');
			$('.footer').removeClass('slideToLeft');
		} else{
			$('.footer').removeClass('slideToRight');
			$('.footer').addClass('slideToLeft');
		}
	}
});

$('.backwardIcon a').click(function(e){
	e.preventDefault();
	$.fn.fullpage.moveSectionUp();
});


jQuery(document).ready(function($) {

	/* ================================================
		material animation script
	=================================================== */
		$(".mat-input").focus(function(){
		  	$(this).parent().addClass("is-active is-completed");
		});

		$(".mat-input").focusout(function(){
		  	if($(this).val() === ""){
		  	  	$(this).parent().removeClass("is-active is-completed");
		  	}else if( $(this).val().length > 0 ){
		  		$(this).parent().addClass("is-active is-completed");
		  	}
		})

		$(".mat-input").each(function(index, el) {
			if($(this).val() === ""){
				$(this).parent().removeClass("is-active is-completed");
			}else if( $(this).val().length > 0 ){
		  		$(this).parent().addClass("is-active is-completed");
		  	}
		});


	/* ================================================
		register pop open close script
	=================================================== */
		$(document).on('click', '.openRegisterbox .close', function(event) {
			$(this).parents('.openRegisterbox').removeClass('openRegisterbox')
					.find('.callRegister').css('visibility','visible');
		});
		$(document).on('click', '.callRegister', function(event) {
			$(this).parents('.flex-position').addClass('openRegisterbox');
			$(this).css('visibility','hidden');
			return false;
		});

});








