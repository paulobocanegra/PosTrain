

//WHEN MENU IS DONE, WE NEED TO PUSH ALL RANDOM ITEMS INTO AN ARRAY AND COMPARE WITH USER INPUT


// let wholeMenu = ["Calamari", "Mac N' Cheese", "Empanadas", "Wings", "Fries", "Onion Rings", "Nachos", "Special Starter", "Soup of the Day", "Sliders", "Caesar Salad", "Greek Salad", "Special Salad", "Cobb Salad", "Kale Salad", "House Salad", "Southwestern Salad", "Thai Salad", "BBQ Ranch Salad", "Coleslaw Salad", "Alaskan Salmon", "Alaskan Halibut", "Beer Battered Fish", "Fish Tacos", "Ahi tuna", "Sushi Rolls", "Shrimp Cocktails", "Ceviche", "Lobster", "Crab", "Baby Racks Ribs", "Pulled Pork", "Grilled Chicken", "Sirlon Steak", "Ribeye Steak", "Fillet Mignon", "New York Steak", "Lamb Shank", "Fried Chicken", "Wagyu Beef", "Cheesecake", "Carrot Cake", "Tiramisu", "Shortcake", "Lava Chocolate Cake", "Brownie", "Apple Pie", "Pudding", "Ice Cream", "Sundae", "Ice Tea", "Lemonade", "Smoothie", "Milkshake", "Coffee/Tea", "Soft Drink", "Fruit Juice", "Beer", "Wine", "Cocktail"]
let container = document.getElementById("random-order")
let content = document.createElement("h1")

function downloadTimer(){
    let timeleft = 10;
    setInterval(function () {
        if (timeleft === 0) {
            clearInterval(downloadTimer);
            renderCustomerOrder();
            downloadTimer();
        }
        document.getElementById("timer").textContent = timeleft;
        timeleft --;
    }, 1000);
} 

container.appendChild(content)



downloadTimer();
