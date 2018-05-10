<?php ## Деструкторы и исключения

// Раскрутка стека- вначале произошел корректный выход из вложенных функций
// с уничтожением всех локальных объектов и вызовов деструкторов, а потом только 
// запустился catch-обработчик

/*
Начало программы.
Начало try-блока.
Создан объект outer.
Создан объект inner.
Внимание, вбрасывание!
Уничтожен объект inner
Уничтожен объект outer
Исключение: Hello! - запустился catch-обработчик
Конец программы
 */

// Класс, комментирующий операции со своим объектом

class Orator 
{
    private $name;
    
    function __construct($name) {
        $this->name = $name;
        echo "Создан объект {$this->name}.<br>";
    }
    
    function __destruct() {
        echo "Уничтожен объект {$this->name}<br>";
    }
}

function outer() 
{
    $obj = new Orator(__METHOD__);
    inner();
}

function inner() 
{
    $obj = new Orator(__METHOD__);
    echo "Внимание, вбрасывание!<br>";
    throw new Exception("Hello!");
}

// Основная программа
echo "Начало программы.<br>";

try {
    echo "Начало try-блока.<br>";
    outer();
    echo "Конец try-блока.<br>";
} catch (Exception $e) {
    echo "Исключение: {$e->getMessage()}<br>";
}

echo "Конец программы";




