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
        <nav class="navbar">
        <h4 style="margin-left: 20px;font-family: century gothic;font-size: 17px;"><img class="rotate-image" style="width: 36px;" src="../assets/images/car.ico" alt=""> GARAGEFINDER</h4>
        <div class="profile">
            <img @click="slide1" style="cursor: pointer;" class="profile-image" src="../assets/images/profil.ico" alt="">
            <p style="cursor: pointer;" class="profile-name">Tahinalisoa</p>
        </div>
        <div id="rindra" class="settings-menu">
            <div id="dark-btn">
                <span></span>
            </div>
            <div class="settings-menu-inner">
                <div class="settings-links">
                    <img style="cursor: pointer;" src="../assets/images/setting.png" class="settings-icon">
                    <a style="color: #000;font-family: century gothic;cursor: pointer;" href="modificationclient">PROFILE<img style="width: 10px;" src="../assets/images/arrow.png" alt=""></a>
                </div>
                
                <div class="settings-links">
                    <img style="cursor: pointer;" src="../assets/images/logout.png" class="settings-icon">
                    <a @click="logout" style="color: #000;font-family: century gothic;cursor: pointer;">DECONNECTION<img src="../assets/images/arrow.png"
                    width="10px" alt=""></a>
                </div>
                
            </div>    
        </div>
    </nav>
    <main>
        <br><br><br><br>
        <div style="margin-left: -200px;">
        <h1 style="color: white;font-size: 47px;" id="clignotant">Bienvenue Mr,</h1>
        <p style="color: white;font-family: century gothic;font-size: 15px;">Choisir si-dessous le service que vous voulez prendre</p>
        </div>
       


        <br><br><br><br>
        <div class="dashboard-container">
            <!-- cards top -->
            <div class="card total1">
                <div class="info">
                    <div class="info-detail">
                    <h3 style="font-size: 20px;">Depannage</h3>
                    <p style="font-family: century gothic;font-size: 13px;">Ma voiture est en panne</p>
                    <h2><span>URGENCE</span></h2>
                    <button class="btn btn-outline-success">Continuer</button>
                    </div>
                    <div class="info-image">
                    <i class="fas fa-car-crash"></i>

                    </div>
                    
                </div>
            </div>
            <div class="card total2">
                <div class="info">
                    <div class="info-detail">
                    <h3 style="font-size: 20px;">Rendez-vous</h3>
                    <p style="font-family: century gothic;font-size: 13px;">prendre rendez-vous</p>
                    <h2><span>UTILE</span></h2>
                    <button class="btn btn-outline-success">Continuer</button>
                    </div>
                    <div class="info-image">
                    <i class="fas fa-calendar-check"></i>

                    </div>
                    
                </div>
            </div>
            <div class="card total3">
                <div class="info">
                    <div class="info-detail">
                    <h3 style="font-size: 20px;">GARAGE</h3>
                    <p style="font-family: century gothic;font-size: 13px;">Recherche garage</p>
                    <h2><span>NECESSAIRE</span></h2>
                    <button class="btn btn-outline-success">Continuer</button>
                    </div>
                    <div class="info-image">
                    <i class="fas fa-search"></i>

                    </div>
                    
                </div>
                
            </div>
            <div class="card total4">
                <div class="info">
                    <div class="info-detail">
                    <h3 style="font-size: 20px;">DISCUSSION</h3>
                    <p style="font-family: century gothic;font-size: 13px;">Discuter en priver</p>
                    <h2><span>OPTION</span></h2>
                    <button class="btn btn-outline-success">Continuer</button>
                    </div>
                    <div class="info-image">
                    <i class="fas fa-comments"></i>

                    </div>
                    
                </div>
              
            </div>

        </div>
    </main>
    </div>
</body>
</html>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService.js';
import { tokenIsExpired } from '../utils/date.js';
import axios from 'axios';
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
        logout() {
        axios.post('http://localhost:8082/api/clients/logout')
        .then(response => {
        localStorage.removeItem('token');
        localStorage.removeItem('Email');
        this.$router.push({ name: 'loginpage' });
        })
        .catch(error => {
        console.error(error);
        this.MessageError = "Une erreur s'est produite lors de la déconnexion.";
        });
        }
    },
 
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


/* ............................ */
main {
    min-height: 100%;
    padding: 6rem 1rem 2rem 14rem;
    color: #201f2b;
}

.dashboard-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.5fr 0.5fr;
    grid-template-rows: auto;
    margin-left: -205px;
    gap: 1rem;
    grid-template-areas: 
    "total1 total2 total3 total4 total4"
    "detail detail detail customer customer"
    "detail detail detail customer customer";
}
.card {
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;
}
.total1 {
    grid-area: total1;
    background-color: #F5F5F5;
    color: #000;
}
.total2 {
    grid-area: total2;
    background-color: #F5F5F5;
    color: #000;
}
.total3 {
    grid-area: total3;
    background-color: #F5F5F5;
    color: #000;
}
.total4 {
    grid-area: total4;
    background-color: #F5F5F5;
    color: #000;
}

.info {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
}
.info-detail h2 {
    font-size: 24px;
}
.info-detail p {
    font-size: 14px;
}
.info-image {
    font-size: 50px;
    color: #ffa400;
}


@keyframes clignoter {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}

#clignotant {
  animation: clignoter 2s infinite;
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
    main {
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