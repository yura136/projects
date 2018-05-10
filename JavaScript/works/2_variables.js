/* 
Переменная состоит из имени и выделенной области памяти, которая ему соответсвует.
*/

// Объявление (создание) переменной используется ключевое слово var
var message;
// Записываем в переменную данные. Данные сохраняются в соответств. области памяти, в дальнейшем доступны при обращение по имени.
message = "Hello!";
// Доступ к данным при обращение по имени
alert(message); // Hello!

// Совмещаем объявление и запись данных
var name = "Yura";

// Объявление нескольких переменных сразу
var user = "Yura", age = "29", gender = "mail";

// Значение переменной можно менять сколько угодно раз, при изменение старое значение удаляется
message = "World";
message = 5; // Так как язык JavaScript не типизирован
message = {x: 5, y: 10};
console.log(message); // {x: 5, y: 10}

// Копируем одну переменную в другую
var hello = "Hello world!";
var mes;
mes = hello;
console.log(mes); // Hello world!

/* 
Имя переменной
1. Состоит из: букв, цифр, $, _
2. Первый символ не цифра
Нельзя использовать зарезервированные имена - class, var, return, export ...
*/
var _4; var $test; var _; var $; var test; var Вася; // русские можно, но не рекомендуется
// var 1_fd; var java-script - неправильно

// Регистр важен  myName != MyName
/*
	Строгий режим  (всегда вначале кода)
	"use strict";
	num = 5;  // ошибка нужно обязатлеьно var
*/

/*
Константы - это переменная, которая никогда не меняется (большими буквами, через подчеркивание).
Конечно это обычная переменная, но ее договорились не менять.
*/
var COLOR_RED = "#FOO"; // Понятный псевдоним для красного цвета
var color = COLOR_RED;
console.log(color); // #FOO

/* Задачи для выполнения */
var admin, name;  // Объявили переменные
name = "Василий"; // Записали данные
admin = name;   // Скопировали значение из name в admin
console.log(admin); // Василий