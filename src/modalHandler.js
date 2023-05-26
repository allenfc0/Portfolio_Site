

function openModal(id) {
    const modal = document.querySelector('.id-' + id);
    const overlay = document.querySelector('.overlay');
    const disableScroll = document.querySelector('.app');
    console.log(overlay);

    if(modal === null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
    disableScroll.classList.add('disable-scroll');
}
 

function closeModal(id) {
    const modal = document.querySelector('.id-' + id);
    const overlay = document.querySelector('.overlay');
    const disableScroll = document.querySelector('.app');
    console.log("hello");

    if(modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
    disableScroll.classList.remove('disable-scroll');
    
}


export { openModal, closeModal }





