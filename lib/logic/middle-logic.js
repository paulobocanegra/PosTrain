let orderToCompare = [];
let itemsOrdered = document.querySelector(".items-ordered-container")


function addToOrder(){
    for (let i = 0; i < currentOrderInput.length; i++) {
        let item = currentOrderInput[i];
        let newItemToOrder = document.createElement("li")
        if (meatsPojo[item] || drinksPojo[item]) {
            orderToCompare.push([item, currentOrderInput[i + 1]])
            itemsOrdered.appendChild(newItemToOrder)
            newItemToOrder.className = "items-ordered"
            newItemToOrder.innerText = `${item} - ${currentOrderInput[i + 1]}`
            i += 1
        } else {
            orderToCompare.push(item)
            itemsOrdered.appendChild(newItemToOrder)
            newItemToOrder.className = "items-ordered"
            newItemToOrder.innerText = `${item}`
        }
    }


  

    //   return orderToCompare;
    }