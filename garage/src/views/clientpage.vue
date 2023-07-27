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
        <div   class="profile">
            <img @click="slide1" style="cursor: pointer;" class="profile-image" :src="'http://localhost:8082/' +  Client.Photo  + '.jpeg'" alt="">
            <p style="cursor: pointer;" class="profile-name"> {{ Client.Nom }}</p>
        </div>
        <div id="rindra" class="settings-menu">
            <div id="dark-btn">
                <span></span>
            </div>

            <div class="settings-menu-inner">
                <div class="settings-links">
                    <img style="cursor: pointer;" src="../assets/images/setting.png" @click="modification" class="settings-icon">
                    <a style="color: #000;font-family: century gothic;cursor: pointer;" @click="modification">PROFILE<img style="width: 10px;" src="../assets/images/arrow.png" alt=""></a>
                </div>
                
                <div class="settings-links">
                    <img style="cursor: pointer;" src="../assets/images/logout.png" @click="logout" class="settings-icon">
                    <a @click="logout" style="color: #000;font-family: century gothic;cursor: pointer;">DECONNECTION<img src="../assets/images/arrow.png"
                    width="10px" alt=""></a>
                </div>
                
            </div>    
        </div>
    </nav>
    <main>
        <br><br><br><br>
        <div style="margin-left: -200px;">
        <h1 style="color: white;font-size: 47px;" id="clignotant">Chère clientèle, bienvenue !</h1>
        <p style="color: white;font-family: century gothic;font-size: 15px;">Choisir si-dessous le service que vous voulez prendre</p>
        </div>
       


        <br><br><br><br>
        <div id="ambadika" class="dashboard-container">
            <!-- cards top -->
            <!-- <div class="card total1">
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
            </div> -->
            <div class="card total2">
                <div class="info">
                    <div class="info-detail">
                    <h3 style="font-size: 20px;">Rendez-vous</h3>
                    <p style="font-family: century gothic;font-size: 13px;">prendre rendez-vous</p>
                    <h2><span>UTILE</span></h2>
                    <button @click="showrendezvous" class="btn btn-outline-success">Continuer</button>
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
                    <button @click="listegaragerr" class="btn btn-outline-success">Continuer</button>
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
                    <p  style="font-family: century gothic;font-size: 13px;">Discuter en priver</p>
                    <h2><span>OPTION</span></h2>
                    <button  v-for="a in Admin" :key="a.id" @click="discu(a.id)"   class="btn btn-outline-success">Continuer</button>
                    </div>
                    <div class="info-image">
                    <i class="fas fa-comments"></i>
                    </div>
                </div>
            </div>
        </div>


        <!-- mipotra ito refa cliquena le discussion -->
        
      
        <div id="conversation"  style="display: none; box-shadow: 2px 2px 10px black;background-color: #0f530f;border-radius : 20px;position: fixed;top: 170px;margin-left: -40px;width: 800px;" class="container conversation">
        <br>
        
            <div class="row">
            <div>
                <img @click="fermerdiscu" style="width: 30px;margin-left: 720px;cursor: pointer;" src="../assets/images/close.png" alt="">
            </div>
          
            <br><br>
            <div class="col-lg-3 left-col">
                <div class="card friend-list">
                    <div  class="people-list">
                        <ul class="list-unstyled chat-list mt-2 mb-0">
                            <li class="clearfix">
                                <div class="about">
                                    <div class="name">&nbsp; GARAGEFINDER</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- ito le soratra anarana eny ambony -->
            <div style="height: 420px" class="col-lg-9 right-col">
                <div class="card chat" ref="chat">
                    <div style="position: fixed;margin-top: 182px;width: 37%;" class="chat-header clearfix">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="chat-about">
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                        <img style="width: 40px;height: 40px;"  src="../assets/images/car.ico" alt="">
                                    </a>
                                </div>

                                <h6  style="font-family: century gothic;margin-top : 13px" class="m-b-0">&nbsp; &nbsp; MESSAGE</h6>
                                
                            </div>
                        </div>
                    </div>
                    <br>

                    <div class="chat-history">
                        <ul class="m-b-0">
                            <li class="clearfix" v-for="m in Message" :key="m.id" >
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


     
    <!-- Rehefa anao demande na rendez-vous -->

    <div id="rendez"  style="display: none; box-shadow: 2px 2px 10px black;background-color: #0f530f;border-radius : 20px;position: fixed;top: 170px;margin-left: -40px;width: 800px;" class="container conversation">
    <br>
        
    <div class="row">

    <div>
        <img @click="fermerrendez" style="width: 30px;margin-left: 720px;cursor: pointer;" src="../assets/images/close.png" alt="">
    </div>
          
    <br><br>

    <!-- ito le soratra anarana eny ambony -->
    <div style="height: 420px;width: 100%;" class="col-lg-9 right-col">
        <div class="card chat" ref="chat">
            <div style="position: fixed;margin-top: 182px;width: 37%;height: 15px;" class="chat-header clearfix">
                <p style="margin-top: -8px;">Demmande de rendez-vous </p>

                <div>
                <div class="date-section">
                <p class="appointment-label">Date du rendez-vous :</p>
                <!-- Utilisez la liaison de données pour définir la date minimale -->
                <input v-model="Dates" class="appointment-input" type="date" name="" id="" :min="minDate">
                </div>

                <div class="time-section">
                <p  class="appointment-label">Heure du rendez-vous :</p>
                <input v-model="Heure" class="appointment-input" type="time" name="" id="">
                </div>
            
                <button class="btn btn-success" v-for="g in Garage" :key="g.id" v-if="Client.id_garage != null && Client.Etat2 == 1" @click="register(Client.id_garage)" style="margin-top: 240px;margin-left: 590px;">Envoyer</button>
                
                </div>

            </div>

            <br>
        
        <!-- div le ery ambany le anoratana -->
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
import AuthenticationService6 from '../services/AuthentificationService6.js'
import io from 'socket.io-client'
import axios from 'axios';

export default {
  data () {
    return {
    Text : '',
    Client: {},
    Admin: {},
    Message: {},
    PrenomClt : '',
    Garage: {},
    minDate: "", 


    Nom: '',
    Email: '',
    Telephone: '',
    Dates: '',
    Heure: '',
    id_garage: '',


    PhotoClt : '',
    id_received: '',
    id_sender: '',
    token: localStorage.getItem('token'),
    socket: io('http://localhost:8082')
    
    }
    },
    mounted() {
    this.listeadmin();
    this.listermessage();
    this.clientconnecter();
    this.listegarage();

    this.socket.on('chat message',(data) => {
        this.listermessage();
    });
    },
    created(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    this.minDate = `${year}-${month}-${day}`;
    },
    methods: {
    async register(id) {
    
    if (!this.Dates || !this.Heure) {
    alert('Veuillez entrer la date et l`heure');
    return;
    }

    const dataToSend = {
    Nom: this.Client.Nom,
    Email: this.Client.Email,
    Telephone: this.Client.Telephone,
    Date: this.Dates,
    Heure: this.Heure,
    id_garage: id,
   
    };

    try {
    const response = await AuthenticationService6.register(dataToSend);
    console.log(response.data);


    alert("Demmande de rendez-vous envoyer,on vous envoie une email de confirmation si on a acepter votre rendez-vous !");

    } catch (error) {
    console.error('Error registering the item:', error);
        // Handle the error here if necessary
    }
    
  },
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
        this.$router.push({ name: 'modificationclient' });
    },
    //Rediriger vers le clientpage
    clientpage() {
        localStorage.removeItem('id');
        this.$router.push({ name: 'clientpage' });
    },

    listegaragerr() {
        localStorage.removeItem('id');
        this.$router.push({ name: 'Listegarage' });
    },


    // Prendre le message du personne cliqué
    listermessage() {
    axios.get('http://localhost:8082/api/messages/listermessage')
    .then(response => {
        this.Message = response.data
    })
    },
     //Lister les admins sur le message
    listeadmin() {
    axios.get('http://localhost:8082/api/admins/getAllAdmin')
    .then(response => {
        this.Admin = response.data
    })
    },

    //Lister les garages
    listegarage() {
    axios.get('http://localhost:8082/api/garages/listergarage')
    .then(response => {
        this.Garage = response.data
    })
    },


    //Prendre le session du client connecté
    clientconnecter() {
    axios.get('http://localhost:8082/api/clients/session', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    })
    .then(response => {
    this.Client = response.data.clt;
    this.id_sender = this.Client.id;
    this.Email = this.Client.Email;
    }).catch(error => {
    console.log(error);
    })
    },

    // Qui montre le div du rendez-vous
    showrendezvous() {
    let a = document.getElementById("rendez")
    let b = document.getElementById("ambadika")
   
    
    a.style.display = "block";
    b.style.opacity = "70%";

    },
    
    // fermer le div du rendez-vous
    fermerrendez() {
    let a = document.getElementById("rendez")
    let b = document.getElementById("ambadika")


    a.style.display = "none";
    b.style.opacity = "100%";

    },

    // mapiseo anle div message
    discu(idadmin) {
    let a = document.getElementById("conversation")
    let b = document.getElementById("ambadika")

    localStorage.setItem("idandefasana",idadmin)

    this.id_received = localStorage.getItem("idandefasana");
   
    
    a.style.display = "block";
    b.style.opacity = "70%";

    },
    // fermer le discussion
    fermerdiscu() {
    let a = document.getElementById("conversation")
    let b = document.getElementById("ambadika")

    localStorage.removeItem("idandefasana")

    a.style.display = "none";
    b.style.opacity = "100%";

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
    },
    sendMessage() {
        const data = { Text: this.Text, id_sender: this.id_sender,id_received:this.id_received };
       
        this.socket.emit('chat message', data);

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

.appointment-label,
  .appointment-input {
    position: absolute;
  }

  /* Styles for the "Date du rendez-vous" section */
  .date-section .appointment-label {
    margin-top: 70px;
  }

  .date-section .appointment-input {
    margin-top: 70px;
    margin-left: 290px;
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border-color: green;
  }

  /* Styles for the "Heure du rendez-vous" section */
  .time-section .appointment-label {
    margin-top: 130px;
  }

  .time-section .appointment-input {
    margin-top: 130px;
    margin-left: 290px;
    width: 300px;
    border-radius: 5px;
    height: 40px;
    border-color: green;
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
    margin-left: -170px;
    grid-area: total2;
    background-color: #F5F5F5;
    color: #000;
}
.total3 {
    grid-area: total3;
    margin-left: -120px;
    background-color: #F5F5F5;
    color: #000;
}
.total4 {
    margin-left: -80px;
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
  100% { opacity: 2; }
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

.online {
    color: #86c541
}

.offline {
    color: #e47297
}

.me {
    color: #1d8ecd
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