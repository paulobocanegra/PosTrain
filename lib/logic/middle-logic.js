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

// function updateCurrentOrder(){
//     for (let i = 0; i < orderToCompare.length -1; i ++){
//         let spec = orderToCompare[i]
//         if (!tempTypes.includes(spec) || !beerTypes.includes(spec) || !wineTypes.includes(spec) || !softDrinksTypes.includes(spec) || !milkshakesTypes.inlcudes(spec) || !smoothieTypes.includes(spec) || !cocktailsTypes.includes(spec) || !coffeeTeaTypes.includes(spec) || !iceCreamTypes.includes(spec)){
            
//         }
//         for (let j = i + 1; j < orderToCompare.length; j++){
//             if (tempTypes.includes(orderToCompare[i])){

//             }
//         }
//     }
// }

//REFACTOR BELOW:
//WHEN the item belongs to a pojo with subcategories: create an array and require
//meat temp input. Then, push as many temps as needed and only keep the last one to
// push into finalOrder

//CONTANTS
//currentOrderInput : FLATTEN VERSION OF INPUT
//orderToCompare : 2D VERSION OF INPUT

//orderItemArray: Array with 1 element if not specs, 2 ele if specs from APP random words
//finalOdder: Array with subArrays from APP random words 


function addToOrder(){
    
    while (itemsOrdered.hasChildNodes()) {
        itemsOrdered.removeChild(itemsOrdered.firstChild);

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
                let blocker = document.querySelector(".blocker")
                if (blocker) blocker.remove();
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
