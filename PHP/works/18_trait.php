<?php

// Трейты (примеси)


trait sayHello {
    public function say() {
        echo "Hello ";
    }
}

trait saySomething {
    public function say() {
        echo 'World!';
    }
}

class myHelloWorld {
    use sayHello, saySomething {sayHello::say insteadof saySomething;
            saySomething::say as sayWorld;
    }
}

$obj = new myHelloWorld();
$obj ->say();// Hello 
$obj ->sayWorld(); // World!
