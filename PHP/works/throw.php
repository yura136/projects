<?php

// Раскрутка стека
// Важная особенность throw, что она может вызываться внутри функций,
// и происходит выход не только из функции, но и из все промежуточных процедур

echo "Начало программы.<br>";
try {
    echo "Начало try-блока.<br>";
    outer();
    echo "Конец try-блока.<br>"; 
} catch (Exception $e) {
    echo "Исключение: {$e->getMessage()} <br>";
}

echo "Конец программы";

function outer() {
    echo "Вошли в функцию ".__METHOD__."<BR>";
    inner();
    echo "Вышли из функции".__METHOD__."<br>";
}

function inner() {
    echo "Вошли в функцию ".__METHOD__."<BR>";
    throw new Exception("Hello!");
    echo "Вышли из функции".__METHOD__."<br>";
}

/* Начало программы.
Начало try-блока.
Вошли в функцию outer
Вошли в функцию inner
Исключение: Hello! 
Конец программы */


