document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('card');
  
  if (!card) return; // Проверка наличия элемента
  
  const detailsButton = card.querySelector('.details');
  const closeButton = card.querySelector('.close');

  if (!detailsButton || !closeButton) return; // Проверка наличия кнопок

  // Поворот карточки при нажатии на "DETAILS"
  detailsButton.addEventListener('click', () => {
    card.classList.add('flipped');
  });

  // Возврат к исходному состоянию при нажатии "CLOSE"
  closeButton.addEventListener('click', () => {
    card.classList.remove('flipped');
  });
});