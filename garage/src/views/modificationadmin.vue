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
                    <div style="box-shadow: 1px 1px 4px black;width: 1100px;margin-left: -100px;margin-top: -40px;"  class="row z-depth-3">
                        <div class="col-sm-4 bg-success rounded-left">
    
                            <i @click="adminpage" style="color: white;cursor: pointer;" class="fas fa-arrow-left"></i>
                            
                            <div class="card-block text-center text-white">
                                <img style="width: 180px;height: 170px;border-radius: 50%;" src="../assets/images/profil.ico" alt="">
                                <br><br>
                                <h2 class="font-weight-bold mt-4">{{ Admin.Nom }}</h2>
                                <p>{{ Admin.Prenoms }}</p>
    
                                <!-- ito le upload photo -->
                                <!-- <label for="fileInput">
                                <i class="far fa-edit fa-2x mb-4"></i>
                                </label> -->
                                <br>
                                <!-- <input @change="handleImage" ref="postImageInput" id="fileInput" type="file" > -->
                                
                                <br>
                            </div>
                        </div>
                        <div class="col-sm-8 bg-white rounded-right">
                            <h3 class="mt-3 text-center">Information</h3>
                            <hr class="bg-primary">
                            <div class="row">
                                <div class="col-sm-6">
                                    <p  class="font-weight-bold">Nom : &nbsp; <input v-model="Nom" class="inuty" type="text"></p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Prénoms : &nbsp; <input v-model="Prenoms" class="inuty" type="text"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Email : &nbsp; <input v-model="Email" class="inuty" type="email"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Date de naissance : &nbsp; <input v-model="Naissance" class="inuty" type="date"></p>
                                </div>
    
                                <div class="col-sm-6">
                                    <p class="font-weight-bold">Mot de passe : &nbsp; <input v-model="Password" class="inuty" type="text"></p>
                                </div>
    
                                <div class="col-sm-6">
                                   <img style="width: 60px;margin-left: 90px;margin-top: 15px;" src="../assets/images/car2.ico" alt="">
                                </div>
    
                            </div>
                            <br>
                            <div style="margin-left: 490px;" class="row">
                            <div class="col-sm-5">
                                <input @click="adminpage" class="btn btn-outline-success" type="button" value="Annuler">
                                </div>
    
                                <div class="col-sm-5">
                                <input @click="updateAdmin" class="btn btn-outline-success" type="button" value="Modifier">
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
        Email: '',
        Password: '',
        Photo: '',
    
    
    
        result : {},
        Admin: {},
        }
        },
        created() {
        this.getInformation();
        },
        mounted() {
        console.log("mounted");
        },
        methods: {
        //Rediriger vers le adminpage
        adminpage() {
            this.$router.push({ name: 'adminpage' });
        },
    
        // Mise à jour de l'admin
        updateAdmin() {
          // Supposons que vous avez les données du client dans this.Client
          const updatedAdminData = {
            Nom: this.Nom,
            Prenoms: this.Prenoms,
            Naissance: this.Naissance,
            Email: this.Email,
            Password: this.Password,
            Photo: this.Photo,
        };
    
          axios
            .put('http://localhost:8082/api/admins/updateAdmin/' + this.Admin.id, updatedAdminData)
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
      
        //Prendre l'information de l'admin connecté
        getInformation() {
        axios.get('http://localhost:8082/api/admins/session', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        })
        .then(response => {
        this.Admin = response.data.adm;
        this.Nom = this.Admin.Nom;
        this.Prenoms = this.Admin.Prenoms;
        this.Naissance = this.Admin.Naissance;
        this.Email = this.Admin.Email;
        this.Password = this.Admin.Password;
        this.Photo = this.Admin.Photo;
    
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