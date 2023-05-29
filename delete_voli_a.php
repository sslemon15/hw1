<?php
   
       // Elimina dal database il volo specificato 
    
    require_once 'auth.php';
    if (!$userid = checkAuth()) exit;

    voli();

    function voli() {
        global $dbconfig, $userid;

        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
        
       
        $userid = mysqli_real_escape_string($conn, $userid);
        $id = mysqli_real_escape_string($conn, $_POST['id']);
        $city = mysqli_real_escape_string($conn, $_POST['city']);
        $partenza = mysqli_real_escape_string($conn, $_POST['data_partenza']);

        $query = "SELECT id FROM citta WHERE nome = '$city'";
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
        if(mysqli_num_rows($res) > 0) {
            $city_id = mysqli_fetch_object($res)->id; 

            $query = "SELECT * FROM voli WHERE  user_id = '$userid' AND citta_destinazione = '$city_id' AND data_partenza = '$partenza' ";
            $res = mysqli_query($conn, $query) or die(mysqli_error($conn));

            if(mysqli_num_rows($res) > 0) {
                
                $volo = mysqli_fetch_assoc($res);
                $volo_id = $volo['id'];
                $query = "SELECT * FROM viaggi WHERE volo_id ='$volo_id' AND user_id = '$userid' AND citta_id = '$city_id' AND data_di_partenza = '$partenza' AND hotel_id IS NOT NULL";
                $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
                if(mysqli_num_rows($res) > 0) {
                    $query = "UPDATE viaggi SET volo_id = NULL WHERE user_id = '$userid' AND citta_id = '$city_id' AND data_di_partenza = '$partenza'";
                    if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
                        $query = "DELETE FROM voli WHERE  user_id = '$userid'  AND citta_destinazione = '$city_id' AND data_partenza = '$partenza'";
                        if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
                            echo json_encode(array('ok' => true));
                            exit;
                        }
                    }
                } else {
                    $query = "SELECT * FROM viaggi WHERE volo_id ='$volo_id' AND user_id = '$userid' AND citta_id = '$city_id' AND data_di_partenza = '$partenza'";
                    $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
                    if(mysqli_num_rows($res) > 0) {
                        $query = "DELETE FROM viaggi WHERE user_id = '$userid' AND citta_id = '$city_id' AND data_di_partenza = '$partenza'";
                        if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
                            $query = "DELETE FROM voli WHERE  user_id = '$userid'  AND citta_destinazione = '$city_id' AND data_partenza = '$partenza' ";
                            if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
                                echo json_encode(array('ok' => true));
                                exit;
                            }
                        }
                    } else {
                       
                        echo json_encode(array('ok' => false));
                        exit;
                    }
                }
            } else {
                
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
   