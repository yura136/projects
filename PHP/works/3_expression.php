<?php

// Выражение - все что имеет значение
$a = 5; // 5 - выражение -> $a - выражение содержит 5
$b = $a; 
$a = ($b = 10);
$str = 'Hello д\'Артаньян';
echo $str; // Hello д'Артаньян
echo "$str"; // Hello д'Артаньян
echo '$str'; // $str - не интерполирует

$text = <<<'marker'
        Привет я now-document
        я не интерполируюсь $srt
marker;
echo $text; //Привет я now-document я не интерполируюсь $srt

$str = "Hallo world!";
echo $str[0] . $str[1]; // Ha

// Условные операторы
$x = -17;
$x = $x < 0 ? -$x : $x;
echo $x; // 17 