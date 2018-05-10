// null, undefined - оба обозначают отсутсвие значения
// null - пустое значение
// undefined - полное отсутствие какого-либо значения вообще

// !!!
console.log(null == undefined); // true
console.log(null === undefined); // false, так как разные типы


// Тип литерал null, определяеся как object
console.log(typeof null); // object
console.log(typeof undefined); //undefined


// Когда встречается undefined
// Не инициализированная переменная
var temp;
console.log(temp); // undefined

// Создадим какой-то объект, без свойств
var obj = {};
// Хотим обратиться к несуществующему свойству объекта
console.log(obj.property); // undefined

// Обращение к несуществующему элементу массива
var a = [1,2,3,4];
console.log(a[4]); // undefined

// При работе с функциями, когда мы не передаем параметры, то значения этих параметров будет undefined
function greet(name) {
	return "Hello " + name;
}

console.log(greet("all")); // Hello all
console.log(greet()); // Hello undefined

// Если функция не возвращает никакого значения, то возвращаемое значение будет undefined
function sum(a,b) {}

console.log(sum(5,6)); // undefined

