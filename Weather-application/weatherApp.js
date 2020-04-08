
var input;
let city = 'London';
const api = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=7330e2fdd5a5cb37fb74efb58e44552e&units=metric';

function ask()  {
  	city = document.getElementById("myInput").value;
	let temperatureDescription = document.querySelector(".temperature-desription");
	let temperatureDegree = document.querySelector(".temperature-degree");
	let locationTimezone = document.querySelector(".location-timezone");
	let pressureDescription = document.querySelector(".pressure-text");
	let humidityDescription = document.querySelector(".humidity-text");
  	var url = api+city+apiKey;
	fetch(url).then(response =>{
		return response.json();
	})
	.then(data =>{
		console.log(data);
		
		//set DOM elements from the API
		var iconurl = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
		temperatureDegree.textContent = data.main.temp;
		temperatureDescription.textContent = data.weather[0].description;
		locationTimezone.textContent = data.timezone+" "+data.name;
		pressureDescription.textContent = data.main.pressure;
		humidityDescription.textContent = data.main.humidity;
		$('#wicon').attr('src', iconurl);
	});
 }
//7330e2fdd5a5cb37fb74efb58e44552e