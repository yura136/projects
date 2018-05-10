<?php
// Статические свойства и методы

class User {
    public static $name;
    const NAME = "User";
    public static function hello() {
        echo "Hello ".self::$name;  
    }
}

User::$name="Yura";
User::hello(); // Hello Yura

// Константы класса (постоянные свойства класса)
class product {
    const SOME_CONST = 314;
    
}
echo product::SOME_CONST; // 314