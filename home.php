<?php 
    require_once 'auth.php';
    if (!$userid = checkAuth()) {
        header("Location: login.php");
        exit;
    }
?>

<html>

  <?php 
    // Carico le informazioni dell'utente loggato per visualizzarle nella sidebar (mobile)
    $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
    $userid = mysqli_real_escape_string($conn, $userid);
    $query = "SELECT * FROM users WHERE id = $userid";
    $res_1 = mysqli_query($conn, $query);
    $userinfo = mysqli_fetch_assoc($res_1);   
  ?>

  <head>
    <!DOCTYPE html>
    <title>Get-a-Way</title>
    <link href="https://fonts.googleapis.com/css?family=Arimo" rel="stylesheet">
    <link rel="stylesheet" href="home.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="travel-svgrepo-com.png">
    <script src="home.js" defer="true"></script>
  </head>
  
  <body>
    <div id="overlay" class="hidden">
    </div>
    <header>
      <nav>
      <div id="my_logo">
            <div id="logo">
                     Get-a-Way
            </div>
            <div id="logo_i"></div>
      </div>
        <div id="links">
          <a href="home.php">HOME</a>
          <a href="traduttore.php">TRADUTTORE</a>
          <a href="about.php">ABOUT</a>
          <a>CONTACT</a>
          <div id="separator"></div>
          <a href='profile.php'>PROFILO</a>
          <a href='logout.php' class='button'>LOGOUT</a>
        </div>
        <div id="menu">
          
        
        <div class="menu-item"><a href="about.php">ABOUT</a></div>
        <div class="menu-item"><a href="profile.php">PROFILE</a></div>
        <div class="menu-item"><a href="logout.php">LOGOUT</a></div>

        </div>
      </nav>
      <h1>Gira il mondo con Get-a-Way</h1>
      <a id="sub" class="subtitle">
          Un unico sito per prenotare il viaggio dei tuoi sogni
      </a>  
  

      <section id="search">
            <div id="struct">
                <div id="list">
                <p id="alg", class="list-si"><a class="list-group" >Alloggi</a></p>
                <p id="bl",  class="bord"><a  class="list-group">Voli</a></p>
                <p id="cll", class="bord"><a  class="list-group" >Cose da fare</a></p>
                </div> 
            
            <div id="alloggi">  
            <form name='alloggi' autocomplete="off">
              <div class= "dest">
                <label for="destinazione">Destinazione : </label><input type="text" name="destinazione" id="destinazione_" placeholder="Destinazione" class="searchBar">
                <label for="Check-in">Check-in : </label><input type="date" name="Check-in" id="Check-in_" class="searchBar-date" required >
                <label for="Check-in">Check-out : </label><input type="date" name="Check-out" id="Check-out_" class="searchBar-date" required >
              </div>
              <div id='err' class='hidden'><img src="./property/close.svg"/><span>Inserisci la destinazione e/o controlla se hai inserito correttamente le date di chech-in e check-out</span></div>
             
              <div id="adulti">
                <label for="adulti">Adulti : </label>
                <select name="adulti" id="adulti_">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              
              </div>  

           
            <div class="submit">
                    <input type='submit' value=" Cerca" id="s-all" class="submit_">
            </div>

          </form>
        </div> 

        <div id="aerei", class="hidden">            
        <form name = "voli" >
            <div id = "aiuto">
              <div id="s1", class="scegli-si">Andata e ritorno</div>
              <div id="s2", class="scegli">Solo Andata</div> 
            </div>

          <div id="voli"> 
             
            <div id="voli-a">
                <label for="partenza-v">Aeroporto di partenza : </label><input type="text" name="partenza-v" id="partenza-v" placeholder="Partenza" class="searchBar">
                <label for='Andata'>Data di partenza : </label><input type="date" name="Andata" id="Andata" class="searchBar-date"  required >
            </div>

            <div id="voli-b">
                <label  for="destinazione-v">Aeroporto di destinazione : </label><input type="text" name="destinazione-v" id="destinazione-v" placeholder="Destinazione" class="searchBar">
                <label for="Ritorno"> Data ritorno : </label><input type="date" name="Ritorno" id="Ritorno" class="searchBar-date">
            </div>   
            <div id='err1' class='hidden'><img src="./property/close.svg"/><span>Error: inserisci il codice IATA dei rispettivi aeroporti di partenza e destinazione e/o controlla che le date inserite siano logicamente corrette</span></div>
          </div>
        
        <div class="submit">
                    <input type='submit' value=" Cerca" id="s-v" class="submit_">
        </div>
        </form>
        </div>  

            <div id="todo" >
                <form name="todo" class="hidden">
             <div class = "todoo">   
              <img src="./property/map-location-svgrepo-com.svg" class="hidden">
              <input type="text" name="dafare"  placeholder="Cose da fare a " id="cdf" class="hidden">
            </div>  
            <div id='err2' class='hidden'><img src="./property/close.svg"/><span>Inserisci il nome della destinazione desiderata</span></div>
            <div class="submit">
                    <input type='submit' value=" Cerca" id="s-td" class="submit_" >
            </div>
        </form>
      </div>
      </div>
           
    </section>
    </header>

    <section class="container" class='hidden'>

      <div id="results">
    
      </div>
</section>
 
    <footer>
      <nav>
        <div class="footer-container">
          <div class="footer-col">
            <h1>Get-a-Way</h1>
          </div>
          <div class="footer-col">
            <strong>AZIENDA</strong>
            <p>Chi siamo</p>
            <p>Lavora con noi</p>
          </div>
          <div class="footer-col">
            <strong>INFO UTILI</strong>
            <p>Faq</p>
            <p>Termini e condizioni</p>
            <p>Privacy Policy</p>
          </div>
          <div class="footer-col">
            <strong>CATEGORIE</strong>
            <p>Voli</p>
            <p>Hotel</p>
            <p>Attrazioni</p>
          </div>
        </div>
      </nav>
    </footer>
  </body>
  </html>