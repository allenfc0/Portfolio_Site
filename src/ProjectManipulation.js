


const ProjectManipulation = (id, isClicked) => {
    let canvas = document.querySelector(`.id-${id} .flex-canvas`);
    let stopScroll = document.querySelector('body');

    if(isClicked) {
        canvas.style.display = "flex";

        //have to stop scroll from happening
        stopScroll.style.overflowY = "hidden";

        console.log("clicked: ", isClicked);

    } else if(!isClicked) {
        canvas.style.display = "none";

        // resume scroll on the page
        stopScroll.style.overflowY = "scroll";

        console.log("clicked: ", isClicked);
    }
    
}


export { ProjectManipulation };