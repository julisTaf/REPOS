function openNav() {
    document.querySelector("nav.sidenav").style.width = "90vw"
    document.body.style.backgroundColor = "darkgrey"
}
  
function closeNav() {
    document.querySelector("nav.sidenav").style.width = "0"
    document.querySelector("main").style.marginLeft= "0"
    document.body.style.backgroundColor = "transparent"
}