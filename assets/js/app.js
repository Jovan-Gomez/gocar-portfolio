
const dataForm = 
{
    name : '',
    email : '',
    telefono : '',
    mensaje : ''
}

const formContact = document.querySelector('#form-contact');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const mensaje = document.querySelector('#mensaje');

name.addEventListener('input', readValue);
email.addEventListener('input', readValue);
telefono.addEventListener('input', readValue);
mensaje.addEventListener('input', readValue);


formContact.addEventListener('submit', (e)=>{
    e.preventDefault();
    //Validar Formulario
    const {name, email, mensaje} = dataForm;
    if (name === '', email === '', mensaje === '') {
        showAlert('¡Ups!, no ha llenado algun campo obligatorio.', true)
        return;
    }
        //Enviar Formulario
        showAlert('¡Genial!, en poco tiempo recibiras mi respuesta');
});

function readValue(e){
   // console.log(e.target.value);
   dataForm[e.target.id] = e.target.value;
}

function showAlert(menssage, error = null){
    const alert = document.createElement('P');//CREA UN PARRAFO
    alert.textContent = menssage;//AGREGA CONTENIDO AL PARRAFO
    if (error) {
        alert.classList.add('error'); //AGREGA ESTILOS
        formContact.appendChild(alert);//MUESTRA EL PARRAFO CON LOS ESTILOS APLICADOS
    }else{
        alert.classList.add('succes');
        formContact.appendChild(alert);
    }
    setTimeout(()=>{
        alert.remove();//DESAPARECE EL PARRAFO A LOS 3 SEGUNDOS
    },3000);
}
