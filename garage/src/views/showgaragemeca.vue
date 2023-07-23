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
                    <div style="box-shadow: 1px 1px 4px black;width: 1100px;margin-left: -100px;margin-top: -40px;margin-bottom: 40px;"  class="row z-depth-3">
                        <div class="col-sm-4 bg-success rounded-left">
    
                            <i @click="garagemecanicien" style="color: white;cursor: pointer;" class="fas fa-arrow-left"></i>
                            
                            <div class="card-block text-center text-white">
                                <img style="width: 180px;height: 170px;border-radius: 50%;" :src="'http://localhost:8082/' + Mecanicien.Photo + '.jpeg'" alt="">
                                <br><br>
                                <h2 class="font-weight-bold mt-4">{{ Mecanicien.Nom }}</h2>
                                <p>{{ Mecanicien.Specialite }}</p>
    
                               
                              
                            </div> 
                        </div>
                        <div class="col-sm-8 bg-white rounded-right">
                            <h3 class="mt-3 text-center">Information</h3>
                            <hr class="bg-primary">
                            <div class="row">
                                <div class="col-sm-6">
                                    <p  class="font-weight-bold">Nom : &nbsp; <input  v-model="Mecanicien.Nom"  class="inuty" type="text"></p>
                                    <!-- <h6 class="text-muted">rindratahinalisoa@gmail.com</h6> -->
                                </div>

                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Prénoms : &nbsp; <input v-model="Mecanicien.Prenoms" class="inuty" type="text"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Email : &nbsp; <input v-model="Mecanicien.Email"  class="inuty" type="email"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Date de naissance : &nbsp; <input v-model="Mecanicien.Naissance"  class="inuty" type="date"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Adresse : &nbsp; <input v-model="Mecanicien.Adresse"  class="inuty" type="text"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Telephone : &nbsp; <input v-model="Mecanicien.Telephone" class="inuty" type="text"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Spécialité : &nbsp; <input v-model="Mecanicien.Specialite"  class="inuty" type="text"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Langue parler : &nbsp; <input v-model="Mecanicien.langue_parle"  class="inuty" type="text"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Expérience : &nbsp;  <textarea style="height: 70px;" v-model="Mecanicien.Experience" class="inuty" ></textarea></p>
                                </div>

                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Certification : &nbsp;  <textarea style="height: 70px;" v-model="Mecanicien.certification" class="inuty" ></textarea></p>
                                </div>

                            </div>
                            <br>

                        <div style="margin-left: 490px;" class="row">

                            <div class="col-sm-5">
                            <input  v-if="Mecanicien.Etat2 == null" @click="reffusermecanicien" class="btn btn-outline-danger" type="button" value="Reffuser">
                            </div>
    
                            <div class="col-sm-5">
                            <input v-if="Mecanicien.Etat2 == null" @click="acceptermecanicien" class="btn btn-outline-success" type="button" value="Accepter">
                            </div>

                            <div class="col-sm-5">
                            <input v-if="Mecanicien.Etat2 == 1" style="margin-left: 100px;" @click="bloquermecanicien" class="btn btn-outline-danger" type="button" value="Bloquer">
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
        Prenoms: '',
        Naissance: '',
        Adresse: '',
        Telephone: '',
        Specialite: '',
        Email: '',
        Experience: '',
        certification: '',
        langue_parle: '',
        Photo: '',
    
    
    
        result : {},
        Mecanicien: {},
        }
        },

        created() {
        this.getInformation();
        this.getprofilmecanicien();
        },
        mounted() {
        console.log("mounted");
        },

        methods: {
        //Rediriger vers le page mecanicien garage
        garagemecanicien() {
            localStorage.removeItem('id');
            this.$router.push({ name: 'garageMECANICIEN' });
        },
    
        // Mise à jour mécanicien
        updateMecanicien() {
          // Supposons que vous avez les données du mecanicien dans this.Mecanicien
          const updatedData = {
            Nom: this.Nom,
            Prenoms: this.Prenoms,
            Naissance: this.Naissance,
            Adresse: this.Adresse,
            Telephone: this.Telephone,
            Specialite: this.Specialite,
            Email: this.Email,
            Experience: this.Experience,
            certification: this.certification,
            langue_parle: this.langue_parle,
            Photo: this.Photo,
          };
    
          axios
            .put('http://localhost:8082/api/mecaniciens/updateMecanicien/' + this.Mecanicien.id, updatedData)
            .then(response => {
              alert('Modifié avec succès');
              console.log(response.data);
            })
            .catch(error => {
              console.log(error);
            });
        },

        // Mise à jour de la mecanicien
        acceptermecanicien() {
        axios
        .put('http://localhost:8082/api/garages/acceptmec/' +  localStorage.getItem('id'))
        .then(response => {
        alert('Mecanicien accepter !!');
        console.log(response.data);
        })
        .catch(error => {
        console.log(error);
        });
        },

        // Reffuser mécanicien
        reffusermecanicien() {
        axios
        .put('http://localhost:8082/api/garages/reffusermec/' +  localStorage.getItem('id'))
        .then(response => {
        alert('Mecanicien reffuser !!');
        console.log(response.data);
        })
        .catch(error => {
        console.log(error);
        });

        this.$router.push({ name: 'showgaragemeca' });
        
        },

        //  bloquer mécanicien

        bloquermecanicien() {
        axios
        .put('http://localhost:8082/api/garages/bloquermec/' +  localStorage.getItem('id'))
        .then(response => {
        alert('Mecanicien bloquer !!');
        console.log(response.data);
        })
        .catch(error => {
        console.log(error);
        });
        },


        
        // Prendre le mecanicien selectionner 
        getprofilmecanicien() {
        axios.get('http://localhost:8082/api/admins/profilmecanicien/' + localStorage.getItem('id'))
        .then(response => {
        this.Mecanicien = response.data
        })
        .catch(error => {
        console.error(error);
        this.MessageError = "Une erreur s'est produite lors de la déconnexion.";
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
      
        //Prendre l'information du mecanicien connecté
        getInformation() {
        axios.get('http://localhost:8082/api/mecaniciens/session', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        })
        .then(response => {
        this.Mecanicien = response.data.mc;
        this.Nom = this.Mecanicien.Nom;
        this.Prenoms = this.Mecanicien.Prenoms;
        this.Naissance = this.Mecanicien.Naissance;
        this.Adresse = this.Mecanicien.Adresse;
        this.Telephone = this.Mecanicien.Telephone;
        this.Specialite = this.Mecanicien.Specialite;
        this.Email = this.Mecanicien.Email;
        this.Experience = this.Mecanicien.Experience;
        this.certification = this.Mecanicien.certification;
        this.langue_parle = this.Mecanicien.langue_parle;
        this.Photo = this.Mecanicien.Photo;
    
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