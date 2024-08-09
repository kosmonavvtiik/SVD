const menuInit = () => {
    const toggleMenu = document.querySelector('.toggle-menu')

    if (toggleMenu) return
    
    const menu = document.querySelector ('.nav__list')

    const handleToggleMenu = () => {
        toggleMenu.classlist.toggle('toggle-menu_active')
        menu.classList.toggle('list_active')
    }
    
    toggleMenu.addEventListener('click', handleToggleMenu)
}

export default menuInit()