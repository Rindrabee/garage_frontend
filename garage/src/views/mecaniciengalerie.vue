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
                <img @click="slide1" style="cursor: pointer;" class="profile-image" :src="'http://localhost:8082/' +  Mecanicien.Photo  + '.jpeg'" alt="">
                <p style="cursor: pointer;" class="profile-name">  {{ Mecanicien.Nom }} </p>
            </div>

            <div id="rindra" class="settings-menu">
                <div id="dark-btn">
                    <span></span>
                </div>

                <div class="settings-menu-inner">
                    <div class="settings-links">
                        <img @click="modification" src="../assets/images/setting.png" class="settings-icon">
                        <a @click="modification" style="color: #000;font-family: century gothic;cursor: pointer;" href="#">PROFILE<img style="width: 10px;" src="../assets/images/arrow.png" alt=""></a>
                    </div>
                    
                    <div class="settings-links">
                        <img @click="logout" src="../assets/images/logout.png" class="settings-icon">
                        <a @click="logout"  style="color: #000;font-family: century gothic;cursor: pointer;">DECONNECTION<img src="../assets/images/arrow.png"
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
                <span class="fas fa-image"></span><p style="font-size: 13px;">Galerie</p>
            </div>
            <div class="sidebar-menu">
                <span @click="mecanicienapropos" class="fas fa-cog"></span><p @click="mecanicienapropos" style="font-size: 13px;">À propos</p>
            </div>
           
          
        </div>
        
        <!-- main dashboard -->
    <main>

    <h1 style="color: white;font-size: 47px;margin-left: 150px;" id="clignotant">Collection de belle image</h1>
  


    <section>

       <div class="box">
        <span style="--i:1;"><img style="width: 290px;height: 190px;" src="../assets/images/51.jpg" alt=""></span>
        <span style="--i:2;"><img style="width: 290px;height: 190px;" src="../assets/images/52.jpg" alt=""></span>
        <span style="--i:3;"><img style="width: 290px;height: 190px;" src="../assets/images/53.jpg" alt=""></span>
        <span style="--i:4;"><img style="width: 290px;height: 190px;" src="../assets/images/54.jpg" alt=""></span>
        <span style="--i:5;"><img style="width: 290px;height: 190px;" src="../assets/images/55.jpg" alt=""></span>
        <span style="--i:6;"><img style="width: 290px;height: 190px;" src="../assets/images/56.jpg" alt=""></span>
        <span style="--i:7;"><img style="width: 290px;height: 190px;" src="../assets/images/57.jpg" alt=""></span>
        <span style="--i:8;"><img style="width: 290px;height: 190px;" src="../assets/images/58.jpg" alt=""></span>
    </div>
    <br><br>

    <div id="apropos" class="section-apropos">
        <p style="color: green;font-family: century gothic;font-size: 15px;">Bienvenue dans notre galerie ! Découvrez ci-dessous notre collection d'œuvres d'art et d'images captivantes. Notre galerie vous offre un voyage à travers l'histoire de l'art, des créations classiques aux œuvres contemporaines. Explorez les différentes pièces exposées, chacune ayant son propre récit à raconter. Profitez de cette expérience artistique immersive et inspirante.</p>
    </div>
   
    </section>

    </main>
    </div>
    </body>
    </html>
    </template>
    
    <script>
import AuthenticationService from '../services/AuthenticationService.js'
import axios from 'axios';
import { tokenIsExpired } from '../utils/date.js';


export default {
    data () {
    return {
    Mecanicien : {},
    }
    },
    mounted(){
    this.mecanicienconnecter();
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

    //Diriger vers la page modification
    modification() {
    this.$router.push({ name: 'modificationmecanicien' });
    },
    
    //Prendre la session du mecanicien connecter
    mecanicienconnecter() {
    axios.get('http://localhost:8082/api/mecaniciens/session', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    })
    .then(response => {
    this.Mecanicien = response.data.mc;
    // this.id_garage = this.Garage.id;

    }).catch(error => {
    console.log(error);
    })
    },



    logout() {
    axios.post('http://localhost:8082/api/mecaniciens/logout')
    .then(response => {
   
    localStorage.removeItem('token');
    localStorage.removeItem('Email');
    this.$router.push({ name: 'loginpage' });
    })
    .catch(error => {
    console.error(error);
    this.MessageError = "Une erreur s'est produite lors de la déconnexion.";
    });
    },

    supprimemessage3() {
    axios.delete('http://localhost:8082/api/messages/deletemessage3')
    .then(response => {
    console.log(response.data)
    })
    },

    mecanicienaccueuil() {
        this.$router.push({ name: 'mecanicienaccueil' });
    },

    mecanicienapropos() {
        this.$router.push({ name: 'mecanicienpageapropos' });
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


    @keyframes clignoter {
   0% { opacity: 1; }
   50% { opacity: 0.7; }
   100% { opacity: 1; }
   }

#clignotant {
animation: clignoter 2s infinite;
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
  .section-apropos {
  padding: 10px 0;
  background-color: #f8f8f8;
  margin-top: 36px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.section-apropos {
  padding: 10px 0;
  background-color: rgba(248, 248, 248, 0.9);
}

    .box {
        position: relative;
        width: 200px;
        margin-top: 120px;
        margin-left: 370px;
        height: 200px;
        transform-style: preserve-3d;
        animation: animate 70s linear infinite;
    }
    @keyframes animate 
    {
        100% {
            transform: perspective(1000px) rotateY(360deg);
        }
    }
    .box span {
        position: absolute;
        top: 0;
        left: 50;
        width: 100%;
        height: 100%;
        transform-origin: center;
        transform-style: preserve-3d;
        transform: rotateY(calc(var(--i) * 45deg)) translateZ(400px);
        -webkit-box-reflect: below 0px linear-gradient(transparent,transparent,#0004);
    }
    .box span img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    
    </style>