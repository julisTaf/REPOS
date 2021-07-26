function openPage(rank) {
    document.querySelector('button.tabHeader.active').classList.remove('active')
    document.querySelectorAll('button.tabHeader')[rank - 1].classList.add('active')
    document.querySelector('section.tabContent.active').classList.remove('active')
    document.querySelectorAll('section.tabContent')[rank - 1].classList.add('active')
}