// Булевые (логический) тип - принимает одно из 2-х значений true или false
console.log(5 === 5); // true
console.log(5 === 6); // false

//Любое выражение может быть преобразовано в логическое
// Для этого преобразования, мы используем конструктор булевого типа Boolean
console.log(Boolean(5)); // true

// Falsy values (все принимают значения false) - undefined, null, 0, NaN, пустая строка ""
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));

console.log(Boolean(" ")); // true, так как строка не пустая !!!

var s = "Text";
// Инструкция выполняется, так как при преобразовании к логическому типу - true
if (s) {
	console.log("Its true");
}

// Логические операторы
// Логический И - && (false - когда хотя бы один из операндов false)
console.log(true && false); // false
console.log(true && true); // true

// Логическое ИЛИ - || (true - когда хотя бы один из операндов true)
console.log(true || false); // true

// Унарный - оператор логического отрицания !
console.log(!false); // true


// выражение1 && выражение2 (выражение2 вычисляем только если левый операнд true)
var a = 0, 
	isTrue = true;

isTrue && (a = 5);
console.log(a); // 5, так как isTrue - true (истино), мы вычисляем a = 5


// Логическое ИЛИ || (левый операнд || правый операнд), если левый - true, то правый не вычисляется
var someString = "Non-emty string"; // true, так как не пустая строка
var newString = someString || "Default String";
console.log(newString); // Non-emty string