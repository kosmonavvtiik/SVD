document.addEventListener('DOMContentLoaded', () => {
  // Находим все карточки на странице
  const cards = document.querySelectorAll('.vacancy-card');

  cards.forEach(card => {
      // Находим кнопки внутри текущей карточки
      const detailsButton = card.querySelector('.details');
      const closeButton = card.querySelector('.close');

      if (!detailsButton || !closeButton) return; // Проверка наличия кнопок

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