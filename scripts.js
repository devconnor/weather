API_KEY = "cd61d515549a4e8a3dead26239fa5de3";


function getCity() {
	
	return user_city;
}


$(document).ready(function() {

	$("#searchButton").click(function() {
		var user_city = $("#cityInput").val();	
		URL = "http://api.openweathermap.org/data/2.5/weather?q=" + user_city + "&appid=" + API_KEY;
		getData();
	})

})

function toFahrenheit(data) {
	final = data*(9/5) - 459.67;
	return final;

}



function getData() {
	$.getJSON(URL, function(data) {
		tempInFah = toFahrenheit(data["main"]["temp"]);
		$(".results").html(tempInFah);
	});
}