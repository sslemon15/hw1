<?php
   
    require_once 'auth.php';
    if (!$userid = checkAuth()) exit;

    Volo_a();

    function Volo_a() {
        global $dbconfig, $userid;

        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
        
        
        $userid = mysqli_real_escape_string($conn, $userid);
        $id = mysqli_real_escape_string($conn, $_POST['id']);
        $partenza = mysqli_real_escape_string($conn, $_POST['partenza']);
        $destinazione = mysqli_real_escape_string($conn, $_POST['destinazione']);
        $origin_aeroport = mysqli_real_escape_string($conn, $_POST['origin_aeroport']);
        $destination_aeroport = mysqli_real_escape_string($conn, $_POST['destination_aeroport']);
        $prezzo = mysqli_real_escape_string($conn, $_POST['prezzo']);
        $compagnia = mysqli_real_escape_string($conn, $_POST['compagnia']);
        $scali= mysqli_real_escape_string($conn, $_POST['scali']);
        $codvolo = mysqli_real_escape_string($conn, $_POST['codvolo']);
        $durataminuti = mysqli_real_escape_string($conn, $_POST['durata_minuti']);
        $orario_partenza = mysqli_real_escape_string($conn, $_POST['orario_partenza']);
        $orario_arrivo = mysqli_real_escape_string($conn, $_POST['orario_arrivo']);
        $delta = mysqli_real_escape_string($conn, $_POST['delta']);
        $tipo = mysqli_real_escape_string($conn, $_POST['tipo']);
        $data_partenza = mysqli_real_escape_string($conn, $_POST['data_partenza']);
        
        $query = "SELECT id FROM citta WHERE nome = '$destinazione'";
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
        if(mysqli_num_rows($res) > 0) {
            $city_id = mysqli_fetch_object($res)->id; 
        } else {
            $query = "INSERT INTO citta (nome) VALUES ('$destinazione')";
            $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
            error_log($query);
            $city_id = mysqli_insert_id($conn);
        }

       // verifica se il volo è già presente per l'utente, in quella specifica città e per quella specifica data di partenza
        $query = "SELECT * FROM voli WHERE   user_id = '$userid'  AND citta_destinazione = '$city_id' AND data_partenza = '$data_partenza'";
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
        // se il volo è già presente lo sostituisco
        if(mysqli_num_rows($res) > 0) {
            $query = "UPDATE voli SET  content = JSON_OBJECT('id', '$id', 'partenza', '$partenza', 'destinazione', '$destinazione', 'origin_aeroport', '$origin_aeroport','destination_aeroport', '$destination_aeroport', 'prezzo', '$prezzo',
             'compagnia', '$compagnia','scali', '$scali', 'codvolo', '$codvolo','durata_minuti', '$durataminuti','orario_partenza', '$orario_partenza',
             'orario_arrivo', '$orario_arrivo',  'delta', '$delta', 'tipo', '$tipo', 'data_partenza', '$data_partenza')
              WHERE user_id = '$userid'  AND citta_destinazione = '$city_id' AND data_partenza = '$data_partenza'";
            if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
                echo json_encode(array('ok' => true));
                exit;
            }
        }

        

       

        $query = "INSERT INTO voli (user_id, citta_destinazione, data_partenza, content) VALUES ('$userid', '$city_id', '$data_partenza', JSON_OBJECT('id', '$id', 'partenza', '$partenza', 'destinazione', '$destinazione', 'origin_aeroport', '$origin_aeroport', 'prezzo', '$prezzo','destination_aeroport', '$destination_aeroport',
        'compagnia', '$compagnia','durata_minuti', '$durataminuti', 'orario_partenza', '$orario_partenza',
        'orario_arrivo', '$orario_arrivo', 'scali', '$scali', 'codvolo', '$codvolo', 'delta', '$delta', 'tipo', '$tipo','data_partenza', '$data_partenza'))";
        error_log($query);
       
        if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
            $volo_id = mysqli_insert_id($conn);
            
            $query = "SELECT * FROM viaggi WHERE user_id = '$userid' AND citta_id = '$city_id' AND data_di_partenza = '$data_partenza'";
            $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
            if(mysqli_num_rows($res) > 0) {
                // Viaggio già presente, aggiorno volo_id
                $viaggio = mysqli_fetch_assoc($res);
                $viaggio_id = $viaggio['id'];
                $query = "UPDATE viaggi SET volo_id = '$volo_id' WHERE id = '$viaggio_id'";
                if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
                    echo json_encode(array('ok' => true));
                    exit;
                }
            } else {
                // Viaggio non presente, inserisco il nuovo viaggio
                $query = "INSERT INTO viaggi (user_id, citta_id, data_di_partenza, volo_id) VALUES ('$userid', '$city_id', '$data_partenza', '$volo_id')";
                if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
                    echo json_encode(array('ok' => true));
                    exit;
                }
            }
        }

        mysqli_close($conn);
        echo json_encode(array('ok' => false));
    }
?>
