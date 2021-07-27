function openModal(id) {
    // window.onclick = function(event) {
    //     if ((event.target != modal) && (container.style.display != 'none')) {
    //         console.error('clicked In')
    //         closeModal(id)
    //     }
    // }
    let modal = document.querySelector(`#Order${id}`)
    let container = document.querySelector(`aside.modals`)
    modal.style.display = 'flex'
    container.style.display = 'flex'
    
}

function closeModal(id) {
    document.querySelector(`#Order${id}`).style.display = 'none'
    document.querySelector(`aside.modals`).style.display = 'none'
}