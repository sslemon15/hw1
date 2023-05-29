<?php
    
    require_once 'auth.php';
    if (!$userid = checkAuth()) exit;

    ToDo();

    function ToDo() {
        global $dbconfig, $userid;

        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
        
        
        $userid = mysqli_real_escape_string($conn, $userid);
        $id = mysqli_real_escape_string($conn, $_POST['id']);
        $name_attivita = mysqli_real_escape_string($conn, $_POST['nome']);
        $image = mysqli_real_escape_string($conn, $_POST['image']);
        $description = mysqli_real_escape_string($conn, $_POST['description']);
        $prezzo = mysqli_real_escape_string($conn, $_POST['prezzo']);
        $rating = mysqli_real_escape_string($conn, $_POST['rating']);
        $city = mysqli_real_escape_string($conn, $_POST['city']);

       
        $query = "SELECT * FROM attrazioni WHERE user = '$userid' AND id = '$id'";
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
       
        if(mysqli_num_rows($res) > 0) {
            echo json_encode(array('ok' => true));
            exit;
        }


        $query= "SELECT id FROM citta WHERE nome = '$city'";
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
        if(mysqli_num_rows($res) > 0) 
        {
            $city_id = mysqli_fetch_object($res)->id; 
           
       
        }else{
            $query = "INSERT INTO citta (nome) VALUES ('$city')";
            $res= mysqli_query($conn, $query) or die(mysqli_error($conn));
            error_log($query);
            $city_id = mysqli_insert_id($conn);
        }
                $query = "INSERT INTO attrazioni (id, user, citta_id, content) VALUES ('$id','$userid','$city_id' ,JSON_OBJECT('id', '$id', 'name_attività', '$name_attivita', 'image', '$image', 'description', '$description', 'prezzo', '$prezzo', 'rating', '$rating'))";
                error_log($query);
                
                if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
                    echo json_encode(array('ok' => true));
                    exit;
                }
            
        
           
  
        

        
     
    
        mysqli_close($conn);
        echo json_encode(array('ok' => false));
    }