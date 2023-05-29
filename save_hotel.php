<?php

    require_once 'auth.php';
    if (!$userid = checkAuth()) exit;

    Hotel();

    function Hotel() {
        global $dbconfig, $userid;

        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
        
       
        $userid = mysqli_real_escape_string($conn, $userid);
        $id = mysqli_real_escape_string($conn, $_POST['id']);
        $name_hotel = mysqli_real_escape_string($conn, $_POST['nome']);
        $image = mysqli_real_escape_string($conn, $_POST['image']);
        $description = mysqli_real_escape_string($conn, $_POST['description']);
        $prezzo = mysqli_real_escape_string($conn, $_POST['prezzo']);
        $city = mysqli_real_escape_string($conn, $_POST['city']);
        $partenza = mysqli_real_escape_string($conn, $_POST['partenza']);
        $ritorno = mysqli_real_escape_string($conn, $_POST['ritorno']);
        $rating = mysqli_real_escape_string($conn, $_POST['rating']);
        $recensioni = mysqli_real_escape_string($conn, $_POST['recensioni']);
        $tripadvisor = mysqli_real_escape_string($conn, $_POST['tripadvisor']);
        $punti_interesse = mysqli_real_escape_string($conn, $_POST['punti_interesse']);

        
        $query = "SELECT id FROM citta WHERE nome = '$city'";
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
        if(mysqli_num_rows($res) > 0) {
            $city_id = mysqli_fetch_object($res)->id; 
        } else {
            $query = "INSERT INTO citta (nome) VALUES ('$city')";
            $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
            error_log($query);
            $city_id = mysqli_insert_id($conn);
        }

       // verifica se l'hotel è già presente per l'utente, in quella specifica città e per quella specifica data di partenza
        $query = "SELECT * FROM hotel WHERE  user = '$userid'  AND citta_id = '$city_id' AND partenza = '$partenza'";
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
        // se l'hotel è già presente lo sostituisco
        if(mysqli_num_rows($res) > 0) {
            $query = "UPDATE hotel SET  content = JSON_OBJECT('id', '$id', 'name_hotel', '$name_hotel', 'image', '$image', 'description', '$description', 'prezzo', '$prezzo','rating', '$rating', 'recensioni', '$recensioni', 'punti_interesse', '$punti_interesse', 'tripadvisor', '$tripadvisor', 'city', '$city', 'partenza', '$partenza', 'ritorno', '$ritorno') WHERE user = '$userid'  AND citta_id = '$city_id' AND partenza = '$partenza'  ";
            if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
                echo json_encode(array('ok' => true));
                exit;
            }
        }

        

       

        $query = "INSERT INTO hotel (id,user, citta_id, partenza, content) VALUES ('$id','$userid', '$city_id', '$partenza', JSON_OBJECT('id', '$id', 'name_hotel', '$name_hotel', 'image', '$image', 'description', '$description', 'prezzo', '$prezzo','rating', '$rating', 'recensioni', '$recensioni', 'punti_interesse', '$punti_interesse', 'tripadvisor', '$tripadvisor', 'city', '$city', 'partenza', '$partenza', 'ritorno', '$ritorno'))";
        error_log($query);
       
        if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
            $hotel_id = mysqli_insert_id($conn);
            
            $query = "SELECT * FROM viaggi WHERE user_id = '$userid' AND citta_id = '$city_id' AND data_di_partenza = '$partenza'";
            $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
            if(mysqli_num_rows($res) > 0) {
                // Viaggio già presente, aggiorno l'hotel_id
                $viaggio = mysqli_fetch_assoc($res);
                $viaggio_id = $viaggio['id'];
                $query = "UPDATE viaggi SET hotel_id = '$hotel_id' WHERE id = '$viaggio_id'";
                if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
                    echo json_encode(array('ok' => true));
                    exit;
                }
            } else {
                // Viaggio non presente, inserisco il nuovo viaggio
                $query = "INSERT INTO viaggi (user_id, citta_id, data_di_partenza, hotel_id) VALUES ('$userid', '$city_id', '$partenza', '$hotel_id')";
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
