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
/*Atendimento */
document.getElementById('chat-icon').addEventListener('click', function() {
    const chatContainer = document.getElementById('chat-container');
    const chatBox = document.getElementById('chat-box');
    
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'flex';
        displayWelcomeMessage();
    } else {
        chatContainer.style.display = 'none';
        chatBox.innerHTML = ''; // Limpar mensagens quando fechar
    }
});

document.getElementById('close-btn').addEventListener('click', function() {
    const chatContainer = document.getElementById('chat-container');
    const chatBox = document.getElementById('chat-box');
    chatContainer.style.display = 'none';
    chatBox.innerHTML = ''; // Limpar mensagens quando fechar
});

document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        appendMessage('user', message);
        getBotResponse(message);
        userInput.value = '';
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function displayWelcomeMessage() {
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('message', 'bot', 'typing');
    typingIndicator.textContent = 'Digitando...';
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        chatBox.removeChild(typingIndicator);
        appendMessage('bot', 'Olá! Eu sou o assistente da ProInvest. Como posso ajudá-lo hoje?');
        displayOptions();
    }, 2000);
}

function displayOptions() {
    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('chat-options');

    const option1 = document.createElement('button');
    option1.textContent = 'O que é a ProInvest?';
    option1.addEventListener('click', function() {
        appendMessage('user', 'O que é a ProInvest?');
        getBotResponse('O que é a ProInvest?');
    });

    const option2 = document.createElement('button');
    option2.textContent = 'É preciso de algum nível de conhecimento para começar o curso?';
    option2.addEventListener('click', function() {
        appendMessage('user', 'É preciso de algum nível de conhecimento para começar o curso?');
        getBotResponse('É preciso de algum nível de conhecimento para começar o curso?');
    });

    const option3 = document.createElement('button');
    option3.textContent = 'Quais são os benefícios de se tornar um investidor?';
    option3.addEventListener('click', function() {
        appendMessage('user', 'Quais são os benefícios de se tornar um investidor?');
        getBotResponse('Quais são os benefícios de se tornar um investidor?');
    });

    const option4 = document.createElement('button');
    option4.textContent = 'Como funcionam os cursos online?';
    option4.addEventListener('click', function() {
        appendMessage('user', 'Como funcionam os cursos online?');
        getBotResponse('Como funcionam os cursos online?');
    });

    optionsContainer.appendChild(option1);
    optionsContainer.appendChild(option2);
    optionsContainer.appendChild(option3);
    optionsContainer.appendChild(option4);

    chatBox.appendChild(optionsContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('message', 'bot', 'typing');
    typingIndicator.textContent = 'Digitando...';
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight;

    let response = '';
    if (message.toLowerCase().includes('olá')) {
        response = 'Olá! Como posso ajudar você?';
    } else if (message.toLowerCase().includes('ajuda')) {
        response = 'Claro! Estou aqui para ajudar. O que você precisa?';
    } else if (message.toLowerCase().includes('proinvest')) {
        response = 'A ProInvest é uma plataforma de cursos voltada para investimentos e educação financeira.';
    } else if (message.toLowerCase().includes('conhecimento')) {
        response = 'Não, não é necessário nenhum conhecimento prévio para começar nossos cursos. Nós oferecemos conteúdos para todos os níveis.';
    } else if (message.toLowerCase().includes('benefícios')) {
        response = 'Os benefícios de se tornar um investidor incluem independência financeira, crescimento de patrimônio e segurança para o futuro.';
    } else if (message.toLowerCase().includes('cursos online')) {
        response = 'Nossos cursos online são interativos e podem ser     acessados a qualquer momento. Você pode aprender no seu próprio ritmo e revisar o material quantas vezes precisar.';
    } else {
        response = 'Desculpe, não entendi sua pergunta. Pode reformular?';
    }

    setTimeout(() => {
        chatBox.removeChild(typingIndicator);
        appendMessage('bot', response);
        if (message.toLowerCase().includes('opções')) {
            displayOptions();
        }
    }, 2000);
}

