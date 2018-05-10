<?php

namespace Engine\Helper;

class Common 
{
    /**
     * @return bool
     */
    function isPost()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            return true;
        }

        return false;
    }
     
    /**
     * @return mixed
     */
    function getMethod()
    {
        return $_SERVER['REQUEST_METHOD'];
    }


    /**
     * @return bool|string
     */
    function getPathUrl()
    {
        $pathUrl = substr($_SERVER['REQUEST_URI'], strlen('/cmsLoc'));
        
        if ($position = strpos($pathUrl, '?')) {
            $pathUrl = substr($pathUrl, 0, $position);
        }
        
        return $pathUrl;
    }
}
