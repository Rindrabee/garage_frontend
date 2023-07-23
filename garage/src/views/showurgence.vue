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
            <h4 style="margin-left: -30px;"><i @click="Adminpage" style="cursor: pointer;" class="fas fa-left-long"></i></h4>
            <div class="profile">
                <input style="margin-left: -300px;width: 300px;color: gray;font-family: century gothic;" class="form-control" type="text" placeholder="Barre de recherche">
                <span style="cursor: pointer;" class="fas fa-search"></span>
                <img @click="slide1" style="cursor: pointer;" class="profile-image" src="../assets/images/profil.ico" alt="">
                <p class="profile-name" style="cursor: pointer;">  {{ Admin.Prenoms }}</p>
            </div>

            <div id="rindra" class="settings-menu">
                <div id="dark-btn">
                    <span></span>
                </div>
    
                <div class="settings-menu-inner">
                    <div class="settings-links">
                        <img @click="modificationadmin" style="cursor: pointer;" src="../assets/images/setting.png" class="settings-icon">
                        <a style="color: #000;font-family: century gothic;cursor: pointer;" href="modificationadmin">PROFILE<img style="width: 10px;" src="../assets/images/arrow.png" alt=""></a>
                    </div>
                    
                    <div class="settings-links">
                        <img @click="logout" style="cursor: pointer;" src="../assets/images/logout.png" class="settings-icon">
                        <a @click="logout" style="color: #000;font-family: century gothic;cursor: pointer;">DECONNECTION<img src="../assets/images/arrow.png"
                        width="10px" alt=""></a>
                    </div>
    
                </div>    
            </div>
        </nav>
       

    <!-- concernant la location -->

  

    

    <br><br><br>
    
    <!-- <Marker :options="{ position: { lat: lat, lng: lng } }" /> -->
    <div class="localisation">
        
    <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="{ lat: lati, lng: longi }" :zoom="15">
      <Marker v-if="isValidLocation" :options="{
        position: { lat: lati, lng: longi },
        label: {
          text: Urgence.Nom,
          fontFamily: 'elephant, sans-serif',
          fontWeight: 'bold',
        }
      }" />
    </GoogleMap>
    </div>

    <div class="person-details">
    <img src="../assets/images/ft3.jpg" alt="Photo de la personne">

    <p style="font-family: century gothic;">Nom : {{ Urgence.Nom }}</p>
    <p style="font-family: century gothic;">Email : {{ Urgence.Email }}</p>
    <p style="font-family: century gothic;">Télephone : {{ Urgence.Telephone }}</p>
    <p style="font-family: century gothic;">Problème du voiture: {{ Urgence.Probleme  }}</p>
   
    <br><br>

    <input v-if="Urgence.Etat == null" type="button" style="width: 120px;margin-left: 40px;" class="btn btn-outline-danger" value="Supprimer">

    </div>
</div>
</body>
</html>
</template>
    
    <script>
    import AuthenticationService from '../services/AuthenticationService.js'
    import io from 'socket.io-client'
    import axios from 'axios';
    import { GoogleMap, Marker } from 'vue3-google-map'
    
    export default {
    components: {
    GoogleMap,
    Marker
    },

    data () {
    return {
    Admin: {},
    Garage : {},
    Urgence : {},
    lati: '',
    longi: '',
    Etat: '',


    label: "",
    apiKey: "",
    lat: null,
    lng: null,
   
    
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
    mounted() {
    this.adminconnecter();
    this.getdetailurgence();
    },

    methods: {

    //Prendre le session de l'admin connecté
    adminconnecter() {
    axios.get('http://localhost:8082/api/admins/session', {
    headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    })
    .then(response => {
    this.Admin = response.data.adm;
    this.id_sender = this.Admin.id;
    }).catch(error => {
    console.log(error);
    })
    },

    // Prendre le detail de l'urgence venu
    getdetailurgence() {
    axios.get('http://localhost:8082/api/admins/detailurgence/' + localStorage.getItem('id'))
    .then(response => {
    this.Urgence = response.data
    this.lati = this.Urgence.Latitude 
    this.longi = this.Urgence.Longitude 
    })
    .catch(error => {
    console.error(error);
    this.MessageError = "Une erreur s'est produite.";
    });
    },


    // Diriger vers l'adminpage
    Adminpage() {
    localStorage.removeItem('id');
    this.$router.push({ name: 'adminpage' });
    },

    //Modification Admin 
    modificationadmin() {
    this.$router.push({ name: 'modificationadmin' });
    },

    // Se deconnecter

    logout() {
    axios.post('http://localhost:8082/api/admins/logoutadmin')
    .then(response => {
    localStorage.removeItem('token');
    // localStorage.removeItem('Email');
    this.$router.push({ name: 'loginadm' });
    })
    .catch(error => {
    console.error(error);
    this.MessageError = "Une erreur s'est produite lors de la déconnexion.";
    });
    },

    slide1() {
    let a = document.getElementById("rindra");
    if (a.style.display === "block") {
    a.style.display = "none";
    } else {
    a.style.display = "block";
    }
    },
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
      return this.isWithinBounds(this.lati, this.longi);
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
    background-color: rgba(198, 209, 197, 0.9);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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
    .navbar .settings-menu {
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
        .detail table {
            font-size: 0.9rem;
        }
    }
    
    /* Autre styde de CSS */
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
   margin-left: 340px;
   margin-top: -40px;
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
  font-size: 17px;
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