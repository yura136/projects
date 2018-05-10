<?php

// Исключения - дествие не укладывается в работу приложения
$file = "namespace.php";

try {
   if (!file_exists($file)) { // если файл не существует
    throw new Exception("Я не могу найти это файл");
} 
} catch (Exception $ex) {
    echo $ex->getMessage();
}

// свой класс исключения
class NewException extends Exception {
    
}