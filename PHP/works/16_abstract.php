<?php

// абстрактные классы

abstract class User {
    public $name;
    public $status;
    
    abstract public function getStatus();
}

class Admin extends User {
    public function getStatus() {
       echo "Admin";
    }
}

$user1 = new Admin;
$user1 ->getStatus(); // Admin
