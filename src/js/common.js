$(document).ready(function () {


	/* ===== hide loader ====*/

	setTimeout(function () { $('.iwda-loader').hide(); }, 1500);

	$('.iwda-callapp button').on('click', function () { $(this).blur() });// delete focus

	$('.iwda-callapp .iwda-select__triger').on('click', function () {
		$(this).parents('.iwda-select').find('.iwda-select__list').slideToggle();
		$('.iwda-callapp .iwda-select__option').on('click', function () {
			var value = $(this).html();
			$('.iwda-callapp .iwda-select__value').html(value);
			$(this).parents('.iwda-select').find('.iwda-select__list').slideUp();
		})
	});

	$('#iwdaMakeCall').on('click', function () {
		$('.iwda-ready').hide();
	});


	$('.iwda-status__name').on('click', function () {
		$('.iwda-status').addClass('iwda-status__open');
		$('.iwda-status__item').on('click', function () {
			$('.iwda-status__item').removeClass('iwda-status__item_active');
			$(this).addClass('iwda-status__item_active');
			$('.iwda-status').removeClass('iwda-status__open');
		})
	});


	$('.iwda-callapp__wrap .iwda-callbtn__up').on('click', function () {
		$('.iwda-callapp__wrap').hide();
		$('.iwda-activecall').show()
	});
	$('.iwda-callbtn__down').on('click', function () {
		$('.iwda-callapp__wrap').show();
		$('.iwda-activecall').hide()
	});
	$('#incomingCall').on('click', function () {
		$('.iwda-callapp__wrap').hide();
		$('.iwda-activecall').show();
		$('.iwda-activenumber').show();
		$('.iwda-activecall__descr').text('Incoming Call...');
		$('.iwda-callbtn__up').show();
		$('.iwda-callbtn__wait').show();


	});
	$('.iwda-activecall .iwda-callbtn__up').on('click', function () {
		$('.iwda-activecall__loader').addClass('iwda-hidden');
		$('.iwda-callbtn__up').hide();
		$('.iwda-callbtn__wait').hide();
		$('.iwda-options').show();
		$('.iwda-activecall__time').show();
		$('.iwda-activecall__descr').text('In a Call With');
		$('.iwda-callbtn__title').hide();
	});

	$('.iwda-options__pad').on('click', function () {
		$('.iwda-activenumber').toggle();
		$('.iwda-activecall .iwda-pad').toggle();
		$('.iwda-options.options_incall').toggleClass('iwda-options_incall');
		$('.iwda-activecall__number').toggleClass('iwda-activecall__number_inpad');
		$('.iwda-activecall__descr').toggle();
		$('.iwda-pad__input').toggle();
		$(this).toggleClass('iwda-options__pad_active');
		$('.iwda-options').toggleClass('iwda-options_inpad')
	});

	$('.iwda-pad__item').on('click', function () {
		$('.iwda-pad__input').html($('.additional_element_input').html());
	});

	$('#Error').on('click', function () {
		$('.iwda-notification').show();
	});






});