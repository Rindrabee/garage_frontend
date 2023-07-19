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
    <nav class="navbar">
        <ul class="left">
            <li><a href="/"><i class="fas fa-home"></i>&nbsp; Accueil</a></li>
        </ul>
        <ul class="right">
            <li><a href="loginpage"><i class="fas fa-sign-in-alt"></i>&nbsp; Se connecter</a></li>
            <li><a href="register"><i class="fas fa-user-plus"></i>&nbsp; S'inscrire</a></li>
        </ul>
    </nav> 


    <div class="details">
        <h1>NOMDUGARAGE</h1><p>- localisation <i class="far fa-star rotate-image"></i><i class="far fa-star rotate-image "></i><i class="far fa-star rotate-image "></i></p> 
    </div>
    <div class="details2">
        <p><i class="fas fa-phone"></i>&nbsp;&nbsp;&nbsp;&nbsp;    0341790551</p>
        <p style="margin-left: 250px;margin-top: -40px;"><i class="fas fa-envelope"></i>&nbsp;&nbsp;&nbsp;&nbsp;    rindratahinalisoa@gmail.com</p>
        
    </div>

    <div class="localisation">
    <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="{ lat: lat, lng: lng }" :zoom="15">
      <Marker :options="{ position: { lat: lat, lng: lng } }" />
      <Marker v-if="isValidLocation" :options="{ position: { lat: otherLat, lng: otherLng }, label: 'Autre endroit' }" />
    </GoogleMap>
    </div>

    <div class="person-details">
    <img src="../assets/images/ft3.jpg" alt="Photo de la personne">
    <h2>Nom :</h2>
    <p>Adresse :</p>
    <p>Specialite :</p>
    <p>Heures d'ouverture :</p>
    <p>Heures de fermeture :</p>
    <p>Les services offertes :</p>
    <p>Les équipements :</p>
  </div>


</div>
<footer>
<p>&copy; 2023 GarageFinder. Tous droits réservés.</p>
</footer>
</body>
</html>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
  components: {
    GoogleMap,
    Marker
},

  data() {
    return {
      label: "",
      apiKey: "",
      lat: null,
      lng: null,
      otherLat: -19.846379, 
      otherLng:  47.033723, 
    }
  },

  created() {
    this.$getLocation()
    .then((coordinates) => {
    this.lat = coordinates.lat;
    this.lng = coordinates.lng;
    })
    .catch((error) => {
    console.log(error);
    });
  },

  methods: {
    isWithinBounds(lat, lng) {
      // Limites géographiques de Madagascar
      const minLat = -25.6086;
      const maxLat = -11.9455;
      const minLng = 43.2283;
      const maxLng = 50.4839;

      // Vérifier si les coordonnées se trouvent dans les limites de Madagascar
      if (lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng) {
        return true;
      }
      return false;
    },
  },

  computed: {
    isValidLocation() {
      return this.isWithinBounds(this.otherLat, this.otherLng);
    },
  },
}
</script>


<style scoped>

.cont {
  background-color: rgba(198, 209, 197, 0.9);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.details {
    margin-top: 120px;
}
.details h1 {
   font-size: 30px;
   margin-left: 80px;
   font-family: Tahoma, Arial, sans-serif;
}
.details p {
   font-size: 30px;
   margin-left: 310px;
   margin-top: -47px;
}
.details i {
   font-size: 30px;
   margin-left: 20px;
}
.details2 p {
    margin-left: 81px;
}

.localisation {
    margin-bottom: 50px;
    margin-left: 20px;
    margin-right: 20px;
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

/* Personne détails */
.person-details {
  width: 800px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-left: 270px;
  margin-bottom: 170px;
}

.person-details img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  
  margin-bottom: 10px;
}

.person-details h2 {
  font-size: 30px;
  font-family: century family;
  margin: 0;
}

.person-details p {
  font-size: 20px;
  margin: 5px 0;
}

/* Styles pour les étoiles */
.rotate-image {
  animation: rotation 30s infinite linear; 
}

@keyframes rotation {
  from {
    transform: rotateY(0deg); 
  }
  to {
    transform: rotateY(360deg); 
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