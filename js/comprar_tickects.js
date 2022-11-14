const valorTicket=200;

let descuentoEstudiante=80;
let descuentoTrainee   =50;
let descuentoJunior    =15;

let nombre          = document.getElementById("NombreTickets");
let apellido        = document.getElementById("ApellidoTickets");
let mail            = document.getElementById("EmailTickets");
let cantidadTickets =document.getElementById("CantidadTickets");
let categoria       =document.getElementById("CategoriaTickets");

function quitarClaseError(){
    let x=document.querySelectorAll(".form-control , .form-select");
    let i;
    for(i=0;i<x.length;i++){
        x[i].classList.remove("is-invalid");
    }
}
const emailValido = mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}
function resetTotalApagar(){
    quitarClaseError();
    Pagototal.innerHTML="";
    
}
 
function totalApagar(){

    quitarClaseError();

    if(nombre.value ===""){
        nombre.add("is-invalid");
         nombre.focus();
         alert("por favor, escribí tu apellido");
         return;
    }
    if(apellido.value ===""){
        apellido.classList.add("is-invalid");
        apellido.focus();
        alert("por favor,escribí tu apellido");
        return;
    }

    if(mail.value ===""){
        mail.classList.add("is-invalid");
        mail.focus();
        alert("por favor, escribi tu mail");
        return;
    }
    if(!emailValido(mail.value)){
        mail.classList.add("is-invalid");
        mail.focus();
        alert("por favor, escribi un mail valido.");
        return;
    }
    if((cantidadTickets.value===0)|| (isNaN(cantidadTickets.value))){
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        alert("por favor,ingresá correctamente cantidad de tickets");
        return;
    }

    if(categoria.value===""){
        categoria.classList.add("is-invalid");
        categoria.focus();
        alert("Por favor, seleccioná una categoria.");
        return;
    }


    let totalValorTickets=(cantidadTickets.value)*valorTicket;

       if(categoria.value==1){
       totalValorTickets=totalValorTickets-(descuentoEstudiante/100*totalValorTickets);
       }
       else if(categoria.value==2){
       totalValorTickets=totalValorTickets-(descuentoTrainee/100*totalValorTickets);
       }
       else if(categoria.value==3){
       totalValorTickets=totalValorTickets-(descuentoJunior/100*totalValorTickets);
       }
       else{
          totalValorTickets=totalValorTickets; 
       }
    
       Pagototal.innerHTML=totalValorTickets; 
    }


        btnResumen.addEventListener('click',totalApagar);

        btnBorrar.addEventListener('click',resetTotalApagar);  
    

