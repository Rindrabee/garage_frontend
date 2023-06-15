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
                        <a href="#">Conseil</a>
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
            <input v-model="Nom" type="text" id="nom" name="nom" placeholder="Entrer votre nom" required>
          </div>
  
          <div class="user-input-box">
            <label for="adresse">Adresse</label>
            <input type="text" id="adresse" name="adresse" placeholder="Entrer votre adresse/localisation" required>
          </div>
  
          <div class="user-input-box">
            <label for="email">Email</label>
            <input v-model="Email" type="email" id="email" name="email" placeholder="Entrer votre Email" required>
          </div>
  
          <div class="user-input-box">
            <label for="telephone">Telephone</label>
            <input type="text" id="telephone" name="telephone" placeholder="Entrer votre telephone">
          </div>
  
          <div class="user-input-box">
            <label for="specialite">Specialite</label>
            <input  type="text" id="specialite" name="specialite" placeholder="Entrer votre specialite">
          </div>
  
          <div class="user-input-box">
            <label for="heure">Heure d'ouverture</label>
            <input  type="text" id="heure" name="heure" placeholder="Entrer l'heure de votre ouverture">
          </div>

          <div class="user-input-box">
            <label for="heure2">Heure de fermeture</label>
            <input  type="text" id="heure2" name="heure2" placeholder="Entrer l'heure de votre fermeture">
          </div>

          <div class="user-input-box">
            <label for="photo">Photo</label>
            <input  style="background: white;" type="file" id="photo" name="photo" placeholder="Choisir votre photo">
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
        </div>
  
        <div @click="slide1" id="next" class="form-submit-btn">
        <input id="btn1" type="submit" value="Suivant">
        </div>
        </div>
  
  
  
        <!-- page 2  -->
        <div id="pejy2" class="page2">
            <div class="user-input-box">
            <label for="service">Services offertes</label>
            <textarea name="" id="" cols="38" rows="5" placeholder="Entrer tous votre service offerte"></textarea>
          </div>

          

          <div class="user-input-box">
            <label for="equipement">Equipements</label>
            <textarea name="" id="" cols="38" rows="5" placeholder="Entrer votre equipements"></textarea>
          </div>
  
         

          <div class="user-input-box">
            <label for="password">Mot de passe</label>
            <input v-model="Password" type="password" id="password" name="password" placeholder="Entrer votre mot de passe" required>
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
            <div><img class="check" id="faharoa2" style="display: none; width: 25px;margin-top: -28.9px;margin-left: 0px;position: absolute;" src="../assets/images/yes2.ico" alt=""></div>
          </div>
        </div>
  
        <input @click="slide2" style="position: absolute;  display: block;margin-top: 260px;font-size: 15px;padding: 10px;border: none;border-radius: 3px;" type="submit" value="Precedent" class="precedent">
  
  
        <div @click="register" id="register" class="form-submit-btn">
        <input type="submit" value="Register">
        </div>
      </div>
  
    </div> 
    
      </form>
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
          Photo: ''
        }
      },
      methods: {
      async register () {
           const response = await AuthenticationService.register({
             Nom: this.Nom,
             Prenoms: this.Prenoms,
             Naissance: this.Naissance,
             Profession: this.Profession,
             Adresse: this.Adresse,
             Sexe: this.Sexe,
             Telephone: this.Telephone,
             Email: this.Email,
             Password: this.Password
           })
           console.log(response.data)
           alert("Enregistrer avec succès")
           let a = document.getElementById("faharoa");
           let b = document.getElementById("faharoa2");
    
            a.style.display = "block";
            b.style.display = "block";
    
          },
          slide1(){
            let a = document.getElementById("pejy1");
            let b = document.getElementById("pejy2");
            let c = document.getElementById("voalohany");
            let d = document.getElementById("voalohany1");
            
            a.style.display = "none";
            b.style.display = "flex";
            c.style.display = "block";
            d.style.display = "block";
    
          },
          slide2(){
            let a = document.getElementById("pejy1");
            let b = document.getElementById("pejy2");
    
            a.style.display = "flex";
            b.style.display = "none";
          },
      
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
      .user-input-box textarea {
        height: 80px;
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
        margin-left: 280px;
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
        right: -251px;
        height: 3px;
        width: 224px;
        height: 3px;
        background: #262626;
      }
      .progress-bar .step .bullet:after{
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