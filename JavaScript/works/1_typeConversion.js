// Преобразование типов
/*Автоматическая конвертация типов, если интерпритатор ожидает увидеть значения определенного типа, 
то любое значение будет автоматически приведено к этому типу*/


// Лучше использовать ===, !== чем ==, != !!!

/*АВТОМАТИЧЕСКОЕ ПРЕОБЗРАЗОВАНИЕ ТИПОВ*/
// Один из операндов оператора + является строка, то другой тоже преобразуется в строку
console.log(5 + "5"); // 55
console.log(typeof(5 + "5")); // string

// Оператор *, любые значения в числа
console.log("5" * "2"); // 10
console.log(typeof("5" * "2")); // number

// Если невозможно выполнить преобразование к числу
console.log("5" * "name"); // NaN 
console.log(typeof("5" * "name")); // number

// При операторе сравнения на равенство ==
console.log("5" == 5); // true
console.log("0" == false); // true
// Но !!!
console.log(Boolean("0")); // true, "0"- не пустая строка

console.log(0 == false); // true
console.log("5" == true); // true
console.log("" == false); // true

// null и undefined не равны никаким значениям кроме null и undefined
console.log(null == false); // false
console.log(null == true); // false
console.log(undefined == false); // false
console.log(undefined == true); // false
console.log(undefined == null); // true

console.log(""); // для разделения

/*ЯВНОЕ ПРЕОБРАЗОВАНИЕ ТИПОВ - explicit conversions*/

// Будем использовать конструкторы соответсвующих типов

// При помощи конструктора Number - перевод любого значения в числовой тип
console.log(Number("555")); // 555
console.log(typeof(Number("555"))); // number

// При помощи конструктора String - перевод любого значения в стороковый тип
console.log(String(10)); // 10, как строка "10"
console.log(typeof(String(10))); // string

// При помощи конструктора Boolean - перевод любого значения в булевый тип
console.log(Boolean(1)); // true
console.log(typeof(Boolean(1))); // boolean

// Более короткие записи, с использованием оператора

// Число в логический тип
console.log(!!5); // true
console.log(!!0); // false

// Значение в строку
console.log(345 +""); // 345, как строка "345"
console.log(typeof(345 + "")); // string

// Для преобразования выражение в число, унарный оператор +
console.log(+"10"); // число 10
console.log(+"                    10          "); // число 10, пробелы игнор
console.log(+"          5          10"); // NaN !!!
console.log(+""); // число 0
console.log(+null); // число 0
console.log(+undefined); // NaN
console.log(+NaN); //  NaN
console.log(+true); // число 1
console.log(+"afda"); // NaN

// Преобразование числа в строку (метод toString())
var number = 22;
console.log(typeof number.toString()); // string
console.log(number.toString(2)); // 10110 - radix=2 (основание системы исчисления)
console.log(number.toString(8)); // 26 - radix=8
console.log(number.toString(10)); // 22 
// toStirng(), также есть у объекта boolean, как у любых других объектах
console.log(typeof false.toString()); // string

// Преобразование строки в число (2 глобальные функциии parseInt(), parseFloat)
console.log(parseInt("45 px")); // число 45, px - игнорируются
console.log(parseInt("45 px", 10)); // число 45, где 10 - основание системы исчисления
console.log(parseInt("45 px", 2)); // почему то NaN

console.log(parseFloat("12.45 em", 10)); //число 12.45

/*Различные типы при преобразовании*/
console.log(String(Infinity)); // строка Infinity
console.log(typeof String(Infinity)); // string
console.log(typeof String(NaN)); // string

console.log(+""); // число 0

// Все дают false (при преобразовани к логическому типу) - 5 значений!!!
console.log(!!""); // пустая строка
console.log(!!NaN); // не число (Not a number)
console.log(!!0); // число 0
console.log(!!null); // тип null
console.log(!!undefined); // тип undefined

// Любые другие вернут истину (true)
console.log(!!" "); // true
console.log(!!"Hi"); // true

// Булевы значения в числа - false -> 0, true -> 1
console.log(+true); // 1
console.log(+false); // 0

/*Интерпретатор "на лету" создает объекты обертки для примитивных типов*/
var n = 5;
// Обращение к несуществующему свойства объекта
console.log(n.value); // undefined, переменная "n" преобразовалась в объект
n = "hello";
console.log(n.value); // undefined

// Исключения null, undifined - так как у них нет объектов оберток
n = null;
// console.log(n.value); // typeError
