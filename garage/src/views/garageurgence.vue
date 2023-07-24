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
                    <img @click="slide1" style="cursor: pointer;" class="profile-image" :src="'http://localhost:8082/' +  Garage.Photo  + '.jpeg'" alt="">
                    <p style="cursor: pointer;" class="profile-name">  {{ Garage.Nom }}</p>
                </div>
                <div id="rindra" class="settings-menu">
                    <div id="dark-btn">
                        <span></span>
                    </div>
    
                    <div class="settings-menu-inner">
                        <div class="settings-links">
                            <img @click="modificationgarage" style="cursor: pointer;" src="../assets/images/setting.png" class="settings-icon">
                            <a @click="modificationgarage" style="color: #000;font-family: century gothic;cursor: pointer;" href="#">PROFILE<img style="width: 10px;" src="../assets/images/arrow.png" alt=""></a>
                        </div>
                        
                        <div class="settings-links">
                            <img @click="logout" style="cursor: pointer;" src="../assets/images/logout.png" class="settings-icon">
                            <a  @click="logout" style="color: #000;font-family: century gothic;cursor: pointer;">DECONNECTION<img src="../assets/images/arrow.png"
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
                    <span @click="garageaccueil" class="fas fa-home"></span><p @click="garageaccueil" style="font-size: 13px;">Accueil</p>
                </div>
                <div class="sidebar-menu">
                    <span class="fas fa-exclamation-triangle"></span><p style="font-size: 13px;">Urgence</p>
                </div>
                <div class="sidebar-menu">
                    <span class="fas fa-calendar-alt"></span><p style="font-size: 13px;">Rendez-vous</p>
                </div>
                <div class="sidebar-menu">
                    <span @click="garagemecanicien" class="fas fa-wrench"></span><p @click="garagemecanicien" style="font-size: 13px;">Mecanicien</p>
                </div>
               
                <div class="sidebar-menu">
                    <span class="fas fa-file-invoice"></span><p style="font-size: 13px;">Comptabilité</p>
                </div>
            </div>
            <!-- main dashboard -->
            <main>
                <div id="ambany" class="dashboard-container">
                    <!-- cards top -->
                   

                 
                
                <div class="card detail">
                <div class="detail-header">
                    <p style="font-family: century gothic;font-size: 18px; ">Listes des urgences en attente :</p>
                  
                </div>
                <br>
                <table>
                    <tr>
                        <th>Numero</th>
                        <th>Nom</th>
                        <th>Telephone</th>
                        <th>Probleme</th>
                        <th>Action1</th>
                        <th>Action2</th>
                    </tr>

                    <tr v-for="u in Urgence" :key="u.id">
                        <td v-if="u.Etat == 2 && u.id_garage == Garage.id">{{ u.id }}</td>
                        <td v-if="u.Etat == 2 && u.id_garage == Garage.id">{{ u.Nom }}</td>
                        <td v-if="u.Etat == 2 && u.id_garage == Garage.id">{{ u.Telephone }}</td>
                        <td v-if="u.Etat == 2 && u.id_garage == Garage.id">{{ u.Probleme }}</td>
                      
                        <td v-if="u.Etat == 2 && u.id_garage == Garage.id"><button @click="detailurgence(u.id)" class="btn btn-outline-danger">Voir</button></td>
                        <td v-if="u.Etat == 2 && u.id_garage == Garage.id"><button @click="discu2(u.id)" class="btn btn-outline-success">Rediriger</button></td>
                   
                    </tr>

                    <!-- apina -->

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
                            <img class="customer-image" src="../assets/images/GRG1.png" alt="">
                            <div class="customer-name">
                                <h4>Ipsum volupta</h4>
                                <p style="font-size: 12px;">De aona e</p>
                            </div>
                            <p class="customer-date">22/02/21</p>
                        </div>
    
                    </div>
                    
        
                </div>
                                   
        <div id="choisir" style="display: none; box-shadow: 2px 2px 10px black; background-color: #0f530f; border-radius: 20px; position: fixed; top: 120px; margin-left: 270px; width: 550px;" class="container conversation">
        <br>
        <div style="width: 500px;text-align: center;margin-left: 10px;margin-bottom: 30px;" class="row">
        <div>
            <img @click="fermer" style="width: 30px; margin-left: 450px; cursor: pointer;" src="../assets/images/close.png" alt="">
        </div>
        <br><br>
        <table style="background-color: palegreen; width: 100%; border-collapse: collapse;border-radius: 10px;">
            <br>

            <tr>
                <th>Nom</th>
                <th>Specialité</th>
                <th>Action</th>
            </tr> 
           
            <tr v-for="u in Mecanicien" :key="u.id">
                <td>{{ u.Nom }}</td>
                <td>{{ u.Specialite }}</td>
                <td><button class="btn btn-outline-success" @click="redirectUrgenceTomecanicien(u.id)">Coller</button></td>
                <br><br><br>
            </tr>

        </table>

        </div>
    </div>

       
    </main>
    </div>
    </body>
    </html>
    </template>
        
    <script>
    import AuthenticationService4 from '../services/AuthentificationService4.js'
    import { tokenIsExpired } from '../utils/date.js';
    import axios from 'axios';
    
    export default {
        data () {
            return {
            Numero: '',
            Nom: '',
            Date1: '',
            Probleme: '',
            Photo: '',
            Voiture: {},
            Garage: {},
            Garage2: {},
            idMecanicien : 0,
            Urgence: {},
            Mecanicien: {},
            idUrgence: '',
    
            

            isFieldEmpty: false,
            isInvalidEmail: false,
            acceptConditions: false,
            
            }
        },
        mounted() {
            this.listevoiture();
            this.garageconnecter();
            this.Prendrelesurgnece();
            this.listegarage();
            this.listermecanicien();
        },
        methods: {
            slide1() {
                let a = document.getElementById("rindra");
                if (a.style.display === "block") {
                    a.style.display = "none";
                } else {
                    a.style.display = "block";
                }
            },
            // Ouvrir ajouter voiture
            ajoutervoiture() {
                let a = document.getElementById("ajoutervoiture")
                let b = document.getElementById("ambany")
    
                a.style.display = "flex";
                b.style.opacity = "80%";
    
            },

            //Lister tous les garages
            listegarage() {
            axios.get('http://localhost:8082/api/garages/listergarage')
            .then(response => {
            this.Garage2 = response.data
            })
            },
            //Lister tous les mecaniciens
            listermecanicien() {
            axios.get('http://localhost:8082/api/mecaniciens/listermecanicien')
            .then(response => {
            this.Mecanicien = response.data
            })
            },

            //detail urgence
            detailurgence(id) {
            this.$router.push({ name: 'showurgence2' });
            localStorage.setItem('id',id)
            },

            // Lister la liste des urgences
            Prendrelesurgnece() {
            axios.get('http://localhost:8082/api/admins/getAllUrgence')
            .then(response => {
            this.Urgence = response.data
            console.log('urgences', response.data);
            })
            },


            //Lister les voitres
            listevoiture() {
                axios.get('http://localhost:8082/api/garages/listervoiture')
                .then(response => {
                    this.Voiture = response.data
                })
            },
            //Prendre le session du garage connecté
            garageconnecter() {
                axios.get('http://localhost:8082/api/garages/session', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                })
                .then(response => {
                    this.Garage = response.data.grg;
                    this.id_garage = this.Garage.id;
                }).catch(error => {
                    console.log(error);
                })
            },
            //Modification garage
            modificationgarage() {
                this.$router.push({ name: 'modificationgarage' });
            },

            garagemecanicien() {
                this.$router.push({ name: 'garageMECANICIEN' });
            },


            // Accueil dans le garage
            garageaccueil() {
            this.$router.push({ name: 'garagepage' });
            },
    
            //Fermer ajouter voiture
            fermerajoutervoiture() {
                let a = document.getElementById("ajoutervoiture")
                let b = document.getElementById("ambany")
    
    
                a.style.display = "none";
                b.style.opacity = "100%";
    
                // Rafraîchir la page garageaccueil
                window.location.reload();
            },
            listeurgence () {
                axios.get('http://localhost:8082/api/garages/getAllUrgenceGarage', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                }).then(response => {
                    console.log('urgences', response.data);
                });
            },

            // mapiseo anle div liste mecanicien
            discu2(id){
            localStorage.setItem('id',id)
            let a = document.getElementById("choisir")
            let b = document.getElementById("ambadika")

            

            a.style.display = "block";
            b.style.opacity = "70%";

            
            },
    
    // fermer le liste des mecaniciens
    fermer() {
    localStorage.removeItem('id')
    let a = document.getElementById("choisir")
    let b = document.getElementById("ambadika")

   
    a.style.display = "none";
    b.style.opacity = "100%";

    },
    // Redirect to mecanicien
    redirectUrgenceTomecanicien (idMecanicien) {
        console.log(this.idUrgence)
        const url = import.meta.env.VITE_API_URL + '/api/admins/redirectToMecanicien';
        const body = {
        'idMecanicien': idMecanicien,
        'idUrgence': localStorage.getItem('id')
        };
        

        axios.post(url, body)
        .then(response => {
        alert("Urgence envoyer vers ce mecanicien")
        
    });
    },


            logout() {
                axios.post('http://localhost:8082/api/garages/logout')
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
    
            //Ajouter voiture 
            async addcar() {
                if (!this.Numero || !this.Nom || !this.Date1 || !this.Probleme || !this.Photo) {
                this.isFieldEmpty = true;
                return;
            }
            else {
                this.isFieldEmpty = false;
    
                const response = await AuthenticationService4.register({
                Numero: this.Numero,
                Nom: this.Nom,
                Date1: this.Date1,
                Probleme: this.Probleme,
                Idgarage: this.id_garage,
                Photo: this.Photo
            });
    
            this.$router.push({ name: 'garagepage' });
            console.log(response.data);
            alert("Enregistré avec succès");
            
        }
    },
    
    
        handleImage(event) {
        const file = event.target.files[0];
        this.createBase64Image(file);
        },
    
        createBase64Image(fileObject) {
        const reader = new FileReader();
    
        reader.onload = (e) => {
        this.Photo = e.target.result;
        };
        reader.readAsDataURL(fileObject);
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
        min-height: 100vh;
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
    .navbar .settings-menu {
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
    
    /* Ajouter garage */
    .error::placeholder {
      color: red;
      font-size: 15px;
      font-family: century gothic;
    }
    /* .main {
        padding: 0 8%;
    } */
    .box {
        width: 100%;
        max-width: 650px;
        background: rgba(0, 0, 0, 0.5);
        padding: 28px;
        margin: 0 28px;
        border-radius: 10px;
        box-shadow: inset -2px 2px 2px green;
    }
      .form-title {
        font-size: 26px;
        font-weight: 600;
        text-align: center;
        padding-bottom: 6px;
        color: white;
        text-shadow: 2px 2px 2px black;
        border-bottom: solid 1px white;
      }
      .page1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px 0;
      }
     
      .user-input-box:nth-child(2n){
        justify-content: end;
      }
      .user-input-box {
        display: flex;
        flex-wrap: wrap;
        width: 50%;
        padding-bottom: 15px;
      }
      .user-input-box label {
        width: 95%;
        color: white;
        font-size: 14px;
        font-family: century gothic;
        font-weight: 400;
        margin: 5px 0;
      }
      .user-input-box input {
        height: 40px;
        width: 95%;
        border-radius: 7px;
        outline: none;
        font-size: 15px;
        font-family: century gothic;
        border: 1px solid grey;
        padding: 0 10px;
      }
      .user-input-box .gender-category .selecting {
        height: 40px;
        width: 280px;
        border-radius: 7px;
        outline: none;
        font-size: 15px;
        color: grey;
        font-family: century gothic;
        border: 1px solid grey;
        padding: 0 10px;
      }
     
     
      .user-input-box .gender-category .selecting,
      .form-submit-btn input{
        cursor: pointer;
      }
      .form-submit-btn {
        margin-top: 20px;
        margin-left: 500px;
      }
      .form-submit-btn input {
        display: block;
        width: 100%;
        margin-top: 10px;
        font-size: 15px;
        padding: 10px;
        border: none;
        border-radius: 3px;
      }
      .form-submit-btn input:hover {
        background-color: rgba(154, 235, 100, 0.5);
      }
    
    
     
    
     
    
     
      /* .check {
        position: absolute;
        left: 49.9%;
        top: 43.1%;
        font-size: 15px;
        transform: translate(-50%, -50%);
        display: none;
      } */
    
    
      @media(max-width: 600px){
        .container2{
          min-width: 280px;
        }
        .user-input-box {
          margin-bottom: 12px;
          width: 100%;
        }
        .user-input-box:nth-child(2n){
          justify-content: space-between;
        }
        .gender-category {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .main-user-info{
          max-height: 380px;
          overflow: auto;
        }
        .main-user-info::-webkit-scrollbar{
          width: 0;
        }
      }
    
    input[type="submit"]{
        border: none;
        outline: none;
        background: #ffa400;
        padding: 11px 25px;
        width: 100px;
        margin-top: 10px;
        border-radius: 4px;
        font-weight: 200;
        font-family: 'century gothic';
        cursor: pointer;
    }
    input[type="submit"]:active{
        opacity: 0.10;
    }
    
    
    
    
    </style>