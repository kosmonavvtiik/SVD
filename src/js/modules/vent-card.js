document.addEventListener('DOMContentLoaded', () => {
    // Находим все карточки на странице
    const cards = document.querySelectorAll('.job-card');

    cards.forEach(card => {
        // Находим элементы внутри текущей карточки
        const detailsButton = card.querySelector('.job-details');
        const closeButton = card.querySelector('.job-close');
        const progressBar = card.querySelector('.job-progress-fill');
        const progressText = card.querySelector('[id^="jobProgressText"]');
        const remainingPlacesText = card.querySelector('[id^="jobRemainingPlacesText"]');
        const contactButton = card.querySelector('.job-contact-button');

        // Задаем максимальное количество людей и текущий прогресс (можно настраивать для каждой карточки)
        const totalPeople = 10; // Максимальное количество мест
        const currentProgress = 55; // Случайный процент заполнения (для примера)

        // Вычисляем количество набранных и оставшихся людей
        const currentPeople = Math.floor((currentProgress / 100) * totalPeople);
        const remainingPeople = totalPeople - currentPeople;

        // Обновляем прогресс
        progressBar.style.width = currentProgress + '%';
        progressText.textContent = `Набрано ${currentPeople} из ${totalPeople} человек`;
        if (remainingPeople > 0) {
            remainingPlacesText.textContent = `Осталось ${remainingPeople} `;
        } else {
            remainingPlacesText.textContent = 'Мест больше нет';
        }

        // Изменяем цвет текста и добавляем предупреждение, если осталось меньше 20% мест
        if (currentProgress >= 80) {
            remainingPlacesText.classList.add('remaining-places-warning');
            remainingPlacesText.textContent += ' ,Успей позвонить!';
            contactButton.style.backgroundColor = '#d9534f'; // Красный цвет кнопки
        }

        // Поворот карточки при нажатии на "Описание вакансии"
        detailsButton.addEventListener('click', () => {
            card.classList.add('flipped');
        });

        // Возврат к исходному состоянию при нажатии "Развернуть"
        closeButton.addEventListener('click', () => {
            card.classList.remove('flipped');
        });
    });
});