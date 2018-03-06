<?php
$time = date("d.m.Y H:i");
$subj = 'Nowa rejestracja do żłobka';
$email = 'patryk.radziszewski@allso.pl';
$message = '
<table border="1" cellpadding="5">
    <tbody>
        <tr>
            <td>Data rejestracji:</td>
            <td>'.$time.'</td>
        </tr>
        <tr>
            <td>Dane dziecka:</td>
            <td>'.$name.' '.$forname.'<br>Wiek:'.$age.' msc</td>
        </tr>
        <tr>
            <td>Data rozpoczęcia uczęszczania:</td>
            <td>'.$start.'</td>
        </tr>
        <tr>
            <td>Dane kontaktowe:</td>
            <td>email: '.$email.'<br>tel: '.$phone.'</td>
        </tr>
        <tr>
            <td>Dodatkowe informacje:</td>
            <td>'.$information.'</td>
        </tr>
    </tbody>
</table>
';

   $headers  = 'MIME-Version: 1.0' . "\r\n";
   $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
   $headers .= "From: Niepubliczny Żłobek Samo Dobro <patryk.radziszewski@allso.pl>\r\n";
   $headers .= "X-Sender: <patryk.radziszewski@allso.pl>";

   mail($email, $subj, $message, $headers);
//szystko ok

echo 'verify';
