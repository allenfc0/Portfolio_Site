

function openModal(id) {
    const modal = document.querySelector('.id-' + id);
    const overlay = document.querySelector('.overlay');

    if(modal === null) return;
    modal.classList.add('active');
    document.body.style.overflowY = "hidden";
    overlay.classList.add('active');
}
 

function closeModal(id) {
    const modal = document.querySelector('.id-' + id);
    const overlay = document.querySelector('.overlay');
    

    if(modal == null) return;
    modal.classList.remove('active');
    document.body.style.overflowY = "auto";
    overlay.classList.remove('active');
    
}


export { openModal, closeModal }





