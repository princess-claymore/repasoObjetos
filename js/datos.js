

window.addEventListener("load",function(){
function Paciente(nombre,apellido,edad,genero,ciudad,pais) {
  this.name = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad= ciudad;
  this.pais=pais;

  this.print = function() {
    return  "Nombre: " + this.name + "<br>" +
            "Apellido: " + this.apellido + "<br>" +
            "Edad: " + this.edad + "<br>" +
            "Género: " + this.genero + "<br>" +
            "Ciudad: " + this.ciudad + "<br>" +
            "País: " + this.pais + "<p>" ;

  }
}

   var newPaciente= [];
 var agregar = document.getElementById("agregar");
  agregar.addEventListener("click",function() {
  var name       = document.getElementById("nombre").value;
  var apellido   = document.getElementById("apellido").value;
  var edad =    document.getElementById("edad").value;
  var genero =    document.getElementById("genre").value;
  var ciudad  = document.getElementById("city").value;
  var pais  = document.getElementById("pais").value;
  var paciente = new Paciente(name,apellido,edad,genero,ciudad,pais);


  newPaciente.push(paciente);
  registros.innerHTML+= paciente.print();
  document.getElementById("data").reset();
});
})
