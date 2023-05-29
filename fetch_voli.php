<?php

require_once 'auth.php';
if (!$userid = checkAuth()) exit;

header('Content-Type: application/json');

$conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);

$userid = mysqli_real_escape_string($conn, $userid);

$query = "SELECT viaggi.user_id AS user_id, viaggi.data_di_partenza AS data_partenza, volo_id AS volo_id,  voli.content AS volo_content
FROM viaggi
INNER JOIN voli ON viaggi.volo_id = voli.id
WHERE viaggi.user_id = $userid
AND viaggi.citta_id = voli.citta_destinazione
AND viaggi.data_di_partenza = voli.data_partenza";

$res = mysqli_query($conn, $query) or die(mysqli_error($conn));


$voloArray = array();
while ($entry = mysqli_fetch_assoc($res)) {
    // Scorro i risultati ottenuti e creo l'elenco del contenuto degli hotel
    $voloArray[] = array('data_partenza' => $entry['data_partenza'],'volo_content' => json_decode($entry['volo_content']));
}

echo json_encode($voloArray);

exit;
?>