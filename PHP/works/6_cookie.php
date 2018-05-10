<?php

//// Установака cookies
//$cookie_name = "user";
//$cookie_value = "cookie user";
//// Функция setcookie() перед html - структурой
//setcookie($cookie_name, $cookie_value, time() + 86400); // пропадет через 1 день
//
//if (!isset($_COOKIE[$cookie_name])) {
//    echo "cookie name $cookie_name";
//    echo "cookie value $cookie_value";
//}
//
//// удалить cookie
////setcookie($cookie_name, $cookie_value, time() - 86401);
//
//// Включены или нет
//if (count($_COOKIE) > 0) {
//    echo "cookie are enabled";
//}
//else {
//    echo "cookie are disbabled";
//}
// Счетчик посещения страниц
//$counter = isset($_COOKIE['counter']) ? $_COOKIE['counter'] : 0;
$counter = $_COOKIE['counter'] ?? 0;
$counter++;
setcookie("counter", $counter);
echo $counter;
