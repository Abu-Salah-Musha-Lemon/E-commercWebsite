//coppy inside .dpt-cat ot .department

function copyMenu() {
    // copy inside .dpt-cat to .department
    var dptCategory = document.querySelector(".dpt-cat")
    var dptPlace = document.querySelector(".departments")
    dptPlace.innerHTML = dptCategory.innerHTML
    //copy inside nave to nav
    var mainNav = document.querySelectorAll('.header-nav nav')
    var navPlace = document.querySelector(".off-canves nav")
    navPlace.innerHTML = mainNav.innerHTML

    // copy .header-nav .wrapper to .thetop-nav
    var topNav = document.querySelector(".header-top .wrapper")
    var topPlase = document.querySelector(".off-canvas .thetop-nav")
    topPlase.innerHTML= topNav.innerHTML
}
copyMenu()