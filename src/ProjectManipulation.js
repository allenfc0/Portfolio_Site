
let clicked = false;

const ProjectManipulation = (id) => {
    let expandProject = document.querySelector(`.id-${id} .each-project`);

    if(!clicked) {
        clicked = true;
        expandProject.classList.add('expand');
        console.log("clicked");
    } else if(clicked) {
        clicked = false;
        expandProject.classList.remove('expand')
        console.log("un-clicked");
    }

    
    
}


export { ProjectManipulation };