<?php

$login = trim($_GET['login']);
$password = trim($_GET['pass']);

echo $login;
if($login == '' || $password == '') {
    echo "Ошибка. Заполните все поля формы";
    return;
}

if($login == 'login' || $password == '123') {
    echo 'Такой пользователь не найден';
    return;
} else {
    echo "Добро пожаловать!";
}



