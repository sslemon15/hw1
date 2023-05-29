<?php
    // Verifica che l'utente sia già loggato, in caso positivo va direttamente alla home
    include 'auth.php';
    if (checkAuth()) {
        header('Location: home.php');
        exit;
    }

    if (!empty($_POST["username"]) && !empty($_POST["password"]) )
    {
        // Se username e password sono stati inviati
        // Connessione al DB
        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']) or die(mysqli_error($conn));

        $username = mysqli_real_escape_string($conn, $_POST['username']);
        // ID e Username per sessione, password per controllo
        $query = "SELECT * FROM users WHERE username = '".$username."'";
        // Esecuzione
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));;
        
        if (mysqli_num_rows($res) > 0) {
            // Ritorna una sola riga, il che ci basta perché l'utente autenticato è solo uno
            $entry = mysqli_fetch_assoc($res);
            if (password_verify($_POST['password'], $entry['password'])) {

                // Imposto una sessione dell'utente
                $_SESSION["username"] = $entry['username'];
                $_SESSION["user_id"] = $entry['id'];
                header("Location: home.php");
                mysqli_free_result($res);
                mysqli_close($conn);
                exit;
            }
        }
        // Se l'utente non è stato trovato o la password non ha passato la verifica
        $error = "Username e/o password errati.";
    }
    else if (isset($_POST["username"]) || isset($_POST["password"])) {
        // Se solo uno dei due è impostato
        $error = "Inserisci username e password.";
    }

?>

<html>
    <head>
        <link rel='stylesheet' href='login.css'>

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/png" href="travel-svgrepo-com.png">
        <title>Accedi - Get-a-Way</title>
    </head>
    <body>
    <div id="my_logo">
        <div id="logo">
          Get-a-Way
        </div>
        <div id="logo_i">
        </div>
      </div>
        <main class="login">
        
        <div id="access">
            <h5>Accesso clienti</h5>
            <p class="clienti">Accedi al tuo account o creane uno nuovo</p>
        </div> 
          <?php
                // Verifica la presenza di errori
                if (isset($error)) {
                    echo "<div class='error'><img src='./property/close.svg'/><span>".$error."</span></div>";
                }
                
            ?>
        <section class="main">

        
         
            <form name='login' method='post'>
                <!-- Seleziono il valore di ogni campo sulla base dei valori inviati al server via POST -->
            <h2>Clienti registrati</h2>
            <p class="clienti">Se hai un account, accedi con il tuo Username</p>    
                <div class="username">
                    <label for='username'>Nome utente*</label>
                    <input type='text' name='username' <?php if(isset($_POST["username"])){echo "value=".$_POST["username"];} ?>>
                </div>
                <div class="password">
                    <label for='password'>Password</label>
                    <input type='password' name='password' <?php if(isset($_POST["password"])){echo "value=".$_POST["password"];} ?>>
                </div>
                <div class="submit-container">
                    <div class="login-btn">
                        <input type='submit' value="Login">
                    </div>
                </div>
            </form>
         <div id ="iscriviti">  
           <div id="crea">
            <div class="signup"><h2>Non hai un account?</h2></div>
            <div class="signup-btn-container"><a class="signup-btn" href="signup.php">Iscriviti a Get-a-Way</a></div>
            </div>
        </div> 
        </section>
        </main>
    </body>
</html>