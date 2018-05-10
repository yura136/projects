<?php

// клонирование объектов в PHP
class User {
    
    private $name;
    private $city;
    private $id;
    
    public function __construct($name, $city) {
        $this -> name = $name;
        $this -> city = $city;
    }
    function setId($id) {
        $this->id = $id;
    }
    public function  __clone() {
        $this->id = 0;
    }
}

$user1 = new User("Yura", "Minsk");
$user1->setId(5662);
$user2 = clone $user1;
var_dump($user1); // id = 5662
var_dump($user2); // id = 0
echo "<br><br>";


// __get, __set
class GetSet {
    private $number = 1;
    
    public function __get ($name) {
        echo "You get {$name}";
    }
    
    public function __set ($name, $val) {
        echo "You set {$name} to {$value}";
    }
    
//    public function __call ($nam, args) {
//        echo "Я не существую";
//    }
}

$obj = new GetSet;
echo $obj->number; // You get number, так как number - private
echo $obj->number = 689; // You set number to 689
echo $obj->name(5);