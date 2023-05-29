<?php

require_once 'auth.php';
if (!$userid = checkAuth()) exit;

header('Content-Type: application/json');

$conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);

$userid = mysqli_real_escape_string($conn, $userid);

$query="SELECT viaggi.user_id AS user_id, viaggi.citta_id AS citta_id, viaggi.data_di_partenza AS data_partenza, voli.content AS volo_content, hotel.content AS hotel_content
FROM viaggi
LEFT JOIN voli ON viaggi.volo_id = voli.id
LEFT JOIN hotel ON viaggi.hotel_id = hotel.id 
WHERE viaggi.user_id = $userid
AND ((viaggi.citta_id = voli.citta_destinazione AND viaggi.data_di_partenza = voli.data_partenza)
 OR (viaggi.citta_id = hotel.citta_id AND viaggi.data_di_partenza = hotel.partenza))";

$res = mysqli_query($conn, $query) or die(mysqli_error($conn));


$hotelArray = array();
while ($entry = mysqli_fetch_assoc($res)) {
    // Scorro i risultati ottenuti e creo l'elenco del contenuto degli hotel
    $hotelArray[] = array( 'user_id' => $entry['user_id'] ,'data_partenza'=> $entry['data_partenza'] , 'volo_content' => json_decode($entry['volo_content']), 'hotel_content' => json_decode($entry['hotel_content']));
}

echo json_encode($hotelArray);

exit;
?>
