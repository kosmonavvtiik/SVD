document.addEventListener("DOMContentLoaded", () => {
    // Удаляем выпадающее меню
    const dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu) {
        dropdownMenu.remove(); // Удаляем элемент из DOM
    }

    // Находим кнопку и уведомление
    const button = document.getElementById("disabled-button");
    const notification = document.getElementById("notification");

    // Функция для показа уведомления
    function showNotification() {
        notification.classList.add("visible");

        // Автоматически скрываем уведомление через 2 секунды
        setTimeout(() => {
            notification.classList.remove("visible");
        }, 2000);
    }

    // Показываем уведомление при клике
    button.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение
        showNotification();
    });

    // Показываем уведомление при наведении
    button.addEventListener("mouseenter", () => {
        showNotification();
    });
});