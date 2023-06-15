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
            <span class="fas fa-home"></span><p style="font-size: 13px;">Accueil</p>
        </div>
        <div class="sidebar-menu">
            <span class="fas fa-exclamation-triangle"></span><p style="font-size: 13px;">Urgence</p>
        </div>
        <div class="sidebar-menu">
            <span class="fas fa-calendar-alt"></span><p style="font-size: 13px;">Rendez-vous</p>
        </div>
        <div class="sidebar-menu">
            <span class="fas fa-wrench"></span><p style="font-size: 13px;">Mecanicien</p>
        </div>
        <div class="sidebar-menu">
            <span class="fas fa-car"></span><p style="font-size: 13px;">Garage</p>
        </div>
        <div class="sidebar-menu">
            <span class="fas fa-file-invoice"></span><p style="font-size: 13px;">Comptabilité</p>
        </div>
    </div>
    <!-- main dashboard -->
    <main>
        <div class="dashboard-container">
            <!-- cards top -->
            <div class="card total1">
                <div class="info">
                    <div class="info-detail">
                    <h3 style="font-size: 20px;">Garage Automobile</h3>
                    <p>inscrit dans le site</p>
                    <h2><strong>26</strong><span>&nbsp; GARAGE</span></h2>
                    </div>
                    <div class="info-image">
                    <i class="fas fa-car"></i>
                    </div>
                </div>
            </div>
            <div class="card total2">
                <div class="info">
                    <div class="info-detail">
                    <h3 style="font-size: 20px;">Membre des mecaniciens</h3>
                    <p>en cour de travail</p>
                    <h2><strong>56</strong><span>&nbsp; PERSONNE</span></h2>
                    </div>
                    <div class="info-image">
                    <i class="fas fa-boxes"></i>
                </div>
                </div>
            </div>
            <div class="card total3">
                <div class="info">
                    <div class="info-detail">
                        <h3 style="font-size: 20px;">Client inscrit</h3>
                    <p>qui nous fait confiance jusqu'à maintenant</p>
                    <h2><strong>340</strong> <span>PERSONNE</span></h2>
                    </div>
                    <div class="info-image">
                    <i class="fas fa-user-friends"></i>
                </div>
                </div>
                
            </div>
            <div class="card total4">
                <div class="info">
                    <div class="info-detail">
                    <h3 style="font-size: 20px;">Nombre des voitures</h3>
                    <p>en cour de réparation </p>
                    <h2><strong>56</strong> <span>VOITURE</span></h2>
                    </div>
                    <div class="info-image">
                    <i class="fas fa-shipping-fast"></i>
                </div>
                </div>
              
            </div>

            <div class="card detail">
                <div class="detail-header">
                    <p style="font-family: century gothic;font-size: 18px; ">Liste des voitures dans le garage :</p>
                    <button> Ajouter</button>
                </div>
                <br>
                <table>
                    <tr>
                        <th>Numéro</th>
                        <th>Nom</th>
                        <th>Date d'arriver</th>
                        <th>Etat</th>
                        <th>Action1</th>
                        <th>Action2</th>
                    </tr>
                    <tr>
                        <td>#PW-0001</td>
                        <td>Potential Corp</td>
                        <td>Apr 11, 2021</td>
                        <td><span class="status
                            onprogress"><i class="fas fa-circle"></i> En cour</span></td>
                        <td><button class="btn btn-outline-success">Terminer</button></td>
                        <td><button class="btn btn-outline-danger">Supprimer</button></td>
                    </tr>
                    <tr>
                        <td>#PW-0002</td>
                        <td>Webcode inc</td>
                        <td>Mar 29, 2021</td>
                        <td><span class="status
                            confirmed"><i class="fas fa-circle"></i> Terminer</span></td>
                        <td><button class="btn btn-outline-success">Améliorer</button></td>
                        <td><button class="btn btn-outline-danger">Supprimer</button></td>
                    </tr>
                    <tr>
                        <td>#PW-0003</td>
                        <td>Coding time</td>
                        <td>Feb 10, 2020</td>
                        <td><span class="status
                            fulfilled"><i class="fas fa-circle"></i> FULFILLED</span></td>
                        <td><button class="btn btn-outline-success">Terminer</button></td>
                        <td><button class="btn btn-outline-danger">Supprimer</button></td>
                    </tr>

                    <!-- apina -->

                    <tr>
                        <td>#PW-0001</td>
                        <td>Potential Corp</td>
                        <td>Apr 11, 2021</td>
                        <td><span class="status
                            onprogress"><i class="fas fa-circle"></i> En cour</span></td>
                        <td><button class="btn btn-outline-success">Terminer</button></td>
                        <td><button class="btn btn-outline-danger">Supprimer</button></td>
                    </tr>
                    <tr>
                        <td>#PW-0002</td>
                        <td>Webcode inc</td>
                        <td>Mar 29, 2021</td>
                        <td><span class="status
                            confirmed"><i class="fas fa-circle"></i> Terminer</span></td>
                        <td><button class="btn btn-outline-success">Améliorer</button></td>
                        <td><button class="btn btn-outline-danger">Supprimer</button></td>
                    </tr>
                    <tr>
                        <td>#PW-0003</td>
                        <td>Coding time</td>
                        <td>Feb 10, 2020</td>
                        <td><span class="status
                            fulfilled"><i class="fas fa-circle"></i> FULFILLED</span></td>
                        <td><button class="btn btn-outline-success">Terminer</button></td>
                        <td><button class="btn btn-outline-danger">Supprimer</button></td>
                    </tr>
                </table>
            </div>
            <div class="card customer">
                <h3 style="font-family: Poppins,sans-serif;font-size: 18.5px;">Discussion</h3>
                <br>
                <div class="customer-wrapper">
                    <img class="customer-image" src="../assets/images/aza.jpg" alt="">
                    <div class="customer-name">
                        <h4>Mollitia rerum</h4>
                        <p style="font-size: 12px;">Panina..</p>
                    </div>
                    <p class="customer-date">Today</p>
                </div>

                <div class="customer-wrapper">
                    <img class="customer-image" src="../assets/images/xel.jpg" alt="">
                    <div class="customer-name">
                        <h4>Dolor amet</h4>
                        <p style="font-size: 12px;">Salut</p>
                    </div>
                    <p class="customer-date">Yesterday</p>
                </div>

                <div class="customer-wrapper">
                    <img class="customer-image" src="../assets/images/clouds-4900496_1280.jpg" alt="">
                    <div class="customer-name">
                        <h4>Ipsum volupta</h4>
                        <p style="font-size: 12px;">De aona e</p>
                    </div>
                    <p class="customer-date">22/02/21</p>
                </div>
            </div>
            

        </div>
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
    background : url(../assets/images/ft3.jpg);
    background-position: center;
  background-size: cover;
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

.dashboard-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.5fr 0.5fr;
    grid-template-rows: auto;
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
.detail {
    grid-area: detail;
    overflow-x: auto;
}
.customer {
    grid-area: customer;
    overflow-x: auto;
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
.customer-wrapper {
    display: grid;
    grid-template-columns: 0.3fr 1fr 0.4fr;
    grid-auto-flow: column;
    margin: 10px 0;
    min-width: 230px;
    align-items: flex-start;
    gap: 5px;
}
.customer-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}
.customer-name > p,
.customer-name > h4,
.customer-date {
    font-size: 0.9rem;
}
.customer-date {
    text-align: right;
    color: #9092a9;
    font-size: 10px;
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
    .detail table {
        font-size: 0.9rem;
    }
}


</style>