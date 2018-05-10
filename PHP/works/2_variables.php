<?php
// Переменные и типы данных
$var = 5;
// Выводит тип переменной
echo gettype($var);

// Проверяем на существование
if(isset($var)) {
    echo "переменная существует" . $var;
}

// Удаляем
echo $var;
unset($var);
echo $var;
 // Константы
define ("pi", 3.14);
echo pi;

//Отладочные функции
$a = array ("a" => "apple", "b" => "car", "c" => "dog");
echo "<br>";
print_r($a); // Array ( [a] => apple [b] => car [c] => dog ) 
echo "<br>";
var_dump($a); // array(3) { ["a"]=> string(5) "apple" ["b"]=> string(3) "car" ["c"]=> string(3) "dog" } 
echo "<br>";
var_export($a); // array ( 'a' => 'apple', 'b' => 'car', 'c' => 'dog', )


