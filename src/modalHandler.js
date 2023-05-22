

//const openModalButtons = document.querySelectorAll('data-modal-target');
//const closeModalButtons = document.querySelectorAll('data-close-button');
const overlay = document.getElementById('overlay');


function openModal() {
    console.log("open");
    const modal = document.querySelector('each-project');
            
    if(modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}


/* overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modals.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
}) */
function closeModal() {
    const modal = document.querySelector('data-close-button');
    if(modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');

    
}


export { openModal, closeModal }





