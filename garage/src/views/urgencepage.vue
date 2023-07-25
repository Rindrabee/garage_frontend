<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/assets/bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./src/assets/fontawesome-free-6.4.0-web/css/all.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
    <title>Document</title>
</head>
<body>
    <div class="cont">
      <div class="registration-container">
      <nav class="navbar">
          <ul class="left">
            <li @click="versaccueil"><a href="/"><i class="fas fa-home"></i>&nbsp; Accueil</a></li>
          </ul>

        <ul style="margin-right: 50px;">
          <li>
          <a style="color: rgb(255, 255, 255);cursor: pointer;">
          <i class="fas fa-bell"></i>&nbsp; Notification
          <span @click="slide1" style="cursor: pointer;" v-if="nombreNotifications > 0" class="badge">{{ nombreNotifications }}</span>
          </a>
          </li>
        </ul>

        <ul class="right">
            <li><a href="loginpage"><i class="fas fa-sign-in-alt"></i>&nbsp; Se connecter</a></li>
            <li><a href="register"><i class="fas fa-user-plus"></i>&nbsp; S'inscrire</a></li>
        </ul>
               

          <div id="rindra" class="settings-menu">
            <div id="dark-btn">
              <span></span>
            </div>

            <div class="settings-menu-inner">
            <p style="font-size: 10px;">Je suis le mécanicien envoyer pour vous sécourir</p>
            
            <div v-for="m in Mecanicien" class="settings-links">
              <img v-if="m.id_urgence == newItemId" style="cursor: pointer;height: 38px;" :src="'http://localhost:8082/' +  m.Photo  + '.jpeg'" class="settings-icon">
              <a v-if="m.id_urgence == newItemId" @click="discu(m.id)" style="color: #000;font-family: century gothic;cursor: pointer;" href="#"> &nbsp; {{ m.Nom }}</a>
            </div>

            </div> 
          </div>
    </nav>


    
    <div style="margin-top: 90px;" class="container2">
      <h1  style="color: rgb(2, 2, 2);font-size: 40px;font-family:avant garde;">Bienvenue dans la demande de dépannage</h1>
      <p style="font-family: century gothic;">D'abord, restez calme. Nous sommes là pour vous aider, ne vous inquiétez pas.</p>
      <p style="font-family: century gothic;">Mais avant cela, veuillez remplir ce formulaire correctement afin que nous puissions vous aider et envoyer des</p>
      <p style="font-family: century gothic;">mécaniciens où que vous soyez. N'oubliez pas de mentionner clairement votre localisation et de finaliser le </p>
      <p style="font-family: century gothic;">paiement pour le déplacement des mécaniciens jusqu'à vous.</p>
    </div>

    <div class="dialogue">
        <span>Ne t'inquiète pas, je suis là</span>
    </div>

    <div>
      <img class="mechanic-img" style="float: right;margin-top: -200px;margin-right: 80px;" src="../assets/images/mec.ico" alt="">
    </div>

    <!-- message de patienter -->

    <div id="patiente" style="background-color: #f2f2f2; border-radius: 30px; display: none; padding: 20px;margin-top: 90px;">
     <h1 style="font-size: 30px; font-family: Century Gothic; color: red; text-align: center; margin: 0;">
     Veuillez rester sur cette page, votre demande est en cours de traitement.
     Nous nous occupons de votre cas et nous vous prions de bien vouloir patienter.
     </h1>
   </div>

    <!-- formulaire à remplir -->
      <div id="renseignemet" class="container mt-4">
        <div style="margin-bottom: 120px;" class="registration-form">
          <div v-if="step === 1">
            <h2 style="font-size: 20px;font-family: century gothic;">Étape 1: Informations personnelles</h2>
            <br><br>
            <div class="form-group">
              <label for="name">Nom:</label>
              <input type="text" class="form-control" placeholder="Entrer vote nom" id="name" v-model="name" :class="{ 'is-invalid': nameError }">
              <div class="invalid-feedback" v-if="nameError">{{ nameError }}</div>
            </div>
            <br>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" placeholder="Entrer votre email" id="email" v-model="email" :class="{ 'is-invalid': emailError }">
              <div class="invalid-feedback" v-if="emailError">{{ emailError }}</div>
            </div>
            <button class="btn btn-success" @click="nextStep">Suivant</button>
          </div>
  
          <div v-if="step === 2">
            <h2 style="font-size: 20px;font-family: century gothic;">Étape 2: Informations supplémentaires</h2>
            <br><br>
            <div class="form-group">
              <label for="phone">Téléphone:</label>
              <input type="text" class="form-control" id="phone" v-model="phone" :class="{ 'is-invalid': phoneError }">
              <div class="invalid-feedback" v-if="phoneError">{{ phoneError }}</div>
            </div>
            <br>
            <div class="form-group">
              <label for="address">Adresse:</label>
              <input type="text" class="form-control" id="address" v-model="address" :class="{ 'is-invalid': addressError }">
              <div class="invalid-feedback" v-if="addressError">{{ addressError }}</div>
            </div>
            <button class="btn btn-success" @click="prevStep">Précédent</button>
            <button class="btn btn-success" @click="nextStep">Suivant</button>
          </div>
  
          <div v-if="step === 3">
            <h2 style="font-size: 20px;font-family: century gothic;">Étape 3: Informations de localisation</h2>
            <br><br>
            <div class="form-group">
              <label for="probleme">Probleme rencontré:</label>
              <input type="text" class="form-control" id="probleme" v-model="Probleme" :class="{ 'is-invalid': problemeError }">
              <div class="invalid-feedback" v-if="problemeError">{{ problemeError }}</div>
            </div>
            <br>
            <div class="form-group">
              <label for="localisation">Localisation :  <a style="color: green;cursor: pointer;" @click="redirigerVersGoogleMaps">Google Map</a> </label>
              <br><br>

              <label for="latitude">Latitude: </label>
              <input type="text" class="form-control" id="latitude" v-model="latitude" :class="{ 'is-invalid': latitudeError }">
              <div class="invalid-feedback" v-if="latitudeError">{{ latitudeError }}</div>


              <label for="longitude">Longitude: </label>
              <input type="text" class="form-control" id="longitude" v-model="longitude" :class="{ 'is-invalid': longitudeError }">
              <div class="invalid-feedback" v-if="longitudeError">{{ longitudeError }}</div>

            </div>
            <button class="btn btn-success" @click="prevStep">Précédent</button>
            <button class="btn btn-success" @click="nextStep">Suivant</button>
          </div>

          <div class="container2" v-if="step === 4">
            <h2 style="font-size: 20px;font-family: century gothic;">Etape finale  : Récapitulatif</h2>
            <br><br>
            <p><strong>Nom:</strong> {{ name }}</p>
            <p><strong>Email:</strong> {{ email }}</p>
            <p><strong>Téléphone:</strong> {{ phone }}</p>
            <p><strong>Adresse:</strong> {{ address }}</p>
            <p><strong>Probleme du voiture:</strong> {{ Probleme }}</p>
            <p><strong>longitude:</strong> {{ longitude }}</p>
            <p><strong>latitude:</strong> {{ latitude }}</p>

            
            <button class="btn btn-success" @click="prevStep">Précédent</button>
            <button class="btn btn-success" @click="register">Envoyer</button>

          </div>
        </div>
      </div>

      
    </div>

    <!-- mipotra ito refa cliquena le discussion -->
  
        
    <div id="conversation"  style="display: none; box-shadow: 2px 2px 10px black;background-color: #0f530f;border-radius : 20px;position: fixed;top: 180px;margin-left: 300px;width: 800px;" class="container conversation">
        <br>
        
            <div class="row">
            <div>
                <img @click="fermerdiscu" style="width: 30px;margin-left: 720px;cursor: pointer;" src="../assets/images/close.png" alt="">
            </div>
          
            <br><br>
        

            <!-- ito le soratra anarana eny ambony -->
            <div style="height: 420px;width: 100%;" class="col-lg-9 right-col">
                <div class="card chat" ref="chat">
                    <div style="position: fixed;margin-top: 192px;width: 40%;" class="chat-header clearfix">
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
                            <li v-for="m in Message" :key="m.id"  class="clearfix">
                            <div class="message-data text-right">

                            </div>
                                
                            <div v-if="m.id_senderclient == id_senderclient" style="background-color: #C6F568;"  class="message other-message float-right">{{ m.Text }}</div>
                            <div v-if="m.id_sendermecanicien  == id_receivedmecanicien" class="message my-message">{{ m.Text }}</div>

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


    </div>
    <footer>
    <p>&copy; 2023 GarageFinder. Tous droits réservés.</p>
  </footer>
</body>
</html> 
  
</template>
  
<script>
import AuthenticationService5 from '../services/AuthentificationService5.js'
import axios from 'axios';
import io from 'socket.io-client'

  export default {
    data() {
      return {
      step: 1,
      name: '',
      email: '',
      phone: '',
      address: '',
      Probleme: '',
      longitude: '',
      latitude: '',
      PrenomMc: '',
      PhotoMc: '',
      newItemId: '',
      Text : '',
      Message: {},

      Mecanicien : {},
      Urgence: {},

      id_senderclient : '',
      id_receivedmecanicien : '',

      nombreNotifications: 1,


      nameError: '',
      emailError: '',
      phoneError: '',
      addressError: '',
      problemeError: '',
      longitudeError: '',
      latitudeError: '',


      token: localStorage.getItem('token'),
      socket: io('http://localhost:8082')
    
      };
    },

    mounted() {
      this.listemecanicien();
      this.Prendrelesmecaniciens();
      this.newItemId = localStorage.getItem('newItemId');
      this.id_senderclient = localStorage.getItem('newItemId');
      this.selectpers();

      this.socket.on('chat message',(data) => {
        this.selectpers();
    });
    },

    methods: {
    //Ajouter une urgence 
    async register() {
    const dataToSend = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        Probleme: this.Probleme,
        longitude: this.longitude,
        latitude: this.latitude,
    };

    try {
        const response = await AuthenticationService5.register(dataToSend);
        console.log(response.data);

        // Assuming the response.data contains the unique ID of the newly added item
        const newItemId = response.data.id;

        // Store the new item's ID in localStorage
        localStorage.setItem('newItemId', newItemId);

        alert("Demande envoyée avec succès");

        let a = document.getElementById("patiente");
        let b = document.getElementById("renseignemet");

        a.style.display = "inline-block";
        b.style.display = "none";
    } catch (error) {
        console.error('Error registering the item:', error);
        // Handle the error here if necessary
    }
    
  },

    // Lister les mécaniciens
    Prendrelesmecaniciens() {
    axios.get('http://localhost:8082/api/mecaniciens/listermecanicien')
    .then(response => {
    this.Mecanicien = response.data
    this.id_receivedmecanicien = this.Mecanicien.id
    console.log('Mecanicien', response.data);
    })
    },

      // Prendre le message du urgence cliqué
    selectpers() {
    axios.get('http://localhost:8082/api/messages/listermessage2')
    .then(response => {
        this.Message = response.data
    })
    },


   
    // Afficher le notification du mecanicien
    slide1() {
    let a = document.getElementById("rindra");
      if (a.style.display === "block") {
      a.style.display = "none";
      } else {
      a.style.display = "block";
      }
    },

    //Lister tous les mecaniciens
    listemecanicien() {
    axios.get('http://localhost:8082/api/mecaniciens/listermecanicien')
    .then(response => {
      this.Mecanicien = response.data
    })
    },
    
    // mapiseo anle div message
    discu(idmec) {
    let a = document.getElementById("conversation")
    let b = document.getElementById("ambadika")
   
    // localStorage.setItem("ID_RECEIVED",idmecanicien)
    this.id_receivedmecanicien = idmec

    // this.PrenomMc = Prenoms
    // this.PhotoMc = Photo
    a.style.display = "block";
    b.style.opacity = "70%";

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
      const data = { Text: this.Text, id_senderclient: this.id_senderclient,id_receivedmecanicien:this.id_receivedmecanicien };

      // Envoi de l'événement 'chat message' au serveur
      this.socket.emit('mandefa message', data);

      // Réinitialisation de l'input du message
      this.Text = '';
    },


    
  //Autre détails
      nextStep() {
        if (this.validateCurrentStep()) {
          this.step++;
        } else {
          
        }
      },
      prevStep() {
        this.step--;
      },
      //rediriger vers google map
      redirigerVersGoogleMaps() {
      window.open('https://maps.google.com', '_blank');
      },
      validateEmail(email) {
    // Expression régulière pour vérifier le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
     },
      changeStep(step) {
        this.step = step;
      },
      submitForm() {
        // Logique pour soumettre le formulaire
        console.log('Formulaire soumis avec succès !');
      },
      validateCurrentStep() {
        if (this.step === 1) {
          this.nameError = '';
          this.emailError = '';
  
          if (this.name === '') {
            this.nameError = "Veuillez entrer votre nom.";
          }
  
         
    if (this.email === '') {
      this.emailError = "Veuillez entrer votre email.";
    } else if (!this.validateEmail(this.email)) {
      this.emailError = "Veuillez entrer une adresse email valide.";
    }
  
          return this.nameError === '' && this.emailError === '';
        } else if (this.step === 2) {
          this.phoneError = '';
          this.addressError = '';
  
          if (this.phone === '') {
            this.phoneError = "Veuillez entrer votre téléphone.";
          }
  
          if (this.address === '') {
            this.addressError = "Veuillez entrer votre adresse.";
          }
  
          return this.phoneError === '' && this.addressError === '';
        }
        else if (this.step === 3) {
          this.problemeError = '';
          this.longitudeError = '';
          this.latitudeError = '';
  
          if (this.Probleme === '') {
            this.problemeError = "Veuillez entrer le probleme de la voiture.";
          }
  
          if (this.longitude === '') {
            this.longitudeError = "Veuillez entrer la longitude.";
          }
  
          if (this.latitude === '') {
            this.latitudeError = "Veuillez entrer la latitude.";
          }

          return !this.problemeError && !this.longitudeError && !this.latitudeError;

        
        }
  
        return true; // Si la validation de l'étape n'est pas nécessaire, retourne true
      },


      //autre fonctionlité 
      versaccueil(){
            this.$router.push({name:'/'})
      }
    }
  };
  </script>
  
  
<style scoped>

.cont {
  background-color: rgba(198, 209, 197, 0.9);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.container2 {
    margin-top: 10px;
    margin-left: 10px;
}
.container2 h1 {
    color: #020202;
    font-size: 40px;
    font-family: "Avant Garde", sans-serif;
    margin-left: 90px;
    animation: slideInLeft 3s ease;
}
.container2 p {
    font-family: "Century Gothic", sans-serif;
    margin-left: 90px;
    animation: fadeInUp 2s ease;
}

/* Animation fadeInUp */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}



  .registration-form {
    width: 700px;
    padding: 90px;
    margin-top: 100px;
    margin-left: 230px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 10px 20px black;
  }
  
  .mechanic-img {
  float: right;
  margin-top: -200px;
  margin-right: 80px;
  animation: tilt 3s linear infinite;
  transform-origin: bottom right;
}
        
@keyframes tilt {
    0% {
        transform: rotate(-5deg);
    }
    50% {
        transform: rotate(5deg);
    }
    100% {
        transform: rotate(-5deg);
    }
}
.settings-menu{
    position: absolute;
    width: 70%;
    max-width: 290px;
    background: #9eaa9d;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    overflow: hidden;
    top : 108%;
    margin-right: 200px;
    right: 1%;
    display: none;
} 
.settings-menu .settings-menu-inner {
    background : var(--bg-color);
    padding: 20px;
}
.settings-menu hr {
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

/* ho anle notification  */
.badge {
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px;
  width: 20px;
  height: 20px;
}

.dialogue {
  position: absolute;
  width: 150px;
  margin-top: -170px;
  margin-left: 998px;
  padding: 10px;
  background-color: #f2f2f2;
  box-shadow: 0 5px 20px black;
  border-radius: 20px;
}
        
.dialogue::before {
  content: "";
  position: absolute;
  top: 50%;
  right: -8px;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #f2f2f2;
}

.btn-success {
  margin-right: 10px;
  margin-top: 40px;
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
  height: 70px; 
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

  

/* Styles pour le footer */
footer {
  background-color: #03331d;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}

</style>
  