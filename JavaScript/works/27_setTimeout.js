function func() {
	console.log("Hallo");
}

// Через 3 с отобразиться в консоли
setTimeout(func, 3000);

// С передачей параметров
function f(phrase, who) {
	console.log(phrase + ', ' + who);
}
setTimeout(f, 3000, "Hallo", "Yura");

setTimeout("console.log('Hallo world')",2000);

// Отмена действия
var timeId = setTimeout(function() {console.log(1);}, 1000);
clearTimeout(timeId);
console.log(timeId);


// setInterval - повторы каждую секунду
var timeId = setInterval(function() {
	console.log("tik");
}, 1000);

// Через 5 секунд остановить повторы
setTimeout(function() {
	clearInterval(timeId);
	console.log('stop');
},  5000);

/*// Рекурсивынй setTimeout - тоже повторы, замена setInterval
var  timeId = setTimeout(function tick() {
	console.log("tik");
	timeId = setTimeout(tick, 2000);
}, 2000);
*/