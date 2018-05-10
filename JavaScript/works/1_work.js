function isInteger(num) {
	return (num^0) === num; 
}

console.log(isInteger(1));
console.log(isInteger(1.5));
console.log(isInteger(-0.5));

var userName = prompt("What is your name?", "");
console.log("My name is " + userName); // My name is null - если cancel or escape

var nameJavaScript =  prompt("Каково \"официальное\" название JavaScript", "");

if (nameJavaScript === "EcmaScript") {
	console.log("Верно!");
} else {
	console.log("Не знаете? \"EcmaScript\"!");
}

var num = prompt("Введите ваше значение: ", "");

if (num > 0) {
	console.log(1);
} else if (num < 0) {
	console.log(-1);
} else {
	console.log(0);
}

var yourLogin = prompt("Кто пришел?", "");

if (yourLogin === "Админ") {
	var password = prompt("Пароль?", "");

	if (password === "Черный Властелин") {
		console.log("Добро пожаловать!");
	} else if (password === null) {
		console.log("Вход отменен");
	} else {
		console.log("Пароль неверен");
	}

} else if(yourLogin === null) {
	console.log("Вход отменен");
} else {
	console.log("Я вас не знаю");
}

var result = (a + b < 4) ? "Мало" : "Много";

var message;

message = (login == "Вася") ? "Привет" : 
		(login == "Директор") ? "Здравствуйте" :
		(login == "Нет логина") : 
		""; 