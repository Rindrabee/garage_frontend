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
                <p style="cursor: pointer;" class="profile-name">  {{ Mecanicien.Nom }}</p>
            </div>
            <div id="rindra" class="settings-menu">
                <div id="dark-btn">
                    <span></span>
                </div>
                <div class="settings-menu-inner">
                    <div class="settings-links">
                        <img @click="modification" style="cursor: pointer;" src="../assets/images/setting.png" class="settings-icon">
                        <a @click="modification" style="color: #000;font-family: century gothic;cursor: pointer;" href="#">PROFILE<img style="width: 10px;" src="../assets/images/arrow.png" alt=""></a>
                    </div>
                    
                    <div class="settings-links">
                        <img @click="logout"  style="cursor: pointer;" src="../assets/images/logout.png" class="settings-icon">
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
                <span @click="listegarage" class="fas fa-car"></span><p @click="listegarage" style="font-size: 13px;">Garages</p>
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
        <main id="ambadika">
            <h1 style="color: white;font-size: 47px;" id="clignotant">Bienvenue à vous,</h1>
            <p style="color: white;font-family: century gothic;font-size: 15px;">Vous pouvez voir ci dessous la liste de votre travail</p>

            <br><br>
            <div class="card detail">
                <div class="detail-header">
                    <p style="font-family: century gothic;font-size: 18px; ">Voici les clients en panne que vous devez sauvez :</p>
                </div>

                <br>
                <table>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Problème</th>
                        <th>Telephone</th>
                        <th>Discussion</th>
                        <th>Action</th>
                    </tr>

                    <tr v-for="u in Urgence" :key="u.id">
                        <td v-if="u.Etat == 3 && u.id_mecanicien == Mecanicien.id">{{ u.Nom }}</td>
                        <td v-if="u.Etat == 3 && u.id_mecanicien == Mecanicien.id">{{ u.Email }}</td>
                        <td v-if="u.Etat == 3 && u.id_mecanicien == Mecanicien.id">{{ u.Probleme }}</td>
                        <td v-if="u.Etat == 3 && u.id_mecanicien == Mecanicien.id">{{ u.Telephone }}</td>

                        <td v-if="u.Etat == 3 && u.id_mecanicien == Mecanicien.id"><span @click="discu(u.id,u.Nom)" class="status
                            confirmed"><i @click="discu(u.id,u.Nom)" style="cursor: pointer;" class="fas fa-message"></i></span></td>
                        
                        <td v-if="u.Etat == 3 && u.id_mecanicien == Mecanicien.id"><button @click="detailurgence(u.id)" class="btn btn-outline-danger">Voir</button></td>
                        
                    </tr>

                </table>
            </div>


        <!-- mipotra ito refa cliquena le discussion -->
        <div id="conversation"  style="display: none; box-shadow: 2px 2px 10px black;background-color: #0f530f;border-radius : 20px;position: fixed;top: 170px;margin-left: 40px;width: 800px;" class="container conversation">
        <br>
        
            <div class="row">
            <div>
                <img @click="fermerdiscu" style="width: 30px;margin-left: 720px;cursor: pointer;" src="../assets/images/close.png" alt="">
            </div>
          
            <br><br>
        

            <!-- ito le soratra anarana eny ambony -->
            <div style="height: 420px;width: 100%;" class="col-lg-9 right-col">
                <div class="card chat" ref="chat">
                    <div style="position: fixed;margin-top: 182px;width: 40%;" class="chat-header clearfix">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="chat-about">
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                        <img style="width: 35px;height: 35px;" src="../assets/images/urg.ico"  alt="">
                                    </a>
                                </div>
                                
                                <h6  style="font-family: century;margin-top : 2px" class="m-b-0">&nbsp; &nbsp;{{ nomrugence }}</h6>
                                
                            </div>

                        </div>
                    </div>
                    
                    <br>

                    <div class="chat-history">
                        <ul class="m-b-0">
                            <li v-for="m in Message" :key="m.id" class="clearfix">
                            <div class="message-data text-right">

                            </div>
                                
                            <div v-if="m.id_sendermecanicien == id_sendermecanicien" style="background-color: #C6F568;"  class="message other-message float-right">{{ m.Text }}</div>
                            <div v-if="m.id_senderclient  == id_receivedclient" class="message my-message">{{ m.Text }}</div>

                            </li>

                        </ul>
                    </div>

                   <br>
                   <!-- div le ery ambany le anoratana -->
                </div>
                <div class="noo" style="position: fixed;width: 700px;margin-top: -75px;margin-left: 30px;">
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
    </main>
</div>
</body>
</html>
</template>
    
<script>
import AuthenticationService from '../services/AuthenticationService.js'
import axios from 'axios';
import io from 'socket.io-client'
import { tokenIsExpired } from '../utils/date.js';


export default {
    data () {
    return {
    Text : '',
    Mecanicien : {},
    Urgence: {},
    nomrugence: '',
    Message: {},

    
    id_receivedclient: '',
    id_sendermecanicien: '',
   

    token: localStorage.getItem('token'),
    socket: io('http://localhost:8082')
    
    }
    },
    mounted() {
    this.mecanicienconnecter();
    this.Prendrelesurgnece();
    this.selectpers();

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
    
    //Diriger vers la page modification
    modification() {
    this.$router.push({ name: 'modificationmecanicien' });
    },

    //Diriger vers la page liste des garages
    listegarage() {
    this.$router.push({ name: 'Listegarage2' });
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
    this.id_sendermecanicien = this.Mecanicien.id;
    // this.id_garage = this.Garage.id;

    }).catch(error => {
    console.log(error);
    })
    },
    // Lister la liste des urgences
    Prendrelesurgnece() {
    axios.get('http://localhost:8082/api/admins/getAllUrgence')
    .then(response => {
    this.Urgence = response.data
    this.id_receivedclient = this.Urgence.id
    console.log('urgences', response.data);
    })
    },
    //detail urgence
    detailurgence(id) {
    this.$router.push({ name: 'showurgence3' });
    localStorage.setItem('id',id)
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
    
    // Prendre le message du urgence cliqué
    selectpers() {
    axios.get('http://localhost:8082/api/messages/listermessage2')
    .then(response => {
        this.Message = response.data
    })
    },


    mecanicienapropos() {
        this.$router.push({ name: 'mecanicienpageapropos' });
    },
    
    // mapiseo anle div message
    discu(idurg,nomrugenc) {
    let a = document.getElementById("conversation")

    localStorage.setItem("ID_RECEIVED",idurg)
    this.id_receivedclient = localStorage.getItem("ID_RECEIVED");
   
    this.nomrugence = nomrugenc;
    a.style.display = "block";
    },

    // fermer le discussion
    fermerdiscu() {
    let a = document.getElementById("conversation")
    let b = document.getElementById("ambadika")

    localStorage.removeItem("ID_RECEIVED")


    a.style.display = "none";
    b.style.opacity = "100%";

    },

    // Fonctio pour envoyer une message
    sendMessage() {
    // Envoi du message au serveur
    const data = { Text: this.Text, id_sendermecanicien: this.id_sendermecanicien,id_receivedclient:this.id_receivedclient };

    // Envoi de l'événement 'chat message' au serveur
    this.socket.emit('mandefa message', data);

    // Réinitialisation de l'input du message
    this.Text = '';
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