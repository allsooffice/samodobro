<!DOCTYPE html>
<html lang="pl">
<head>
   <meta charset="UTF-8">
   <title>Zapisy | Samo dobro - żłobek niepubliczny | Strona główna</title>
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="keywords" content="żłobek, zlobek, białystok, bialystok, zachodnia, podlaskie, dziecko, rekrutacja, zapisy" />
   <meta name="description" content="Samo dobro - żłobek niepubliczny Białustok ul. Zachodnia" />
  <link href="https://fonts.googleapis.com/css?family=Caveat+Brush" rel="stylesheet"> 
   <link rel="stylesheet" type="text/css" href="icons/css/fontello.css">
   <link rel="stylesheet" type="text/css" href="style/master.css">
   <link rel="stylesheet" type="text/css" href="style/save.css">
</head>
<body>
	<div class="container">
        <?php
            include 'parts/header.php';
        ?>
			<div class="content">
                <h1 class="master-title">Formularz rejestracyjny</h1>
                <p class="save-info">Wypełnij poniższy formularz, aby zgłosić chęć zapisania swego dziacka do naszego żłobka.</p>
                <h2 class="sub-title">Dane dziecka</h2>
                <span class="input-info">
                   <label for="name" class="important-input">Imię dziecka</label>
                   <input id="name" type="text">
                </span>
                <span class="input-info">
                   <label for="forname" class="important-input">Nazwisko dziecka</label>
                   <input id="forname" type="text">
                </span>
                <span class="input-info">
                   <label for="age" class="important-input">Wiek (miesiące)</label>
                   <input id="age" type="number" min="1" max="36">
                </span>
                <span class="input-info">
                   <label for="start" class="important-input">Data rozpoczecia</label>
                   <input id="start" type="date">
                </span>
                <span class="input-info">
                   <label for="information">Dodatkowe informacje</label>
                   <textarea name="" id="information" cols="30" rows="10"></textarea>
                </span>
                <h2 class="sub-title">Dane kontaktowe</h2>
                <span class="input-info">
                   <label for="email" class="important-input">Email</label>
                   <input id="email" type="text">
                </span>
                <span class="input-info">
                   <label for="phone" class="important-input">Telefon</label>
                   <input id="phone" type="tel">
                </span>
                <span class="input-checkbox">
                   <input id="rulez" type="checkbox">
                   <label for="rulez">Zapoznałem się z treścią <a href="#">regulaminu</a>  <i>*</i></label>
                </span>
                <div class="errors">
                    W formularzu jest błąd
                </div>
                <button id="send" class="btn">Wyślij formularz</button>
			</div>
        <?php
            include 'parts/footer.php';
        ?>
	</div>
</body>
    <script type="text/javascript" src="js/jquery-3.2.1.slim.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui.js"></script>
    <script type="text/javascript" src="js/jquery.maskedinput.min.js"></script>
    <script type="text/javascript" src="js/master.js"></script>
    <script type="text/javascript" src="js/save.js"></script>
</html>