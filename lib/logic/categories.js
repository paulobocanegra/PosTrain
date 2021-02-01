let newCategory = document.createElement("ul")
let newItem = document.createElement("li")

let wholeMenu = ["Calamari", "Mac N' Cheese", "Empanadas", "Wings", "Fries", "Onion Rings", "Nachos", "Special Starter", "Soup of the Day", "Sliders", "Caesar Salad", "Greek Salad", "Special Salad", "Cobb Salad", "Kale Salad", "House Salad", "Southwestern Salad", "Thai Salad", "BBQ Ranch Salad", "Coleslaw Salad", "Alaskan Salmon", "Alaskan Halibut", "Beer Battered Fish", "Fish Tacos", "Ahi tuna", "Sushi Rolls", "Shrimp Cocktails", "Ceviche", "Lobster", "Crab", "Baby Racks Ribs", "Pulled Pork", "Grilled Chicken", "Sirlon Steak", "Ribeye Steak", "Fillet Mignon", "New York Steak", "Lamb Shank", "Fried Chicken", "Wagyu Beef", "Cheesecake", "Carrot Cake", "Tiramisu", "Shortcake", "Lava Chocolate Cake", "Brownie", "Apple Pie", "Pudding", "Ice Cream", "Sundae", "Ice Tea", "Lemonade", "Milkshake", "Coffee/Tea", "Soft Drink", "Beer", "Wine", "Cocktail"]
let finalOrder = []


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
let milkshakesTypes = ["Vanilla", "Chocolate", "Strawberry"]
let cocktailsTypes = ["Margarita", "Mojito", "Old Fashion", "Manhattan", "Martini", "Pisco Sour"]
let coffeeTeaTypes = ["Americano", "Capuccino", "Latte", "Hot Tea"]
// let subDrinksCategories = [beerTypes, wineTypes, softDrinksTypes, milkshakesTypes, cocktailsTypes, coffeeTeaTypes]



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
    "Cocktail": true
}


function fetchRandomItem() {
    finalOrder = []
    let index = Math.floor(Math.random() * wholeMenu.length)
    // let index = Math.floor(Math.random() * drinksArray.length)
    let randomWord = wholeMenu[index]
    // let randomWord = drinksArray[index]
        finalOrder.push(randomWord);
}


function fetchRandomSubCategory(arr) {
    let randomSubCategory = ""
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * arr.length)
        randomSubCategory = arr[index]
    }
    finalOrder.push(randomSubCategory)
}

//randomItem = Rib Eye
//randomSubCat = MR


// [beerTypes, wineTypes, softDrinksTypes, milkshakesTypes, cocktailsTypes, coffeeTeaTypes]
// let drinkTypes = ["Milkshake", "Coffee/Tea", "Soft Drink", "Beer", "Wine", "Cocktail"]

function renderCustomerOrder(){
    fetchRandomItem()
    if (meatsPojo[finalOrder[0]] === true){
        fetchRandomSubCategory(tempTypes)
        content.innerHTML = `${finalOrder[0]} - ${finalOrder[1]}`
    } else if (drinksPojo[finalOrder[0]] === true){
        if (finalOrder[0] === "Beer"){
                fetchRandomSubCategory(beerTypes)           
                content.innerHTML = `${finalOrder[0]} - ${finalOrder[1]}`
        } else if (finalOrder[0] === "Wine"){
                fetchRandomSubCategory(wineTypes)
                content.innerHTML = `${finalOrder[0]} - ${finalOrder[1]}`
        } else if (finalOrder[0] === "Soft Drink") {
                fetchRandomSubCategory(softDrinksTypes)
                content.innerHTML = `${finalOrder[0]} - ${finalOrder[1]}`
        } else if (finalOrder[0] === "Milkshake") {
                fetchRandomSubCategory(milkshakesTypes)
                content.innerHTML = `${finalOrder[0]} - ${finalOrder[1]}`
        } else if (finalOrder[0] === "Cocktail") {
                fetchRandomSubCategory(cocktailsTypes)
                content.innerHTML = `${finalOrder[0]} - ${finalOrder[1]}`
        } else if (finalOrder[0] === "Coofee/Tea") {
                fetchRandomSubCategory(coffeeTeaTypes)
                content.innerHTML = `${finalOrder[0]} - ${finalOrder[1]}`
            }
    }
    else {
        content.innerHTML = finalOrder[0]
    }
    console.log(finalOrder)
}


function addToOrder(id){
        let itemButtom = document.getElementById(id)
            let itemToOrder = itemButtom.innerHTML;
            orderArr.push(itemToOrder);
        // console.log(orderArr)
}

let menuItems = document.querySelector(".items")

function populateCategories(arr){
    while (menuItems.hasChildNodes()) {
        menuItems.removeChild(menuItems.firstChild);
    }

    for(let i = 0; i < arr.length; i ++ ){
        let newItem = document.createElement("li")
        newItem.innerText = arr[i]
        newItem.className = "new-item"
        menuItems.appendChild(newItem)
    }
}

