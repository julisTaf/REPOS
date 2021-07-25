function openNav() {
    document.querySelector("nav.sidenav").style.width = "90vw"
    document.body.style.backgroundColor = "lightgrey"
}
  
function closeNav() {
    document.querySelector("nav.sidenav").style.width = "0"
    document.querySelector("main").style.marginLeft= "0"
    document.body.style.backgroundColor = "rgb(56, 54, 54)"
}