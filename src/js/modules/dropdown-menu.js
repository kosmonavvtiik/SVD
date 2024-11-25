document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.btn-product');
  const dropdownMenu = document.querySelector('#dropdown-menu');

  // Открытие/закрытие меню по клику на кнопку
  menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('visible');
    dropdownMenu.classList.toggle('hidden');
  });

  // Закрытие меню при клике вне области меню
  document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add('hidden');
      dropdownMenu.classList.remove('visible');
    }
  });
});

