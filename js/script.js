// --- js/script.js ---

document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO MENU MOBILE (HAMBURGER) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Altera o ícone do hamburger para 'X' e vice-versa
            if (navLinks.classList.contains('active')) {
                menuToggle.innerHTML = '✕'; 
            } else {
                menuToggle.innerHTML = '☰';
            }
        });
    }

    // --- EFEITO DE DIGITAÇÃO NA PÁGINA INICIAL ---
    const typingElement = document.getElementById('typing-hero');
    if (typingElement) {
        const textToType = "CYBERSECURITY FOR EVERYONE";
        let i = 0;
        typingElement.textContent = ''; // Limpa o texto inicial

        function typeWriter() {
            if (i < textToType.length) {
                typingElement.textContent += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Para o cursor de piscar quando termina
                typingElement.style.borderRight = 'none';
                typingElement.style.animation = 'none';
            }
        }
        typeWriter();
    }

    // --- ANIMAÇÃO DE FADE-IN AO ROLAR A PÁGINA ---
    const sectionsToFade = document.querySelectorAll('.fade-in-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // A seção aparece quando 15% dela está visível
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para de observar depois que a animação acontece
            }
        });
    }, observerOptions);

    sectionsToFade.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // --- LÓGICA DO FORMULÁRIO DE CONTATO ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio real do formulário
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validação simples
            if (!name || !email || !message) {
                formStatus.textContent = '[ERRO] Todos os campos são obrigatórios.';
                formStatus.className = 'error';
                return;
            }
            
            formStatus.textContent = 'Enviando sua mensagem...';
            formStatus.className = 'success';
            
            // Simula um envio para o servidor
            setTimeout(() => {
                formStatus.textContent = `[SUCESSO] Obrigado, ${name}! Sua mensagem foi enviada. Entraremos em contato em breve.`;
                contactForm.reset(); // Limpa o formulário
            }, 2000);
        });
    }
});