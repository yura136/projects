<?php
// Сессии
session_start(); // старт сессии
?>

<!DOCTYPE html>
<html>
    <head>
        <title>My session</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <?php 
            $_SESSION["favcolor"] = "red";
            $_SESSION["favpage"] = "home";
            echo  $_SESSION["favcolor"];
            echo $_SESSION["favpage"];
           // Уничтожение сессий 
           session_unset(); // уничтожить все глобальные сессии
           session_destroy(); // уничтожить сеанс
            echo $_SESSION["favcolor"];
        ?>
    </body>
</html>