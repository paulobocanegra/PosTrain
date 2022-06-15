function instructionAppend(id) {
    let instructionRender = document.getElementById(id);
    let buttonClose = document.getElementById("x");
    buttonClose.addEventListener("click", () => {
        instructionRender.style.visibility = "hidden";
    })
    if (instructionRender.style.visibility === "hidden"){
        instructionRender.style.visibility = "visible";
    } else {
        instructionRender.style.visibility = "hidden";
    }
}

function posAppend(id){
    let instructionRender = document.getElementById("instructions-container");
    let mainWrapper = document.getElementById(id);
    let button = document.getElementById('start-button');
    instructionRender.style.visibility = "hidden";
    if (mainWrapper.style.visibility === "hidden") {
        mainWrapper.style.visibility = "visible";
        button.innerHTML = "Hide Pos";
    } else {
        mainWrapper.style.visibility = "hidden";
        button.innerHTML = "Show POS";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    instructionAppend('instructions-container')
    posAppend('training');
    const startButton = document.getElementById("start-training")
    // const endButton = document.getElementById("end-training")
    startButton.addEventListener("click", ()=>{
        downloadTimer();
    });
    // endButton.addEventListener("click", ()=>{
    //     clearInterval();
    // });
});