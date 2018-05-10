<?php

$username = 'root';
$password = '';

try {
    $conn = new PDO('mysql:host=127.0.0.1;dbname=testDB', $username, $password);
    // Режим генерации исключений
    $conn ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Проверка на заполненость полей формы
    if (empty($_POST['name'])) exit('Заполните поле');
    if (empty($_POST['content'])) exit('Заполните поле');
    
    $query = "INSERT INTO message VALUES (NULL, :name, NOW())";
    $msg = $conn->prepare($query);
    $msg->execute(['name' => $_POST['name']]);
    
    $msg_id = $conn->lastInsertId();
    
    $query = "INSERT INTO message_content VALUES (NULL, :content, :message_id)";
    $msg = $conn->prepare($query);
    $msg->execute(['content'=> $_POST['content'], 'message_id' => $msg_id]);
    
    //Переадресация
    header("Location: mysqli.php");
} catch (PDOException $e) {
//    $conn->rollBack();
}


// Закрытие соединения 
$conn = null;
