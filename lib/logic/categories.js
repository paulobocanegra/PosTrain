let newCategory = document.createElement("ul")
// let newItem = document.createElement("li")
let startersArray = ["Calamari", "Mac N' Cheese", "Empanadas", "Wings", "Fries", "Onion Rings", "Nachos", "Special Starter", "Soup of the Day", "Sliders"];
let greensArray = ["Caesar Salad", "Greek Salad", "Special Salad", "Cobb Salad", "Kale Salad", "House Salad", "Southwestern Salad", "Thai Salad", "BBQ Ranch Salad", "Coleslaw Salad"];
let seafoodArray = ["Alaskan Salmon", "Alaskan Halibut", "Beer Battered Fish", "Fish Tacos", "Ahi tuna", "Sushi Rolls", "Shrimp Cocktails", "Ceviche", "Lobster", "Crab"];
let meatsArray = ["Baby Racks Ribs", "Pulled Pork", "Grilled Chicken", "Sirlon Steak", "Ribeye Steak", "Fillet Mignon", "New York Steak", "Lamb Shank", "Fried Chicken", "Wagyu Beef"];
let dessertsArray = ["Cheesecake", "Carrot Cake", "Tiramisu", "Shortcake", "Lava Chocolate Cake", "Brownie", "Apple Pie", "Pudding", "Ice Cream", "Sundae"];
let drinksArray = ["Ice Tea", "Lemonade", "Smoothie", "Milkshake", "Coffee/Tea", "Soft Drink", "Fruit Juice", "Beer", "Wine", "Cocktail"];

let categoriesArray = ["Starters", "Greens", "Seafood", "Meats", "Dessert", "Drinks"]


function populateCategory(arr){
    for(let i = 0; i < 10; i++){
        let category = document.getElementById(`${i.toString()}`)
        for(let j = 0; j < arr.length;j++){
            category.innerHTML = arr[i];
        }
    }
}


// function addToOrder(){
    //     let itemButton = document.querySelector(".item");
    //     itemButton.addEventListener("click", function() {
        //         let itemToOrder = itemButton.innerText;
        //         orderArr.push(itemToOrder);
        //         return orderArr;
        //     });
        // }
        // console.log(orderArr)
        
        
    let orderArr = [];

function addToOrder(id){
    // for(let i = 0; i < 10; i++){
        let itemButtom = document.getElementById(id)
            let itemToOrder = itemButtom.innerHTML;
            orderArr.push(itemToOrder);

        // }
        console.log(orderArr)
}

