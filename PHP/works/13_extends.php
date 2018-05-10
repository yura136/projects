<?php 
// Наследование

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
        $information = "{$this -> name} ". "{$this -> password} "."{$this -> email} "."{$this -> city}";
        return $information;
    }
}

final class Moderator extends User {  // запрещает наследование класса Moderator
    public $info;
    public $rights;
    
    function __construct($name, $password, $email, $city, $info, $rights) {
        parent::__construct($name, $password, $email, $city);
        $this -> info = $info;
        $this -> rights = $rights;
    }
    
    final function getInfo() {  // дальнейшие переодпределения в дочерних классач невозможны
        $information = parent::getInfo();
        $information .= " {$this -> info} "."{$this -> rights}";
        return $information;
    }
    
    function hello() {
        echo "Moderator is here";
    }
}

$moder = new Moderator("Andrey", "323", "andrey@mail.ru", "Vitebsk", "Moderator", "true");
echo $moder ->getInfo(); // Andrey 323 andrey@mail.ru Vitebsk Moderator true

echo "<br>";
echo $moder -> hello(); // Moderator is here


class Test {
    protected $info;
}

class Test2 extends Test {
    public function test() {
        $this -> info = "info"; // может получить доступ только в классе
        echo $this -> info;
    }
}

$test2 = new Test2();
$test2 -> test(); // info
$test2 -> info = "information"; // Ошибка вы не можете обратиться к защищенному свойству вне класса