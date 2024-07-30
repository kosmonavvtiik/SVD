function changeColor() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const time = hour * 60 + minute;

    const startGreen = 9 * 60;
    const endGreen = 18 * 60 - 1;

    const startOrange = 18 * 60;
    const endOrange = 20 * 60 - 1;

    const startRed = 20 * 60;
    const endRed = 24 * 60 - 1;

    if (time >= startGreen && time <= endGreen) {
        document.getElementById('circle').style.fill = '#0DC268'; // зеленый
    } else if (time >= startOrange && time <= endOrange) {
        document.getElementById('circle').style.fill = 'orange'; // оранжевый
    } else {
        document.getElementById('circle').style.fill = 'red'; // красный
    }
}
setInterval(changeColor, 1000);



document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav__toggle');
    const navPopup = document.createElement('div');
    navPopup.className = 'nav__popup';
    document.body.appendChild(navPopup);

    const navList = document.querySelector('.nav__list').cloneNode(true);
    navPopup.appendChild(navList);

    navToggle.addEventListener('click', function() {
        navPopup.classList.toggle('nav__popup--open');
    });

    navPopup.addEventListener('click', function(e) {
        if (e.target === navPopup) {
            navPopup.classList.remove('nav__popup--open');
        }
    });
});
