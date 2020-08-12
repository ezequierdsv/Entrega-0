function validar(){
var usuario = document.getElementById("usuario"). Value;
var contraseña = document.getElementById("contraseña"). Value;
if (usuario=="jovenes"&& contraseña =="1234") {
   alert("datos ingresados correctamente")
}
else{
    alert("error de validacion ")
}
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});