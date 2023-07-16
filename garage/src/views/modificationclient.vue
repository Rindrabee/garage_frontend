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

                        <i @click="clientpage" style="color: white;cursor: pointer;" class="fas fa-arrow-left"></i>
                        
                        <div class="card-block text-center text-white">
                            <img style="width: 200px;height: 200px;border-radius: 50%;" :src="'http://localhost:8082/' + Client.Photo + '.jpeg'" alt="">
                            <br><br>
                            <h2 class="font-weight-bold mt-4">{{ Client.Nom }}</h2>
                            <p>{{ Client.Profession }}</p>

                            <!-- ito le upload photo -->
                            <label for="fileInput">
                            <i class="far fa-edit fa-2x mb-4"></i>
                            </label>
                            <br>
                            <input id="fileInput" type="file" >
                            
                            <br>
                        </div>
                    </div>
                    <div class="col-sm-8 bg-white rounded-right">
                        <h3 class="mt-3 text-center">Information</h3>
                        <hr class="bg-primary">
                        <div class="row">
                            <div class="col-sm-6">
                                <p  class="font-weight-bold">Nom : &nbsp; <input class="inuty" type="text" :value="Client.Nom"></p>
                               
                                <!-- <h6 class="text-muted">rindratahinalisoa@gmail.com</h6> -->
                            </div>
                            <div class="col-sm-6">
                                <p class="font-weight-bold">Prénoms : &nbsp; <input class="inuty" type="text" :value="Client.Prenoms"></p>
                            </div>

                            <div class="col-sm-6">
                                <p class="font-weight-bold">Email : &nbsp; <input class="inuty" type="email" :value="Client.Email"></p>
                            </div>

                            <div class="col-sm-6">
                                <p class="font-weight-bold">Date de naissance : &nbsp; <input class="inuty" type="date" :value="Client.Naissance"></p>
                            </div>

                            <div class="col-sm-6">
                                <p class="font-weight-bold">Profession : &nbsp; <input class="inuty" type="text" :value="Client.Profession"></p>
                            </div>

                            <div class="col-sm-6">
                                <p class="font-weight-bold">Adresse : &nbsp; <input class="inuty" type="text" :value="Client.Adresse"></p>
                            </div>

                            <div class="col-sm-6">
                                <p class="font-weight-bold">Telephone : &nbsp; <input class="inuty" type="text" :value="Client.Telephone"></p>
                            </div>

                            <div class="col-sm-6">
                                <p class="font-weight-bold">Mot de passe : &nbsp; <input class="inuty" type="Password" :value="Client.Password"></p>
                            </div>

                        </div>
                        <br>
                        <div style="margin-left: 490px;" class="row">
                        <div class="col-sm-5">
                            <input class="btn btn-outline-success" type="button" value="Annuler">
                            </div>

                            <div class="col-sm-5">
                            <input @click="update" class="btn btn-outline-success" type="button" value="Enregistrer">
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
        result : {},
        Client: {},
    }
    },
    created() {
    this.getInformation();
    },
    mounted(){
    console.log("mounted");
    },
    methods: {
  
 
    //Rediriger vers le clientpage
    clientpage() {
        this.$router.push({ name: 'clientpage' });
    },


    update() {
  axios.put('http://localhost:8082/api/clients/updateClient/', this.Client.id)
    .then(response => {
      this.$router.push({ name: 'clientpage' });
    })
    .catch(error => {
      // Traitement de l'erreur en cas d'échec
      console.error(error);
    });
},

  
    getInformation() {
    axios.get('http://localhost:8082/api/clients/session', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    })
    .then(response => {
    this.Client = response.data.clt;
    this.id_sender = this.Client.id;
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