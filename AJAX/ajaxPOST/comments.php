<?php

/**
 * Конфиг подключения к БД
 */

$user = 'root';
$pass = '';

$db = new PDO("mysql:host=127.0.0.1;dbname=comments", $user, $pass);

$comment = trim($_POST['comment']);

addComment($db, $comment);

echo json_encode(getComments($db));

function addComment ($db, $comment) 
{
    $sql = "INSERT INTO comments(comment_text) VALUES(:comment)";
    
    $stmt = $db->prepare($sql);
    $stmt->bindValue(":comment", $comment, PDO::PARAM_STR);
    $stmt->execute();
}

function getComments($db) 
{
    $sql = "SELECT * FROM comments";
    
    $stmt = $db->prepare($sql);
    $stmt->execute();
    
    $res = array();
    
    while($row = $stmt->fetch()) {
        $res[$row['comment_id']] = $row['comment_text'];
    }
    
    return $res;
}