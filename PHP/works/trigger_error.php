<?php

// Генерация собственных ошибок

function print_age($age)
{
    $age = intval($age);
    if ($age < 0)
    {
        trigger_error("Функция print_age(): " .
                "возраст не может быть" . 
                " отрицательным ", E_USER_ERROR);
    }
    
    echo "Возраст составляет: $age";
}

print_age(-10); // Fatal error: Функция print_age(): возраст не может быть отрицательным in 
// G:\OpenServer\domains\localhost\errors\trigger_error.php on line 12


