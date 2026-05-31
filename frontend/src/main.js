import './style.css'

console.log('Website UMKM aktif')

import './style.css'

const menuButton = document.querySelector('#menuButton')
const mobileMenu = document.querySelector('#mobileMenu')

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
})