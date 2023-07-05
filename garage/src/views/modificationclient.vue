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
                        <div class="card-block text-center text-white">
                            <i class="fas fa-user-tie fa-7x mt-5"></i>
                            <br><br>
                            <input id="fileInput" style="display: none;" type="file" onchange="handleFileSelection(event)">
                            <input id="imagePathInput"  style="height: 17px; width: 110px; border-radius: 10px; border-color: white;" type="text">
                            <br>
                            <label for="fileInput">
                            <i class="far fa-edit fa-2x mb-4" onclick="openFileInput()"></i>
                            </label>
                            <h2 class="font-weight-bold mt-4">Nickson</h2>
                            <p>Web Designer</p>
                        </div>
                    </div>
                    <div class="col-sm-8 bg-white rounded-right">
                        <h3 class="mt-3 text-center">Information</h3>
                        <hr class="bg-primary">
                        <div class="row">
                            <div class="col-sm-6">
                                <p class="font-weight-bold">Nom : &nbsp; <input class="inuty" type="text"></p>
                               
                                <!-- <h6 class="text-muted">rindratahinalisoa@gmail.com</h6> -->
                            </div>
                            <div class="col-sm-6">
                                <p class="font-weight-bold">Prénoms : &nbsp; <input class="inuty" type="text"></p>
                            </div>

                            <div class="col-sm-6">
                                <p class="font-weight-bold">Email : &nbsp; <input class="inuty" type="email"></p>
                            </div>

                            <div class="col-sm-6">
                                <p class="font-weight-bold">Date de naissance : &nbsp; <input class="inuty" type="date"></p>
                            </div>
                            <div class="col-sm-6">
                                <p class="font-weight-bold">Profession : &nbsp; <input class="inuty" type="text"></p>
                            </div>
                            <div class="col-sm-6">
                                <p class="font-weight-bold">Adresse : &nbsp; <input class="inuty" type="text"></p>
                            </div>
                            <div class="col-sm-6">
                                <p class="font-weight-bold">Telephone : &nbsp; <input class="inuty" type="text"></p>
                            </div>
                            <div class="col-sm-6">
                                <p class="font-weight-bold">Mot de passe : &nbsp; <input class="inuty" type="text"></p>
                            </div>

                        </div>

                        <br>
                        <div style="margin-left: 490px;" class="row">
                        <div class="col-sm-5">
                            <input  class="btn btn-outline-success" type="button" value="Annuler">
                            </div>

                            <div class="col-sm-5">
                            <input class="btn btn-outline-success" type="button" value="Enregistrer">
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
function handleFileSelection(event) {
  var fileInput = event.target;
  var imagePathInput = document.getElementById("imagePathInput");

  var selectedFile = fileInput.files[0];
  var fileName = selectedFile ? selectedFile.name : '';

  if (imagePathInput) {
    imagePathInput.value = fileName;
  }
}

function openFileInput() {
  document.getElementById("fileInput").click();
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