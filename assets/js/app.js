var iconoOpcionesPerfil = document.getElementById("iconoOpcionesPerfil");
var iconoNuevaPublicacion = document.getElementById("iconoNuevaPublicacion");

iconoOpcionesPerfil.addEventListener("click", mostrarOpcionesPerfil);
iconoNuevaPublicacion.addEventListener("click", mostrarNuevaPublicacion);

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
