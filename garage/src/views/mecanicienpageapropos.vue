<template>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="./src/assets/bootstrap-5.0.2-dist/css/bootstrap.min.css">
          <link rel="stylesheet" href="./src/assets/fontawesome-free-6.4.0-web/css/all.min.css">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
        <title>Document</title>
    </head>
    <body>
    <div class="cont">
        <!-- navbar -->
        <nav class="navbar">
            <h4 style="margin-left: -30px;"><img class="rotate-image" style="width: 36px;" src="../assets/images/car.ico" alt=""> Menu</h4>
            <div class="profile">
                <input style="margin-left: -300px;width: 300px;color: gray;font-family: century gothic;" class="form-control" type="text" placeholder="Barre de recherche">
                <span class="fas fa-search"></span>
                <img @click="slide1" class="profile-image" src="../assets/images/profil.ico" alt="">
                <p class="profile-name">  Tahinalisoa</p>
            </div>
            <div id="rindra" class="settings-menu">
                <div id="dark-btn">
                    <span></span>
                </div>
                <div class="settings-menu-inner">
                    <div class="settings-links">
                        <img src="../assets/images/setting.png" class="settings-icon">
                        <a style="color: #000;font-family: century gothic;cursor: pointer;" href="#">PROFILE<img style="width: 10px;" src="../assets/images/arrow.png" alt=""></a>
                    </div>
                    
                    <div class="settings-links">
                        <img src="../assets/images/logout.png" class="settings-icon">
                        <a style="color: #000;font-family: century gothic;cursor: pointer;">DECONNECTION<img src="../assets/images/arrow.png"
                        width="10px" alt=""></a>
                        
                    </div>
                </div>    
            </div>
        </nav>
        <!-- sidebar -->
        <input type="checkbox" id="toggle">
        <label class="side-toggle" for="toggle"><span class="fas fa-bars"></span></label>
    
        <div class="sidebar">
            <div class="sidebar-menu">
                <span @click="mecanicienaccueuil" class="fas fa-home"></span><p @click="mecanicienaccueuil" style="font-size: 13px;">Accueil</p>
            </div>
            
            <div class="sidebar-menu">
                <span class="fas fa-tools"></span><p style="font-size: 13px;">Services</p>
            </div>
            <div class="sidebar-menu">
                <span class="fas fa-wallet"></span><p style="font-size: 13px;">Tarifs</p>
            </div>
            <div class="sidebar-menu">
                <span class="fas fa-image"></span><p style="font-size: 13px;">Galerie</p>
            </div>
            <div class="sidebar-menu">
                <span class="fas fa-cog"></span><p style="font-size: 13px;">À propos</p>
            </div>
            <div class="sidebar-menu">
                <span class="fas fa-phone"></span><p style="font-size: 13px;">Contact </p>
            </div>
          
        </div>
        <!-- main dashboard -->
    <main>

    <section id="apropos" class="section-apropos">
        <div class="container">
        <h2 class="section-title">À propos de notre garage</h2>
        <div class="section-content">
        <img style="width: 40px;" src="../assets/images/car.ico" alt="Notre garage" class="garage-image">
        <p class="description">
        Bienvenue chez notre garage, votre spécialiste de confiance pour tous vos besoins en réparation et entretien automobile. Depuis notre fondation, nous nous engageons à fournir un service de qualité supérieure à nos clients.
        </p>
        <p class="description">
        Notre équipe de mécaniciens qualifiés et expérimentés est passionnée par l'automobile et est dévouée à vous offrir des solutions fiables et efficaces. Nous utilisons les dernières technologies et outils de diagnostic pour assurer des réparations précises et un entretien optimal de votre véhicule.
        </p>
        <p class="description">
        Chez notre garage, nous valorisons la satisfaction de nos clients. Nous nous efforçons de maintenir des tarifs compétitifs et transparents, et de fournir un service amical et professionnel à chaque visite. Votre sécurité et votre tranquillité d'esprit sont notre priorité absolue.
        </p>
        </div>
        </div>
    </section>

    </main>
    </div>
    </body>
    </html>
    </template>
    
    <script>
    import AuthenticationService from '../services/AuthenticationService.js'
    export default {
      data () {
        return {
        
        }
    },
      methods: {
        slide1(){
            let a = document.getElementById("rindra");
            if (a.style.display === "block") {
            a.style.display = "none";
            } else {
            a.style.display = "block";
            }
        },
        mecanicienaccueuil() {
        this.$router.push({ name: 'mecanicienaccueil' });
        },
      }
    }
    </script>
    
    <style scoped>
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Poppins",sans-serif;
    }
    .cont {
    position: fixed;
    height: 100vh;
    width: 100%;
    background: url('../assets/images/ft3.jpg');
    background-size: cover;
    background-position: center;
    padding: 0 8%;
    }
    
    h2 {
        font: 18px;
        padding: 15px 0;
    }
    h2 > span {
        font-size: 14px;
    }
    .navbar {
        display: flex;
        position: fixed;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 55px;
        top: 0;
        left: 0;
        background-color: #fff;
        z-index: 2;
        padding-left: 6rem;
    }
    .navbar .settings-menu{
        position: absolute;
        width: 70%;
        max-width: 290px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        border-radius: 4px;
        overflow: hidden;
        top : 108%;
        right: 1%;
        display: none;
    } 
    .navbar .settings-menu .settings-menu-inner {
        background : var(--bg-color);
        padding: 20px;
    }
    .settings-menu hr{
        border: 0;
        height: 1px;
        background: #9a9a9a;
        margin: 15px 0;
    }
    .settings-links {
        display: flex;
        align-items: center;
        margin: 15px 0;
    }
    .settings-links .settings-icon {
        width: 38px;
        margin-right: 10px;
        border-radius: 50%;
    }
    .settings-links a{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        color: #626262;
    }
    .settings-links a:hover {
        background-color:  #eff5ef;
        height: 37px;
        border-radius: 10px;
    }
    .profile {
        display: flex;
        width: 32%;
        max-width: 200px;
        justify-content: space-around;
        align-items: center;
    }
    .profile-image {
        width: 30px;
        height: 30px;
        object-fit: cover;
        border-radius: 50%;
    }
    .profile-name {
        font-size: 0.9rem;
        margin-left: -20px;
    }
    .side-toggle {
        position: fixed;
        z-index: 2;
        top: 10px;
        left: 25px;
        float: right;
        font-size: 20px;
        cursor: pointer;
    }
    #toggle {
        display: none;
    }
    .sidebar {
        position: fixed;
        height: 100%;
        width: 200px;
        left: 0;
        top: 0;
        padding: 80px 0 20px 0;
        color: #fff;
        background-color:  #0f530f;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    }
    .sidebar-menu {
        display: flex;
        align-items: center;
        padding: 15px 25px;
        width: 100%;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }
    .sidebar-menu > span {
        font-size: 25px;
        padding-right: 30px;
    }
    .sidebar-menu:hover {
        color:  #ffa400;
        background-color:  #0f530f;
    }
    #toggle:checked ~ .sidebar {
        width: 70px;
    }
    #toggle:checked ~ .sidebar .sidebar-menu > p {
        display: none;
    }
    #toggle:checked ~ main {
        padding: 6rem 2rem 2rem 6rem;
    }
    /* ............................ */
    main {
        min-height: 100%;
        padding: 6rem 1rem 2rem 14rem;
        color: #201f2b;
    }
    /* Styles pour la section "À propos" */
.section-apropos {
  padding: 40px 0;
  background-color: #f8f8f8;
  margin-top: 26px;
}
.section-apropos {
  padding: 40px 0;
  background-color: rgba(248, 248, 248, 0.9);
}

.section-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.section-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.garage-image {
  max-width: 300px;
  margin-bottom: 20px;
}

.description {
  margin-bottom: 10px;
  color: #555;
  font-size: 16px;
  line-height: 1.6;
}

 
    
    /* rotation de l'image */
    .rotate-image {
      animation: rotation 5s infinite linear; 
    }
    
    @keyframes rotation {
      from {
        transform: rotateY(0deg); 
      }
      to {
        transform: rotateY(360deg); 
      }
    }
    
    
    
    
    /* atao responsive lery  */
    
    @media screen and (max-width: 980px) {
        .dashboard-container {
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 
            "total1 total2"
            "total3 total4"
            "detail detail"
            "customer customer";
        }
    }
    @media screen and (max-width : 480px) {
        .profile-name {
            display: none;
        }
        .sidebar {
            display: none;
        }
        main {
            padding: 6rem 2rem 2rem 2rem;
        }
        #toggle:checked ~ .sidebar {
            width: 200px;
            display: block;
        }
        #toggle:checked ~ .sidebar .sidebar-menu > p {
            display: block;
        }
        #toggle:checked ~ main {
            padding: 6rem 2rem 2rem 2rem;
        }
        .dashboard-container {
            grid-template-columns: 1fr;
            grid-template-areas: 
            "total1"
            "total2"
            "total3"
            "total4"
            "detail"
            "customer";
        }
       
    }
    
    
    </style>