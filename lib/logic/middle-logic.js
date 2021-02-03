let orderToCompare = [];
let itemsOrdered = document.querySelector(".items-ordered-container")

let allowOne = false;
// if !allowOne 


// let beerTypes 
// let wineTypes 
// let softDrinksTypes 
// let milkshakesTypes 
// let smoothieTypes 
// let cocktailsTypes 
// let coffeeTeaTypes 
// let iceCreamTypes

function updateCurrentOrder(){
    for (let i = 0; i < orderToCompare.length -1; i ++){
        let spec = orderToCompare[i]
        if (!tempTypes.includes(spec) || !beerTypes.includes(spec) || !wineTypes.includes(spec) || !softDrinksTypes.includes(spec) || !milkshakesTypes.inlcudes(spec) || !smoothieTypes.includes(spec) || !cocktailsTypes.includes(spec) || !coffeeTeaTypes.includes(spec) || !iceCreamTypes.includes(spec)){
            
        }
        for (let j = i + 1; j < orderToCompare.length; j++){
            if (tempTypes.includes(orderToCompare[i])){

            }
        }
    }
}

// [Ceviche, NYSTEAK, MR]
// 'Ceviche, NY Steak, M, MR, Pollo'

// '3d3t3c'


function addToOrder(){
    
    while (itemsOrdered.hasChildNodes()) {
        itemsOrdered.removeChild(itemsOrdered.firstChild);
        // if(){

        // }
    }
    for (let i = 0; i < currentOrderInput.length; i++) {
        let item = currentOrderInput[i];
        let newItemToOrder = document.createElement("li")
        if (meatsPojo[item] || drinksPojo[item]) {
            if (i === currentOrderInput.length - 1){
                itemsOrdered.appendChild(newItemToOrder)
                newItemToOrder.className = "items-ordered"
                newItemToOrder.innerText = `${item} - type?`
                i += 1

                
            } else {
                orderToCompare.push([item, currentOrderInput[i + 1]])
                itemsOrdered.appendChild(newItemToOrder)
                newItemToOrder.className = "items-ordered"
                newItemToOrder.innerText = `${item} - ${currentOrderInput[i + 1]}`
                i += 1

            }
        } else {
            orderToCompare.push(item)
            itemsOrdered.appendChild(newItemToOrder)
            newItemToOrder.className = "items-ordered"
            newItemToOrder.innerText = `${item}`
            
        }
    }


    
  

    //   return orderToCompare;
    }
