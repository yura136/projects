<?php

class News 
{
    /**
     * Returns single news item with specified id
     * @param integer $id
     */
    public static function getNewsItemById($id)
    {
        
       $id = intval($id);
       
       if ($id) {

           $db = Db::getConnection();
          
           $newsItem = array();

           // Запрос к БД 1 новость
           $result = $db->query("SELECT * FROM news WHERE id=". $id);
           //$result->setFetchMode(PDO::FETCH_ASSOC);
           
           $newsItem = $result->fetch();
           return $newsItem;
       }
      
    }
    
    /**
     * Returns an array of news items 
     */
    public static function getNewsList() 
    {
        $db = Db::getConnection();
        
        $newsList = array();
       
        // Запрос к БД (последний 4 новостей из таблицы news)
        $result = $db->query('SELECT id, title, date, short_content ' 
               . 'FROM news ' 
               . 'ORDER BY date DESC '
               . 'LIMIT 4');
       
       $i=0;
       while($row = $result->fetch()) {
           $newsList[$i]['id'] = $row['id'];
           $newsList[$i]['title'] = $row['title'];
           $newsList[$i]['date'] = $row['date'];
           $newsList[$i]['short_content'] = $row['short_content'];
           $i++;
       }
       return $newsList;
    }
    
}


