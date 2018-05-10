<?php

$serverName = 'localhost';
$username = 'root';
$password = '';
$dbname = 'testDB1';

// Процедурный способ
$conn = mysqli_connect($serverName, $username, $password, $dbname);

if (mysqli_connect_error()) {
    die("Connection falled: " . mysqli_connect_error());
}

echo "Connection sucessefully";

// создание базы данных
//$sql = "CREATE DATABASE testDB1";

//Создание таблицы
//$sql = "CREATE TABLE users(
//        name VARCHAR(30) NOT NULL, 
//        surname VARCHAR(30) NOT NULL PRIMARY KEY, 
//        password VARCHAR(30) NOT NULL)";

//if (mysqli_query($conn, $sql) === TRUE) {
//    echo "Created successfully";
//} else {
//    echo "Error " . mysqli_error($conn) ;
//}

// Закрываем соединение 
mysqli_close($conn);