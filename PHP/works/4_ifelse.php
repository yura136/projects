<?php

$items = 11;
if ($items < 10) {
    echo "discont 5%";
}else {
    echo "discont 10%";
}

while ($i < 32) {
   echo  $i++;
}

foreach ($_SERVER as  $k => $v) {
    echo "<b>$k</b> => <b>$v</b><br>"; // распечатаем наш глобальный массив
}
