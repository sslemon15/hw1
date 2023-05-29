<?php
  
         
        $key_amadeus = 'NrxjGvobzqXi4vtRjXaVlh2Z7xCCmsMC';
        $secret_amadeus = '1YpAjpdkhmCaV4Yb';

        

         $curl = curl_init();
         curl_setopt($curl, CURLOPT_URL, 'https://test.api.amadeus.com/v1/security/oauth2/token');
        
         curl_setopt($curl, CURLOPT_POST, 1);
         curl_setopt($curl, CURLOPT_POSTFIELDS, "grant_type=client_credentials&client_id=".$key_amadeus."&client_secret=".$secret_amadeus);
         $headers = array('Content-Type: application/x-www-form-urlencoded');
         curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
         curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
         $result = curl_exec($curl);
        
         
         curl_close($curl);
         $token = json_decode($result)->access_token;
         
         $latitudine=($_POST["latitude"]);
         $longitudine=($_POST["longitude"]);
     
         $data = http_build_query(array("longitude" => $longitudine, "latitude" => $latitudine, 'radius'=> '10'));
         $curl = curl_init();
         curl_setopt($curl, CURLOPT_URL, 'https://test.api.amadeus.com/v1/shopping/activities?'.$data);
         
         $headers_ = array("Authorization: Bearer ".$token);
         curl_setopt($curl, CURLOPT_HTTPHEADER, $headers_);
         curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
         
         $result = curl_exec($curl);
       
        echo $result;
         curl_close($curl);
        
      
         
         
     
         
    

?>