<template>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
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
                        <a class="btn" href="register">S'inscrire</a>
                    </div>
                </div>
            </nav>
        </div>
    
        <div class="container">
        <form>
        <div class="box">
            <div class="form">
            <h2 style="font-family: century gothic;font-size : 15px"><img style="width: 20px;" src="../assets/images/cle.ico" alt=""> Mot de passe oublié</h2>
            
            
            <!-- <div class="inputBox">
                <select name="type" style="position: relative;
                width: 300px;
                margin-top: 35px;background: transparent; font-size: 1em; border: none;
                outline: none;
                color: #8f8f8f;  height: 44px;">
                    <option  name="Garage" value="Garage">Garage</option>
                    <option  name="Client"  value="Client">Client</option>
                    <option  name="Mecanicien"  value="Mecanicien">Mecanicien</option>
                </select>
                <i></i>
            </div> -->
            <br><br><br>
            
                <p style="color: white;font-size: 14px;color: rgb(197, 175, 134);">Entrer le code que vous avez reçu</p>
          
                <div class="code">
                  <input  type="text">
                </div>
            
            <br><br>
            <!-- eto asina erreur ra ohatra ka -->
            <div>
                <h2 style="color: red;font-family: century gothic;font-size: 9px;float: left;"></h2>
            </div>
            
            <br>
            <!-- <div v-if="MessageError">
                <h2 style="color: red;font-family: century gothic;font-size: 9px;float: left;">{{ MessageError }}</h2>
            </div> -->
            
    
            <br>
            <h5 style="color : red;font-family : century gothic"></h5>
            <div style="margin-left: 50px;">
            <input @click="versmdpoublie" style="margin-left: 20px;" type="submit"  value="Retour">
            
            <input @click="validationcode" style="margin-left: 20px;" class="envoyer" type="button"  value="Envoyer">
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
    import axios from 'axios';
    import Loginpage from './mdpoublier.vue';
    
    
    export default {
      data() {
        return {
          Email: '',
        };
      },
      methods: {
        versmdpoublie() {
            this.$router.push({ name: 'mdpoublier' });
        },
    
        validationcode() {
            this.$router.push({ name: 'nouveaucode' });
        }
    }
    };
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
    .code {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
  .code input[type="text"] {
    width: 140px;
    height: 40px;
    font-size: 20px;
    text-align: center;
    margin: 0 5px;
  }
    .envoyer {
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
    .envoyer:active {
      opacity: 0.10;
    }
    
    .box {
        position: relative;
        width: 380px;
        height: 520px;
        background: #1c1c1c;
        border-radius: 8px;
        overflow: hidden;
    }
    .box::before {
        content: '';
        position: absolute;
        top : -50%;
        left: -50%;
        width: 380px;
        height: 420px;
        background: linear-gradient(0deg,transparent,#ffa400,#ffa400);
        transform-origin: bottom right;
        animation: animate2 6s linear infinite;
    }
    .box::after {
        content: '';
        position: absolute;
        top : -50%;
        left: -50%;
        width: 380px;
        height: 420px;
        background: linear-gradient(0deg,transparent,#ffa400,#ffa400);
        transform-origin: bottom right;
        animation: animate2 6s linear infinite;
        animation-delay: -3s;
    }
    
    @keyframes animate2 {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    
    .form {
        position: absolute;
        inset: 2px;
        border-radius: 8px;
        background: black;
        z-index: 10;
        padding: 50px 40px;
        display: flex;
        flex-direction: column;
    }
    .form h2 {
        color: #ffa400;
        font-weight: 500;
        text-align: center;
        letter-spacing: 0.1em;
    }
    .inputBox {
        position: relative;
        width: 300px;
        margin-top: 35px;
    }
    .inputBox input {
        position: relative;
        width: 100%;
        padding: 20px 10px 10px;
        background: transparent;
        border: none;
        outline: none;
        color: #23242a;
        font-size: 1em;
        letter-spacing: 0.05em;
        z-index: 10;
    }
    .inputBox span {
        position: absolute;
        left: 0;
        padding: 20px 10px 10px;
        font-size: 1em;
        color: #8f8f8f;
        pointer-events: none;
        letter-spacing: 0.05em;
        transition: 0.5s;
    }
    .inputBox input:valid ~ span,
    .inputBox input:focus ~ span
    {
        color: #ffa400;
        transform: translateX(-10px) translateY(-34px);
        font-size: 0.75em;
    }
    .inputBox i {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #ffa400;
        border-radius: 4px;
        transition: 0.5s;
        pointer-events: none;
    }
    .inputBox input:valid ~ i,
    .inputBox input:focus ~ i{
        height: 44px;
    }
    .links{
        display: flex;
        justify-content: space-between;
    }
    .links a {
        margin: 10px 0;
        font-size: 0.75em;
        color: #8f8f8f;
        text-decoration: none;
    }
    .links a:hover,
    .links a:nth-child(2)
    {
        color:  #ffa400;
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