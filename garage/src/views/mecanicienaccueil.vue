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
                <img @click="slide1" style="cursor: pointer;" class="profile-image" src="../assets/images/profil.ico" alt="">
                <p style="cursor: pointer;" class="profile-name">  Tahinalisoa</p>
            </div>
            <div id="rindra" class="settings-menu">
                <div id="dark-btn">
                    <span></span>
                </div>
                <div class="settings-menu-inner">
                    <div class="settings-links">
                        <img style="cursor: pointer;" src="../assets/images/setting.png" class="settings-icon">
                        <a style="color: #000;font-family: century gothic;cursor: pointer;" href="#">PROFILE<img style="width: 10px;" src="../assets/images/arrow.png" alt=""></a>
                    </div>
                    
                    <div class="settings-links">
                        <img style="cursor: pointer;" src="../assets/images/logout.png" class="settings-icon">
                        <a @click="logout" style="color: #000;font-family: century gothic;cursor: pointer;">DECONNECTION<img src="../assets/images/arrow.png"
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
                <span class="fas fa-home"></span><p style="font-size: 13px;">Accueil</p>
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
                <span @click="mecanicienapropos"  class="fas fa-cog"></span><p @click="mecanicienapropos" style="font-size: 13px;">À propos</p>
            </div>

            <div class="sidebar-menu">
                <span class="fas fa-phone"></span><p style="font-size: 13px;">Contact </p>
            </div>
          
        </div>
        <!-- main dashboard -->
        <main>
            <h1 style="color: white;font-size: 47px;" id="clignotant">Bienvenue Mr,</h1>
            <p style="color: white;font-family: century gothic;font-size: 15px;">Vous pouvez voir ci dessous la liste de votre travail</p>

            <br><br>
            <div class="card detail">
                <div class="detail-header">
                    <p style="font-family: century gothic;font-size: 18px; ">Voici les clients en panne que vous devez sauvez :</p>
                </div>
                <br>
                <table>
                    <tr>
                        <th>Numéro</th>
                        <th>Nom</th>
                        <th>Date d'arriver</th>
                        <th>Contact direct</th>
                    </tr>
                    <tr>
                        <td>#PW-0001</td>
                        <td>Potential Corp</td>
                        <td>Apr 11, 2021</td>
                        <td><span class="status
                            confirmed"><i class="fas fa-message"></i></span></td>
                    </tr>
                    
                    <tr>
                        <td>#PW-0002</td>
                        <td>Webcode inc</td>
                        <td>Mar 29, 2021</td>
                        <td><span class="status
                            confirmed"><i class="fas fa-message"></i></span></td>
                    </tr>
                    <tr>
                        <td>#PW-0003</td>
                        <td>Coding time</td>
                        <td>Feb 10, 2020</td>
                        <td><span class="status
                            confirmed"><i class="fas fa-message"></i></span></td>
                    </tr>

                    <!-- apina -->

                    <tr>
                        <td>#PW-0001</td>
                        <td>Potential Corp</td>
                        <td>Apr 11, 2021</td>
                        <td><span class="status
                            confirmed"><i class="fas fa-message"></i></span></td>
                    </tr>
                    <tr>
                        <td>#PW-0002</td>
                        <td>Webcode inc</td>
                        <td>Mar 29, 2021</td>
                        <td><span class="status
                            confirmed"><i class="fas fa-message"></i></span></td>
                    </tr>
                    <tr>
                        <td>#PW-0003</td>
                        <td>Coding time</td>
                        <td>Feb 10, 2020</td>
                        <td><span class="status
                            confirmed"><i class="fas fa-message"></i></span></td>
                    </tr>
                </table>
            </div>
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
.status {
padding: 0.3rem 1rem;
border-radius: 30px;
font-weight: 600;
letter-spacing: 1;
font-size: 0.7rem;
}
.onprogress {
background-color: #fff2d7;
color: #ffa705;
}
.confirmed {
background-color: #d7effc;
color: #15a1fe;
}
.fulfilled {
background-color: #dcedde;
color: #37aa38;
}





/* detaillll */
.card {
background-color: #fff;
padding: 1rem;
border-radius: 10px;
width: auto;
}
.detail {
grid-area: detail;
overflow-x: auto;
}
.detail-header {
display: flex;
grid-auto-flow: column;
justify-content: space-between;
align-items: center;
} 
.detail-header button {
height: 30px;
width: 120px;
border: 1px solid #ffa400;
background-color: #ffa400;
color: #f2f2f2;
border-radius: 5px;
cursor: pointer;
transition: all 0.2s ease-in;
}
.detail-header button:hover {
background-color: transparent;
color: #ffa400;
}
.detail table {
width: 100%;
border-collapse: collapse;
}
.detail table tr:nth-child(odd){
background-color: #f8f8fb;
}
.detail table th {
background-color: #f4f4fb;
}
.detail table th,
.detail table td {
padding:  0.8rem 0.2rem;
text-align: left;
min-width: 120px;
font-size: 14px;
}
.detail table tr:hover {
background-color: #f2f2f2;
border-bottom: 2px solid #2d2d2d;
}
.detail table tr td:nth-child(2),
.detail table tr td:nth-child(3) {
min-width: 150px;
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

    
}


</style>