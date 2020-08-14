//
// Práctica 10 - Cronómetro
//

let temporisador;

let cronometro = 0;

function inicio() {
    const inicio = document.getElementById('cronometro');
    cronometro++;
    inicio.innerHTML = cronometro;
}

function bottonIniciar() {
    temporisador = window.setInterval(inicio, 1000);
}

const iniciarBotton = document.getElementById('iniciar');
iniciarBotton.addEventListener('click', bottonIniciar);

function limpiar() {
    const lipieza = document.getElementById('cronometro');
    cronometro = 0;
    lipieza.innerHTML = cronometro;
}

const limpiarBotton = document.getElementById('limpiar');
limpiarBotton.addEventListener('click', limpiar);

function detener() {
    const detener = document.getElementById('cronometro');
    window.clearInterval(temporisador);
}

const detenerBotton = document.getElementById('detener');
detenerBotton.addEventListener('click', detener);