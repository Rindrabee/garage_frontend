<template>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./src/assets/fontawesome-free-6.4.0-web/css/all.min.css">
        <title>Document</title>
    </head>
    <body>
    <div class="cont">
        <nav class="navbar">
        <h4><i @click="verslistegarage" style="color: rgb(255, 255, 255);cursor: pointer;" class="fas fa-arrow-left"></i></h4>
        <div   class="profile">
            <img style="cursor: pointer;" class="profile-image" :src="'http://localhost:8082/' +  Mecanicien.Photo  + '.jpeg'" alt="">
            <p style="cursor: pointer;" class="profile-name"></p>
        </div>
        <div id="rindra" class="settings-menu">
            <div id="dark-btn">
                <span></span>
            </div>
        </div>
    </nav>
        <br><br><br><br><br>
    
        <div style="margin-top: 10px;" class="container">
         <h1 style="color: rgb(2, 2, 2); font-size: 40px; font-family: avant garde; margin-left: 90px">Découvrez nos garages partenaires</h1>
         <p style="font-family: century gothic; margin-left: 90px">"Choisissez votre garage préféré et inscrivez-vous dès aujourd'hui pour faire partie d'une équipe exceptionnelle !" :</p>
        </div>
   
        <br><br>
      
        
        <!-- ito le liste des garages -->
        <div class="slide-container">
            <div class="slide-content">
                <div class="card-wrapper">

                    <div style="margin-left: 120px;margin-bottom: 60px;" v-for="g in Garage" :key="g.id" class="card">
                        <div class="image-content">
                            <span class="overlay"></span>
                                <div class="card-image">
                                    <img :src="'http://localhost:8082/' +  g.Photo  + '.jpeg'"  alt="">
                                </div>
                        </div>  

                        <div class="card-content">
                           <h2 class="name">{{ g.Nom }}</h2>
                           <br>
                           <p class="description">
                            <p><span style="font-family: elephant;">Specialité :</span> {{ g.Specialite }}</p>
                            <p><span style="font-family: elephant;">Adresse :</span> {{ g.Adresse }}</p>
                            <p><span style="font-family: elephant;">Email :</span> {{ g.Email }}</p>
                            <p><span style="font-family: elephant;">Telephone :</span> {{ g.Telephone }}</p>
                            <p><span style="font-family: elephant;">Heure d'ouverture :</span> {{ g.Heures_ouverture }}</p>
                            <p><span style="font-family: elephant;">Heure de fermeture :</span> {{ g.Heures_fermeture  }}</p>
                            <p><span style="font-family: elephant;">Service offerte :</span> {{ g.service_offerte   }}</p>
                            <br>

                            <button v-if="Mecanicien.id_garage == null" @click="insciregarage(g.id)" class="button">S'inscire</button>
                            
                            <button v-if="Mecanicien.id_garage != null && Mecanicien.Etat2 == null" class="button">En attente</button>

                            <button v-if="Mecanicien.Etat2 == 1" class="button">Déja Membre</button>
                       
                        </p>

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
    import { useRouter } from 'vue-router';
    import axios from 'axios';
     
        export default {
          data () {
            return {
             Garage: {},
             Mecanicien: {},
             id_sender: '',
             id_garage: '',
               
            }
          },
          mounted() {
            this.listegarage();
            this.mecanicienconnecter();
          },
    
          methods: {
            versinscrire(){
                this.$router.push({name:'register'})
            },
            versdetailgarage() {
                this.$router.push({name:'GARAGEshow'})
            },

            verslistegarage() {
                this.$router.push({name:'mecanicienaccueil'})
            },
    
            // Prendre la liste de tous garages
            listegarage() {
            axios.get('http://localhost:8082/api/garages/listergarage')
            .then(response => {
            this.Garage = response.data
            })
            },

        // S'inscire sur une garage
       
        insciregarage(idgrg) {
       // Supposons que vous avez les données du client dans this.Client
      const updatedClientData = {
      id_garage: idgrg,
      };

      axios
        .put('http://localhost:8082/api/mecaniciens/inscriregarage/' + this.Mecanicien.id, updatedClientData)
        .then(response => {
          alert('Demande envoyer avec succes');
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },


    
    //Prendre le session du mecanicien connecter
    mecanicienconnecter() {
    axios.get('http://localhost:8082/api/mecaniciens/session', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    })
    .then(response => {
    this.Mecanicien = response.data.mc;
    this.id_sender = this.Mecanicien.id;
    this.id_garage = this.Mecanicien.id_garage;
    }).catch(error => {
    console.log(error);
    })
    },
    
          }
        }
    </script>
    
    
    <style scoped>
    * {
        margin: 0px;
        padding: 0px;
        font-family: Arial;
    
    }
    .cont {
     background-color: rgba(198, 209, 197, 0.9);
     min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
   .container {
            margin-top: 10px;
        }

       .container h1 {
            color: #020202;
            font-size: 40px;
            font-family: "Avant Garde", sans-serif;
            margin-left: 90px;
            animation: fadeInUp 1s ease;
        }

      .container  p {
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








/* ho anle titre */

.card-wrapper {
  display: flex;
  flex-wrap: wrap; 
  gap: 20px; 
}

.slide-container {
    max-width: 1120px;
    width: 100%;
    background-color: gray;
    padding: 40px 0;
    border-radius: 10px;
    margin-bottom: 100px;
}

.slide-content {
    margin: 0 40px;
}
.card {
    width: 320px;
    border-radius: 25px;
    background-color: #FFF;
}

.image-content,
.card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 14px;
}
.image-content {
    position: relative;
    row-gap: 5px;
    padding: 25px 0;
}

.overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #23523c;
    border-radius: 25px 25px 0 25px;
}
.overlay::before,
.overlay::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -40px;
    height: 40px;
    width: 40px;
    background-color: #23523c;
}
.overlay::after {
    border-radius: 0 25px 0 0;
    background-color: #FFF;
}

.card-image {
    position: relative;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background: #FFF;
    padding: 3px;
}

.card-image img {
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #23523c;
    transition: transform 0.3s ease; /* Ajout de la transition pour l'effet d'animation */
}

.card-image img:hover {
    transform: scale(1.1); /* Zoom de 10% (1.1) au survol de la souris */
}

.name {
    font-size: 18px;
    font-weight: 500;
    color: #333;
}
.description {
  font-size: 14px;
  color: #707070;
  text-align: center;
}
 
.button {
    border: none;
    font-size: 16px;
    color: #FFF;
    padding: 8px 16px;
    background-color: #23523c;
    border-radius: 6px;
    margin: 14px;
    transition: all 0.3s ease;
}

button:hover {
    background-color: #28a745; 
    color: white;
    transition: .5s;
    cursor: pointer;
}

/* Styles pour le navbar */
.navbar {
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 55px;
    top: 0;
    left: 0;
    background-color: #03331d;
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


/* boutton du footer */
.card-footer {
    display: flex;
    justify-content: center;
    align-items: center;
}
    .register-button {
      background-color: transparent;
      color: #28a745;
      border: 1px solid #28a745;
      font-size: 16px;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      transition: background-color 0.3s, color 0.3s, border-color 0.3s;
      cursor: pointer;
    }
    
    .register-button:hover {
      background-color: #28a745;
      color: #fff;
      border-color: #28a745;
    }
    
    .register-button:focus {
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }
    .register-button:hover {
        background-color: #28a745;
    }
    
    /* welcome texte */
    .welcome-container {
        display: flex;
        align-items: flex-start;
    }
    
    .welcome-text {
        font-family: "Century Gothic";
        text-align: left;
        color: white;
      
        margin-bottom: 40px;
        margin-left: 50px;
        max-width: 800px; /* Limite la largeur du texte */
    }
    
    .welcome-text h1 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    
    .welcome-text p {
        font-size: 15px;
        font-weight: normal;
        margin-bottom: 10px !important;
    }
    
    .logo-image {
        margin-left: auto;
        max-width: 200px; /* Ajustez la taille de l'image selon vos besoins */
    }
    
    /* Styles pour le footer */
    footer {
      background-color: #03331d;
      color: #fff;
      text-align: center;
      padding: 20px 0;
    }
    
    </style>