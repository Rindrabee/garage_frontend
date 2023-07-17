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
            <li><a href="/"><i class="fas fa-home"></i>&nbsp; Accueil</a></li>
        </ul>
        <ul class="right">
            <li><a href="loginpage"><i class="fas fa-sign-in-alt"></i>&nbsp; Se connecter</a></li>
            <li><a href="register"><i class="fas fa-user-plus"></i>&nbsp; S'inscrire</a></li>
        </ul>
    </nav> 
  
      <div class="container mt-4">
        <div class="registration-form">
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
            <h2 style="font-size: 20px;font-family: century gothic;">Étape 2: Informations de localisation</h2>
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
              <label for="longitude">Longitude: </label>
              <input type="text" class="form-control" id="longitude" v-model="longitude" :class="{ 'is-invalid': longitudeError }">
              <div class="invalid-feedback" v-if="longitudeError">{{ longitudeError }}</div>


              <label for="latitude">Latitude: </label>
              <input type="text" class="form-control" id="latitude" v-model="latitude" :class="{ 'is-invalid': latitudeError }">
              <div class="invalid-feedback" v-if="latitudeError">{{ latitudeError }}</div>


            </div>
            <button class="btn btn-success" @click="prevStep">Précédent</button>
            <button class="btn btn-success" @click="nextStep">Suivant</button>
          </div>


          <div v-if="step === 4">
            <h2 style="font-size: 20px;font-family: century gothic;">Récapitulatif</h2>
            <br><br>
            <p><strong>Nom:</strong> {{ name }}</p>
            <p><strong>Email:</strong> {{ email }}</p>
            <p><strong>Téléphone:</strong> {{ phone }}</p>
            <p><strong>Adresse:</strong> {{ address }}</p>
            <p><strong>Probleme du voiture:</strong> {{ Probleme }}</p>
            <p><strong>longitude:</strong> {{ longitude }}</p>
            <p><strong>latitude:</strong> {{ latitude }}</p>

            <button class="btn btn-success" @click="prevStep">Précédent</button>
            <button class="btn btn-success" @click="submitForm">Envoyer</button>
          </div>
        </div>
      </div>

      
    </div>
    </div>
</body>
</html> 
  
  </template>
  
  <script>
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
         

      nameError: '',
      emailError: '',
      phoneError: '',
      addressError: '',
      problemeError: '',
      longitudeError: '',
      latitudeError: ''
      
      };
    },
    methods: {
      nextStep() {
        if (this.validateCurrentStep()) {
          this.step++;
        } else {
          
        }
      },
      prevStep() {
        this.step--;
      },
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
      }
    }
  };
  </script>
  
  
  <style scoped>

  .registration-form {
    width: 700px;
    padding: 90px;
    margin-top: 100px;
    margin-left: 230px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
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
  </style>
  