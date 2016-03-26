var temp = document.getElementById('temp');
var condition = document.getElementById('condition');
var time = document.getElementById('time');



function loop(){
	current = new Date();
	hours = current.getHours();
	seconds = current.getSeconds();
	minutes = current.getMinutes();
	time.innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
}


setInterval(loop, 500);

var callbackFunction = function(data) {
	var weather = data.query.results.channel.item.condition;
	console.log(weather);
	updateWeather(weather);
};

function updateWeather(weather){
	temp.innerHTML = weather.temp;
	condition.innerHTML = weather.text;
}