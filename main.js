console.log("JS cargado");
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM cargado");

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", async function (e) {
e.preventDefault();

const params = new URLSearchParams(window.location.search);
let tematica = params.get("tema");

console.log("fetch")

const tematicaSpan = document.getElementById("tematica-elegida");
  tematicaSpan.innerHTML = `
  <h3>Temática Elegida: ${tematica}</h3>`
tematica = tematica.charAt(0).toUpperCase() + tematica.slice(1);
  console.log("Temática detectada:", tematica);

const presupuesto = parseInt(document.getElementById("presupuesto").value);
const invitados = parseInt(document.getElementById("invitados").value);
const nombre = document.getElementById("nombre").value;
const email = document.getElementById("email").value;
const telefono = document.getElementById("telefono").value;

const bodyData ={
    tematica,
    presupuesto,
    invitados,
    nombre,
    email,
    telefono
};

console.log("Enviando", bodyData);

    try {
        const res = await fetch(`http://127.0.0.1:3000/api/calculo`,{
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(bodyData)
        });
        
        const result = await res.json();
        console.log("Respuesta del Servidor", result);
        alert ('Envio de consulta fiesta.');
        localStorage.setItem("queryResult", result)
        window.location.replace("resultado.html")
    }catch(error){
        console.error("Error al enviar paquete de datos", error);
        alert('error al enviar datos')
    }
});
});
