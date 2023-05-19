


const ProjectManipulation = (id, isClicked) => {
    let canvas = document.querySelector(`.id-${id} .full-project`);
    if(isClicked) {
        canvas.style.display = "flex";
        console.log("clicked: ", isClicked);

    } else if(!isClicked) {
        canvas.style.display = "none";
        console.log("clicked: ", isClicked);
    }
    
}


export { ProjectManipulation };