document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.contact-button');

    button.addEventListener('click', () => {
        // Укажите URL, на который нужно перенаправить пользователя
        window.location.href = 'contact.html';
    });
});