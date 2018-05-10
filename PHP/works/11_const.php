<?php

// конструктор
class User {
    public $name;
    public $password;
    public $email;
    public $city;
            
    function __construct($name, $password, $email, $city) {
        $this -> name = $name;
        $this -> password = $password;
        $this -> email = $email;
        $this -> city = $city;
    }
    
    function getInfo() {
        return "{$this -> name} ". "{$this -> password} "."{$this -> email} "."{$this -> city}";
    }
}

$user1 = new User("Yura", "123456", "yura@mail.ru", "Minsk");
var_dump($user1);
echo "<br>";
echo $user1 -> getInfo(); // Yura 123456 yura@mail.ru Minsk

// Деструктор 
class DestrctableClass {
    function __construct() {
        print 'Конструктор';
        $this -> name = "DestrctableClass";
    }
    
    function __destruct() {
        print "Уничтожение" .$this -> name;
    }
}

$obj = new DestrctableClass();