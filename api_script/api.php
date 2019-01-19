<?php
header('Access-Control-Allow-Origin: *');
$myArr = array("John", "Mary", "Peter", "Sally");

$myJSON = json_encode($myArr);

echo $myJSON;
?>