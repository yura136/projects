<?php

// Работа с файлами

// readfile() - считывает файл и записывает его в выходной буфер
//echo readfile("lorem.txt");
$lorem = fopen("lorem.txt", "r" ) or die("Не удалось найти");
//echo fread($lorem, filesize("lorem.txt"));
//fclose($lorem);

//echo fgets($lorem, 4);
//echo "<br>";
//echo fgets($lorem, 2);
//while (!feof($lorem)) {
//    echo fgets($lorem, 55);
//}

$hallo = fopen("world.txt", "w");
$txt = 'Привет меня создали';
fwrite($hallo, $txt);