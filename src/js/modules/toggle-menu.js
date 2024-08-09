const menuInit = () => {
    const toggleMenu = document.querySelector ('.toggle-menu')

    if (!toggleMenu) return

    const menu = document.querySelector ('.nav__menu')
    const navSocial = document.querySelector('.nav__social')
    const requisites = document.querySelector('.requisites')
    const politics = document.querySelector('.politics')

    const handleToggleMenu = () => {
        toggleMenu.classList.toggle('toggle-menu_active')
        menu.classList.toggle('nav__menu_active')
        navSocial.classList.toggle('nav__social_active')
        requisites.classList.toggle('requisites_active')
        politics.classList.toggle('politics_active')
    }

    toggleMenu.addEventListener('click', handleToggleMenu)
}

export default menuInit