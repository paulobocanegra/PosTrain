// const container = document.getElementById("random-order");
const content = document.createElement("h1");
// container.appendChild(content);

let newCategory = document.createElement("ul");

const wholeMenu = ["Calamari", "Mac N' Cheese", "Empanadas", "Wings", "Fries", "Onion Rings", "Nachos", "Special Starter", "Soup of the Day", "Sliders", "Caesar Salad", "Greek Salad", "Special Salad", "Cobb Salad", "Kale Salad", "House Salad", "Southwestern Salad", "Thai Salad", "BBQ Ranch Salad", "Coleslaw Salad", "Alaskan Salmon", "Alaskan Halibut", "Beer Battered Fish", "Fish Tacos", "Ahi tuna", "Sushi Rolls", "Shrimp Cocktails", "Ceviche", "Lobster", "Crab", "Baby Racks Ribs", "Pulled Pork", "Grilled Chicken", "Sirlon Steak", "Ribeye Steak", "Fillet Mignon", "New York Steak", "Lamb Shank", "Fried Chicken", "Wagyu Beef", "Cheesecake", "Carrot Cake", "Tiramisu", "Shortcake", "Lava Chocolate Cake", "Brownie", "Apple Pie", "Pudding", "Ice Cream", "Sundae", "Ice Tea", "Lemonade", "Milkshake", "Coffee/Tea", "Soft Drink", "Beer", "Wine", "Cocktail"];
let orderItemArray = [];
let finalOrder = [];
let currentOrderInput = [];


const startersArray = ["Calamari", "Mac N' Cheese", "Empanadas", "Wings", "Fries", "Onion Rings", "Nachos", "Special Starter", "Soup of the Day", "Sliders"];
const greensArray = ["Caesar Salad", "Greek Salad", "Special Salad", "Cobb Salad", "Kale Salad", "House Salad", "Southwestern Salad", "Thai Salad", "BBQ Ranch Salad", "Coleslaw Salad"];
const seafoodArray = ["Alaskan Salmon", "Alaskan Halibut", "Beer Battered Fish", "Fish Tacos", "Ahi tuna", "Sushi Rolls", "Shrimp Cocktails", "Ceviche", "Lobster", "Crab"];
const meatsArray = ["Baby Racks Ribs", "Pulled Pork", "Grilled Chicken", "Sirlon Steak", "Ribeye Steak", "Fillet Mignon", "New York Steak", "Lamb Shank", "Fried Chicken", "Wagyu Beef"];
const dessertsArray = ["Cheesecake", "Carrot Cake", "Tiramisu", "Shortcake", "Lava Chocolate Cake", "Brownie", "Apple Pie", "Pudding", "Ice Cream", "Sundae"];
const drinksArray = ["Ice Tea", "Lemonade", "Smoothie", "Milkshake", "Coffee/Tea", "Soft Drink", "Beer", "Wine", "Cocktail"];


const tempTypes = ["Rare", "Medium-Rare", "Medium", "Medium-Well", "Well-Done"];
const drinkTypes = ["Milkshake", "Coffee/Tea", "Soft Drink", "Beer", "Wine", "Cocktail"];

const beerTypes = ["Lager", "Blonde", "Wheat", "Stout", "IPA", "Pale Ale"];
const wineTypes = ["Pinot Noir", "Cabernet Sauvignon", "Merlot", "Malbec", "Chardonnay", "Sauvignon Blanc"];
const softDrinksTypes = ["Coke", "Diet Coke", "Sprite", "Fanta", "Root Beer"];
const milkshakesTypes = ["Vanilla", "Chocolate", "Strawberry", "Blueberry", "Mint", "Neapolitan"];
const smoothieTypes = ["Tropical Fruit", "Mango", "Mixed Berry", "Orange", "Banana"];
const cocktailsTypes = ["Margarita", "Mojito", "Old Fashion", "Manhattan", "Martini", "Pisco Sour"];
const coffeeTeaTypes = ["Americano", "Capuccino", "Latte", "Hot Tea"];
const iceCreamTypes = ["Vanilla", "Chocolate", "Strawberry"];
const subDrinksCategories = [beerTypes, wineTypes, softDrinksTypes, milkshakesTypes, cocktailsTypes, coffeeTeaTypes];



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
};

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
    "Ice Cream": true,
    "Sundae": true
};


function fetchRandomItem() {
    orderItemArray = [];
    let index = Math.floor(Math.random() * wholeMenu.length);
    let randomWord = wholeMenu[index];
        orderItemArray.push(randomWord);
    if(!meatsPojo[randomWord] && !drinksPojo[randomWord]){
        finalOrder.push(randomWord);
    }
    
}


function fetchRandomSubCategory(arr) {
    let randomSubCategory = "";
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * arr.length);
        randomSubCategory = arr[index];
    }
    orderItemArray.push(randomSubCategory);
    finalOrder.push(orderItemArray);
}

function renderCustomerOrder(){
    fetchRandomItem();
    if (meatsPojo[orderItemArray[0]] === true){
        fetchRandomSubCategory(tempTypes);
        content.innerHTML = `${orderItemArray[0]} - ${orderItemArray[1]}`;
    } else if (drinksPojo[orderItemArray[0]] === true){
        if (orderItemArray[0] === "Beer"){
                fetchRandomSubCategory(beerTypes);           
                content.innerHTML = `${orderItemArray[0]} - ${orderItemArray[1]}`;
        } else if (orderItemArray[0] === "Wine"){
                fetchRandomSubCategory(wineTypes);
                content.innerHTML = `${orderItemArray[0]} - ${orderItemArray[1]}`;
        } else if (orderItemArray[0] === "Soft Drink") {
                fetchRandomSubCategory(softDrinksTypes);
                content.innerHTML = `${orderItemArray[0]} - ${orderItemArray[1]}`;
        } else if (orderItemArray[0] === "Milkshake") {
                fetchRandomSubCategory(milkshakesTypes);
                content.innerHTML = `${orderItemArray[0]} - ${orderItemArray[1]}`;
        } else if (orderItemArray[0] === "Cocktail") {
                fetchRandomSubCategory(cocktailsTypes);
                content.innerHTML = `${orderItemArray[0]} - ${orderItemArray[1]}`;
        } else if (orderItemArray[0] === "Coofee/Tea") {
                fetchRandomSubCategory(coffeeTeaTypes);
                content.innerHTML = `${orderItemArray[0]} - ${orderItemArray[1]}`;
            }
    }
    else {
        content.innerHTML = orderItemArray[0];
    }
}

let menuItems = document.querySelector(".items");


function populateCategories(arr){
    let blocker = document.querySelector(".blocker");
    if (blocker) blocker.remove();
    if (document.querySelector(".sub-items")){
        let subItem = document.querySelector(".sub-items");
        while(subItem.hasChildNodes()){
            subItem.removeChild(subItem.firstChild);
        }
    }
    while (menuItems.hasChildNodes()) {
        menuItems.removeChild(menuItems.firstChild);
    }
    let items = document.querySelectorAll(".new-item");
    if(items.length > 0){
        while (items.hasChildNodes()) {
            items.removeChild(items.firstChild);
        }
    }
    for(let i = 0; i < arr.length; i ++ ){
        let newItem = document.createElement("li");
        newItem.innerText = arr[i];
        newItem.className = "new-item";
        menuItems.appendChild(newItem);
        newItem.addEventListener("click", ()=> {
            currentOrderInput.push(newItem.innerText);
            addToOrder() ;
        })


    }
    populatesubCategory()
}

//This creates subcategories for each category item
function createSubcategory(arr){
    let subItems = document.querySelector(".sub-items");
    while (subItems.hasChildNodes()) {
        subItems.removeChild(subItems.firstChild);
    }
    let newUl = document.querySelector('.sub-items');
    for (let i in arr) {
        let subCategory = document.createElement("li");
        subCategory.innerText = arr[i];
        subCategory.className = "sub-category";
        newUl.appendChild(subCategory);
        subCategory.addEventListener("click", () => {
            currentOrderInput.push(subCategory.innerText);
            addToOrder();
            let blocker = document.querySelector(".blocker");
            if (blocker) blocker.remove();
            while (subItems.hasChildNodes()) {
                subItems.removeChild(subItems.firstChild);
            }
            
        })
    
    }

}
// menu-items 

function blocker(){
    let blockerDiv = document.createElement("div");
    blockerDiv.className = "blocker";
    blockerDiv.innerText = 'Select type';
    let categoryToBlock = document.querySelector(".menu-items");
    categoryToBlock.append(blockerDiv);
}

function blocker2() {
    let blockerDiv = document.createElement("div");
    blockerDiv.className = "blocker";
    let categoryToBlock = document.querySelector(".menu-buttons-container");
    categoryToBlock.append(blockerDiv);
}

//this populates subcategories for each item
function populatesubCategory(){
    let items = document.querySelectorAll(".new-item");

    items.forEach(item => {
        let text = item.innerText;
        switch (text) {
            case  "Sirlon Steak":
                item.addEventListener("click", () => {
                    createSubcategory(tempTypes);
                    blocker();
                    blocker2();
                })
                break;
            case  "Ribeye Steak":
                item.addEventListener("click", () => {
                    createSubcategory(tempTypes);
                    blocker();
                    blocker2();
                })
                break;
            case  "Fillet Mignon":
                item.addEventListener("click", () => {
                    createSubcategory(tempTypes);
                    blocker();
                    blocker2();
                })
                break;
            case  "New York Steak":
                item.addEventListener("click", () => {
                    createSubcategory(tempTypes);
                    blocker();
                    blocker2();
                })
                break;
            case  "Wagyu Beef":
                item.addEventListener("click", () => {
                    createSubcategory(tempTypes);
                    blocker();
                    blocker2();
                })
                break;
            case "Beer":
                item.addEventListener("click", () => {
                    createSubcategory(beerTypes);
                    blocker();
                    blocker2();
                })
                break;
            case "Wine":
                item.addEventListener("click", () => {
                    createSubcategory(wineTypes);
                    blocker();
                    blocker2();
                    })
                break;
            case "Soft Drink":
                item.addEventListener("click", () => {
                    createSubcategory(softDrinksTypes);
                    blocker();
                    blocker2();
                })
                break;
            case "Milkshake":
                item.addEventListener("click", () => {
                        createSubcategory(milkshakesTypes);
                        blocker();
                        blocker2();
                })
                break;
            case "Coffee/Tea":
                item.addEventListener("click", () => {
                    createSubcategory(coffeeTeaTypes);
                    blocker();
                    blocker2();
                })
                break;
            case "Cocktail":
                item.addEventListener("click", () => {
                    createSubcategory(cocktailsTypes);
                    blocker();
                    blocker2();
                })
                break;
            case "Smoothie":
                item.addEventListener("click", () => {
                        createSubcategory(smoothieTypes);
                        blocker();
                        blocker2();
                })
                break;
            case "Ice Cream":
                item.addEventListener("click", () => {
                        createSubcategory(iceCreamTypes);
                        blocker();
                        blocker2();
                })
                break;
            case "Sundae":
                item.addEventListener("click", () => {
                        createSubcategory(iceCreamTypes);
                        blocker();
                        blocker2();
                })
                break;
            default:
                item.addEventListener("click", () => {
                    let subItems = document.querySelector(".sub-items");
                    while (subItems.hasChildNodes()) {
                        subItems.removeChild(subItems.firstChild);
                    }
                })
                break;
        }
    })
}
