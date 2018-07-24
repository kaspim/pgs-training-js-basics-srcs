function getWeather(options) {
	
	/* dokumentace: https://openweathermap.org/current */
	
	$.getJSON('https://api.openweathermap.org/data/2.5/weather', {
		appid: options.apikey,
		units: options.units,
		q: options.location
	}).done(function(data) {
		$(options.nowresult).html('<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png" alt="" /> <strong>' + Math.round(data.main.temp) + '°C</strong>');
	});
	
	/* dokumentace: https://openweathermap.org/forecast5 */
	
	$.getJSON('https://api.openweathermap.org/data/2.5/forecast', {
		appid: options.apikey,
		units: options.units,
		q: options.location
	}).done(function(data) {
		$(options.longtherm).html('');
		
		for(var i = 0; i < data.list.length; i++) {
			item = data.list[i];
			
			/* Převod timestamp na lokalizovaný formát času */
			var dt = new Date();
			dt.setTime((item.dt - 7200) * 1000);
			datestring = dt.toLocaleDateString('cs-CZ') + ' ' + dt.toLocaleTimeString('cs-CZ');
			
			$(options.longtherm).append('<div><img src="http://openweathermap.org/img/w/' + item.weather[0].icon + '.png" alt="" /> ' + datestring + ' <br/> teplota ' + Math.round(item.main.temp) + '°C, vítr ' + item.wind.speed + 'm/s</div>');
		}
	});
	
}
