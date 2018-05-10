<?php

class User {
    public $name;
    public $password;
    public $email;
    
    public  function getName() {
        echo $this -> name;
        $this -> test();
    }
    public function test() {
        echo "Test";
    }
}

$user1 = new User;
$user1 -> name = "Aleksey";
$user1 -> getName(); // AlekseyTest

$user2 = new User;
$user2 -> name = "Ivan";
$user2 -> getName(); // IvanTest

class User1 {
    private static $name;
 
    public static function setName($name1) {
        self::$name = $name1;
    }
    public static function getName() {
        return self::$name;
    } 
}

User1::setName("Ivan"); // т.е. работаем напрямую с нашим классом
echo User1::getName(); // Ivan
