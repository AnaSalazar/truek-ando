var iconoOpcionesPerfil = document.getElementById("iconoOpcionesPerfil");
var iconoNuevaPublicacion = document.getElementById("iconoNuevaPublicacion");
var botonEnviarPublicacion = document.getElementById("botonEnviarPublicacion")

iconoOpcionesPerfil.addEventListener("click", mostrarOpcionesPerfil);
iconoNuevaPublicacion.addEventListener("click", mostrarNuevaPublicacion);
botonEnviarPublicacion.addEventListener("click", enviarNuevaPublicacion);

function mostrarOpcionesPerfil() {
  var seccionOpcionesPerfil = document.getElementById("seccionOpcionesPerfil");

  if(seccionOpcionesPerfil.style.display == "flex"){
     seccionOpcionesPerfil.style.display = "none";
  }else {
    seccionOpcionesPerfil.style.display = "flex";
  }
}

function mostrarNuevaPublicacion() {
  var seccionNuevaPublicacion = document.getElementById("seccionNuevaPublicacion");

  if(seccionNuevaPublicacion.style.display == "flex"){
     seccionNuevaPublicacion.style.display = "none";
  }else {
    seccionNuevaPublicacion.style.display = "flex";
  }
}

function enviarNuevaPublicacion() {
  var seccionNuevaPublicacion = document.getElementById("seccionNuevaPublicacion");
  var publicacionEnviada = document.getElementById("publicacionEnviada");

     seccionNuevaPublicacion.style.display = "none";
     publicacionEnviada.style.display = "flex";
     setTimeout(function(){publicacionEnviada.style.display = "none";}, 1000);

}
