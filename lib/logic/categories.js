let container = document.getElementById("random-order")
let content = document.createElement("h1")
container.appendChild(content)

let newCategory = document.createElement("ul")

let wholeMenu = ["Calamari", "Mac N' Cheese", "Empanadas", "Wings", "Fries", "Onion Rings", "Nachos", "Special Starter", "Soup of the Day", "Sliders", "Caesar Salad", "Greek Salad", "Special Salad", "Cobb Salad", "Kale Salad", "House Salad", "Southwestern Salad", "Thai Salad", "BBQ Ranch Salad", "Coleslaw Salad", "Alaskan Salmon", "Alaskan Halibut", "Beer Battered Fish", "Fish Tacos", "Ahi tuna", "Sushi Rolls", "Shrimp Cocktails", "Ceviche", "Lobster", "Crab", "Baby Racks Ribs", "Pulled Pork", "Grilled Chicken", "Sirlon Steak", "Ribeye Steak", "Fillet Mignon", "New York Steak", "Lamb Shank", "Fried Chicken", "Wagyu Beef", "Cheesecake", "Carrot Cake", "Tiramisu", "Shortcake", "Lava Chocolate Cake", "Brownie", "Apple Pie", "Pudding", "Ice Cream", "Sundae", "Ice Tea", "Lemonade", "Milkshake", "Coffee/Tea", "Soft Drink", "Beer", "Wine", "Cocktail"]
let orderItemArray = []
let finalOrder = []
let currentOrderInput = [];


let startersArray = ["Calamari", "Mac N' Cheese", "Empanadas", "Wings", "Fries", "Onion Rings", "Nachos", "Special Starter", "Soup of the Day", "Sliders"];
let greensArray = ["Caesar Salad", "Greek Salad", "Special Salad", "Cobb Salad", "Kale Salad", "House Salad", "Southwestern Salad", "Thai Salad", "BBQ Ranch Salad", "Coleslaw Salad"];
let seafoodArray = ["Alaskan Salmon", "Alaskan Halibut", "Beer Battered Fish", "Fish Tacos", "Ahi tuna", "Sushi Rolls", "Shrimp Cocktails", "Ceviche", "Lobster", "Crab"];
let meatsArray = ["Baby Racks Ribs", "Pulled Pork", "Grilled Chicken", "Sirlon Steak", "Ribeye Steak", "Fillet Mignon", "New York Steak", "Lamb Shank", "Fried Chicken", "Wagyu Beef"];
let dessertsArray = ["Cheesecake", "Carrot Cake", "Tiramisu", "Shortcake", "Lava Chocolate Cake", "Brownie", "Apple Pie", "Pudding", "Ice Cream", "Sundae"];
let drinksArray = ["Ice Tea", "Lemonade", "Smoothie", "Milkshake", "Coffee/Tea", "Soft Drink", "Beer", "Wine", "Cocktail"];


let tempTypes = ["Rare", "Medium-Rare", "Medium", "Medium-Well", "Well-Done"]
let drinkTypes = ["Milkshake", "Coffee/Tea", "Soft Drink", "Beer", "Wine", "Cocktail"]

let beerTypes = ["Lager", "Blonde", "Wheat", "Stout", "IPA", "Pale Ale"]
let wineTypes = ["Pinot Noir", "Cabernet Sauvignon", "Merlot", "Malbec", "Chardonnay", "Sauvignon Blanc"]
let softDrinksTypes = ["Coke", "Diet Coke", "Sprite", "Fanta", "Root Beer"]
let milkshakesTypes = ["Vanilla", "Chocolate", "Strawberry", "Blueberry", "Mint", "Neapolitan"]
let smoothieTypes = ["Tropical Fruit", "Mango", "Mixed Berry", "Orange", "Banana"]
let cocktailsTypes = ["Margarita", "Mojito", "Old Fashion", "Manhattan", "Martini", "Pisco Sour"]
let coffeeTeaTypes = ["Americano", "Capuccino", "Latte", "Hot Tea"]
let iceCreamTypes = ["Vanilla", "Chocolate", "Strawberry"]
let subDrinksCategories = [beerTypes, wineTypes, softDrinksTypes, milkshakesTypes, cocktailsTypes, coffeeTeaTypes]



meatsPojo = {
    "Baby Racks Ribs": false,
    "Pulled Pork": false,
    "Grilled Chicken":false,
    "Sirlon Steak": true,
    "Ribeye Steak": true,
    "Fillet Mignon": true, 
    "New York Steak": true, 
    "Lamb Shank": false, 
    "Fried Chicken": false, 
    "Wagyu Beef": true
}

drinksPojo = {
    "Ice Tea": false, 
    "Lemonade": false, 
    "Milkshake": true, 
    "Coffee/Tea": true, 
    "Soft Drink": true, 
    "Beer": true, 
    "Wine": true, 
    "Cocktail": true,
    "Smoothie": true,
    "Ice Cream": true
}


function fetchRandomItem() {
    orderItemArray = []
    let index = Math.floor(Math.random() * wholeMenu.length)
    // let index = Math.floor(Math.random() * drinksArray.length)
    let randomWord = wholeMenu[index]
    // let randomWord = drinksArray[index]
        orderItemArray.push(randomWord);
    if(!meatsPojo[randomWord] && !drinksPojo[randomWord]){
        finalOrder.push(randomWord)
    }
    console.log(finalOrder)
    
}


function fetchRandomSubCategory(arr) {
    let randomSubCategory = ""
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * arr.length)
        randomSubCategory = arr[index]
    }
    orderItemArray.push(randomSubCategory)
    finalOrder.push(orderItemArray)
    console.log(finalOrder)
}

function renderCustomerOrder(){
    fetchRandomItem()
    if (meatsPojo[orderItemArray[0]] === true){
        fetchRandomSubCategory(tempTypes)
        content.innerHTML = `${orderItemArray[0]} - ${orderItemArray[1]}`
    } else if (drinksPojo[orderItemArray[0]] === true){
        if (orderItemArray[0] === "Beer"){
                fetchRandomSubCategory(beerTypes)           
                content.innerHTML = `${orderItemArray[0]} - ${orderItemArray[1]}`
        } else if (orderItemArray[0] === "Wine"){
                fetchRandomSubCategory(wineTypes)
                content.innerHTML = `${orderItemArray[0]} - ${orderItemArray[1]}`
        } else if (orderItemArray[0] === "Soft Drink") {
                fetchRandomSubCategory(softDrinksTypes)
                content.innerHTML = `${orderItemArray[0]} - ${orderItemArray[1]}`
        } else if (orderItemArray[0] === "Milkshake") {
                fetchRandomSubCategory(milkshakesTypes)
                content.innerHTML = `${orderItemArray[0]} - ${orderItemArray[1]}`
        } else if (orderItemArray[0] === "Cocktail") {
                fetchRandomSubCategory(cocktailsTypes)
                content.innerHTML = `${orderItemArray[0]} - ${orderItemArray[1]}`
        } else if (orderItemArray[0] === "Coofee/Tea") {
                fetchRandomSubCategory(coffeeTeaTypes)
                content.innerHTML = `${orderItemArray[0]} - ${orderItemArray[1]}`
            }
    }
    else {
        content.innerHTML = orderItemArray[0]
    }
    // console.log(orderItemArray)
}


function addToOrder(id){
        let itemButtom = document.getElementById(id)
            let itemToOrder = itemButtom.innerHTML;
            orderArr.push(itemToOrder);
        // console.log(orderArr)
}

let menuItems = document.querySelector(".items")



function populateCategories(arr){
    if (document.querySelector(".sub-items")){
        let subItem = document.querySelector(".sub-items")
        while(subItem.hasChildNodes()){
            subItem.removeChild(subItem.firstChild)
        }
    }
    while (menuItems.hasChildNodes()) {
        menuItems.removeChild(menuItems.firstChild);
    }
    
    
    let items = document.querySelectorAll(".new-item")
    if(items.length > 0){
        while (items.hasChildNodes()) {
            items.removeChild(items.firstChild);
        }
    }
    for(let i = 0; i < arr.length; i ++ ){
        let newItem = document.createElement("li")
        newItem.innerText = arr[i]
        newItem.className = "new-item"
        menuItems.appendChild(newItem)
    }
    populatesubCategory()
}

//This creates subcategories for each category item
function createSubcategory(arr){
    let subItems = document.querySelector(".sub-items")
    while (subItems.hasChildNodes()) {
        subItems.removeChild(subItems.firstChild);
    }
    let newUl = document.querySelector('.sub-items')
    for (let i in arr) {
        let subCategory = document.createElement("li")
        subCategory.innerText = arr[i]
        subCategory.className = "sub-category"
        newUl.appendChild(subCategory)

    }
}

// function dispatchToOrder(){

//     subCategory.addEventListener("click", () => {
//         currentOrderInput.push(subCategory.innerHTML)
//     })
// }

//this populates subcategories for each item
function populatesubCategory(){
    let items = document.querySelectorAll(".new-item")

    items.forEach(item => {
        let text = item.innerText
        switch (text) {
            case  "Sirlon Steak":
                item.addEventListener("click", () => {
                    createSubcategory(tempTypes)
                })
                break;
            case  "Ribeye Steak":
                item.addEventListener("click", () => {
                    createSubcategory(tempTypes)
                })
                break;
            case  "Fillet Mignon":
                item.addEventListener("click", () => {
                    createSubcategory(tempTypes)
                })
                break;
            case  "New York Steak":
                item.addEventListener("click", () => {
                    createSubcategory(tempTypes)
                })
                break;
            case  "Wagyu Beef":
                item.addEventListener("click", () => {
                    createSubcategory(tempTypes)
                })
                break;
            case "Beer":
                item.addEventListener("click", () => {
                    createSubcategory(beerTypes)
                })
                break;
            case "Wine":
                item.addEventListener("click", () => {
                    createSubcategory(wineTypes)
                    })
                break;
            case "Soft Drink":
                item.addEventListener("click", () => {
                    createSubcategory(softDrinksTypes)
                })
                break;
            case "Milkshake":
                item.addEventListener("click", () => {
                        createSubcategory(milkshakesTypes)
                })
                break;
            case "Coffee/Tea":
                item.addEventListener("click", () => {
                    createSubcategory(coffeeTeaTypes)
                })
                break;
            case "Cocktail":
                item.addEventListener("click", () => {
                    createSubcategory(cocktailsTypes)
                })
                break;
            case "Smoothie":
                item.addEventListener("click", () => {
                        createSubcategory(smoothieTypes)
                })
                break;
            case "Ice Cream":
                item.addEventListener("click", () => {
                        createSubcategory(iceCreamTypes);
                })
                break;
            case "Sundae":
                item.addEventListener("click", () => {
                        createSubcategory(iceCreamTypes);
                })
                break;
            default:
                item.addEventListener("click", () => {
                    let subItems = document.querySelector(".sub-items")
                    while (subItems.hasChildNodes()) {
                        subItems.removeChild(subItems.firstChild);
                    }
                })
                break;
        }
    })
}

