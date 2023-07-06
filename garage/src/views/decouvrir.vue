<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/assets/fontawesome-free-6.4.0-web/css/all.min.css">
    <title>Document</title>
</head>
<body>
<div class="cont">
    <nav class="navbar">
        <ul class="left">
            <li><a href="/"><i class="fas fa-home"></i>&nbsp; Accueil</a></li>
        </ul>
        <ul class="right">
            <li><a href="loginpage"><i class="fas fa-sign-in-alt"></i>&nbsp; Se connecter</a></li>
            <li><a href="register"><i class="fas fa-user-plus"></i>&nbsp; S'inscrire</a></li>
        </ul>
    </nav> 
    <br><br><br><br><br>

    <div class="welcome-container">
    <div class="welcome-text">
    <h1>Bienvenue sur notre site web !</h1>
    <p>Nous sommes enchantés de vous accueillir sur notre plateforme en ligne dédiée aux passionnés d'automobiles et aux propriétaires de véhicules. Que vous soyez à la recherche d'un garage pour l'entretien régulier de votre voiture, des réparations nécessaires ou des services de personnalisation, vous êtes au bon endroit.</p>
    <p>Ici, vous trouverez une sélection soigneusement composée de garages partenaires hautement qualifiés et expérimentés. Notre objectif est de vous offrir une expérience sans pareille en vous mettant en relation avec les professionnels les plus compétents de l'industrie automobile.</p>
    <p>Nos garages partenaires sont minutieusement évalués pour s'assurer qu'ils répondent aux normes les plus strictes en termes de qualité, de service à la clientèle et d'expertise technique. Ils sont prêts à prendre en charge tous vos besoins automobiles, que ce soit pour un simple entretien planifié ou pour des réparations complexes.</p>
    <p>Explorez notre liste complète de garages inscrits ci-dessous. Chaque garage dispose d'un profil détaillé où vous pourrez trouver des informations sur leurs services offerts, leurs spécialités, les marques de véhicules qu'ils traitent et bien plus encore. Vous pouvez également consulter les avis et les évaluations des clients précédents pour vous aider à faire le meilleur choix.</p>
    <p>Nous vous encourageons à parcourir notre site, à comparer les garages et à prendre contact directement avec ceux qui suscitent votre intérêt. N'hésitez pas à poser des questions, à demander des devis ou à prendre rendez-vous pour obtenir les services dont vous avez besoin. Nous sommes là pour vous accompagner tout au long du processus et pour vous garantir une satisfaction totale.</p>
    <p>Merci de votre confiance et bonne visite sur notre site web. Nous espérons que vous trouverez le garage idéal qui satisfera toutes vos attentes et vous offrira des services de qualité exceptionnelle pour votre véhicule bien-aimé.</p>
    </div>
    <div class="logo-image">
        <img style="width: 420px;margin-left: -440px;margin-top: 130px;border-radius: 5px;position: absolute;" src="../assets/images/ft1.jpg" alt="Logo du site">
    </div>
    </div>

    <div class="main">
    <div class="cards">
        <div class="image">
            <img src="../assets/images/GRG1.png" alt="">
        </div>
        <div class="title">
           <h1>Title Name</h1>
        </div>
        <div class="des">
            <p>Adresse : Antsirabe Mahazoarivo</p>
            <p>Specialité : Moteur</p>

            <button>Consulter</button>
        </div>
    </div>

    <div class="cards">
        <div class="image">
            <img src="../assets/images/GRG2.png" alt="">
        </div>
        <div class="title">
           <h1>Title Name</h1>
        </div>
        <div class="des">
            <p>Adresse : Antsirabe Mahazoarivo</p>
            <p>Specialité : Moteur</p>

            <button>Consulter</button>
        </div>
    </div>

    <div class="cards">
        <div class="image">
            <img src="../assets/images/GRG2.jpg" alt="">
        </div>
        <div class="title">
           <h1>Title Name</h1>
        </div>
        <div class="des">
            <p>Adresse : Antsirabe Mahazoarivo</p>
            <p>Specialité : Moteur</p>

            <button>Consulter</button>
        </div>
    </div>

    
    <div class="cards">
        <div class="image">
            <img src="../assets/images/GRG3.jpg" alt="">
        </div>
        <div class="title">
           <h1>Title Name</h1>
        </div>
        <div class="des">
            <p>Adresse : Antsirabe Mahazoarivo</p>
            <p>Specialité : Moteur</p>

            <button>Consulter</button>
        </div>
    </div>
   
    </div>
    <div class="card-footer">
        <button class="register-button">Veuillez vous inscrire pour voir tous les garages</button>
    </div>
   
</div>
   
</body>
</html>
</template>

<script>

</script>


<style scoped>
* {
    margin: 0px;
    padding: 0px;
    font-family: Arial;
}
.cont {
    background-color: rgba(0, 100, 0, 0.05);
  
}
.cards {
    width: 20%;
    display: inline-block;
    border-radius: 5px;
    margin: 33px;
    box-shadow: 2px 2px 10px black;
}
.cards:hover {
    box-shadow: 2px 2px 10px #ffa400;
}
.image img {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 100%;
    height: 200px;
}
.title {
    text-align: center;
    padding: 5px;
}
.title h1 {
    font-size: 16px;
}
.des {
    text-align: left;
    padding: 4px;
}
button {
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: white;
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: black;
    color: white;
    transition: .5s;
    cursor: pointer;
}

/* Styles pour le navbar */
.navbar {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background-color: #03331d;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    height: 40px; 
}

.navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  
}

.navbar ul.left {
    margin-right: auto;
    margin-top: 10px;
}
.navbar ul.right {
    margin-top: 10px;
}

.navbar ul li {
    display: inline-block;
    margin-right: 10px;
}

.navbar ul li a {
    text-decoration: none;
    color: #fff; 
    padding: 5px 10px;
    font-family: 'Tw Cen MT' , sans-serif;
    position: relative;
    font-size: 16px;
}

.navbar ul li a::after {
    content: '';
    background: #ffa400;
    position: absolute; 
    bottom: 0;
    right: 0;
    width: 0;
    height: 3px;
    transform: translate(-50%, 0.1px); 
    transition: 0.3s;
}

.navbar ul li a:hover:after {
    width: 38%;
}

/* boutton du footer */
.card-footer {
    display: flex;
    justify-content: center;
    align-items: center;
}
.register-button {
    background-color: #0f0f0f;
    color: #fff;
    border: none;
    font-size: 16px;
    align-items: center;
    cursor: pointer;
}
.register-button:hover {
    background-color: #ffa400;
}

/* welcome texte */
.welcome-container {
    display: flex;
    align-items: flex-start;
}

.welcome-text {
    font-family: "Century Gothic", Arial, sans-serif;
    text-align: left;
    line-height: 1.5;
    margin-bottom: 40px;
    margin-left: 10px;
    max-width: 800px; /* Limite la largeur du texte */
}

.welcome-text h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.welcome-text p {
    font-size: 15px;
    margin-bottom: 15px;
}

.logo-image {
    margin-left: auto;
    max-width: 200px; /* Ajustez la taille de l'image selon vos besoins */
}

</style>