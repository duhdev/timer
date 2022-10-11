/*FUNCIONAMENTO DO CRONOMETRO / TECLAS */

function relogio() {

    const relogio = document.querySelector('.time');

    const iniciar = document.querySelector('.iniciarTimer');
    const pausar = document.querySelector(".pausarTimer");
    const parar = document.querySelector(".cancelarTimer");

    function horaSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'UTC'
        })
    }

    let segundos = 0;
    let timer;

    function iniciarRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = horaSegundos(segundos);
        }, 1000)
    }

    iniciar.addEventListener('click', function (event) {
        clearInterval(timer)
        iniciarRelogio()
    })

    pausar.addEventListener('click', function (event) {
        clearInterval(timer);
    })

    parar.addEventListener('click', function (event) {
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0;
    })


    document.addEventListener("keyup", function (event) {

        if (event.key === "i") {
            console.log("Inicio"),
                clearInterval(timer), iniciarRelogio();
        } else if (event.key === 'l') {
            console.log("Limpar"),
                clearInterval(timer), relogio.innerHTML = '00:00:00', segundos = 0;
        } else {
            (event.key === 'p')
            console.log("Pausar"),
                clearInterval(timer);
        }
    })
}
relogio()


/* TROCAR BOTÕES (TOGGLE) */

const botoes = document.querySelector('.botoes');

const iniciar = document.querySelector('.iniciarTimer');
const pausar = document.querySelector(".pausarTimer");

botoes.addEventListener('click', () => {
    if(iniciar.classList.contains('aparecer')) {
        iniciar.classList.remove('aparecer')
        pausar.classList.add('naoAparecer')
    } 
    else {
        pausar.classList.contains('naoAparecer')
        pausar.classList.remove('naoAparecer');
        iniciar.classList.add('naoAparecer')
    }
})


