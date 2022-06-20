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
    let buttonsToRemove = document.querySelector(".buttons-container")
    instructionRender.style.visibility = "hidden";
    if (mainWrapper.style.visibility === "hidden") {
        buttonsToRemove.style.visibility = "hidden"
        mainWrapper.style.visibility = "visible";
        button.innerHTML = "POS";
    } else {
        mainWrapper.style.visibility = "hidden";
        button.innerHTML = "POS";
    }
}

document.addEventListener("DOMContentLoaded", () => {

    instructionAppend('instructions-container')
    posAppend('training');
    let closePos = document.getElementById("close-pos")
    closePos.addEventListener("click", () => {
        let pos = document.getElementById("training")
        pos.style.visibility = "hidden"
        let buttonsToShow = document.querySelector(".buttons-container")
        buttonsToShow.style.visibility = "visible"
    })

    let ordersContainer = document.querySelector(".kitchen-order-container")
    ordersContainer.addEventListener("click", (e) =>{
        let orderSent = e.target;
        let orderDiv = document.createElement("div")
        orderDiv.className = "order-container"
        let closeOrder = document.createElement("button")
        closeOrder.innerHTML = "x"
        closeOrder.setAttribute("id", "close-order")
        closeOrder.addEventListener("click", () => {
            orderDiv.style.visibility = "hidden"
        })
        orderDiv.appendChild(closeOrder)
        let ul = document.createElement("ul")
        let landingRender = document.querySelector(".landing-render")
        if(landingRender.hasChildNodes()){
            while(landingRender.hasChildNodes()){
                landingRender.removeChild(landingRender.firstChild);
            }
        }
        orderDiv.appendChild(ul)
        ordersPOJO[orderSent.id].forEach(ele => {
            let li = document.createElement("li");
            li.innerHTML = ele
            ul.appendChild(li);
        })

        landingRender.appendChild(orderDiv)
    })
});