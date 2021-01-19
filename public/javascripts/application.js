/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.dashboard-menu')
  const toggleSidebar = document.querySelector('.toggle-sidebar')
  const toggledSidebar = localStorage.getItem('toggledSidebar')

  if (toggledSidebar == 'true') {
    sidebar.classList.add('dashboard-menu--collapsed')
  }

  toggleSidebar.addEventListener('click', (event) => {
    event.preventDefault()
    sidebar.classList.toggle('dashboard-menu--collapsed')
    // localStorage.setItem('toggledSidebar', 'true')
    if (toggledSidebar === 'true') {
      localStorage.setItem('toggledSidebar', 'false')
    } else {
      localStorage.setItem('toggledSidebar', 'true')
    }
  })
})
