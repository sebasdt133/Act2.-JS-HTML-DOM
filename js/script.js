var nombreInput=document.getElementById("nombre");
var puestoInput=document.getElementById("puesto");
var nombreRepresentante=document.getElementById("nombrerepresentante");
var puestoRepresentante=document.getElementById("puestorepresentante");
var mostrarBtn=document.getElementById("guardar");
var editarBtn=document.getElementById("editar");
var tarjeta=document.getElementById("tarjetaInicial");
var formulario=document.getElementById("formulario");

editarBtn.addEventListener("click",function()
{
    tarjeta.style.display="none";
    formulario.style.display="flex";
});
mostrarBtn.addEventListener("click",function()
{
    var nombre=nombreInput.value;
    var puesto=puestoInput.value;
    nombreRepresentante.textContent=nombre?nombre:"Nombre del Representante";
    puestoRepresentante.textContent=puesto?puesto:"Puesto del Representante";
    formulario.style.display="none";
    tarjeta.style.display="flex";
});
