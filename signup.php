<?php
    require_once 'auth.php';

    if (checkAuth()) {
        header("Location: home.php");
        exit;
    }   

    // Verifica l'esistenza di dati POST
    if (!empty($_POST["username"]) && !empty($_POST["password"]) && !empty($_POST["email"]) && !empty($_POST["name"]) && 
        !empty($_POST["surname"]) && !empty($_POST["confirm_password"]) && !empty($_POST["allow"]))
    {
        $error = array();
        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']) or die(mysqli_error($conn));

        
        # USERNAME
        // Controlla che l'username rispetti il pattern specificato
        if(!preg_match('/^[a-zA-Z0-9_]{1,15}$/', $_POST['username'])) {
            $error[] = "Username non valido";
        } else {
            $username = mysqli_real_escape_string($conn, $_POST['username']);
            // Cerco se l'username esiste già o se appartiene a una delle 3 parole chiave indicate
            $query = "SELECT username FROM users WHERE username = '$username'";
            $res = mysqli_query($conn, $query);
            if (mysqli_num_rows($res) > 0) {
                $error[] = "Username già utilizzato";
            }
        }
        # PASSWORD
        if (strlen($_POST["password"]) < 8) {
            $error[] = "Caratteri password insufficienti";
        } 
        # CONFERMA PASSWORD
        if (strcmp($_POST["password"], $_POST["confirm_password"]) != 0) {
            $error[] = "Le password non coincidono";
        }
        # EMAIL
        if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $error[] = "Email non valida";
        } else {
            $email = mysqli_real_escape_string($conn, strtolower($_POST['email']));
            $res = mysqli_query($conn, "SELECT email FROM users WHERE email = '$email'");
            if (mysqli_num_rows($res) > 0) {
                $error[] = "Email già utilizzata";
            }
        }

        # UPLOAD DELL'IMMAGINE DEL PROFILO  
        if (count($error) == 0) { 
            if ($_FILES['avatar']['size'] != 0) {
                $file = $_FILES['avatar'];
                $type = exif_imagetype($file['tmp_name']);
                $allowedExt = array(IMAGETYPE_PNG => 'png', IMAGETYPE_JPEG => 'jpg', IMAGETYPE_GIF => 'gif');
                if (isset($allowedExt[$type])) {
                    if ($file['error'] === 0) {
                        if ($file['size'] < 7000000) {
                            $fileNameNew = uniqid('', true).".".$allowedExt[$type];
                            $fileDestination = 'property/'.$fileNameNew;
                            move_uploaded_file($file['tmp_name'], $fileDestination);
                        } else {
                            $error[] = "L'immagine non deve avere dimensioni maggiori di 7MB";
                        }
                    } else {
                        $error[] = "Errore nel carimento del file";
                    }
                } else {
                    $error[] = "I formati consentiti sono .png, .jpeg, .jpg e .gif";
                }
            }else{
                echo "Non hai caricato nessuna immagine";
            }
        }

        # REGISTRAZIONE NEL DATABASE
        if (count($error) == 0) {
            $name = mysqli_real_escape_string($conn, $_POST['name']);
            $surname = mysqli_real_escape_string($conn, $_POST['surname']);

            $password = mysqli_real_escape_string($conn, $_POST['password']);
            $password = password_hash($password, PASSWORD_BCRYPT);

            $query = "INSERT INTO users(username, password, name, surname, email, propic) VALUES('$username', '$password', '$name', '$surname', '$email', '$fileDestination')";
            
            if (mysqli_query($conn, $query)) {
                $_SESSION["username"] = $_POST["username"];
                $_SESSION["user_id"] = mysqli_insert_id($conn);
                mysqli_close($conn);
                header("Location: home.php");
                exit;
            } else {
                $error[] = "Errore di connessione al Database";
            }
        }

        mysqli_close($conn);
    }
    else if (isset($_POST["username"])) {
        $error = array("Riempi tutti i campi");
    }

?>


<html>
    <head>
        <link rel='stylesheet' href='signup.css'>
        <script src='signup.js' defer></script>

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/png" href="travel-svgrepo-com.png">
        <meta charset="utf-8">

        <title>Iscriviti - Get-a-Way</title>
    </head>
    <body>
    <div id="my_logo">
        <div id="logo">
          Get-a-Way
        </div>
        <div id="logo_i"> </div>
    </div>
        <main>
      
        <section class="main_right">
            <h1>Iscriviti gratuitamente e risparmia su migliaia di voli e hotel </h1>
            <form name='signup' method='post' enctype="multipart/form-data" autocomplete="off">
                <div class="names">
                    <div class="name">
                        <label for='name'>Nome</label>
                        <!-- Se il submit non va a buon fine, il server reindirizza su questa stessa pagina, quindi va ricaricata con 
                            i valori precedentemente inseriti -->
                        <input type='text' name='name' <?php if(isset($_POST["name"])){echo "value=".$_POST["name"];} ?> >
                        <div><img src="./property/close.svg"/><span>Devi inserire il tuo nome</span></div>
                    </div>
                    <div class="surname">
                        <label for='surname'>Cognome</label>
                        <input type='text' name='surname' <?php if(isset($_POST["surname"])){echo "value=".$_POST["surname"];} ?> >
                        <div><img src="./property/close.svg"/><span>Devi inserire il tuo cognome</span></div>
                    </div>
                </div>
                <div class="username">
                    <label for='username'>Nome utente</label>
                    <input type='text' name='username' <?php if(isset($_POST["username"])){echo "value=".$_POST["username"];} ?>>
                    <div><img src="./property/close.svg"/><span>Nome utente non disponibile</span></div>
                </div>
                <div class="email">
                    <label for='email'>Email</label>
                    <input type='text' name='email' <?php if(isset($_POST["email"])){echo "value=".$_POST["email"];} ?>>
                    <div><img src="./property/close.svg"/><span>Indirizzo email non valido</span></div>
                </div>
                <div class="password">
                    <label for='password'>Password</label>
                    <input type='password' name='password' onkeyup="validator()" <?php if(isset($_POST["password"])){echo "value=".$_POST["password"];} ?>>
                    <div id="ProgressBar">
                        <div id="bar">
                            
                        </div>
                    </div> 
                    <div><img src="./property/close.svg"/><span>La password deve essere composta da almeno 8 caratteri, deve contenere almeno 
                        una lettera maiuscola, almeno un numero e almeno un carattere speciale (ad esempio !,$,#,...)</span></div>
                </div>
                <div class="confirm_password">
                    <label for='confirm_password'>Conferma Password</label>
                    <input type='password' name='confirm_password' <?php if(isset($_POST["confirm_password"])){echo "value=".$_POST["confirm_password"];} ?>>
                    <div><img src="./property/close.svg"/><span>Le password non coincidono</span></div>
                </div>
                <div class="fileupload">
                    <label for='avatar'>Scegli un'immagine profilo</label>
                        <input type='file' name='avatar' accept='.jpg, .jpeg, image/gif, image/png' id="upload_original">
                        <div id="upload"><div class="file_name">Seleziona un file...</div><div class="file_size"></div></div>
                    <span>Le dimensioni del file superano 7 MB</span>
                </div>
                <div class="allow"> 
                    <input type='checkbox' name='allow' value="1" <?php if(isset($_POST["allow"])){echo $_POST["allow"] ? "checked" : "";} ?>>
                    <label for='allow'>Accetto i termini e condizioni d'uso di Get-a-Way.</label>
                </div>
                <?php if(isset($error)) {
                    foreach($error as $err) {
                        echo "<div class='errorj'><img src='./property/close.svg'/><span>".$err."</span></div>";
                    }
                } ?>
                <div class="submit">
                    <input type='submit' value="Registrati" id="submit">
                </div>
            </form>
            <div class="signup">Hai un account? <a id="acc" href="login.php">Accedi</a></div>
        </section>
        </main>
    </body>
</html>