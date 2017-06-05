<?php

$dir = dirname(__FILE__) . "/public/images/portfolio/" . $_GET["photographer"];
$files = array_values(array_diff(scandir($dir), array('..', '.')));

if ($files === null) {
  $files = [];
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
echo json_encode($files);
