var temp = document.getElementById('temp');
var condition = document.getElementById('condition');
var time = document.getElementById('time');

function openFile () {
  // dialog.showOpenDialog(function (fileNames) {
  // }); 
  console.log('yo man');
  makeRequest();
}

function loop(){
	current = new Date();
	hours = current.getHours();
	seconds = current.getSeconds();
	minutes = current.getMinutes();
	time.innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
	'(K - 273.15)* 1.8000 + 32.00';
}

setInterval(loop, 500);

function makeRequest(){
	httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', 'http://api.openweathermap.org/data/2.5/forecast/city?q=santamonica&APPID=04df67653af1210c19cc9736a51e25b1');
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
      	
        	console.log(httpRequest.responseText);
    	
	}
}

function updateWeather(weather){
	temp.innerHTML = weather.temp;
	condition.innerHTML = weather.text;
}