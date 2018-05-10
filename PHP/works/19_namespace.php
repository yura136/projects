<?php
// Пространства имен
namespace Home;
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