/*Условные инструкции*/

// if(выражение) инструкция. Если выражение истино, то выражение выполняется
if (true) console.log("Its true"); // Its true
if (false) console.log("Its true"); // не выполнится

// Блок инструкций (или одна инструкция)
var n = 5;
// Первая форма записи
if (n > 3) {
	n = 3;
	console.log(n);
}
// Вторая форма записи
if (n > 1)
{
	n = 3;
	console.log(n);	
}

n = 5;
if (n < 3) {
	console.log(n);
}else if( n > 3 && n <= 4) {
	console.log("n is not less than 3 and n is not more than 5");
}else {
	console.log("n is more 4");
} 

// else if для перебора 
var name = "Yura", homecity;

if (name === "John") {
	homecity = "Boston"
}else if (name === "Yura") {
	homecity = "Minsk";
}else if (name === "Jack") {
	homecity === "LA";
}else if (name === "Pit") {
	homecity = "Washington"
}
console.log(homecity);

// Для перебора придумали более удобную инстуркцию switch
name = "Pit";
switch(name) {
	case "John": homecity = "Boston"; break;
	case "Yura": homecity = "Minsk"; break;
	case "Jack": homecity = "LA"; break;
	case "Pit": homecity = "Washington"; break;
	default: homecity = "Everywhere"
}
console.log(homecity);

// Тернарный оператор
// Синтаксис: test(условие) ? выражение2 : выражение3
// Если выражение1 истино - то выражение2, если ложь - выражение3

var x = 15;
var text = x > 10 ? "х больше десяти" : "х меньше десяти";
console.log(text);

x = 10;
var text = x > 10 ? "х больше десяти" : x < 10 ? "х меньше десяти" : "х равен десяти";
console.log(text);

// Тоже самое при помощи условной инструкции
if (x > 10) {
	text = "x больше десяти"
}else if(x <10) {
	text = "х меньше десяти"
}else {
	text = "х равен десяти"
}
console.log(text);

// Оператор запятая (, - бинарный оператор)
// Синтаксис: выражение, выражение
// Оператор , вычисляет значение левого операнда, затем значение правого операнда, затем выводит значение правого 

var test = (15,20); // Скобки обязательны, поскольку без них запятая будет являться частью инстукции объявления.
console.log(test); // 20
console.log((test, "Hello")); // Hello
