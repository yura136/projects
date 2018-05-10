// проверка на аргумент
function f(x) {
	console.log(arguments.length ? 1 : 0); // argument.length - дли псевдо массива 
}
f(undefined); // 1
f(); //0


// Сумма всех аргуентов
function sum() {
	var result = 0;
	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return console.log(result);
}
sum(); // 0
sum(1);  // 1
sum(1, 2); // 3
sum(1, 2, 10);  // 13