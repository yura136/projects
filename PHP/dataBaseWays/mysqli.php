<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'testDB2';

// Объектно - ориентированный способ
$conn = new mysqli($serverName, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection falled: " .$conn->connect_error);
}
echo "Connection sucessefully<br>";

// создание базы данных
//$sql = "CREATE DATABASE testDB2";

//Создание таблицы
//$sql = "CREATE TABLE users(
//        name VARCHAR(30) NOT NULL, 
//        surname VARCHAR(30) NOT NULL PRIMARY KEY, 
//        password VARCHAR(30) NOT NULL)";

//if ($conn->query($sql) === TRUE) {
//    echo "Created successfully";
//} else {
//    echo "Error " . $conn->error;
//}
//$sql = "INSERT INTO users VALUES ('e1wq', 'gfd', '4545');";
//$sql .= "INSERT INTO users VALUES ('ewqe', '1rewr', '333');";
//$sql .= "INSERT INTO users VALUES ('ewqeewqe', 'w1erwe', '89798')";
//
//if ($conn->multi_query($sql) === true) {
//    echo "record created";
//} else {
//    echo 'error' . $conn->error;
//}

    $sql = "SELECT *FROM users";
    
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo "<br> name: " . $row['name'] 
                    . "<br> surname: " . $row['surname']
                    . "<br> password " . $row['password'];
        }
    }

// Закрываем соединение 
$conn->close();

