<?php

require 'libs/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=auth_loc', 'root', '');

session_start();