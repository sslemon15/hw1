<?php
    
        //Elimina dal database l'attrazione specificata 
   
    require_once 'auth.php';
    if (!$userid = checkAuth()) exit;

    ToDo();

    function ToDo() {
        global $dbconfig, $userid;

        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
        
     
        $userid = mysqli_real_escape_string($conn, $userid);
        $id = mysqli_real_escape_string($conn, $_POST['id']);

        // Verifico se l'attrazione esiste per l'utente corrente
        $query = "SELECT * FROM attrazioni WHERE user = '$userid' AND id = '$id'";
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));

        if(mysqli_num_rows($res) > 0) {
            // L'attrazione esiste, procedo con l'eliminazione
            $query = "DELETE FROM attrazioni WHERE user = '$userid' AND id = '$id'";
            mysqli_query($conn, $query) or die(mysqli_error($conn));

            echo json_encode(array('ok' => true));
            exit;
        } else {
            // L'attrazione non esiste o non appartiene all'utente corrente
            echo json_encode(array('ok' => false));
            exit;
        }
     
        mysqli_close($conn);
    }
?>