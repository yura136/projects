/*var num1 = prompt("Введите первое число:", "");
var num2 =prompt("Введите второе число", "");

console.log(+num1 + +num2);*/

/*console.log(+(0.1 + 0.2).toFixed(2) + "$");*/

/*var i = 0;
while(i < 11) {
	i += 0.2;
	if (i > 9.8 && i < 10.2) console.log(i);
}*/
/*function getDecimal(num) {
	var str = "" + num;
	var zeroPos = str.indexOf(".");
	if (zeroPos == -1) return 0;  // Так как indexOf возращает -1, если не находит точку
	str = str.slice(zeroPos);
	return +str;
}

console.log(getDecimal(5));

function fib(n) {
	var a = 1, b = 1;
	for (var i = 2; i < n; i++) {
		c = a + b;
		a = b;
		b = c;
	}
	return c;
}

function fibBinet(n) {

	var phi = (1 + Math.sqrt(5)) / 2;
	var result = Math.round( Math.pow( phi, n ) /Math.sqrt(5) );
	return result;

}

console.log(fibBinet(77));
console.log(fib(77));

var max = 10;
console.log(Math.random() * max);

function randomInteger (min, max) {
	var rand = min + Math.random(rand) * (max + 1 - min); // 2.99 + 1
	rand = Math.floor(rand); // 3.99 -> 3
	return rand;
}

console.log(randomInteger(10, 40));

var str = "Widget with id";

console.log(str.lastIndexOf("id"));
console.log("123456789".substring(-5)); // -5 становиться 0, 0123456789
console.log("0123456789".slice(-5)); // 56789
*/

function ucFirst(str) {
	if (!str) return str;

	return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("николай"));

function checkSpam(str) {
	var lowerStr = str.toLowerCase(); // все в строчные буквы

	return !!(~lowerStr.indexOf("viagra") || ~lowerStr.indexOf("xxx"));
}

console.log(checkSpam("xX"));

function truncate(str, maxlength) {
	if (str.length > maxlength ) {
		return str.slice(0, maxlength - 3) + "...";
	}
	return str;
}

console.log(truncate("What is your name?" , 40));

function extractCurrencyValue(str) {
	return +str.slice(1);
}

console.log(extractCurrencyValue("$120"));