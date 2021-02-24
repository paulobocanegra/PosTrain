


function instructionAppend(id) {
    let instructionRender = document.getElementById(id);
    let buttonClose = document.getElementById("x")
    buttonClose.addEventListener("click", () => {
        instructionRender.style.visibility = "hidden"
    })
    if (instructionRender.style.visibility === "hidden"){
        instructionRender.style.visibility = "visible"
    } else {
        instructionRender.style.visibility = "hidden"
    }
}


function startTraining(id){
    let instructionRender = document.getElementById("instructions-container");
    let mainWrapper = document.getElementById(id);
    let button = document.getElementById('start-button');
    instructionRender.style.visibility = "hidden";
    if (mainWrapper.style.visibility === "hidden") {
        mainWrapper.style.visibility = "visible";
        button.innerHTML = "END TRAINING"
    } else {
        mainWrapper.style.visibility = "hidden"
        button.innerHTML = "START TRAINING"
    }
}



