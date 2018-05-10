<?php

// Простой пример использвания исключений
echo "Начало программы.<br>";
try {
    // Код который перехватывают исключения
    echo "Все, что имеет начало...<br>";
    
    // Генерируем ("выбрасываем") исключение
    throw new Exception("Hello!");
    echo "...имеем и конец.<br>";
} catch (Exception $e) {
    // Код обработчика
    echo " Исключение: {$e->getMessage()}<br>";
}
echo "Конец программы";

