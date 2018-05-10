/*var i = 0;
while (++i < 5 ) console.log(i);
console.log("");
i = 0;
while (i++ < 5) console.log(i); // старое i учавствует в сравнение

for (var i = 10; i >= 2; i--) {
	if(!(i % 2)) console.log(i);
}*/
/*
var i = 0;

while (i < 3) {
	console.log("номер " + i + "!");
	i++;
}*/

/*var num = prompt("Введите число больше 100", "");

while (num <= 100) {
	num = prompt("Введите число больше 100", "");
	if (num === null) break;
}*/

/*var num;

do {
	num = prompt('Введите число большь 100', "");
}while ( num <= 100 && num !== null);*/

/*ПРОСТЫЕ ЧИСЛА*/
/*nextPrime:
for (var i = 2; i <= 10; i++) {
	for(var j = 2; j < i; j++) {
		if (i % j === 0) {
			continue nextPrime;
		}
	}
	console.log(i);
}

var browser;

if (browser === "IE") {
	alert("0, да у вас IE!");
	break;
} if else (browser === "Chrome"
	||browser === "Firefox" 
	||browser === "Safari" 
	||browser === "Opera") {
	alert("Да, и эти браузеры мы поддерживаем");
	break;
}  else {
	alert("Мы надеемся, что и в вашем браузере все ок!");
}
*/

/*function checkAge(age) {
	return (age > 18) ? true : confirm("Родители разрешили?");
	return (age > 18) || confirm("Родители разрешили?")
}

function min(a, b) {
	return (a < b) ? a : b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));*/

var x = prompt("Введите число ", "");
var n = prompt("Введите степень числа", "");

function pow(x, n) {
	var result = x;

	for (var i = 1; i < n; i++) {
		result *= x;
	}

	return result;
}

if (n <= 1) {
	console.log("Введите степень большую 1");
} else {
	console.log(pow(x, n));
}
