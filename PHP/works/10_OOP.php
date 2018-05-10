<?php

class ShoppingCart {
    
}

$product1 = new ShoppingCart(); 
$product2 = new ShoppingCart();
$product3 = new ShoppingCart();

var_dump($product1); // // object(ShoppingCart)#1 (0) { }
var_dump($product2 instanceof ShoppingCart); // bool(true)

class Shop {
    private $name;
    
    public function naming() {
        $this -> name = "Adidas";
        echo $this -> name;
    }
}

$product = new Shop;
$product -> naming(); // Adidas
//$product -> name = "Nike"; // ошибка так как private

class User {
    public $name = "Name";
    public $password = "Password";
    public $email = "Email";
    public $city = "City";

    public function Hello() {
        echo "Hello {$this -> name}";
    }
    
    function getInfo() {
        return "{$this -> name}" . "{$this -> surname}";
    }
}

$admin = new User();
echo $admin -> name; // Name
echo $admin -> name = "Yura";
echo $admin -> Hello(); // Hello Yura
$admin -> surname = "Misejko";
echo "Пользователь {$admin ->getInfo()}"; // Пользователь YuraMisejko

echo "<br><br>";
$user1 = new User();
$admin -> name = "Alexey";
$user1 -> name = "Andrey";
echo $admin -> name; // Alexey

$user1 -> surname = "Ivanov";
print_r($user1); //  Object ( [name] => Andrey [password] => Password 
                  //[email] => Email [city] => City [surname] => Ivanov )