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
        itemsOrdered.removeChild(itemsOrdered.firstChild);
    }
    for (let i = 0; i < currentOrderInput.length; i++) {
        let item = currentOrderInput[i];
        let newItemToOrder = document.createElement("li");
        if (meatsPojo[item] || drinksPojo[item]) {
            if (i === currentOrderInput.length - 1){
                itemsOrdered.appendChild(newItemToOrder);
                newItemToOrder.className = "items-ordered";
                newItemToOrder.setAttribute("id", `order-${i}`);
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

    function renderStats(allOrders){
        let maxOrdered = calculateTrends(allOrders)
        let ammount = allOrders[maxOrdered];
        let statsDiv = document.createElement("div");
        let closeStats = document.createElement("button");
        statsDiv.className = "order-container";
        closeStats.innerHTML = "x";
        closeStats.setAttribute("id", "close-order");
        closeStats.addEventListener("click", () => {
            statsDiv.style.visibility = "hidden";
        });
        console.log(closeStats)
        let landingRender = document.querySelector(".landing-render");
        if(landingRender.hasChildNodes()){
            while(landingRender.hasChildNodes()){
                landingRender.removeChild(landingRender.firstChild);
            }
        }
        statsDiv.innerHTML = `The most orderd item was ${maxOrdered} <br />
        It was ordered ${ammount} times!`
        statsDiv.appendChild(closeStats);
        landingRender.appendChild(statsDiv)


        // console.log(maxOrderes, "raw")
        // console.log(allOrders[maxOrderes], "test key into object")
    }
    
    let id = 0
    function handleClick(){
            let currentOrderList = document.querySelector(".items-ordered-container")
            if (currentOrderList.hasChildNodes()){
                while (currentOrderList.hasChildNodes()){
                    currentOrderList.removeChild(currentOrderList.firstChild);
                }
            }
            
            id += 1;
            ordersPOJO[id] = currentOrderInput;
            if(ordersPOJO[6]){
                let sendButton = document.getElementById("fire-button")
                sendButton.style.backgroundColor = "rgb(209 255 0)";
                sendButton.style.color = "black";
                sendButton.innerHTML = "Click me for stats!"
                sendButton.addEventListener("click", () => renderStats(tracker));
            }
            verifyOrders(id);
            counter = 0;
            flatOrder = [];
            currentOrderInput = [];
            orderToCompare = [];
            orderItemArray = [];
            finalOrder = [];

            // console.log(ordersPOJO)
    }

    

    function trackOrder(order){
        order.forEach(item => {
            if (!tracker[item] && !tempTypes.includes(item)){
                tracker[item] = 1
            } else if (tracker[item] && !tempTypes.includes(item)){
                tracker[item] += 1
            }
        });
    }

    function verifyOrders(id){
        // const orderArr = flattenOrders();
        switch (id) {
            case 1:
                    verifier = document.getElementById(`${id}`);
                        verifier.innerText = "✅";
                case 2:
                    verifier = document.getElementById(`${id}`);
                        verifier.innerHTML = "✅";
                case 3:
                verifier = document.getElementById(`${id}`);
                        verifier.innerHTML = "✅";
                case 4:
                verifier = document.getElementById(`${id}`);
                        verifier.innerHTML = "✅";
                case 5:
                verifier = document.getElementById(`${id}`);
                        verifier.innerHTML = "✅";
                case 6:
                verifier = document.getElementById(`${id}`);
                        verifier.innerHTML = "✅";
                default:
                    break;
            }
            trackOrder(currentOrderInput);
    }