$(document).ready(function() {


/* ===== hide loader ====*/

	setTimeout(function(){$('.loader').hide();}, 1500);

	$('button').on('click', function(){$(this).blur()});// delete focus

	$('.select__triger').on('click', function(){
		$(this).parents('.select').find('.select__list').slideToggle();
		$('.select__option').on('click', function(){
			var value = $(this).html();
			$('.select__value').html(value);
			$(this).parents('.select').find('.select__list').slideUp();
		})
	});


	$('.status__name').on('click', function(){
		$('.status').addClass('status__open');
		$('.status__list').slideDown();
		$('.status__item').on('click', function(){
			$('.status__item').removeClass('status__item_active');
			$(this).addClass('status__item_active');
			$('.status').removeClass('status__open');
			$('.status__list').slideUp();
		})
	});


	$('.callapp__wrap .callbtn__up').on('click', function(){
		$('.callapp__wrap').hide();
		$('.activecall').show()
	});
	$('.callbtn__down').on('click', function(){
		$('.callapp__wrap').show();
		$('.activecall').hide()
	});
	$('#incomingCall').on('click', function(){
		$('.callapp__wrap').hide();
		$('.activecall').show();
		$('.activenumber').show();
		$('.activecall__descr').text('Incoming Call...');	
		$('.callbtn__up').show();
		$('.callbtn__wait').show();


	});
	$('.activecall .callbtn__up').on('click', function(){
		$('.activecall__loader').addClass('hidden');
		$('.callbtn__up').hide();
		$('.callbtn__wait').hide();
		$('.options').show();
		$('.activecall__time').show();
		$('.activecall__descr').text('In a Call With');	
	});

	$('.options__pad').on('click', function(){
		$('.activenumber').toggle();
		$('.activecall .pad').toggle();
		$('.options.options_incall').toggleClass('options_incall');
		$('.activecall__time').toggle();
		$('.activecall__number').toggle();
		$('.activecall__descr').toggle();
		$('.pad__input').toggle();
	});

	$('.pad__item').on('click', function(){
		$('.pad__input').html($('.additional_element_input').html());
	});

	$('#Error').on('click', function(){
		$('.notification').show();
	});

	

	


});