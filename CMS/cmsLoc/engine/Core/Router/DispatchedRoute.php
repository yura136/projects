<?php

namespace Engine\Core\Router;


class DispatchedRoute
{
   private $controller;
   private $parameters;
   
   /**
    * DispatedRoute constructor
    * @param $controller
    * @param array $parameters
    */
   public function __construct($controller, $parameters = []) 
   {
       $this->controller = $controller;
       $this->parameters = $parameters;
   }
   
   /**
    * @return mixed
    */
   function getController() {
       return $this->controller;
   }
   
   /**
    * @return array
    */
   function getParameters() {
       return $this->parameters;
   }
   
}
