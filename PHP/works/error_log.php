<?php

// Запись сообщений об ошибке файл, а не только выводить их в браузер
error_reporting(E_ALL);
ini_set("error_log", "log1.txt");
error_log("Ошибка", 0); // Добавилось в файл log1.txt Обибка в начало

// Добавил в конец файла log.txt, Ошибка в конце
error_log("Ошибка в конце", 3, "log.txt"); 

filemtime("ddd");

