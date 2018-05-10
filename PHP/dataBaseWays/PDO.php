<?php

$username = 'root';
$password = '';

try {
    $conn = new PDO('mysql:host=127.0.0.1;dbname=testDB3', $username, $password);
    // Режим генерации исключений
    $conn ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    //$sql = 'CREATE DATABASE testDB3';
   
    //Создание таблицы
//$sql = "CREATE TABLE users(
//        name VARCHAR(30) NOT NULL, 
//        surname VARCHAR(30) NOT NULL PRIMARY KEY, 
//        password VARCHAR(30) NOT NULL)";
//    
    //Добавим записи
//    $sql = "INSERT INTO users VALUES ('YURA', 'MISi', '588')";
    

//    $last_id = $conn ->lastInsertId();
//    echo "last id" . $last_id;
//    
    //Инициализация транзакции
//    $conn ->beginTransaction();
//    
//    $conn->exec("INSERT INTO users (name, surname, password) VALUES ('YURA', 'IVANOV', '482')"); 
//    $conn->exec("INSERT INTO users (name, surname, password) VALUES ('MAKS', 'MAKSIMOV', '533')"); 
//    $conn->exec("INSERT INTO users (name, surname, password) VALUES ('DAF', 'DAFIDOV', '222')"); 
//    
//    $conn->commit();

    
    echo 'record created';
} catch (PDOException $e) {
//    $conn->rollBack();
}


// Закрытие соединения 
$conn = null;

