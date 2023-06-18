

let burgerOpen = false;

export function burgerHandler() {
    
    let burger = document.getElementById('burger-pages');

    if(!burgerOpen) {
        burger.style.display = 'flex';
        burgerOpen = true;
        console.log('flex')
    } else if(burgerOpen) {
        burger.style.display = 'none';
        burgerOpen = false;
        console.log('no flex')
    }

}