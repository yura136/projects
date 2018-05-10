// Числовой тип (вещественные и целые)
console.log(2 << 8); // 512
// Числовые литерал:
// десятичная система исчеления: 10, 5
// 16-ная: 0xbbbccc
// 8-ая: 0345, но 0348 это 10-ная, так 8>7
// 12.345, .895 - c плавающей точкой, 1.34e-30 - экспоненциальная запись

// Объекты обертки для простых типов
// Конструктор - функция для создания объектов, с большой буквы
// Используем конструктор Number:
var N = new Number(40),
	n  = 500; // литерал простого типа
console.log(typeof N); // тип object
console.log(N.toFixed(5)); // 40.00000 (кол-во знаков после точки)

// Интерпретатор создает обертки объекты на лету
console.log(n.toFixed(3)); // 500.000
console.log(3 .toFixed(3)); // 3.000
console.log(n.toExponential(4)); // 5.0000e+2 - экспоненциальная форма 
var v = 10.369;
console.log(v.toPrecision(4)); // 10.37
console.log(v.toPrecision(6)); // 10.3690
console.log(v.toPrecision(2)); // 10
console.log(v.toPrecision(1)); // 1e+1

// Арифметические операторы
// Унарные:   +, - , инкремента ++, дикремента --
var i = 10;
console.log(++i); // префиксный - 11, вначале увеличивает, а потом возвращает
console.log(i++); // постфиксный - 11, не 12, т.к в начале возвращает, а потом увеличивает
console.log(i); // 12

// Бинарные операторы: + - / * %
console.log(10/3); // 3.3333333333333335
console.log(10%3); // остаток от деления 1    

//Сокращенная форма записи +=  -=  *=  /=  
var m = 10;
m  += 20;  // m = m + 20;
console.log(m); //30 
console.log(m *=2); // 60

// Операторы отношения > < >= <= === !==
console.log(5 > 10); // false
console.log(10 == "10"); // true, так как приведение типов
console.log(10 === "10"); // false

// Объект Math
console.log(Math.sqrt(25)); // 5
console.log(Math.pow(2,6)); // 64
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

console.log(1e+308); //1e+308
console.log(1e+309); // Infinity - бесконечность
console.log(-1e+309); // -Infinity - минус бесконечность 
console.log(typeof Infinity); // number

console.log(Infinity*5); // Infinity
console.log(Infinity + 10); // Infinity
console.log(Infinity * Infinity * Infinity);  // Infinity

console.log(1e-323); // 1e-323
console.log(1e-324); // 0 - underflow (выход за пределы)

// Деление на ноль
console.log(5/0); // Infinity

// Нюансы (не число)
console.log(0/0); // NaN
console.log(Infinity/Infinity); // NaN
console.log(Math.sqrt(-5)); // NaN

console.log(NaN === NaN); // false

// Ошибки округления
console.log(0.2 * 0.1); // 0.020000000000000004
console.log(2*0.01); // 0.02
// Нужно работать с целыми числами (до 15 нулей)