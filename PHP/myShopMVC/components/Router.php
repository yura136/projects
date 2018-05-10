<?php

class Router 
{
    
    private $routes;
    
    public function __construct() 
    {
        $routesPath = ROOT . '/config/routes.php';
        $this->routes = include($routesPath);
    }
    
    /**
     * Returns request string
     * @return string
     */
    
    private function getURI() 
    {
        if(!empty($_SERVER['REQUEST_URI'])) 
        {
            return substr($_SERVER['REQUEST_URI'], strlen('/myShopMVC/'));
        }
    }
    
    public function run() 
    {
        // Получить строку запроса
        $uri = $this->getURI();
        
        // Проверить наличие такого запроса в routes.php
        foreach ($this->routes as $uriPattern => $path) 
        {
      
            // Если есть совпадения, определить какой контроллер и action обрабатывают запрос
            // Сравниваем $uriPattern и $uri
                if (preg_match("~$uriPattern~", $uri)) {
                
                    // Получаем внутренний путь из внешнего согласно правилу.
                    $internalRoute = preg_replace("~$uriPattern~", $path, $uri);
                  
                    // Определяем контроллер
                    $segments = explode('/', $internalRoute);
                    
                    //$nullName = array_shift($segments);
                    $controllerName = array_shift($segments) . 'Controller';
                    $controllerName = ucfirst($controllerName);
                    
                    // Определяем функцию (action)
                    $actionName = 'action' . ucfirst(array_shift($segments));
                    
                    // Получение параметров из строки запроса
                    $parameters = $segments;
                    //print_r($parameters);
                    //die;
                    
                     // Подключить файл класса-контроллера
                    $controllerFile = ROOT . '/controllers/' . $controllerName . '.php';
                    if (file_exists($controllerFile)) {
                        include_once($controllerFile);
                    }
                    
                    // Создать объект, вызвать метод (т. е. action)
                    $controllerObject = new $controllerName;
                    
                    $result = call_user_func_array(array($controllerObject, $actionName), $parameters);
                    
                    if ($result != null ) {
                        break;
                    }      
                }    
        }

    }
}

