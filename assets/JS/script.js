const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos')
const date = document.getElementById('dia')
const mes = document.getElementById('mes')
const ano = document.getElementById('ano')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();
    let day = dateToday.getDate();
    let month = dateToday.getMonth() + 1;
    let year = dateToday.getFullYear()

    if (hr < 10) hr = '0' + hr;

    if (minutes < 10) minutes = '0' + minutes;

    if (seconds < 10) seconds = '0' + seconds;

    if (day < 10) day = '0' + day;

    if(month < 10) month = '0' + month;

    horas.textContent = hr;
    minutos.textContent = minutes;
    segundos.textContent = seconds;
    date.textContent = day;
    mes.textContent = month;
    ano.textContent = year;
})
