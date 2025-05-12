document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.contact-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'contact.html';
        });
    });
});