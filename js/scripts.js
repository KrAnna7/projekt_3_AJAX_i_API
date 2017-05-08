// plik scripts.js
var url = 'https://restcountries.eu/rest/v1/name/';
var urlflag = 'http://flagpedia.net/';/*nie działa?*/
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();// dlaczego nie np .text()?
if (!countryName.length) countryName = 'Poland';
$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
});	
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {

		var countryCode = item.alpha2Code;
		var countryLine = $('<div>').addClass("row").appendTo(countriesList);
		var flag = $('<img>').attr('src', 'http://www.geonames.org/flags/x/' + countryCode.toLowerCase() + '.gif').attr('alt','flaga ' + item.name).addClass("flag col col-1").css("display", "block").appendTo(countryLine);
		var countryPlace = $('<li>').text(item.name).addClass("kraj col-col-6").appendTo(countryLine);

		$('<p>').text('Podstawowe informacje: ').appendTo(countryLine);
		var basicInfo = $('<table></table>').appendTo(countryLine);
		var capitalLine = $('<tr></tr>').appendTo(basicInfo);
		var capital = $('<th>').text('Stolica: ').appendTo(capitalLine);
		var capitalName = $('<td>').text(item.capital).appendTo(capitalLine);
		var areaLine = $('<tr></tr>').appendTo(basicInfo);
		var area = $('<th>').text('Powierzchnia: ').appendTo(areaLine);
		var areaValue = $('<td>').text(item.area + ' km^2').appendTo(areaLine);
		var languageLine = $('<tr></tr>').appendTo(basicInfo);
		var language = $('<th>').text('Język urzędowy: ').appendTo(languageLine);
		var languageName = $('<td>').text(item.languages).appendTo(languageLine);
		var currencyLine = $('<tr></tr>').appendTo(basicInfo);
		var currency = $('<th>').text('Waluta: ').appendTo(currencyLine);
		var currencyName = $('<td>').text(item.currencies).appendTo(currencyLine);
		var populationLine = $('<tr></tr>').appendTo(basicInfo);
		var population = $('<th>').text('Liczba ludności: ').appendTo(populationLine);
		var populationValue = $('<td>').text(item.population).appendTo(populationLine);
		$('<p>').text('-').appendTo(countryLine);

		console.log(countryPlace);
	});
}
