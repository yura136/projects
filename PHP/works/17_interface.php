<?php
// Интерфейсы

interface FirstInterface {
    public function getName();
}

interface SecondInterface {
    public function getStatus();
}

interface ThirdInterface extends FirstInterface, SecondInterface {
    const NAME = 10;
};

class Test implements ThirdInterface {
    public $name = "Yura";
    public $status = "Admin";
    
    public function getName() {
        echo $this->name ;
    }
    
    public function getStatus() {
        echo $this->status;
        echo self::NAME;
    }   
}

abstract class TestAbstract implements ThirdInterface {
    public function getStatus(){ echo "Hello";} // Все хорошо, так как абстрактынй класс
}

$test = new Test;
$test->getName(); //Yura
$test->getStatus();  // Admin10