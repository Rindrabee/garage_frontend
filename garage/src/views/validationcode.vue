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
    <form @submit.prevent="verificationducode">
      <div  class="box">
      <h1 class="form-title">Confirmation</h1>
      
    
        <!-- pejy 3 -->
    
    <div id="pejy3" class="page3">

    <p style="color: white;">Veuillez entrer le code de validation envoyé par e-mail pour vérifier votre compte.</p>
      <br><br>
      <div class="code">
        <input  v-model="client.Email" type="hidden">
        <input v-model="client.confirmationcode" type="text">
      </div>

      <div id="terminer" class="form-submit-btn">
        
      <input type="submit"  value="Confirmer">
        
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
  import { createApp } from 'vue'
  import axios from 'axios'


export default {
  name: 'validationcode',
  data () {
    return {
      client : {
        Email: localStorage.getItem('Email'),
        confirmationcode: ''
      }
    }
  },
  mounted(){

  },
  methods: {    
  verificationducode() {
    axios.post('http://localhost:8082/api/clients/verificationclt',this.client)
    .then(response => {
      if(response.data.statut) {
        localStorage.setItem('token',response.data.token);
        this.$router.push({ name:'clientpage' });

      }else {
        alert('Code de validation incorrect');
      }
    }).catch(error => {
      alert(error);
    })

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
    .code {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .code input[type="text"] {
    width: 140px;
    height: 40px;
    font-size: 20px;
    text-align: center;
    margin: 0 5px;
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
      .page3 {
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px 0;
      }
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
    
   
   
    
    
   
  
 
 
      /* .check {
        position: absolute;
        left: 49.9%;
        top: 43.1%;
        font-size: 15px;
        transform: translate(-50%, -50%);
        display: none;
      } */
    
    
    
     
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

    
    input[type="submit"]{
        border: none;
        outline: none;
        background: #ffa400;
        /* padding: 11px 25px;
        width: 100px; */
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