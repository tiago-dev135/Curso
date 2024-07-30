function typeEffect(element, text, interval) {
    element.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, interval);
        } else {
            setTimeout(() => {
                element.textContent = '';
                index = 0;
                type();
            }, 5000);
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const logoElement = document.getElementById('logo');
    const logoText = 'ProInvest';
    typeEffect(logoElement, logoText, 200);
});

// Contador de Promoção
function startCountdown(duration, display) {
    let timer = duration, days, hours, minutes, seconds;
    setInterval(function () {
        days = Math.floor(timer / (60 * 60 * 24));
        hours = Math.floor((timer % (60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((timer % (60 * 60)) / 60);
        seconds = Math.floor(timer % 60);

        display.textContent = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let promoTime = 60 * 60 * 24 * 7; // 7 dias em segundos
    let display = document.querySelector('#countdown');
    startCountdown(promoTime, display);
};