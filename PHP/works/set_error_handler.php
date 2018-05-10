<?php ## Недостатки set_error_handler
echo "Начало программы.<br>";
set_error_handler("handler");

{
    // Код в котором перехватываются исключения
    echo 'Все что имело начало...<br>';
    // Генерируем исключение
    trigger_error("Hello!");
    echo "...имеет и конец.<br>";
}

// Функция обработчик
function handler($num, $str) 
{
    // Код обработчика
    echo "Ошибка: $str<br>";
    exit();
} 

//За счет exti()
/*Начало программы.
Все что имело начало...
Ошибка: Hello!
 */
