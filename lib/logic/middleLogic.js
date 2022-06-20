let orderToCompare = [];    
let itemsOrdered = document.querySelector(".items-ordered-container")

let allowOne = false;
const tracker = {}
const ordersPOJO = {};



//CONSTANTS
//currentOrderInput : FLATTEN VERSION OF INPUT
//orderToCompare : 2D VERSION OF INPUT
//orderItemArray: Array with 1 element if not specs, 2 ele if specs from APP random words
//finalOdder: Array with subArrays from APP random words 


function addToOrder(){
    
    while (itemsOrdered.hasChildNodes()) {
        // console.log("inside Add To Order")
        itemsOrdered.removeChild(itemsOrdered.firstChild);

    }
    for (let i = 0; i < currentOrderInput.length; i++) {
        // orderToCompare = [];
        let item = currentOrderInput[i];
        let newItemToOrder = document.createElement("li");
        if (meatsPojo[item] || drinksPojo[item]) {
            if (i === currentOrderInput.length - 1){
                itemsOrdered.appendChild(newItemToOrder);
                newItemToOrder.className = "items-ordered";
                newItemToOrder.setAttribute("id", `order-${i}`)
                newItemToOrder.innerText = `- ${item} - type?`;
                i += 1
                
            } else {
                orderToCompare.push([item, currentOrderInput[i + 1]])
                itemsOrdered.appendChild(newItemToOrder);
                newItemToOrder.className = "items-ordered";
                newItemToOrder.innerText = `- ${item} - ${currentOrderInput[i + 1]}`;
                newItemToOrder.setAttribute("id", `order-${i}`)
                let blocker = document.querySelector(".blocker");
                if (blocker) blocker.remove();
                i += 1;
            }
        } else {
            orderToCompare.push(item);
            itemsOrdered.appendChild(newItemToOrder);
            newItemToOrder.className = "items-ordered";
            newItemToOrder.setAttribute("id", `order-${i}`)
            newItemToOrder.innerText = `- ${item}`;
            let blocker = document.querySelector(".blocker");
            if (blocker) blocker.remove();
        }
    }
}
    let flatOrder = [];

    function flattenOrders(){
        flatOrder = [];
        for (let i in finalOrder){
            if (Array.isArray(finalOrder[i])) {
                flatOrder.push(finalOrder[i][0]);
                flatOrder.push(finalOrder[i][1]);
            } else {
                flatOrder.push(finalOrder[i]);
            }
        }
        return flatOrder;
    }
    
    let id = 0
    function handleClick(){
            id += 1;
            ordersPOJO[id] = currentOrderInput;
            verifyOrders(id);
            counter = 0;
            flatOrder = [];
            currentOrderInput = [];
            orderToCompare = [];
            orderItemArray = [];
            finalOrder = [];
            // downloadTimer();
            // console.log("orders POJO:", ordersPOJO)
    }

    function trackOrder(order){
        order.forEach(item => {
            if (!tracker[item] && !tempTypes.includes(item)){
                tracker[item] = 1
            } else if (tracker[item] && !tempTypes.includes(item)){
                tracker[item] += 1
            }
        });
        // console.log(tracker)
    }

    function verifyOrders(id){
        // console.log("HIT1");
        const orderArr = flattenOrders();
        switch (id) {
            case 1:
                    verifier = document.getElementById(`${id}`);
                    // if (orderArr.join("") === currentOrderInput.join("")){
                        verifier.innerText = "✅";
                    // }else{
                        // verifier.innerHTML = "❌";
                    // };
                case 2:
                    verifier = document.getElementById(`${id}`);
                    // if (orderArr.join("") === currentOrderInput.join("")) {
                        verifier.innerHTML = "✅";
                    // } else {
                        // verifier.innerHTML = "❌";
                    // };
                case 3:
                verifier = document.getElementById(`${id}`);
                    // if (orderArr.join("") === currentOrderInput.join("")) {
                        verifier.innerHTML = "✅";
                    // } else {
                        // verifier.innerHTML = "❌";
                    // };
                case 4:
                verifier = document.getElementById(`${id}`);
                    // if (orderArr.join("") === currentOrderInput.join("")) {
                        verifier.innerHTML = "✅";
                    // } else {
                        // verifier.innerHTML = "❌";
                    // };
                case 5:
                verifier = document.getElementById(`${id}`);
                    // if (orderArr.join("") === currentOrderInput.join("")) {
                        verifier.innerHTML = "✅";
                    // } else {
                        // verifier.innerHTML = "❌";
                    // };
                case 6:
                verifier = document.getElementById(`${id}`);
                    // if (orderArr.join("") === currentOrderInput.join("")) {
                        verifier.innerHTML = "✅";
                    // } else {
                        // verifier.innerHTML = "❌";
                    // };
                default:
                    break;
            }
            trackOrder(currentOrderInput);
    }