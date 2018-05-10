<?php
$name[] = "Alex";
$name[] = "Jeff";
$name[] = "Yura";
echo $name[1];

for ($i = 0; $i < count($name); $i++) {
    echo $name[$i];
}

//ассоциативные массивы
$name["Ivanov"] = "Alex";
$name["Petrov"] = "Jeff";
$name["Misejko"] = "Yura";
echo $name; // array
print_r($name); // Array ( [0] => Alex [1] => Jeff [2] => Yura [Ivanov] => Alex [Petrov] => Jeff [Misejko] => Yura )

//Константа массива
define ("masiv", ["ivanov" => ["name" => "ivan", "born" => "10 апреля"] ] );
echo masiv["ivanov"]["born"]; // 10 апреля

// Операции массива
$number = count($name);
echo $number; // 6 элементов

// Перебор массива
$birth = [
    "Thomas" => "1980-11-18",
    "John" => "1992-04-28"
];
echo "<br>";
foreach ($birth as $key => $value) {
    echo "$key родился $value <br>";
}

function mySqr($n) {
    return $n**2;
}
echo mySqr(5);
function set() {
    static $count = 0; // - уничтожать переменную между вызовами не нужно
    $count ++;
    return $count;
}
for ($i = 0; $i < 10; $i++){
    echo set();   // 12345678910
}