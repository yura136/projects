<?php
require_once '19_namespace.php';
$obj = new \Home\User("Yura", 1212, "yura@mail.ru", "Минск");
echo $obj->getInfo(); // Yura 1212 yura@mail.ru Минск

