<?php 
date_default_timezone_set('Europe/Minsk');
echo date("I ds FY h:i:s A"); // 0 3051 March2018 03:03:51 PM 
echo date("Today d.m.Y"); // MSK201830pm18 30.03.2018 
echo "<br>";
$nextWeek = time() + (7*24*60*60);
echo "Now" . date('Y-m-d'). "<br>"; //Now2018-03-30
echo "NextWeek" . date('Y-m-d', $nextWeek). "\n"; //NextWeek2018-04-06