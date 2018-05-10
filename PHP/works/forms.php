<!DOCTYPE html>
<html>
    <head>
        <title>My forms</title>
        <meta charset="UTF-8">
    </head>
    <body>
        ЧЕРЕЗ МЕТОД POST
        <form action = "" method = "post">
            <p>Ваше имя: <input type="text" name ="name"></p>
            <p>Ваше возраст: <input type="text" name ="age"></p>
            <p><input type="submit"></p>
        </form>
        Привет <?php echo htmlspecialchars($_POST['name']); ?> 
        Вам <?php echo (int)($_POST['age']); ?> лет. <br>
        <br>
        Данные полученные из командной строки (QUERY_STRING) <BR>
        <?php echo "Данные из адресной строки: {$_SERVER['QUERY_STRING']}"; ?>
        <form action="<?php echo htmlentities($_SERVER['PHP_SELF']) ?>" method="post">
            <fieldset>
                <legend>Выберите животное:</legend>
                <label for ="dog">
                    <input type ="checkbox" id="dog" name="animal[]" value ="собака" >
                        Собака
                </label>
                <label for ="cat">
                    <input type ="checkbox" id="cat" name="animal[]" value ="кот" >
                        Кот
                </label>
                <label for ="fox">
                    <input type ="checkbox" id="fox" name="animal[]" value ="лиса" >
                        Лиса
                </label>
            </fieldset>
            <input type="submit" value ="отправить" >
        </form>
        
        <?php 
            $animal = isset($_POST['animal']) ? $_POST['animal']: '';
            if(!empty($animal)) {
                echo '<br><br> Выбраны: <br> ';
                foreach ($animal as $a) {
                    echo "<span style = \"color: green\">" . htmlentities($a). "</span> <br>" ;
                }
            }
        ?>
    </body>
</html>
