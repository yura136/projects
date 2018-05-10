<?php

// Стек вызовов функций
// debug_backtrace() - выводит массив (промежуточные вызовы функции)

function inner($a) 
{
    // Внутренняя функция
    echo "<pre>"; print_r(debug_backtrace()); echo "</pre>";
}
function other($x) 
{
    // Родительская функция
    inner($x * $x);  
}

// Главная программа
other(3);

