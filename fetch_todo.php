<?php 
    
    require_once 'auth.php';
    if (!$userid = checkAuth()) exit;

    header('Content-Type: application/json');

    $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);

    $userid = mysqli_real_escape_string($conn, $userid);
    


        $query = "SELECT citta.nome AS nome_citta, attrazioni.content AS content
        FROM attrazioni
        JOIN citta ON attrazioni.citta_id = citta.id
        WHERE attrazioni.user = $userid; ";

    $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
    
    $todoArray = array();
    while($entry = mysqli_fetch_assoc($res)) {
        // Scorro i risultati ottenuti e creo l'elenco di post
        $todoArray[] = array('nome_citta' => $entry['nome_citta'], 'content' => json_decode($entry['content']));
    }
    echo json_encode($todoArray);
    
    exit;


?>