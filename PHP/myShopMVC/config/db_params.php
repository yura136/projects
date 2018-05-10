<?php

return array(
    'host' => '127.0.0.1',
    'dbname' => 'mvc_site',
    'user' => 'root',
    'password' => '',
    'charset' => 'utf8',
    'opt' => [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
    ],
);

