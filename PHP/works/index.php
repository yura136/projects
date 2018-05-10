<!DOCTYPE html>
<html>
    <head>
        <title>My forms</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <form action = "<?php htmlentities($_SERVER['PHP_SELF']) ?>" method = "POST">
            <p>Ваше имя: <input type="text" name ="name"></p>
            <p>Ваше возраст: <input type="text" name ="age"></p>
            <p><input type="submit"></p>
        </form>
        Привет <?php echo htmlspecialchars($_POST['name']); ?> <BR>
        Вам <?php echo htmlspecialchars($_POST['age']); ?> лет. <BR>
        Через QUERY_STRING: <?php echo htmlspecialchars($_SERVER['QUERY_STRING']); ?>
    </body>
</html>
