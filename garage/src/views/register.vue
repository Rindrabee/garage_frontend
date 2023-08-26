<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="cont">
    <div class="main">
        <nav class="navix">
            <img src="../assets/images/car.ico" class="logo2" alt="">
            <div class="nav-links">
                <p><router-link to="/">Accueil</router-link></p>
                <div>
                    <a href="conseilpage">Conseil</a>
                    <a class="btn" href="loginpage">Se connecter</a>
                </div>
            </div>
        </nav>
    </div>

    <div class="container">
    <form>
    <div  class="box">
    <h1 class="form-title">Registration</h1>
    
      <div id="pejy1" class="page1">
        <div class="user-input-box">
          <label for="nom">Nom</label>
          <input v-model="Nom" type="text" id="nom" name="nom" :placeholder="isFieldEmpty && !Nom ? 'Entrer votre nom' : 'Entrer votre nom'" :class="{'error': isFieldEmpty && !Nom}">
        </div>

        <div class="user-input-box">
          <label for="prenom">Prénoms</label>
          <input v-model="Prenoms" type="text" id="prenom" name="prenom" :placeholder="isFieldEmpty && !Prenoms ? 'Entrer votre prénoms' : 'Entrer votre prénoms'" :class="{'error': isFieldEmpty && !Prenoms}">
        </div>

        <div class="user-input-box">
          <label for="email">Email</label>
          <input v-model="Email" type="email" id="email" name="email" :placeholder="isFieldEmpty && !Email ? 'Entrer votre email' : 'Entrer votre email'" :class="{'error': isFieldEmpty && !Email}">
          <div style="color: red;" v-if="isInvalidEmail" class="field-message">Adresse e-mail invalide</div>
        </div>

        <div class="user-input-box">
          <label for="date">Date de naissance</label>
          <input v-model="Naissance" style="color: grey;" type="date" id="date" name="date" placeholder="Date de naissance">
          <div style="color: red;margin-right: 100px;" v-if="isFieldEmpty && !Naissance" class="field-message">Veuillez compléter ce champ</div>
        </div>

        <div class="user-input-box">
          <label for="profession">Profession</label>
          <input v-model="Profession" type="text" id="profession" name="profession" :placeholder="isFieldEmpty && !Profession ? 'Entrer votre profession' : 'Entrer votre profession'" :class="{'error': isFieldEmpty && !Profession}">
        </div>

        <div class="user-input-box">
          <label for="adresse">Adresse</label>
          <input v-model="Adresse" type="text" id="adresse" name="adresse" :placeholder="isFieldEmpty && !Adresse ? 'Entrer votre adresse' : 'Entrer votre adresse'" :class="{'error': isFieldEmpty && !Adresse}">
        </div>

        <div class="user-input-box">
        <label for="sexe">Sexe</label>
        <div class="gender-category">
          <select v-model="Sexe" class="selecting" name="sexe" id="sexe">

            <option style="font-family: century gothic;" name="Masculin" value="Masculin">Masculin</option>
            <option style="font-family: century gothic;" name="Feminin" value="Feminin">Feminin</option>
            <option style="font-family: century gothic;" name="Personalisé" value="Personalisé">Personalisé</option>
          </select>
          
        </div>
        <div style="color: red;margin-left: 9px;margin-top: -30px ;font-size: 15px;font-family: century gothic;" v-if="isFieldEmpty && !Sexe" class="field-message">Veuillez compléter ce champ</div>
        </div>

        <div class="user-input-box">
          <label for="photo">Photo</label>
          <input @change="handleImage" ref="postImageInput" style="background: white;" type="file" id="photo" name="photo" placeholder="Choisir votre photo">
        </div>

        <!-- ito le tsipika kely -->
      <div id="tsipika1" class="progress-bar">
        <div class="step">
          <div class="bullet">
            <span>1</span>
          </div>
          <div><img class="check" id="voalohany" style="display: none; width: 25px;margin-top: -28.9px;margin-left: 0px;position: absolute;" src="../assets/images/yes2.ico" alt=""></div>
        </div>

        <div class="step">
          <div class="bullet">
            <span>2</span>
          </div>
          <div><img class="check" id="faharoa" style="display: none; width: 25px;margin-top: -28.9px;margin-left: 0px;position: absolute;" src="../assets/images/yes2.ico" alt=""></div>
        </div>

        <div class="step">
          <div class="bullet">
            <span>3</span>
          </div>
          <div><img class="check" id="fahatelo" style="display: none; width: 25px;margin-top: -28.9px;margin-left: 0px;position: absolute;" src="../assets/images/yes2.ico" alt=""></div>
        </div>
      </div>

      <h2 style="margin-top: 49px;opacity: 0%;">45</h2>
      
      </div>


      <!-- page 2  -->
      <div id="pejy2" class="page2">
        <div class="user-input-box">
          <label for="telephone">Telephone</label>
          <input v-model="Telephone" type="text" id="telephone" name="telephone" :placeholder="isFieldEmpty && !Telephone ? 'Entrer votre telephone' : 'Entrer votre telephone'" :class="{'error': isFieldEmpty && !Telephone}">
        </div>

        <div class="user-input-box">
          <label for="password">Mot de passe</label>
          <input v-model="Password" type="password" id="password" name="password" :placeholder="isFieldEmpty && !Password ? 'Entrer votre mot de passe' : 'Entrer votre mot de passe'" :class="{'error': isFieldEmpty && !Password}">
        </div>

        <div id="tsipika2" class="progress-bar">
        <div class="step">
          <div class="bullet">
            <span>1</span>
          </div>
          <div><img class="check" id="voalohany1" style="display: none;width: 25px;margin-top: -28.9px;margin-left: 0px;position: absolute;" src="../assets/images/yes2.ico" alt=""></div>
        </div>

        <div class="step">
          <div class="bullet">
            <span>2</span>
          </div>
          <div><img class="check" id="faharoa1" style="display: none; width: 25px;margin-top: -28.9px;margin-left: 0px;position: absolute;" src="../assets/images/yes2.ico" alt=""></div>
        </div>

        <div class="step">
          <div class="bullet">
            <span>3</span>
          </div>
          <div><img class="check" id="fahatelo1" style="display: none; width: 25px;margin-top: -28.9px;margin-left: 0px;position: absolute;" src="../assets/images/yes2.ico" alt=""></div>
        </div>

        </div>
      <h2 style="margin-top: 49px;opacity: 0%;">45</h2>

      <input @click="slide2" type="button" style="position: absolute;  display: block;margin-top: 140px ;font-size: 15px;padding: 10px;border: none;border-radius: 3px;"  value="Precedent" class="precedent">

   
      <input @click="slide3" type="button" style="position: absolute; margin-left: 495px; display: block;margin-top: 140px ;font-size: 15px;padding: 10px;border: none;border-radius: 3px;"  value="Suivant" class="precedent">
    </div>

    <!-- pejy 3 -->

    <div id="pejy3" class="page3">
   
    <div style="color: #fff;" class="condition">
        <p>Nous sommes ravis de vous accueillir sur notre site web de garage :</p>
        <ul><br>
        <li><strong>Qualité du service :</strong> Notre priorité est de vous offrir un service de qualité exceptionnelle. Nos mécaniciens hautement qualifiés sont là pour répondre à tous vos besoins en matière de réparation et d'entretien automobile.</li>
        <li><strong>Transparence des prix :</strong> Nous croyons en la transparence totale en ce qui concerne nos tarifs. Avant d'entreprendre toute réparation ou prestation de service.</li>
        <li><strong>Respect des délais :</strong> Nous comprenons l'importance de votre temps et nous nous engageons à respecter les délais convenus.</li>
        <li><strong>Politique de garantie :</strong> Nous offrons une garantie sur toutes les réparations effectuées dans notre garage. Si vous rencontrez un problème après une intervention.</li>
        <li><strong>Service clientèle :</strong> Votre satisfaction est notre priorité absolue. Notre équipe amicale et professionnelle est disponible pour répondre à toutes vos questions.</li>
        </ul>

        <p>Nous vous invitons à lire attentivement ces conditions avant de continuer à utiliser notre site web.</p>
        <br>
        <div class="checkbox-container">
      <label>
        <input type="checkbox" v-model="acceptConditions"> Cliquez ici pour indiquer votre acceptation des conditions.
      </label>
    </div>
    <div class="error-message" v-if="!acceptConditions">
      <!-- <h2 style="color: red;font-size: 17px;">Veuillez accepter les conditions pour vous inscrire.</h2> -->
    </div>

        <h2 style="opacity: 0%;">45</h2>
        </div>

        <div id="tsipika2" class="progress-bar">
        <div class="step">
          <div class="bullet">
            <span>1</span>
          </div>
          <div><img class="check" id="voalohany2" style="display: none;width: 25px;margin-top: -28.9px;margin-left: 0px;position: absolute;" src="../assets/images/yes2.ico" alt=""></div>
        </div>

        <div class="step">
          <div class="bullet">
            <span>2</span>
          </div>
          <div><img class="check" id="faharoa2" style="display: none; width: 25px;margin-top: -28.9px;margin-left: 0px;position: absolute;" src="../assets/images/yes2.ico" alt=""></div>
        </div>

        <div class="step">
          <div class="bullet">
            <span>3</span>
          </div>
          <div><img class="check" id="fahatelo2" style="display: none; width: 25px;margin-top: -28.9px;margin-left: 0px;position: absolute;" src="../assets/images/yes2.ico" alt=""></div>
        </div>
      </div>
   

      <input @click="slide4" type="button" id="slide4" style="position: absolute;  display: block;margin-top: 392px ;font-size: 15px;padding: 10px;border: none;border-radius: 3px;"  value="Precedent" class="precedent">

      <div @click="register" style="display: block;" id="register" class="form-submit-btn">
      <input type="button" class="registrer" value="Register">
      </div>

      <div style="display: none;" id="terminer" class="form-submit-btn">
      <router-link style="text-decoration: none;" to="/validationcode">
      <input type="button" class="registrer" value="Terminer">
      </router-link>
      </div>
   
    </div>

  </div> 
  </form>

    <div style="position: absolute;margin-top: 420px;" @click="slide1" id="next" class="form-submit-btn">
      <input id="btn1" type="submit" value="Suivant">
    </div>
   
  </div>
</div>
    
</body>
</html> 
</template>

<script>
import AuthenticationService from '../services/AuthenticationService.js'

export default {
  data () {
    return {
      Nom: '',
      Prenoms: '',
      Naissance: '',
      Profession: '',
      Adresse: '',
      Sexe: '',
      Telephone: '',
      Email: '',
      Password: '',
      Photo: '',
      

      isFieldEmpty: false,
      isInvalidEmail: false,
      acceptConditions: false
    }
  },
  methods: {
    validateDate() {
  const today = new Date();
  const inputDate = new Date(this.Naissance);

  // Calculer la date d'il y a 16 ans par rapport à aujourd'hui
  const dateLimite = new Date(today);
  dateLimite.setFullYear(dateLimite.getFullYear() - 16);

  // Réinitialiser les heures, minutes, secondes et millisecondes pour une comparaison précise
  today.setHours(0, 0, 0, 0);
  inputDate.setHours(0, 0, 0, 0);

  if (inputDate > dateLimite) {
    alert("Il est illogique d'indiquer une date de naissance postérieure à 16 ans par rapport à la date d'aujourd'hui.");
    return false;
  }

  return true;
},
  async register() {
  if (!this.acceptConditions) {
    alert("Veuillez accepter les conditions pour vous inscrire.");
    return;
  }

  
  const response = await AuthenticationService.register({
    Nom: this.Nom,
    Prenoms: this.Prenoms,
    Naissance: this.Naissance,
    Profession: this.Profession,
    Adresse: this.Adresse,
    Sexe: this.Sexe,
    Telephone: this.Telephone,
    Email: this.Email,
    Password: this.Password,
    Photo: this.Photo
  });

  console.log(response.data);
  alert("Enregistré avec succès");


  localStorage.setItem("Email",this.Email)

  
      let a = document.getElementById("voalohany2");
      let b = document.getElementById("faharoa2");
      let c = document.getElementById("fahatelo2");
      let d = document.getElementById("fahatelo1");
      let e = document.getElementById("fahatelo");
      let f = document.getElementById("register");
      let g = document.getElementById("terminer");
      let h = document.getElementById("slide4");


      a.style.display = "block";
      b.style.display = "block";
      c.style.display = "block";
      d.style.display = "block";
      e.style.display = "block";
      f.style.display = "none";
      g.style.display = "block";
      h.style.display = "none";

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
    isValidEmail(email) {
    // Expression régulière pour valider le format de l'adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
    },
    slide1() {
      if (!this.Nom || !this.Naissance || !this.Prenoms || !this.Profession || !this.Adresse || !this.Sexe) {
      this.isFieldEmpty = true;
      return;
    }
    const isValidDate = this.validateDate();
    
    if (!isValidDate) {
      return;
    }
  

    if (!this.isValidEmail(this.Email)) {
      this.isFieldEmpty = false;
      this.isInvalidEmail = true;
      return;
    }

    this.isFieldEmpty = false;
    this.isInvalidEmail = false;
  
    let a = document.getElementById("pejy1");
    let b = document.getElementById("pejy2");
    let c = document.getElementById("voalohany");
    let d = document.getElementById("voalohany1");
    let g = document.getElementById("voalohany2");
    let e = document.getElementById("next");
      
    a.style.display = "none";
    b.style.display = "flex";
    c.style.display = "block";
    d.style.display = "block";
    e.style.display = "none";
    g.style.display = "block";

    },
    
    slide2() {
      let a = document.getElementById("pejy1");
      let b = document.getElementById("pejy2");
      let c = document.getElementById("next");
      

      a.style.display = "flex";
      b.style.display = "none";
      c.style.display = "block";
    },

    slide3() {
    if (!this.Telephone || !this.Password) {
    this.isFieldEmpty = true;
    return;
    }

    this.isFieldEmpty = false;

    let a = document.getElementById("pejy1");
    let b = document.getElementById("pejy2");
    let c = document.getElementById("pejy3");
    let d = document.getElementById("faharoa");
    let e = document.getElementById("faharoa1");
    let g = document.getElementById("faharoa2");
    let f = document.getElementById("next");

    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "flex";
    d.style.display = "block";
    e.style.display = "block";
    g.style.display = "block";
    f.style.display = "none";
    },

    slide4(){
    let a = document.getElementById("pejy1");
    let b = document.getElementById("pejy2");
    let c = document.getElementById("pejy3");
    let d = document.getElementById("next");
      

    c.style.display = "none";
    a.style.display = "none";
    d.style.display = "none";
    b.style.display = "flex";
        
  },
  //redirection vers les autres pages
  versconseilpage() {
    this.$router.push({name:'conseilpage'})
  }


  }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline : none;
    font-family: 'Tw Cen MT' , sans-serif;
}
.cont {
    position: fixed;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.5) url(../assets/images/aza.jpg) center center fixed;
    background-size: cover;
    background-position: center;
    padding: 0 8%;
}
.container {
    justify-content: center;
    align-items: center;
    display: flex;
}
.error::placeholder {
  color: red;
  font-size: 15px;
  font-family: century gothic;
}
/* .main {
    padding: 0 8%;
} */
.navix {
    padding: 24px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.logo2 {
    width: 50px;
    cursor: pointer;
}
.nav-links {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
}

.nav-links a {
    margin-left: 36px;
    text-decoration: none;
    color: #fff;
    transition: 0.5s;
}
.nav-links a:hover {
    padding: 11px;
    background-color: #ffa400;
    border-radius: 20px;
}
.nav-links .btn {
    background: #ffa400;
    color: #000;
    padding: 10px 28px;
    border-radius: 5px;
}

.box {
    width: 100%;
    max-width: 650px;
    background: rgba(0, 0, 0, 0.5);
    padding: 28px;
    margin: 0 28px;
    border-radius: 10px;
    box-shadow: inset -2px 2px 2px orange;
}
  .form-title {
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    padding-bottom: 6px;
    color: white;
    text-shadow: 2px 2px 2px black;
    border-bottom: solid 1px white;
  }
  .page1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 0;
  }
  .page2 {
    display: none;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 0;
  }
  .page3 {
    display: none;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 0;
  }
  .user-input-box:nth-child(2n){
    justify-content: end;
  }
  .user-input-box {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    padding-bottom: 15px;
  }
  .user-input-box label {
    width: 95%;
    color: white;
    font-size: 14px;
    font-family: century gothic;
    font-weight: 400;
    margin: 5px 0;
  }
  .user-input-box input {
    height: 40px;
    width: 95%;
    border-radius: 7px;
    outline: none;
    font-size: 15px;
    font-family: century gothic;
    border: 1px solid grey;
    padding: 0 10px;
  }
  .user-input-box .gender-category .selecting {
    height: 40px;
    width: 280px;
    border-radius: 7px;
    outline: none;
    font-size: 15px;
    color: grey;
    font-family: century gothic;
    border: 1px solid grey;
    padding: 0 10px;
  }
  .precedent:hover{
    background-color: rgba(231, 161, 30, 0.5);
  }
 
  .user-input-box .gender-category .selecting,
  .form-submit-btn input{
    cursor: pointer;
  }
  .form-submit-btn {
    margin-top: 20px;
    margin-left: 500px;
  }
  .form-submit-btn input {
    display: block;
    width: 100%;
    margin-top: 10px;
    font-size: 15px;
    padding: 10px;
    border: none;
    border-radius: 3px;
  }
  .form-submit-btn input:hover {
    background-color: rgba(231, 161, 30, 0.5);
  }
  .progress-bar {
    display: flex;
    margin-top: -2px;
    margin-left: -140px;
  }
  .progress-bar .step {
    position: relative;
    margin-left: 205px;
    text-align: center;
    width: 100%;
  }
  .progress-bar .step p {
  font-size: 18px;
  font-weight: 500;
  color: #000;
  margin-bottom: 8px;
  }
  .progress-bar .step .bullet{
  position: relative;
  height: 25px;
  width: 25px;
  border: 1px solid orange;
  display: inline-block;
  border-radius: 50%;
  }
  .progress-bar .step:last-child .bullet:before,
  .progress-bar .step:last-child .bullet:after{
    display: none;
  }

  .progress-bar .step .bullet:before,
  .progress-bar .step .bullet:after{
    position: absolute;
    content: '';
    bottom: 11px;
    right: -196px;
    height: 3px;
    width: 180px;
    height: 3px;
    background: #262626;
  }
  .progress-bar .step .bullet:after {
    background: #ffa400;
    transform: scaleX(0);
    transform-origin: left;
    animation: animate4 0.3s linear forwards;
  }
  @keyframes animate4 {
     100%{
      transform: scaleX(1);
     }
  }
  .progress-bar .step span {
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
    position: absolute;
    left: 50%;
    color: white;
    transform: translateX(-50%);
  }
  /* .check {
    position: absolute;
    left: 49.9%;
    top: 43.1%;
    font-size: 15px;
    transform: translate(-50%, -50%);
    display: none;
  } */


  @media(max-width: 600px){
    .container2{
      min-width: 280px;
    }
    .user-input-box {
      margin-bottom: 12px;
      width: 100%;
    }
    .user-input-box:nth-child(2n){
      justify-content: space-between;
    }
    .gender-category {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .main-user-info{
      max-height: 380px;
      overflow: auto;
    }
    .main-user-info::-webkit-scrollbar{
      width: 0;
    }
  }
 
.registrer {
  border: none;
    outline: none;
    background: #ffa400;
    padding: 11px 25px;
    width: 100px;
    text-align: center;
    margin-top: 10px;
    border-radius: 4px;
    font-weight: 200;
    font-family: 'century gothic';
    cursor: pointer;
}

.registrer:active {
  opacity: 0.10;
}



.precedent {
  border: none;
    outline: none;
    background: #ffa400;
    padding: 11px 25px;
    width: 100px;
    margin-top: 10px;
    text-align: center;
    border-radius: 4px;
    font-weight: 200;
    font-family: 'century gothic';
    cursor: pointer;
}
.precedent:active {
  opacity: 0.10;
}


input[type="submit"]{
    border: none;
    outline: none;
    background: #ffa400;
    padding: 11px 25px;
    width: 100px;
    margin-top: 10px;
    border-radius: 4px;
    font-weight: 200;
    font-family: 'century gothic';
    cursor: pointer;
}
input[type="submit"]:active{
    opacity: 0.10;
}

</style>