//consumiendo el API para acceder a los datos de la BD

let url="http://localhost:8080/storeapi/v1/usuario"

let peticion={
    method:"GET",
    headers:{}
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //recorriendo la respuesta para hacer render
    let fila1=document.getElementById("fila1")
    respuesta.forEach(function(usuario){
        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","shadow","h-100")

        let nombres1=document.createElement("h3")
        nombres1.classList.add("text-center")
        nombres1.textContent=usuario.nombres

        let nit=document.createElement("h3")
        nit.classList.add("text-center")
        nit.textContent=usuario.cedula

        let mail=document.createElement("h3")
        mail.classList.add("text-center")
        mail.textContent=usuario.correo

        tarjeta.appendChild(nombres1)
        tarjeta.appendChild(nit)
        tarjeta.appendChild(mail)
        columna.appendChild(tarjeta)
        fila1.appendChild(columna)
    })
})
.catch(function(respuesta){
    console.log(respuesta)
})