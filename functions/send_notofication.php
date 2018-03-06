<?php
$name = strip_tags($_POST['name']);
$forname = strip_tags($_POST['forname']);
$age = strip_tags($_POST['age']);
$start = $_POST['start'];
$information = strip_tags($_POST['information']);
$email = strip_tags($_POST['email']);
$phone = strip_tags($_POST['phone']);

include 'send_notofication_email.php';


