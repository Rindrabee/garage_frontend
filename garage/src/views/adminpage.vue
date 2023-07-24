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
            <span style="cursor: pointer;" class="fas fa-search"></span>
            <img @click="slide1" style="cursor: pointer;" class="profile-image" src="../assets/images/profil.ico" alt="">
            <p class="profile-name" style="cursor: pointer;">  {{ Admin.Prenoms }}</p>
        </div>
        <div id="rindra" class="settings-menu">
            <div id="dark-btn">
                <span></span>
            </div>

            <div class="settings-menu-inner">
                <div class="settings-links">
                    <img @click="modificationadmin" style="cursor: pointer;" src="../assets/images/setting.png" class="settings-icon">
                    <a style="color: #000;font-family: century gothic;cursor: pointer;" href="modificationadmin">PROFILE<img style="width: 10px;" src="../assets/images/arrow.png" alt=""></a>
                </div>
                
                <div class="settings-links">
                    <img @click="logout" style="cursor: pointer;" src="../assets/images/logout.png" class="settings-icon">
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
            <span class="fas fa-exclamation-triangle"></span><p style="font-size: 13px;">Urgence</p>
        </div>

        <div class="sidebar-menu">
            <span @click="verslisteclient" class="fas fa-user"></span><p @click="verslisteclient" style="font-size: 13px;">Client</p>
        </div>

        <div class="sidebar-menu">
            <span @click="verslistemecanicien" class="fas fa-wrench"></span><p @click="verslistemecanicien" style="font-size: 13px;">Mecanicien</p>
        </div>

        <div class="sidebar-menu">
            <span @click="verslistegarage" class="fas fa-car"></span><p @click="verslistegarage" style="font-size: 13px;">Garage</p>
        </div>
       
        <div class="sidebar-menu">
            <span  class="fas fa-file-invoice"></span><p  style="font-size: 13px;">Comptabilité</p>
        </div>
    </div>


    <!-- main dashboard -->
    <main>
        <div style="opacity: 100%;" id="ambadika" class="dashboard-container">
            <!-- cards top -->
            <div class="card total1">
                <div class="info">
                    <div class="info-detail">
                    <h3 style="font-size: 20px;">Garage Automobile</h3>
                    <p>inscrit dans le site</p>
                    <h2><strong>{{ garageCount }}</strong><span>&nbsp; GARAGE</span></h2>
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
                    <h2><strong>{{ mecanicienCount }}</strong><span>&nbsp; PERSONNE</span></h2>
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
                    <h2><strong>{{ clientCount }}</strong> <span>PERSONNE</span></h2>
                    </div>
                    <div class="info-image">
                    <i class="fas fa-user-friends"></i>
                </div>
                </div>
            </div>

            <div class="card total4">
                <div class="info">
                    <div class="info-detail">
                    <h3 style="font-size: 20px;">Nombre des urgences</h3>
                    <p>en attente de redirection </p>
                    <h2><strong>{{ urgenceCount }}</strong> <span>URGENCE</span></h2>
                    </div>
                    <div class="info-image">
                    <i class="fas fa-life-ring"></i>
                </div>
                </div>
            </div>

            <div class="card detail">
                <div class="detail-header">
                    <p style="font-family: century gothic;font-size: 18px; ">Liste des urgences :</p>
                  
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
                        <td v-if="u.Etat == null">{{ u.id }}</td>
                        <td v-if="u.Etat == null">{{ u.Nom }}</td>
                        <td v-if="u.Etat == null">{{ u.Telephone }}</td>
                        <td v-if="u.Etat == null">{{ u.Probleme }}</td>
                      
                        <td v-if="u.Etat == null"><button @click="detailurgence(u.id)" class="btn btn-outline-danger">Voir</button></td>
                        <td v-if="u.Etat == null"><button @click="discu2(u.id)" class="btn btn-outline-success">Rediriger</button></td>
                   
                    </tr>

                    <!-- apina -->
                </table>

            </div>
            <div class="card customer">
                <h3 style="font-family: Poppins,sans-serif;font-size: 18.5px;">Discussion</h3>
                <br>

                <div @click="discu(c.id,c.Prenoms,c.Photo)" v-for="c in Client" :key="c.id" style="cursor: pointer;"  class="customer-wrapper">
                    <img class="customer-image" :src="'http://localhost:8082/' + c.Photo + '.jpeg'" alt="">
                    <div class="customer-name">
                        <h4 style="margin-top: 9px;">{{ c.Prenoms  }}</h4>
                        <!-- <p style="font-size: 12px;">Panina..</p> -->
                    </div>
                    <!-- <p class="customer-date">Today</p> -->
                </div>
     
            </div>
            <!-- un petit design pour le footer -->
        </div>
        <!-- mipotra ito refa cliquena le discussion -->
        
        <div id="conversation"  style="display: none; box-shadow: 2px 2px 10px black;background-color: #0f530f;border-radius : 20px;position: fixed;top: 170px;margin-left: 130px;width: 800px;" class="container conversation">
        <br>
        
            <div class="row">
            <div>
                <img @click="fermerdiscu" style="width: 30px;margin-left: 720px;cursor: pointer;" src="../assets/images/close.png" alt="">
            </div>
          
            <br><br>
            <div class="col-lg-3 left-col">
                <div class="card friend-list">
                    <div @click="discu(c.id,c.Prenoms,c.Photo)" v-for="c in Client" :key="c.id" class="people-list">
                        <ul class="list-unstyled chat-list mt-2 mb-0">
                            <li class="clearfix">
                                <div class="about">
                                    <div class="name"><img style="width: 30px;height: 30px;margin-left: -30px;"  :src="'http://localhost:8082/' + c.Photo + '.jpeg'" alt="">&nbsp; {{ c.Prenoms }}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- ito le soratra anarana eny ambony -->
            <div style="height: 420px" class="col-lg-9 right-col">
                <div class="card chat" ref="chat">
                    <div style="position: fixed;margin-top: 182px;width: 40%;" class="chat-header clearfix">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="chat-about">
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                        <img style="width: 40px;height: 40px;"  :src="'http://localhost:8082/' + PhotoClt + '.jpeg'" alt="">
                                    </a>
                                </div>
                                
                                <h6  style="font-family: century;margin-top : 2px" class="m-b-0">&nbsp; &nbsp; {{ PrenomClt }}</h6>
                                
                            </div>
                        </div>
                    </div>
                    <br>

                    <div class="chat-history">
                        <ul class="m-b-0">
                            <li class="clearfix" v-for="m in Message" :key="m.id">
                                <div class="message-data text-right">

                                </div>
                                <div v-if="m.id_received == id_received && m.id_sender == id_sender" style="background-color: #C6F568;"  class="message other-message float-right">{{ m.Text }}</div>
                                <div v-if="m.id_sender == id_received && m.id_received == id_sender"  class="message my-message">{{ m.Text }}</div>
                            </li>
                        </ul>
                    </div>

                   <br>
                   <!-- div le ery ambany le anoratana -->
                </div>
                <div  class="noo" style="position: fixed;width: 500px;margin-top: -75px;margin-left: 30px;">
                    <div class="input-group mb-0">
                        <div class="input-group-prepend">
                            <span @click="sendMessage" class="input-group-text" ><img  src="../assets/images/sendeo.png" style="width: 30px;height: 30px;cursor: pointer;" alt=""></span>
                        </div>
                        <input v-model="Text" type="text" class="form-control" placeholder="Votre message ici...">                                    
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div id="choisir" style="display: none; box-shadow: 2px 2px 10px black; background-color: #0f530f; border-radius: 20px; position: fixed; top: 250px; margin-left: 270px; width: 550px;" class="container conversation">
    <br>
    <div style="width: 500px;text-align: center;margin-left: 10px;margin-bottom: 30px;" class="row">
        <div>
            <img @click="fermer" style="width: 30px; margin-left: 450px; cursor: pointer;" src="../assets/images/close.png" alt="">
        </div>
        <br><br>
        <table style="background-color: palegreen; width: 100%; border-collapse: collapse;border-radius: 10px;">
            <br>

            <tr>
                <th>N°</th>
                <th>GARAGE</th>
                <th>Action</th>
            </tr> 
           
            <tr v-for="u in Garage" :key="u.id">
                <td>{{ u.id }}</td>
                <td>{{ u.Nom }}</td>
                <td><button class="btn btn-outline-success" @click="redirectUrgenceToGarage(u.id)">Coller</button></td>
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
import AuthenticationService from '../services/AuthenticationService.js'
import io from 'socket.io-client'
import axios from 'axios';

export default {
  data () {
    return {
    Text : '',
    Client: {},
    Admin: {},
    Urgence: {},
    Message: {},
    Garage: {},
    PrenomClt : '',
    clientCount: 0,
    garageCount: 0,
    mecanicienCount: 0,
    voitureCount: 0,
    urgenceCount: 0,
    idUrgence: 0,
    idGarage: 0,

    PhotoClt : '',
    id_received: '',
    id_sender: '',
    token: localStorage.getItem('token'),
    socket: io('http://localhost:8082')
    }
    },
    mounted() {
    this.listeclt();
    this.selectpers();
    this.adminconnecter();
    this.listeurgence();
    this.compterClients();
    this.compterGarages();
    this.compterMecaniciens();
    this.comptervoitures();
    this.compterUrgence();
    this.listegarage();

    this.socket.on('chat message',(data) => {
        this.selectpers();
    });
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
    //Lister les clients sur le message
    listeclt() {
    axios.get('http://localhost:8082/api/clients/allClients')
    .then(response => {
        this.Client = response.data
    })
    },
    
    //Lister tous les garages
    listegarage() {
    axios.get('http://localhost:8082/api/garages/listergarage')
    .then(response => {
        this.Garage = response.data
    })
    },

    // Compter les listes des clients
    compterClients() {
      axios
        .get('http://localhost:8082/api/clients/countClients')
        .then(response => {
          this.clientCount = response.data.count;
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors du comptage des clients :', error);
        });
    },
    // Compter les listes des clients
    compterUrgence() {
    axios
    .get('http://localhost:8082/api/clients/counturgence')
    .then(response => {
        this.urgenceCount = response.data.count;
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors du comptage des urgences :', error);
    });
},

    // Compter les listes des garages
    compterGarages() {
    axios
    .get('http://localhost:8082/api/garages/countGarages')
    .then(response => {
        this.garageCount = response.data.count;
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors du comptage des garages :', error);
    });
    },

    // Compter les listes des voitures
    comptervoitures() {
    axios
    .get('http://localhost:8082/api/garages/countVoiture')
    .then(response => {
        this.voitureCount = response.data.count;
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors du comptage des voitures :', error);
    });
    },

    // Compter les listes des mecaniciens
    compterMecaniciens() {
    axios
    .get('http://localhost:8082/api/mecaniciens/countMecaniciens')
    .then(response => {
        this.mecanicienCount = response.data.count;
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors du comptage des mecaniciens :', error);
    });
    },


    //detail urgence
    detailurgence(id) {
    this.$router.push({ name: 'showurgence' });
    localStorage.setItem('id',id)
    
    },
    
    // Lister la liste des urgences
    listeurgence() {
    axios.get('http://localhost:8082/api/admins/getAllUrgence')
    .then(response => {
        this.Urgence = response.data
        console.log('urgences', response.data);
    })
    },


    //Prendre le session de l'admin connecté
    adminconnecter() {
       axios.get('http://localhost:8082/api/admins/session', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
       })
       .then(response => {
        this.Admin = response.data.adm;
        this.id_sender = this.Admin.id;
       }).catch(error => {
        console.log(error);
       })

    },
    // Prendre le message du personne cliqué
    selectpers() {
    axios.get('http://localhost:8082/api/messages/listermessage')
    .then(response => {
        this.Message = response.data
    })
    },

    // mapiseo anle div message
    discu(idclient,Prenoms,Photo) {
    let a = document.getElementById("conversation")
    let b = document.getElementById("ambadika")

    localStorage.setItem("ID_RECEIVED",idclient)
    this.id_received=localStorage.getItem("ID_RECEIVED");

    this.PrenomClt = Prenoms
    this.PhotoClt = Photo
    a.style.display = "block";
    b.style.opacity = "70%";

    },
    
    // mapiseo anle div liste garage
    discu2(id){
        let a = document.getElementById("choisir")
        let b = document.getElementById("ambadika")


        a.style.display = "block";
        b.style.opacity = "70%";
        this.idUrgence = id;
    },

    redirectUrgenceToGarage (idGarage) {
        const url = import.meta.env.VITE_API_URL + '/api/admins/redirectToGarage';
        const body = {
            'idGarage': idGarage,
            'idUrgence': this.idUrgence
        };

        axios.post(url, body)
        .then(response => {
           alert("Urgence envoyer vers ce garage")
        });
    },


    // fermer le discussion
    fermerdiscu() {
    let a = document.getElementById("conversation")
    let b = document.getElementById("ambadika")

    localStorage.removeItem("ID_RECEIVED")


    a.style.display = "none";
    b.style.opacity = "100%";

    },

    // fermer le liste de garage
    fermer() {
    let a = document.getElementById("choisir")
    let b = document.getElementById("ambadika")

   
    a.style.display = "none";
    b.style.opacity = "100%";

    },




    //Modification Admin 
    modificationadmin() {
        this.$router.push({ name: 'modificationadmin' });
    },
    verslistegarage() {
        this.$router.push({ name: 'adminGARAGE' });
    },
    verslistemecanicien() {
        this.$router.push({ name: 'adminMECANICIEN' });
    },
    verslisteclient() {
        this.$router.push({ name: 'adminCLIENT' });
    },
    logout() {
        axios.post('http://localhost:8082/api/admins/logoutadmin')
        .then(response => {
        localStorage.removeItem('token');
        // localStorage.removeItem('Email');
        this.$router.push({ name: 'loginadm' });
        })
        .catch(error => {
        console.error(error);
        this.MessageError = "Une erreur s'est produite lors de la déconnexion.";
        });
    },
    sendMessage() {
        // Envoi du message au serveur
        const data = { Text: this.Text, id_sender: this.id_sender,id_received:this.id_received };

        // Envoi de l'événement 'chat message' au serveur
        this.socket.emit('chat message', data);

        // Réinitialisation de l'input du message
        this.Text = '';
    },


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
.settings-links a {
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
.customer-wrapper:hover {
    background: #efefef;
    cursor: pointer;
    height: 42px;
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



/* Discussion  */

.conversation {
    height: auto;
    margin-top: -60px;
}

.row {
    width: 100%;
}

.left-col, .right-col {
    max-height: 100%;
}

.friend-list {
    height: 80%;
}

.chat {
    height: 80%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column-reverse;
}


#plist {
    overflow-y: scroll;
}

.clearfix {
    text-align: left;
}


.card {
    background: #fff;
    transition: .5s;
    border: 0;
    margin-bottom: 30px;
    border-radius: .55rem;
    position: relative;
    width: 100%;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
}
.chat-app .people-list {
    width: 280px;
    position: absolute;
    left: 0;
    top: 0;
    padding: 20px;
    z-index: 7
}

.chat-app .chat {
    margin-left: 280px;
    border-left: 1px solid #eaeaea
}

.people-list {
    -moz-transition: .5s;
    -o-transition: .5s;
    -webkit-transition: .5s;
    transition: .5s
}

.people-list .chat-list li {
    padding: 10px 15px;
    list-style: none;
    border-radius: 3px
}

.people-list .chat-list li:hover {
    background: #efefef;
    cursor: pointer
}

.people-list .chat-list li.active {
    background: #efefef
}

.people-list .chat-list li .name {
   
    font-size: 11px
}

.people-list .chat-list img {
    width: 45px;
    border-radius: 50%
}

.people-list img {
    float: left;
    border-radius: 50%
}

.people-list .about {
    float: left;
    padding-left: 8px
}

.people-list .status {
    color: #999;
    font-size: 13px
}

.chat .chat-header {
    padding: 15px 20px;
    border-bottom: 2px solid #f4f7f6;
    background-color: #fff;
    position: sticky;
    top: 0px;
    z-index: 2;
}

.chat .chat-header img {
    float: left;
    border-radius: 40px;
    width: 40px
}

.chat .chat-header .chat-about {
    float: left;
    padding-left: 10px
}

.chat .chat-history {
    padding: 20px;
    border-bottom: 2px solid #fff
}

.chat .chat-history ul {
    padding: 0
}

.chat .chat-history ul li {
    list-style: none;
    margin-bottom: 30px
}

.chat .chat-history ul li:last-child {
    margin-bottom: 0px
}

.chat .chat-history .message-data {
    margin-bottom: 15px
}

.chat .chat-history .message-data img {
    border-radius: 40px;
    width: 40px
}

.chat .chat-history .message-data-time {
    color: #434651;
    padding-left: 6px
}

.chat .chat-history .message {
    color: #444;
    padding: 0px 10px;
    line-height: 26px;
    font-size: 14px;
    border-radius: 7px;
    display: inline-block;
    position: relative
}

.chat .chat-history .message:after {
    bottom: 100%;
    left: 7%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #fff;
    border-width: 10px;
    margin-left: -10px
}

.chat .chat-history .my-message {
    background: #efefef
}

.chat .chat-history .my-message:after {
    bottom: 100%;
    left: 30px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #efefef;
    border-width: 10px;
    margin-left: -10px
}

.chat .chat-history .other-message {
    background: #e8f1f3;
    text-align: right
}

.chat .chat-history .other-message:after {
    border-bottom-color: #e8f1f3;
    left: 93%
}

/* .chat .chat-message {
    padding: 20px;
    position: sticky;
    bottom: 0px;
    z-index: 2;
    background-color: #fff;
} */

.online,
.offline,
.me {
    margin-right: 2px;
    font-size: 8px;
    vertical-align: middle
}



.float-right {
    float: right
}

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0
}

@media only screen and (max-width: 767px) {
    .chat-app .people-list {
        height: 465px;
        width: 100%;
        overflow-x: auto;
        background: #fff;
        left: -400px;
        display: none
    }
    .chat-app .people-list.open {
        left: 0
    }
    .chat-app .chat {
        margin: 0
    }
    .chat-app .chat .chat-header {
        border-radius: 0.55rem 0.55rem 0 0
    }
    .chat-app .chat-history {
        height: 300px;
        overflow-x: auto
    }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
    .chat-app .chat-list {
        height: 650px;
        overflow-x: auto
    }
    .chat-app .chat-history {
        height: 600px;
        overflow-x: auto
    }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
    .chat-app .chat-list {
        height: 480px;
        overflow-x: auto
    }
    .chat-app .chat-history {
        height: calc(100vh - 350px);
        overflow-x: auto
    }
}
</style>