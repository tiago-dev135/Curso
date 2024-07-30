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