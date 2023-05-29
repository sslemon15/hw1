<?php
    require_once 'auth.php';

    // Se la sessione è scaduta, esco
    if (!checkAuth()) exit;
    
    header('Content-Type: application/json');




    


    alloggio();

    function alloggio()
    {
         $access_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOTEzODgzYzljNWI5OTUxZGE3MTRjNzUwYzE2MTkxMzg0ZmE3OTRlZmZmNTQxY2MzOGEyMzQ3OTE3MDVjMDUxODMzZjZlZmYyMjY1MWQxZmMiLCJpYXQiOjE2ODQ1MDIwNzgsIm5iZiI6MTY4NDUwMjA3OCwiZXhwIjoxNzE2MTI0NDc4LCJzdWIiOiIyMDk5NyIsInNjb3BlcyI6W119.QmnelHpoxjMt0r5MXuead-6sTKR_2XjKqOV9ovTHtQe9h99CojGsGkaRigsMYyUFLIy9Of1FwRl-QhcrZ_rqnQ';
         
         
         $query_1 =($_GET["LocationId"]);
         $query_2 = ($_GET["adults"]);
         $query_3 =($_GET["check-in"]);
         $query_4 = ($_GET["check-out"]);
         $data = http_build_query(array('access_key' => $access_key, "locationId" => $query_1,'adults' => $query_2, 'rooms' => '1', 
         'checkin' => $query_3, 'checkout' => $query_4));
         $url = 'https://app.goflightlabs.com/search-hotel-rooms?'.$data;
         $ch = curl_init();
         curl_setopt($ch, CURLOPT_URL, $url);
         curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
       
         $res=curl_exec($ch);
         
         echo $res;
         curl_close($ch);
     
         
    }
?>