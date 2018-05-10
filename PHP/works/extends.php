<?php ## Наследование исключений

// Исключиние - ошибка файловых операций
class FileSystemException extends Exception
{
    private $name;
    
    public function __construct($name) {
        parent::__construct($name);
        $this->name = $name;
    }
    
    public function getName() {return $this->name;}
}

// Исключение файл не найден
class FileNotFoundException extends Exception {
     private $name;
    
    public function __construct($name) {
        parent::__construct($name);
        $this->name = $name;
    }
    
    public function getName() {return $this->name;}
}

// Исклдчение - ошибка записи в файл
class FileWriteException extends Exception {}


try {
    // Генерируем исключение типа FileNotFoundException
    if (!file_exists("aaa")) 
        throw new FileNotFoundException("Where aaa?");

} catch (FileNotFoundException $e) {
    // Ловим любое файловое исключение
    echo "Ошибка при работе с файлом {$e->getName()}<br>";
} catch (Exception $e) {
    // Ловиь все остальные исключения, которые еще не поймали
    echo "Другое исключение: {$e->getMessage()}";
}


