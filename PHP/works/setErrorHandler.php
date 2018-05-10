<?php

// Перехват ошибок
// Определяем функцию обработчик
function myErrorHandler ($errno, $msg, $file, $line) 
{
    if(error_reporting() == 0) return;
    
    echo '<div style = "border-style: inset; border-width: 2">';
    echo "Произошла ошибка с кодом <b> $errno </b>! <br>";
    echo "Файл: <tt>$file</tt>, строка $line.<br>";
    echo "Текст ошибки: <i>$msg</i>";
    echo "</div>";
}

// Регистрируем ее для всех типов ошибок
set_error_handler("myErrorHandler", E_ALL);
// Вызываем функцию для несуществующего файла, что сгенерированное предупреждение было перехвачено
@filemtime("aaa"); // Не помогает все равно выводит, решение добавить if в функцию обработчки

// Включаем подозрительный файл
include 'sus.php';

// Восстанавливаем предыдущий обработчик
restore_error_handler();
@filemtime("vvv"); // и без if работает, так предыдущий обработчик включен
