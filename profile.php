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
        <link rel='stylesheet' href='profile.css'>
        <script src='profilo.js' defer></script>
        <link rel="icon" type="image/png" href="travel-svgrepo-com.png">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8">

        <title>Get-a-Way - <?php echo $userinfo['name']." ".$userinfo['surname'] ?></title>
    </head>

    <body>
    <div id="overlay">
    </div>
        <header>
            <nav>
                <div class="nav-container">
                <div id="my_logo">
                    <div id="logo">
                     Get-a-Way
                     </div>
                     <div id="logo_i"> </div>
                </div>
                    <div id="links">
                        <a href='home.php'>HOME</a>
                        <a>DISCOVER</a>
                        <a href='about.php'>ABOUT</a>
                        <a>CONTACT</a>
                        <div id="separator"></div>
                        <a href='logout.php' class='button'>LOGOUT</a>
                    </div>
                    <div id="menu">
                    <div class="menu-item"><a href="home.php">HOME</a></div>
                    <div class="menu-item"><a href="about.php">ABOUT</a></div>
                    <div class="menu-item"><a href="logout.php">LOGOUT</a></div>
                    </div>
                </div>
            </nav>
                <div class="userInfo">
                    <div class="avatar" style="background-image: url(<?php echo $userinfo['propic'] == null ? "property/default_avatar.png" : $userinfo['propic'] ?>)">
                    </div>
                    <h1><?php echo $userinfo['name']." ".$userinfo['surname'] ?></h1>
                   
                </div>               
            
        </header>

        <section class="container">
            <h1>Voli e Hotel</h1>
            <div id="results" >
            
            </div>
            <h1>Tours e Attrazioni</h1>
            <div id="results-todo" >

                    

            </div>
            
    </section>

    </body>
</html>

<?php mysqli_close($conn); ?>