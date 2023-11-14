function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();
    let fechaLimiteObj = new Date(fechaLimite);


    let tiempoFaltante = Math.max((fechaLimiteObj - ahora + 1000) / 1000, 0);
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 60)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);


    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante
    }





}


//console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'));

function cuentaRegresiva(tiempoFaltante,dia,hora,minuto,segundo,mensaje){
    const dias = document.getElementById(dia)
    const horas = document.getElementById(hora)
    const minutos = document.getElementById(minuto)
    const segundos = document.getElementById(segundo)

    const tiempoActual = setInterval(()=>{
        let t = obtenerTiempoFaltante(tiempoFaltante)
        dias.innerHTML = t.diasFaltantes
        horas.innerHTML = t.horasFaltantes
        minutos.innerHTML = t.minutosFaltantes
        segundos.innerHTML   = t.segundosFaltantes

        if (t.tiempoFaltante < 0) {
            clearInterval(tiempoActual)
            c.innerHTML
        }
    }, 1000)
}

cuentaRegresiva('Dec 14 2023 18:10:00 GMT-0500', 'dia','hora','minutos','segundos','Feliz Navidad!');


/*
let c = document.getElementById("mensaje")

function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date()
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000 / 1000)
    let segundosFaltantes = ("0" + Math.floor(tiempoFaltante % 60)).slice(-2)
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2)
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante/ 3600 % 24)).slice(-2)
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante/ (3600 * 24))).slice(-2)

    return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
}

console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'));

function cuentaRegresiva(tiempoFaltante,dia,hora,minuto,segundo,mensaje){
    const dias = document.getElementById(dia)
    const horas = document.getElementById(hora)
    const minutos = document.getElementById(minuto)
    const segundos = document.getElementById(segundo)

    const tiempoActual = setInterval(()=>{
        let t = obtenerTiempoFaltante(tiempoFaltante)
        dias.innerHTML = t.diasFaltantes
        horas.innerHTML = t.horasFaltantes
        minutos.innerHTML = t.minutosFaltantes
        segundos.innerHTML   = t.segundosFaltantes

        if (t.tiempoFaltante < 0) {
            clearInterval(tiempoActual)
            c.innerHTML
        }
    }, 1000)
}

cuentaRegresiva('Nov 14 2023 17:57:00 GMT-0500', 'dia','hora','minutos','segundos','Feliz Navidad!');*/
