const menuInit = () => {
    const toggleMenu = document.querySelector('.toggle-menu')

    if (!toggleMenu) return

    const menu = document.querySelector('.nav__menu')
    const navSocial = document.querySelector('.nav__social')
    const navPics = document.querySelector('.nav__pics')
    const requisites = document.querySelector('.requisites')
    const politics = document.querySelector('.politics')
    const phoneTime = document.querySelector('.phone')

    const handleToggleMenu = () => {
        toggleMenu.classList.toggle('toggle-menu_active')
        menu.classList.toggle('menu_active')
        navSocial.classList.toggle('nav__social_active')
        navPics.classList.toggle('nav__pics_active')
        requisites.classList.toggle('requisites_active')
        politics.classList.toggle('politics_active')
        phoneTime.classList.toggle('phone_active')
    }

    toggleMenu.addEventListener('click', handleToggleMenu)
}

export default menuInit