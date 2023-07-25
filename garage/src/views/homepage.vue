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
    <nav>
    <img src="../assets/images/car.ico" class="logo" alt="">
    <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="loginpage">Se connecter</a></li>
        <div class="type">
        <li><a>S'inscrire</a></li>
        <div class="type2">
            <li><a href="register">Client</a></li>
            <li><a href="registergarage">Garage</a></li>
            <li><a href="registermecanicien">Mecanicien</a></li>
        </div>
        </div>
    </ul>
    <router-link to="loginadm"><img style="width: 33px;cursor: pointer;"  src="../assets/images/chef.ico" alt=""></router-link>
    
    </nav>

    <div class="site-container">
       <p>Bienvenue à</p>
       <h1>GARAGEFINDER</h1>
       <h4>Découvrez les bonnes adresses dont vous avez besoin pour votre véhicule</h4>
       <div class="pam">
        <a class="decouvrir" href="decouvrir">DECOUVRIR  <span>&#x27f6</span></a>
       </div>
    </div>

    <div class="nousapp">
        <h3>Nous appeller</h3>
        <a style="color: #fff;text-decoration: none;" type="tel" href="#">+261 34 17 905 51</a>
    </div>

    <div class="nousapp2">
        <h3>Nous contacter</h3>
        <a  style="color: #fff;text-decoration: none;" type="email" href="#">garagetahinalisoa@gmail.com</a>
    </div>
   
    <div class="soc">
    <a  href="#"><img style="margin-left: -30px;" src="../assets/images/phone-fill.png" alt=""></a>
    </div>

    <div class="soc2">
        <a href="#"><img style="width: 20px;margin-left: -30px;" src="../assets/images/ea.ico" alt=""></a>
    </div>

    <div class="kl-add-news-block position-fixed">
            <ul class="emm">
                    <li @click="versurgencepage" class="ell" data-type-id="4" data-icon-name="fas fa-comments" data-type-title="Demande de dépanage">
                        <a href="javascript:void(0);" data-toggle="tooltip" data-placement="left" class="kl-show-actus" title="" data-original-title="Demande de dépanage">
                            <svg class="svg12" aria-hidden="true" data-prefix="fas" data-icon="car-crash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M143.25 220.81l-12.42 46.37c-3.01 11.25-3.63 22.89-2.41 34.39l-35.2 28.98c-6.57 5.41-16.31-.43-14.62-8.77l15.44-76.68c1.06-5.26-2.66-10.28-8-10.79l-77.86-7.55c-8.47-.82-11.23-11.83-4.14-16.54l65.15-43.3c4.46-2.97 5.38-9.15 1.98-13.29L21.46 93.22c-5.41-6.57.43-16.3 8.78-14.62l76.68 15.44c5.26 1.06 10.28-2.66 10.8-8l7.55-77.86c.82-8.48 11.83-11.23 16.55-4.14l43.3 65.14c2.97 4.46 9.15 5.38 13.29 1.98l60.4-49.71c6.57-5.41 16.3.43 14.62 8.77L262.1 86.38c-2.71 3.05-5.43 6.09-7.91 9.4l-32.15 42.97-10.71 14.32c-32.73 8.76-59.18 34.53-68.08 67.74zm494.57 132.51l-12.42 46.36c-3.13 11.68-9.38 21.61-17.55 29.36a66.876 66.876 0 0 1-8.76 7l-13.99 52.23c-1.14 4.27-3.1 8.1-5.65 11.38-7.67 9.84-20.74 14.68-33.54 11.25L515 502.62c-17.07-4.57-27.2-22.12-22.63-39.19l8.28-30.91-247.28-66.26-8.28 30.91c-4.57 17.07-22.12 27.2-39.19 22.63l-30.91-8.28c-12.8-3.43-21.7-14.16-23.42-26.51-.57-4.12-.35-8.42.79-12.68l13.99-52.23a66.62 66.62 0 0 1-4.09-10.45c-3.2-10.79-3.65-22.52-.52-34.2l12.42-46.37c5.31-19.8 19.36-34.83 36.89-42.21a64.336 64.336 0 0 1 18.49-4.72l18.13-24.23 32.15-42.97c3.45-4.61 7.19-8.9 11.2-12.84 8-7.89 17.03-14.44 26.74-19.51 4.86-2.54 9.89-4.71 15.05-6.49 10.33-3.58 21.19-5.63 32.24-6.04 11.05-.41 22.31.82 33.43 3.8l122.68 32.87c11.12 2.98 21.48 7.54 30.85 13.43a111.11 111.11 0 0 1 34.69 34.5c8.82 13.88 14.64 29.84 16.68 46.99l6.36 53.29 3.59 30.05a64.49 64.49 0 0 1 22.74 29.93c4.39 11.88 5.29 25.19 1.75 38.39zM255.58 234.34c-18.55-4.97-34.21 4.04-39.17 22.53-4.96 18.49 4.11 34.12 22.65 39.09 18.55 4.97 45.54 15.51 50.49-2.98 4.96-18.49-15.43-53.67-33.97-58.64zm290.61 28.17l-6.36-53.29c-.58-4.87-1.89-9.53-3.82-13.86-5.8-12.99-17.2-23.01-31.42-26.82l-122.68-32.87a48.008 48.008 0 0 0-50.86 17.61l-32.15 42.97 172 46.08 75.29 20.18zm18.49 54.65c-18.55-4.97-53.8 15.31-58.75 33.79-4.95 18.49 23.69 22.86 42.24 27.83 18.55 4.97 34.21-4.04 39.17-22.53 4.95-18.48-4.11-34.12-22.66-39.09z"></path></svg><!-- <i class="fas fa-car-crash"></i> -->
                        </a>
                    </li>

                    <li @click="versconseilpage" class="ell" data-type-id="3" data-icon-name="fas fa-car-mechanic" data-type-title="Conseil sur le mecanique">
                        <a href="javascript:void(0);" data-toggle="tooltip" data-placement="left" class="kl-show-actus" title="" data-original-title="Conseil sur le mecanique">
                        <svg class="svg12" aria-hidden="true" data-prefix="fas" data-icon="car-mechanic" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M503.91 104h-55.98l-24-24 24-24h55.97c5.95 0 9.9-6.31 7.25-11.64-15.19-30.52-49.01-50.04-86.84-42.87-25.65 4.86-46.72 22.98-57.05 46.51H145.01c-12.38-28.17-40.2-48-72.94-48C40.75 0 13.9 18.12.84 44.37-1.81 49.69 2.15 56 8.09 56h55.98l24 24-24 24H8.09c-5.95 0-9.9 6.31-7.25 11.64 15.19 30.52 49.01 50.04 86.84 42.87 25.65-4.86 46.73-22.99 57.05-46.51h222.25c12.38 28.17 40.2 48 72.94 48 31.32 0 58.17-18.12 71.23-44.37 2.66-5.33-1.3-11.63-7.24-11.63zm-55.42 188.91l-5.07-12.67-19.93-49.83c-17.11-42.77-57.92-70.4-103.99-70.4h-127c-46.06 0-86.88 27.63-103.99 70.4l-19.93 49.82-5.07 12.67C40.33 302.52 24 325.34 24 352v32c0 20.12 9.48 37.86 24 49.59V480c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h224v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-46.41c14.52-11.73 24-29.47 24-49.59v-32c0-26.66-16.33-49.48-39.51-59.09zM96 399.8c-19.2 0-32-12.76-32-31.9S76.8 336 96 336s48 28.71 48 47.85-28.8 15.95-48 15.95zm38.4-111.79l13.53-33.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17l13.53 33.83H134.4zM416 399.8c-19.2 0-48 3.19-48-15.95S396.8 336 416 336s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path></svg><!-- <i class="fas fa-car-mechanic"></i> -->
                        </a>
                    </li>
                 
                    <li @click="versconseilaccident" class="ell" data-type-id="1" data-icon-name="fas fa-car-bump" data-type-title="Conseil pour eviter une accident">
                        <a href="javascript:void(0);" data-toggle="tooltip" data-placement="left" class="kl-show-actus" title="" data-original-title="Conseil pour eviter une accident">
                        <svg class="svg12" aria-hidden="true" data-prefix="fas" data-icon="car-bump" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M575.67 492.44c2.06 9.91-5.85 19.27-16.13 19.27h-158.9c-10.29 0-18.19-9.35-16.13-19.27 9.07-43.75 48.42-76.67 95.58-76.67s86.51 32.92 95.58 76.67zm-401.95-39.28c7.2 16.17-.24 35.04-16.62 42.15l-32.21 13.98c-16.38 7.11-35.5-.23-42.7-16.4l-22.56-50.64c-13.99-6.28-25.89-17.26-32.57-32.24L5.45 361.49C-5.9 336 1.13 307.34 20.57 289.3l-1.04-30.49-1.89-55.13c-1.62-47.33 25.71-90.22 69.62-109.28l121.08-52.56c43.92-19.06 94.42-9.95 128.66 23.22l39.89 38.64 22.06 21.37c26.61-1.95 52.76 12.31 64.12 37.79l21.62 48.52c6.68 14.98 6.83 31.06 2.06 45.48l22.56 50.64c7.2 16.17-.24 35.04-16.62 42.15l-32.21 13.98c-16.38 7.11-35.5-.23-42.7-16.4l-13.79-30.95-244.06 105.93 13.79 30.95zm181.42-205.69c8.02 18.01 34.14 3.09 52.45-4.85 18.3-7.94 25.16-25.25 17.13-43.26-8.02-18.01-25.58-24.72-43.88-16.78-18.3 7.95-33.73 46.88-25.7 64.89zm-213.56 92.7c-8.02-18.01-47.52-33.11-65.82-25.17-18.3 7.94-25.16 25.25-17.13 43.26 8.02 18.01 25.58 24.72 43.88 16.78 18.3-7.95 47.1-16.86 39.07-34.87zm188.63-189.52l-39.89-38.64c-14.59-14.13-36.43-18.07-55.14-9.95L114.1 154.62c-18.71 8.12-30.53 26.67-29.84 46.84l1.89 55.13 244.06-105.94z"></path></svg><!-- <i class="fas fa-car-bump"></i> -->
                        </a>
                    </li>
            </ul>
    </div>
    </div>
</body>
</html>
</template>

<script>
import { useRouter } from 'vue-router';
import axios from 'axios';
 
    export default {
      data () {
        return {
          
           
        }
      },
      methods: {
        versurgencepage() {
            localStorage.removeItem("newItemId")
            this.supprimemessage();
            this.$router.push({name:'urgencepage'})
        },
        versconseilpage() {
            this.$router.push({name:'conseilpage'})
        },
        versconseilaccident() {
            this.$router.push({name:'conseilaccident'})
        },

        // Supprimer tous les messages

        supprimemessage() {
        axios.delete('http://localhost:8082/api/messages/deletemessage2')
        .then(response => {
         console.log(response.data)
        })
        },
      }
    }
</script>

<style scoped>
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
background: linear-gradient(rgba(0, 0, 0, .5),rgba(0, 0, 0, .1)),url('../assets/images/tenaizy.jpg');
background-size: cover;
background-position: center;
padding: 0 8%;

}
/* CURSOR */
.emm li {
  position: relative;
}

.emm li:hover:before {
  content: attr(data-type-title);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #091b46;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  visibility: visible;
  opacity: 1;
}

.emm li:before {
  content: attr(data-type-title);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  margin-left: -120px;
  margin-top: -30px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s ease;
}

.decouvrir {
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

nav {
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
padding: 5px 0;
}
nav .logo {
    width: 100px;
    cursor: pointer;
}
nav .cart {
    width: 40px;
    cursor: pointer;
}
nav ul {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    padding-right: 40px;
    text-align: right;
    list-style-type: none;
}
ul li {
    margin-right: 10px;
}
ul li a {
    position: relative;
    padding: 10px 20px;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
}
ul li a::after {
    content: '';
    background: #ffa400;
    position: absolute; 
    bottom: 0;
    right: 0;
    width: 0;
    height: 3px;
    transform: translate(-40% , -5px);
    transition: 0.3s;
}
ul li a:hover::after {
    width: 38%;
}
.site-container {
    position: absolute;
    bottom: 10%;
    color: #fff;
}
.site-container p {
    font-size: 50px;
    font-weight: bold;
}
.site-container h1 {
    font-size: 120px;
    line-height: 120px;
    margin-left: -10px;
    color: transparent;
    -webkit-text-stroke : 1px #fff;
    background: url('../assets/images/pattern.png');
    -webkit-background-clip : text;
    background-position: 0 0;
    animation: animate 20s linear 2s infinite alternate;
}   
@keyframes animate {
100%{
    background-position: -500px 0;
}
}
.site-container h3 {
    font-size: 40px;
    font-weight: 500;
}
.site-container .pam {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;
}
.pam{
    float: left;
}
.pam a {
    display: flex;
    align-items: center;
    padding: 5px 20px;
    text-decoration: none;
    color: #fff;
    border: 1px solid #fff;
    margin-right: 40px;
    font-size: 18px;
    transition: 0.3s;
}
.pam a:hover {
    background-color: #fff;
    color: #000;
}
.pam a span{
    font-size: 15px;
    font-weight: bold;
    line-height: 2;
    margin-left: 10px;
}
.pam span{
    font-size: 18px;
}
.soc{
    position: absolute;
    right: 35%;
    bottom: 8%;
}
.soc2 {
    position: absolute;
    right: 21%;
    bottom: 8%;
}
.nousapp{
    color: #fff;
    font-family: 'century Gothic';
    font-size: 15px;
    position: absolute;
    right: 25%;
    bottom: 8%;
}
.nousapp2{
    color: #fff;
    font-family: 'century Gothic';
    font-size: 15px;
    position: absolute;
    right: 6%;
    bottom: 8%;
}
.social-icons a {
    padding: 5px;
    margin-right: 4px;
}
.type2 {
    display : none;
}
.type:hover .type2 {
    display : block;
}
.emm {
margin: 0px !important;
padding: 0px !important;
list-style-type: disc;
}
.ell {
text-align: -webkit-match-parent;
}

.kl-add-news-block {
right: 0px;
top: 35%;
width: 49px;
position: fixed!important;
}

.kl-wrapper {
font-family: 'Open Sans', sans-serif;
}

.kl-add-news-block .emm .ell {
list-style: none;
margin-bottom: 10px;
}
    
.kl-add-news-block .emm .ell a {
display: block;
background: #fff;
color: #091b46;
text-align: center;
padding: 7px 6px;
font-size: 23px;
transition: 0.5s;
box-shadow: 1px ​1px 2px #091b46;
}
.svg12:not(:root).svg-inline--fa {
overflow: visible;
}
.svg12-inline--fa.fa-w-18 {
width: 1.125em;
}
.svg12-inline--fa {
display: inline-block;
font-size: inherit;
height: 1em;
overflow: visible;
vertical-align: -0.125em;
}
.svg12 {
overflow: hidden;
vertical-align: middle;
}
.svg12:not(:root) {
overflow-clip-margin: content-box;
overflow: hidden;
}

    
</style>