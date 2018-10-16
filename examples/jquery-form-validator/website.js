function formControl() {

	/* Událost reaguje na ukončení editace formulářového pole.  */
	$('input[data-regex]').on('blur', function() {
		var element = $(this);
		checkForm(element);
	});
	
	/* Událost reaguje na odeslání formuláře a kontroluje, zda jsou formulářová pole vyplněna správně */
	$('form').on('submit', function(event) {
		// event.preventDefault();
		checkAll();
		
		if($('input.invalid').length > 0) {
			alert('Před odesláním zkontrolujte formulář');
			return false;
		} else {
			// $(this).unbind('submit').submit();
			return true;
		}
	});
		
	/* Funkce ověřuje shodu zadání s požadovaným vzorem. Není-li zadání správné, zobrazí se chybové hlášení. Lze kombimovat i s HTML5 validací a atributem pattern */
	function checkForm(element) {
		var value = $(element).val();
		var pattern = $(element).data('regex');
		var message = $(element).data('message');
		
		if(value.match(pattern) || value == '') {
			$(element).removeClass('invalid').unbind('keyup').closest('div.formrow').find('span.error').remove();
		} else {
			$(element).addClass('invalid').closest('div.formrow').not(':has(.error)').append('<span class="error">' + message + '</span>');
			checkRepairs(); /* Funkce průběžné opravy, viz. komentář */
		}
	}
	
	/* Zlepšení uživatelské přívětivosti. Pokud vznikne pole s chybným zadáním, bude kontrolováno v průběhu celé editace, nikoli po jejím ukončení, aby uživatel věděl, zda jsou již informace zadány správně */
	function checkRepairs() {
		/* Událost reaguje na ukončení stisku klávesy ve formulářových polích označených za nevalidní */
		$('input.invalid').unbind('keyup').on('keyup', function() {
			var element = $(this);
			checkForm(element);
		});
	}
	
	/* Kontrola všech vstupních polí formuláře */
	function checkAll() {
		$('input[data-regex]').each(function() {
			var element = $(this);
			checkForm(element);
		});
	}

}
