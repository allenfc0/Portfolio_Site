

let burgerOpen = false;

export function burgerHandler() {
    
    let burger = document.getElementById('burger-pages');

    if(!burgerOpen) {
        burger.style.display = 'flex';
        burgerOpen = true;
    } else if(burgerOpen) {
        burger.style.display = 'none';
        burgerOpen = false;
    }

}