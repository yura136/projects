<?php

namespace Cms\Controller;

use Engine\Controller;

class HomeController extends CmsController
{
    public function index()
    {
        $data = ['name' => 'Yura'];
        $this->view->render('index', $data);
    }
    
    public function news($id) 
    {
        echo  $id;
    }
}
