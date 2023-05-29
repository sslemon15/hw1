<?php
    require_once 'auth.php';

    // Se la sessione è scaduta, esco
    if (!checkAuth()) exit;

    
?>

<html>


  <head>
    <!DOCTYPE html>
    <title>Get-a-Way</title>
    <link href="https://fonts.googleapis.com/css?family=Arimo" rel="stylesheet">
    <link rel="stylesheet" href="home.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="travel-svgrepo-com.png">
    <script src="traduttore.js" defer="true"></script>
  </head>
  
  <body>
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
          <a href='home.php'>HOME</a>
          <a href='about.php'>ABOUT</a>
          <a>CONTACT</a>
          <div id="separator"></div>
          <a href='profile.php'>PROFILO</a>
          <a href='logout.php' class='button'>LOGOUT</a>
        </div>
        <div id="menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <h1>TRADUTTORE</h1>
      <a class="subtitle">
         Traduci il nome della città nel relativo codice IATA 
      </a>  
  

      <section id="search">
            <div id="struct">
            <form name="traduttore">
                <div id="sistema">
               
                <label >Città di partenza</label><input type="text" name="a-part" id="part" placeholder="Città di partenza" class="searchBar">
                <label >Città di destinazione</label><input type="text" name="a-dest" id="dest" placeholder="Città di destinazione" class="searchBar">
                </div>
                <div class="submit">
                    <input type='submit' value=" Traduci" id="s-trad" class="submit_">
                </div>
                
            </form>
            <section id="album" class='album'>
                <div id='err3' class='hidden'><img src="./property/close.svg"/><span>Inserisci il nome della città di partenza e/o destinazione !</span></div>
            </section>
            </div>
           
    </section>
    </header>
  
    <section class="container">

<div id="results">
    
</div>
<div id="results_2">
    
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