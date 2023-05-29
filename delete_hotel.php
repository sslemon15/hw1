<?php
    
       // Elimina dal database l'hotel specifico
  
    require_once 'auth.php';
    if (!$userid = checkAuth()) exit;

    Hotel();

    function Hotel() {
        global $dbconfig, $userid;

        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
        
        
        $userid = mysqli_real_escape_string($conn, $userid);
        $id = mysqli_real_escape_string($conn, $_POST['id']);
        $city = mysqli_real_escape_string($conn, $_POST['city']);
        $partenza = mysqli_real_escape_string($conn, $_POST['partenza']);

        $query = "SELECT id FROM citta WHERE nome = '$city'";
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
        if(mysqli_num_rows($res) > 0) {
            $city_id = mysqli_fetch_object($res)->id; 

            $query = "SELECT * FROM hotel WHERE  user = '$userid' AND citta_id = '$city_id' AND partenza = '$partenza' ";
            $res = mysqli_query($conn, $query) or die(mysqli_error($conn));

            if(mysqli_num_rows($res) > 0) {
                // L'hotel esiste, procedo con l'eliminazione
                $hotel = mysqli_fetch_assoc($res);
                $hotel_id = $hotel['id'];
                $query = "SELECT * FROM viaggi WHERE hotel_id ='$hotel_id' AND user_id = '$userid' AND citta_id = '$city_id' AND data_di_partenza = '$partenza' AND volo_id IS NOT NULL";
                $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
                if(mysqli_num_rows($res) > 0) {
                    $query = "UPDATE viaggi SET hotel_id = NULL WHERE user_id = '$userid' AND citta_id = '$city_id' AND data_di_partenza = '$partenza'";
                    if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
                        $query = "DELETE FROM hotel WHERE  user = '$userid'  AND citta_id = '$city_id' AND partenza = '$partenza' ";
                        if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
                            echo json_encode(array('ok' => true));
                            exit;
                        }
                    }
                } else {
                    $query = "SELECT * FROM viaggi WHERE hotel_id ='$hotel_id' AND user_id = '$userid' AND citta_id = '$city_id' AND data_di_partenza = '$partenza'";
                    $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
                    if(mysqli_num_rows($res) > 0) {
                        $query = "DELETE FROM viaggi WHERE user_id = '$userid' AND citta_id = '$city_id' AND data_di_partenza = '$partenza'";
                        if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
                            $query = "DELETE FROM hotel WHERE  user = '$userid'  AND citta_id = '$city_id' AND partenza = '$partenza' ";
                            if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
                                echo json_encode(array('ok' => true));
                                exit;
                            }
                        }
                    } else {
                        // L'hotel non esistente in viaggi 
                        echo json_encode(array('ok' => false));
                        exit;
                    }
                }
            } else {
                // L'hotel non esiste o non appartiene all'utente corrente
                echo json_encode(array('ok' => false));
                exit;
            }
        } else {
            // La città non esiste nel database
            echo json_encode(array('ok' => false));
            exit;
        }
       
        mysqli_close($conn);
    }
?>
