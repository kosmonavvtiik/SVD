document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.custom-card');
    const detailsButton = document.querySelector('.details');
    const closeButton = document.querySelector('.close');
  
    // Поворот карточки при нажатии на "DETAILS"
    detailsButton.addEventListener('click', () => {
      card.classList.add('flipped');
    });
  
    // Возврат к исходному состоянию при нажатии "CLOSE"
    closeButton.addEventListener('click', () => {
      card.classList.remove('flipped');
    });
  });
  