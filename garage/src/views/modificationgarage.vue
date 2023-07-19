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
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-md-10 mt-5 pt-5">
                    <div style="box-shadow: 1px 1px 4px black;width: 1100px;margin-left: -100px;margin-top: -40px;margin-bottom: 50px;"  class="row z-depth-3">
                        <div class="col-sm-4 bg-success rounded-left">
    
                            <i @click="garagepage" style="color: white;cursor: pointer;" class="fas fa-arrow-left"></i>
                            
                            <div class="card-block text-center text-white">
                                <img style="width: 180px;height: 170px;border-radius: 50%;" :src="'http://localhost:8082/' + Garage.Photo + '.jpeg'" alt="">
                                <br><br>
                                <h2 class="font-weight-bold mt-4">{{ Garage.Nom }}</h2>
                                <p>{{ Garage.Profession }}</p>
    
                                <!-- ito le upload photo -->
                                <label for="fileInput">
                                <i class="far fa-edit fa-2x mb-4"></i>
                                </label>
                                <br>
                                <input @change="handleImage" ref="postImageInput" id="fileInput" type="file" >
                                
                                <br>
                            </div>
                        </div>
                        <div class="col-sm-8 bg-white rounded-right">
                            <h3 class="mt-3 text-center">Information</h3>
                            <hr class="bg-primary">
                            <div class="row">
                                <div class="col-sm-6">
                                    <p  class="font-weight-bold">Nom : &nbsp; <input v-model="Nom" class="inuty" type="text"></p>
                                   
                                    <!-- <h6 class="text-muted">rindratahinalisoa@gmail.com</h6> -->
                                </div>
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Adresse : &nbsp; <input v-model="Adresse" class="inuty" type="text"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Latitude : <a style="color: green;cursor: pointer;" @click="redirigerVersGoogleMaps">Google Map</a> &nbsp; <input v-model="Latitude" class="inuty" type="text"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Longitude : &nbsp; <input v-model="Longitude" class="inuty" type="text"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Email : &nbsp; <input v-model="Email" class="inuty" type="email"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Télephone : &nbsp; <input v-model="Telephone" class="inuty" type="text"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Spécialité : &nbsp; <input v-model="Specialite" class="inuty" type="text"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Heure d'ouverture : &nbsp; <input v-model="Heures_ouverture" class="inuty" type="time"></p>
                                </div>

                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Heure de fermeture : &nbsp; <input v-model="Heures_fermeture" class="inuty" type="time"></p>
                                </div>

                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Service offerte : &nbsp; <textarea v-model="service_offerte" class="inuty"></textarea></p>
                                </div>

                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Equipement du garage : &nbsp; <textarea v-model="equipement" class="inuty"></textarea></p>
                                </div>

                                <div class="col-sm-6">
                                   <img style="width: 60px;margin-left: 90px;margin-top: 15px;" src="../assets/images/car2.ico" alt="">
                                </div>
    
                            </div>
                            <br>
                            <div style="margin-left: 490px;" class="row">
                            <div class="col-sm-5">
                            <input @click="garagepage" class="btn btn-outline-success" type="button" value="Annuler">
                            </div>
    
                                <div class="col-sm-5">
                                <input @click="updateGarage" class="btn btn-outline-success" type="button" value="Modifier">
                                </div>
                            </div>
                           
                            <hr class="bg-primary">
                            <ul class="list-unstyled d-flex justify-content-center mt-4">
                                <li><a href="https://www.facebook.com"><i class="fab fa-facebook-f px-3 h4 text-dark"></i></a></li>
                                <li><a href="https://www.youtube.com"><i class="fab fa-youtube px-3 h4 text-dark"></i></a></li>
                                <li><a href="https://twitter.com/"><i class="fab fa-twitter px-3 text-dark"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
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
        Nom: '',
        Adresse: '',
        Latitude: '',
        Longitude: '',
        Telephone: '',
        Email: '',
        Specialite: '',
        Heures_ouverture: '',
        Heures_fermeture: '',
        equipement: '',
        service_offerte: '',
        Photo: '',
    
    
    
        result : {},
        Garage: {},
        }
        },
        created() {
        this.getInformation();
        },
        mounted() {
        console.log("mounted");
        },
        methods: {
     
        //Rediriger vers le garagepage
        garagepage() {
            this.$router.push({ name: 'garagepage' });
        },
        // vers google map
        redirigerVersGoogleMaps() {
        window.open('https://maps.google.com', '_blank');
        },
    
        // Mise à jour de la garage
        updateGarage() {
          // Supposons que vous avez les données du garage dans this.Garage
          const updatedGarageData = {
            Nom: this.Nom,
            Adresse: this.Adresse,
            Naissance: this.Naissance,
            Latitude: this.Latitude,
            Longitude: this.Longitude,
            Telephone: this.Telephone,
            Email: this.Email,
            Specialite: this.Specialite,
            Heures_ouverture: this.Heures_ouverture,
            Heures_fermeture: this.PhoHeures_fermetureto,
            equipement: this.equipement,
            service_offerte: this.service_offerte, 
            Photo: this.Photo,
          };
    
          axios
            .put('http://localhost:8082/api/garages/updateGarage/' + this.Garage.id, updatedGarageData)
            .then(response => {
              alert('Modifié avec succès');
              console.log(response.data);
            })
            .catch(error => {
              console.log(error);
            });
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
      
        //Prendre l'information du garage connecté
        getInformation() {
        axios.get('http://localhost:8082/api/garages/session', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        })
        .then(response => {
        this.Garage = response.data.grg;
        this.Nom = this.Garage.Nom;
        this.Adresse = this.Garage.Adresse;
        this.Latitude = this.Garage.Latitude;
        this.Longitude = this.Garage.Longitude;
        this.Telephone = this.Garage.Telephone;
        this.Email = this.Garage.Email;
        this.Specialite = this.Garage.Specialite;
        this.Heures_ouverture = this.Garage.Heures_ouverture;
        this.Heures_fermeture = this.Garage.Heures_fermeture;
        this.service_offerte = this.Garage.service_offerte;
        this.equipement = this.Garage.equipement;
        this.Photo = this.Garage.Photo;
    
        }).catch(error => {
        console.log(error);
        })
        },
      
       
        },
      
    }
    </script>
    
<style scoped>
.inuty {
    height: 40px;
    width: 95%;
    border-radius: 7px;
    outline: none;
    font-size: 15px;
    font-family: century gothic;
    border: 1px solid grey;
    padding: 0 10px;
}
    
</style>