<?php
    require_once 'auth.php';

    // Se la sessione è scaduta, esco
    if (!checkAuth()) exit;

    header('Content-Type: application/json');

    
    A();
    function A()
    {
        $access_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOTEzODgzYzljNWI5OTUxZGE3MTRjNzUwYzE2MTkxMzg0ZmE3OTRlZmZmNTQxY2MzOGEyMzQ3OTE3MDVjMDUxODMzZjZlZmYyMjY1MWQxZmMiLCJpYXQiOjE2ODQ1MDIwNzgsIm5iZiI6MTY4NDUwMjA3OCwiZXhwIjoxNzE2MTI0NDc4LCJzdWIiOiIyMDk5NyIsInNjb3BlcyI6W119.QmnelHpoxjMt0r5MXuead-6sTKR_2XjKqOV9ovTHtQe9h99CojGsGkaRigsMYyUFLIy9Of1FwRl-QhcrZ_rqnQ';

         $partenza =($_POST["partenza-v"]);
         $destinazione =($_POST["destinazione_f"]);
         $andata =($_POST["Andata"]);
        

         $data = http_build_query(array('access_key' => $access_key, 'adults' => '1', 'origin' => $partenza, 'destination' => $destinazione,
        'departureDate' => $andata));
         $url = 'https://app.goflightlabs.com/search-best-flights?'.$data;
         $ch = curl_init();
         curl_setopt($ch, CURLOPT_URL, $url);
         curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
         $res=curl_exec($ch);
         
         echo $res;
         curl_close($ch);
     
         
    }

?>