

//const openModalButtons = document.querySelectorAll('data-modal-target');
//const closeModalButtons = document.querySelectorAll('data-close-button');

const overlay = document.getElementById('#overlay');

function openModal(id) {
    const modal = document.querySelector('.id-' + id);
    console.log(modal);

    if(modal == null || modal == undefined) return;
    modal.classList.add('active');
    //overlay.classList.add('active');
}


/* overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modals.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
}) */
function closeModal(id) {
    const modal = document.querySelector('.id-' + id);
    console.log(modal);

    if(modal == null) return;
    modal.classList.remove('active');
    //overlay.classList.remove('active');

    
}


export { openModal, closeModal }





