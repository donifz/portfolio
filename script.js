// Анимация загрузки страницы справа
const pageShell = document.querySelector('.page-shell');
window.addEventListener('load', () => {
    if (pageShell) {
        pageShell.classList.add('slide-in-right');
    }
});

// Обработка формы контактов
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем значения из формы
        const name = this.children[0].value;
        const email = this.children[1].value;
        const message = this.children[2].value;
        
        // Простая валидация
        if (name && email && message) {
            // Показываем сообщение об успехе
            alert(`Спасибо, ${name}! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.`);
            
            // Очищаем форму
            this.reset();
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    });
}

// Эффект анимации при загрузке
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.skill-card, .project-card, .info-item');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
