async function getWeather(city) {
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${encodeURIComponent(
	  city
	)}`;
	const options = {
	  method: "GET",
	  headers: {
		"X-RapidAPI-Key": "c0caf43f78mshbb5e51495feec8dp103ee3jsnbff7548bd671",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	  },
	};
  
	try {
	  document.getElementById("cityName").innerHTML = city;
  
	  const response = await fetch(url, options);
	  const result = await response.json(); // Parse the JSON response
	  console.log(result);
  
	  // document.getElementById('Cloud_pct').innerHTML = result.cloud_pct
	  document.getElementById("Feels_like").innerHTML = result.feels_like;
	  document.getElementById("Humidity").innerHTML = result.humidity;
	  document.getElementById("Humidity2").innerHTML = result.humidity;
	  document.getElementById("Temp").innerHTML = result.temp;
	  document.getElementById("Temp2").innerHTML = result.temp;
	  document.getElementById("Min_temp").innerHTML = result.min_temp;
	  document.getElementById("Max_temp").innerHTML = result.max_temp;
	  document.getElementById("Wind_speed").innerHTML = result.wind_speed;
	  document.getElementById("Wind_speed2").innerHTML = result.wind_speed;
	  document.getElementById("Wind_degrees").innerHTML = result.wind_degrees;
  
	  const sunriseDateTime = convertUnixTimestampToDateTime(result.sunrise);
	  const sunsetDateTime = convertUnixTimestampToDateTime(result.sunset);
  
	  // Update the DOM elements with the converted times
	  document.getElementById("Sunrise").innerHTML = sunriseDateTime;
	  document.getElementById("Sunset").innerHTML = sunsetDateTime;
	} catch (error) {
	  console.error(error);
	}
  }
  function convertUnixTimestampToDateTime(unixTimestamp) {
	const dateInMilliseconds = unixTimestamp * 1000;
	const dateObject = new Date(dateInMilliseconds);
	let hours = dateObject.getHours();
	const ampm = hours >= 12 ? "PM" : "AM";
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	const minutes = dateObject.getMinutes().toString().padStart(2, "0");
	const seconds = dateObject.getSeconds().toString().padStart(2, "0");
	const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
	return formattedTime;
  }
  
  submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
  });
  
  getWeather("Bhopal");
  
  // *********************************************************************
  async function getWeatherM() {
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai`;
	const options = {
	  method: "GET",
	  headers: {
		"X-RapidAPI-Key": "91d5c929e7msh369f59b1ca0635ep11a503jsn0a6ed5f56235",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	  },
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json(); // Parse the JSON response
	  console.log(result);
  
	  document.getElementById("Cloud_pctM").innerHTML = result.cloud_pct;
	  document.getElementById("Feels_likeM").innerHTML = result.feels_like;
	  document.getElementById("HumidityM").innerHTML = result.humidity;
	  document.getElementById("TempM").innerHTML = result.temp;
	  document.getElementById("Min_tempM").innerHTML = result.min_temp;
	  document.getElementById("Max_tempM").innerHTML = result.max_temp;
	  document.getElementById("Wind_speedM").innerHTML = result.wind_speed;
	  document.getElementById("Wind_degreesM").innerHTML = result.wind_degrees;
  
	  const sunriseDateTime = convertUnixTimestampToDateTime(result.sunrise);
	  const sunsetDateTime = convertUnixTimestampToDateTime(result.sunset);
  
	  // Update the DOM elements with the converted times
	  document.getElementById("SunriseM").innerHTML = sunriseDateTime;
	  document.getElementById("SunsetM").innerHTML = sunsetDateTime;
	} catch (error) {
	  console.error(error);
	}
  }
  getWeatherM();
  
  // *********************************************************************
  async function getWeatherP() {
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune`;
	const options = {
	  method: "GET",
	  headers: {
		"X-RapidAPI-Key": "91d5c929e7msh369f59b1ca0635ep11a503jsn0a6ed5f56235",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	  },
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json(); // Parse the JSON response
	  console.log(result);
  
	  document.getElementById("Cloud_pctP").innerHTML = result.cloud_pct;
	  document.getElementById("Feels_likeP").innerHTML = result.feels_like;
	  document.getElementById("HumidityP").innerHTML = result.humidity;
	  document.getElementById("TempP").innerHTML = result.temp;
	  document.getElementById("Min_tempP").innerHTML = result.min_temp;
	  document.getElementById("Max_tempP").innerHTML = result.max_temp;
	  document.getElementById("Wind_speedP").innerHTML = result.wind_speed;
	  document.getElementById("Wind_degreesP").innerHTML = result.wind_degrees;
	  const sunriseDateTime = convertUnixTimestampToDateTime(result.sunrise);
	  const sunsetDateTime = convertUnixTimestampToDateTime(result.sunset);
  
	  // Update the DOM elements with the converted times
	  document.getElementById("SunriseP").innerHTML = sunriseDateTime;
	  document.getElementById("SunsetP").innerHTML = sunsetDateTime;
	} catch (error) {
	  console.error(error);
	}
  }
  getWeatherP();
  
  // *********************************************************************
  async function getWeatherB() {
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore`;
	const options = {
	  method: "GET",
	  headers: {
		"X-RapidAPI-Key": "91d5c929e7msh369f59b1ca0635ep11a503jsn0a6ed5f56235",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	  },
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json(); // Parse the JSON response
	  console.log(result);
  
	  document.getElementById("Cloud_pctB").innerHTML = result.cloud_pct;
	  document.getElementById("Feels_likeB").innerHTML = result.feels_like;
	  document.getElementById("HumidityB").innerHTML = result.humidity;
	  document.getElementById("TempB").innerHTML = result.temp;
	  document.getElementById("Min_tempB").innerHTML = result.min_temp;
	  document.getElementById("Max_tempB").innerHTML = result.max_temp;
	  document.getElementById("Wind_speedB").innerHTML = result.wind_speed;
	  document.getElementById("Wind_degreesB").innerHTML = result.wind_degrees;
	  const sunriseDateTime = convertUnixTimestampToDateTime(result.sunrise);
	  const sunsetDateTime = convertUnixTimestampToDateTime(result.sunset);
  
	  // Update the DOM elements with the converted times
	  document.getElementById("SunriseB").innerHTML = sunriseDateTime;
	  document.getElementById("SunsetB").innerHTML = sunsetDateTime;
	} catch (error) {
	  console.error(error);
	}
  }
  getWeatherB();
  
  // *********************************************************************
  async function getWeatherH() {
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad`;
	const options = {
	  method: "GET",
	  headers: {
		"X-RapidAPI-Key": "91d5c929e7msh369f59b1ca0635ep11a503jsn0a6ed5f56235",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	  },
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json(); // Parse the JSON response
	  console.log(result);
  
	  document.getElementById("Cloud_pctH").innerHTML = result.cloud_pct;
	  document.getElementById("Feels_likeH").innerHTML = result.feels_like;
	  document.getElementById("HumidityH").innerHTML = result.humidity;
	  document.getElementById("TempH").innerHTML = result.temp;
	  document.getElementById("Min_tempH").innerHTML = result.min_temp;
	  document.getElementById("Max_tempH").innerHTML = result.max_temp;
	  document.getElementById("Wind_speedH").innerHTML = result.wind_speed;
	  document.getElementById("Wind_degreesH").innerHTML = result.wind_degrees;
	  const sunriseDateTime = convertUnixTimestampToDateTime(result.sunrise);
	  const sunsetDateTime = convertUnixTimestampToDateTime(result.sunset);
  
	  // Update the DOM elements with the converted times
	  document.getElementById("SunriseH").innerHTML = sunriseDateTime;
	  document.getElementById("SunsetH").innerHTML = sunsetDateTime;
	} catch (error) {
	  console.error(error);
	}
  }
  getWeatherH();
  